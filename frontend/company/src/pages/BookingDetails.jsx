import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import {
  ChevronRight,
  Info,
  X,
  FileText,
  Building2,
  User,
  Mail,
  Package,
  Scale,
  Layers,
  Navigation,
  Clock,
  Phone
} from 'lucide-react'
import axios from 'axios'

// Helper: Fallback coordinates for local village names in Aravalli, Gujarat
const getLocalFallbackCoords = (address) => {
  const lower = address.toLowerCase();
  if (lower.includes('medhasan') || lower.includes('madasana')) {
    return { lat: 23.5439, lon: 73.2289 }; // Medhasan village
  }
  if (lower.includes('limbhoi')) {
    return { lat: 23.29, lon: 73.13 }; // Limbhoi village
  }
  if (lower.includes('aravalli') || lower.includes('modasa')) {
    return { lat: 23.4682, lon: 73.3159 }; // Aravalli district center
  }
  return { lat: 23.2156, lon: 72.6369 }; // Gandhinagar (Gujarat Center)
};

// Helper: Clean local administrative abbreviations from Indian address formats for Nominatim compatibility
const cleanQueryString = (query) => {
  return query
    .toLowerCase()
    .replace(/\bpost\b/g, '')
    .replace(/\bdist\b/g, '')
    .replace(/\bkampa\b/g, '')
    .replace(/\btaluka\b/g, '')
    .replace(/\bnear\b/g, '')
    .replace(/\bpost office\b/g, '')
    .replace(/\s+/g, ' ')
    .trim();
};

// Helper: Nominatim direct coordinate search fetch with region refinement
const fetchCoords = async (query) => {
  let cleaned = cleanQueryString(query);
  if (!cleaned) return null;

  // Append regional context to avoid generic country-wide matching issues
  if (!cleaned.includes('gujarat') && !cleaned.includes('india')) {
    cleaned += ', gujarat, india';
  }

  try {
    const response = await fetch(
      `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(cleaned)}&limit=1`,
      {
        headers: {
          'Accept': 'application/json',
          'User-Agent': 'TransGo-Logistics-App'
        }
      }
    );
    const data = await response.json();
    if (data && data.length > 0) {
      return {
        lat: parseFloat(data[0].lat),
        lon: parseFloat(data[0].lon)
      };
    }
  } catch (error) {
    console.error("fetchCoords error for:", cleaned, error);
  }
  return null;
};

// Helper: Geocode address using OpenStreetMap Nominatim API (Free, no key required) with resilient fallback
const geocodeAddress = async (address) => {
  if (!address) return null;

  // 1. Try full address search
  let coords = await fetchCoords(address);
  if (coords) return coords;

  // 2. Try splitting by comma and dropping the most specific part progressively
  const parts = address.split(',').map(p => p.trim()).filter(Boolean);
  let searchParts = [...parts];
  while (searchParts.length > 1) {
    searchParts.shift(); // remove specific parts (e.g. house name)
    const retryAddress = searchParts.join(', ');
    coords = await fetchCoords(retryAddress);
    if (coords) return coords;
  }

  // 3. Search individual keywords if they mention regions
  for (const part of parts) {
    if (part.toLowerCase().includes('aravalli') || part.toLowerCase().includes('gujarat')) {
      coords = await fetchCoords(part);
      if (coords) return coords;
    }
  }

  // 4. Fall back to local preset coordinates
  return getLocalFallbackCoords(address);
};

// Helper: Fetch routing coordinates from Open Source Routing Machine (OSRM) API
const getRouteGeometry = async (start, end) => {
  try {
    const response = await fetch(
      `https://router.project-osrm.org/route/v1/driving/${start.lon},${start.lat};${end.lon},${end.lat}?overview=full&geometries=geojson`
    );
    const data = await response.json();
    if (data && data.routes && data.routes.length > 0) {
      const route = data.routes[0];
      // geometries.coordinates is an array of [lon, lat], Leaflet needs [lat, lon]
      const latLons = route.geometry.coordinates.map(coord => [coord[1], coord[0]]);
      return {
        coordinates: latLons,
        distanceKm: (route.distance / 1000).toFixed(1),
        durationMin: Math.round(route.duration / 60)
      };
    }
  } catch (error) {
    console.error("Routing error:", error);
  }
  return null;
};

function BookingDetails() {
  const { id } = useParams()
  const [singleShipment, getSingleShipment] = useState(null)

  // Map and routing states
  const [leafletReady, setLeafletReady] = useState(false)
  const [routeInfo, setRouteInfo] = useState(null)
  const [mapLoading, setMapLoading] = useState(true)
  const [mapError, setMapError] = useState(false)

  // Fetch Shipment Details
  const getShipmentDetail = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/company/get-shipment/${id}`);
      getSingleShipment(response.data);
    } catch (error) {
      console.error("Error fetching shipment detail:", error);
    }
  };

  useEffect(() => {
    getShipmentDetail();
  }, [id]);

  // Load Leaflet CDN Assets dynamically if not already present
  useEffect(() => {
    if (window.L) {
      setLeafletReady(true);
      return;
    }

    // Leaflet CSS
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
    link.crossOrigin = '';
    document.head.appendChild(link);

    // Leaflet JS
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js';
    script.crossOrigin = '';
    script.onload = () => {
      setLeafletReady(true);
    };
    document.body.appendChild(script);
  }, []);

  const shipment = singleShipment?.data;

  // Leaflet Map Initialization and Route Plotting
  useEffect(() => {
    if (!leafletReady || !shipment) return;

    let isMounted = true;
    let mapInstance = null;

    const initMap = async () => {
      if (isMounted) {
        setMapLoading(true);
        setMapError(false);
      }

      const pickupAddr = shipment.pickupInformation?.address;
      const deliveryAddr = shipment.deliveryInformation?.address;

      if (!pickupAddr || !deliveryAddr) {
        if (isMounted) {
          setMapError(true);
          setMapLoading(false);
        }
        return;
      }

      // Geocode origin & destination addresses
      const pickupCoords = await geocodeAddress(pickupAddr);
      const deliveryCoords = await geocodeAddress(deliveryAddr);

      if (!pickupCoords || !deliveryCoords) {
        if (isMounted) {
          setMapError(true);
          setMapLoading(false);
        }
        return;
      }

      // Query road routing geometry from OSRM
      const routeData = await getRouteGeometry(pickupCoords, deliveryCoords);

      if (!isMounted) return;

      if (routeData) {
        setRouteInfo({
          distance: `${routeData.distanceKm} km`,
          duration: routeData.durationMin > 60
            ? `~${Math.floor(routeData.durationMin / 60)}h ${routeData.durationMin % 60}m`
            : `${routeData.durationMin} mins`
        });
      } else {
        // Linear fallback
        setRouteInfo({
          distance: 'Direct route estimate',
          duration: 'Pending logistics planning'
        });
      }

      try {
        const L = window.L;

        // Reset container registry to avoid Leaflet double initialization error
        const container = L.DomUtil.get('map-container');
        if (container) {
          container._leaflet_id = null;
        }

        // Initialize Leaflet Map
        mapInstance = L.map('map-container', {
          zoomControl: false
        }).setView([pickupCoords.lat, pickupCoords.lon], 11);

        // Add OpenStreetMap tile layers
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; OpenStreetMap contributors'
        }).addTo(mapInstance);

        // Add Zoom control on the bottom-right corner
        L.control.zoom({ position: 'bottomright' }).addTo(mapInstance);

        // Circular CSS Div Icons for clean aesthetics (avoids asset loader bugs)
        const greenIcon = L.divIcon({
          className: 'custom-div-icon',
          html: `<div style="background-color: #10b981; width: 14px; height: 14px; border: 3px solid white; border-radius: 50%; box-shadow: 0 2px 4px rgba(0,0,0,0.3);"></div>`,
          iconSize: [14, 14],
          iconAnchor: [7, 7]
        });

        const redIcon = L.divIcon({
          className: 'custom-div-icon',
          html: `<div style="background-color: #ef4444; width: 14px; height: 14px; border: 3px solid white; border-radius: 50%; box-shadow: 0 2px 4px rgba(0,0,0,0.3);"></div>`,
          iconSize: [14, 14],
          iconAnchor: [7, 7]
        });

        // Add Markers
        L.marker([pickupCoords.lat, pickupCoords.lon], { icon: greenIcon })
          .addTo(mapInstance)
          .bindPopup(`<b>Pickup Point</b><br>${pickupAddr}`);

        L.marker([deliveryCoords.lat, deliveryCoords.lon], { icon: redIcon })
          .addTo(mapInstance)
          .bindPopup(`<b>Delivery Point</b><br>${deliveryAddr}`);

        // Plot route path
        if (routeData && routeData.coordinates.length > 0) {
          const polyline = L.polyline(routeData.coordinates, {
            color: '#2563eb', // blue-600
            weight: 4,
            opacity: 0.8,
            dashArray: '2, 6' // dashed route line
          }).addTo(mapInstance);

          mapInstance.fitBounds(polyline.getBounds(), { padding: [50, 50] });
        } else {
          // Straight line fallback if OSRM query fails
          const polyline = L.polyline([[pickupCoords.lat, pickupCoords.lon], [deliveryCoords.lat, deliveryCoords.lon]], {
            color: '#2563eb',
            weight: 3,
            opacity: 0.7,
            dashArray: '5, 5'
          }).addTo(mapInstance);

          mapInstance.fitBounds(polyline.getBounds(), { padding: [50, 50] });
        }

        if (isMounted) {
          setMapLoading(false);
        }
      } catch (err) {
        console.error("Leaflet initialization failed:", err);
        if (isMounted) {
          setMapError(true);
          setMapLoading(false);
        }
      }
    };

    initMap();

    return () => {
      isMounted = false;
      if (mapInstance) {
        mapInstance.remove();
      }
    };
  }, [leafletReady, shipment]);

  // Loading indicator for shipment details
  if (!shipment) {
    return (
      <div className="p-8 max-w-[1400px] w-full mx-auto flex flex-col items-center justify-center min-h-[400px] space-y-4">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        <p className="text-sm font-semibold text-slate-500">Loading booking details...</p>
      </div>
    );
  }

  // Get status configuration classes and labels
  const getStatusBadgeConfig = (status) => {
    switch (status?.toLowerCase()) {
      case 'pending':
        return { label: 'PENDING', bg: 'text-amber-600 bg-amber-50 border-amber-200/50', dot: 'bg-amber-500' };
      case 'accepted':
        return { label: 'ACCEPTED', bg: 'text-blue-600 bg-blue-50 border-blue-200/50', dot: 'bg-blue-500' };
      case 'picked_up':
        return { label: 'PICKED UP', bg: 'text-teal-600 bg-teal-50 border-teal-200/50', dot: 'bg-teal-500' };
      case 'in_transit':
        return { label: 'IN TRANSIT', bg: 'text-purple-600 bg-purple-50 border-purple-200/50', dot: 'bg-purple-500' };
      case 'delivered':
        return { label: 'DELIVERED', bg: 'text-emerald-600 bg-emerald-50 border-emerald-200/50', dot: 'bg-emerald-500' };
      case 'cancelled':
        return { label: 'CANCELLED', bg: 'text-rose-600 bg-rose-50 border-rose-200/50', dot: 'bg-rose-500' };
      default:
        return { label: status?.toUpperCase() || 'UNKNOWN', bg: 'text-slate-500 bg-slate-50 border-slate-200/50', dot: 'bg-slate-400' };
    }
  };

  const statusConfig = getStatusBadgeConfig(shipment.status);
  const displayId = shipment._id ? `#${shipment._id.substring(shipment._id.length - 8).toUpperCase()}` : '#UNKNOWN';

  return (
    <div className="p-8 max-w-[1400px] w-full mx-auto space-y-6 font-sans text-slate-700">

      {/* Breadcrumb */}
      <div className="flex items-center gap-1.5 text-xs font-bold text-slate-400">
        <Link to="/bookings" className="hover:text-slate-600 transition">Bookings</Link>
        <ChevronRight size={14} className="text-slate-350" />
        <span className="text-slate-500">{displayId}</span>
      </div>

      {/* Header Block */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
          Booking Details
        </h1>

        <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold ${statusConfig.bg}`}>
          <span className={`w-1.5 h-1.5 rounded-full ${statusConfig.dot}`}></span>
          {statusConfig.label}
        </span>
      </div>

      {/* Action Required Banner */}
      <div className="bg-slate-50 border border-slate-200/60 rounded-2xl p-4.5 flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-sm">
        <div className="flex items-center gap-3">
          <Info className="text-slate-500 shrink-0" size={20} />
          <p className="text-xs font-bold text-slate-700">
            Action required to proceed with logistics planning.
          </p>
        </div>

        <div className="flex items-center gap-2.5">
          <button className="inline-flex items-center justify-center gap-1.5 border border-red-200 bg-white hover:bg-red-50 text-red-655 font-bold text-xs py-2 px-4 rounded-xl transition duration-150 cursor-pointer">
            <X size={14} />
            Reject Request
          </button>
          <Link
            to={`/bookings/${id}/generate-quote`}
            className="inline-flex items-center justify-center gap-1.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs py-2 px-4 rounded-xl transition duration-150 cursor-pointer shadow-md shadow-blue-500/10"
          >
            <FileText size={14} />
            Generate Quote
          </Link>

        </div>
      </div>

      {/* Main Grid: Left Details & Right Map */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

        {/* Left Column Cards */}
        <div className="space-y-6">

          {/* Card 1: Sender & Receiver Details */}
          <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm">
            <h2 className="text-sm font-bold text-slate-900 tracking-tight flex items-center gap-2.5 mb-6">
              <Building2 className="w-4.5 h-4.5 text-slate-400" />
              Sender & Receiver Details
            </h2>

            <div className="space-y-6">
              {/* Account Metadata */}


              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-1">
                {/* Sender Details */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 font-bold text-slate-800 text-xs border-b border-slate-50 pb-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                    <span>Sender (Pickup Information)</span>
                  </div>
                  <div className="space-y-2 text-xs">
                    <div>
                      <p className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">Contact Person</p>
                      <p className="font-bold text-slate-700 mt-0.5 flex items-center gap-1.5">
                        <User size={13} className="text-slate-400" />
                        {shipment.pickupInformation?.personName || 'N/A'}
                      </p>
                    </div>
                    <div>
                      <p className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">Phone Number</p>
                      <p className="font-semibold text-slate-600 mt-0.5 flex items-center gap-1.5">
                        <Phone size={13} className="text-slate-400" />
                        {shipment.pickupInformation?.phone || 'N/A'}
                      </p>
                    </div>
                    <div>
                      <p className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">Pickup Address</p>
                      <p className="text-slate-600 mt-0.5 leading-relaxed bg-slate-50 p-2.5 rounded-xl border border-slate-100/50">
                        {shipment.pickupInformation?.address || 'N/A'}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Receiver Details */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 font-bold text-slate-800 text-xs border-b border-slate-50 pb-2">
                    <span className="w-2 h-2 rounded-full bg-red-500"></span>
                    <span>Receiver (Delivery Information)</span>
                  </div>
                  <div className="space-y-2 text-xs">
                    <div>
                      <p className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">Contact Person</p>
                      <p className="font-bold text-slate-700 mt-0.5 flex items-center gap-1.5">
                        <User size={13} className="text-slate-400" />
                        {shipment.deliveryInformation?.personName || 'N/A'}
                      </p>
                    </div>
                    <div>
                      <p className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">Phone Number</p>
                      <p className="font-semibold text-slate-600 mt-0.5 flex items-center gap-1.5">
                        <Phone size={13} className="text-slate-400" />
                        {shipment.deliveryInformation?.phone || 'N/A'}
                      </p>
                    </div>
                    <div>
                      <p className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">Delivery Address</p>
                      <p className="text-slate-600 mt-0.5 leading-relaxed bg-slate-50 p-2.5 rounded-xl border border-slate-100/50">
                        {shipment.deliveryInformation?.address || 'N/A'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Shipment Details */}
          <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm">
            <h2 className="text-sm font-bold text-slate-900 tracking-tight flex items-center gap-2.5 mb-6">
              <Package className="w-4.5 h-4.5 text-slate-400" />
              Shipment Details
            </h2>

            <div className="space-y-5">
              <div className="bg-blue-50/40 border border-blue-100/50 rounded-2xl p-4.5">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Product Name</p>
                <p className="text-sm font-extrabold text-slate-900 mt-1">{shipment.productInformation?.productName || 'N/A'}</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Category</p>
                  <div className="mt-2">
                    <span className="bg-blue-100/55 text-blue-600 px-3 py-1 rounded-lg text-xs font-bold uppercase">
                      {shipment.productInformation?.productCategory || 'N/A'}
                    </span>
                  </div>
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Total Weight</p>
                  <p className="text-xs font-bold text-slate-750 mt-2 flex items-center gap-2">
                    <Scale size={16} className="text-slate-400" />
                    {shipment.productInformation?.productWeight} kg
                  </p>
                </div>
              </div>

              <div className="border-t border-slate-50 pt-4 grid grid-cols-1 gap-4">
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Quantity</p>
                  <p className="text-xs font-bold text-slate-750 mt-2 flex items-center gap-2">
                    <Layers size={16} className="text-slate-400" />
                    {shipment.productInformation?.quantity} unit(s)
                  </p>
                </div>
                {shipment.productInformation?.productDescription && (
                  <div className="pt-2">
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Product Description</p>
                    <p className="text-xs italic text-slate-650 mt-2 bg-slate-50 p-3 rounded-xl border border-slate-100/50 leading-relaxed">
                      "{shipment.productInformation.productDescription}"
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Card 3: Route Plan */}
          <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm">
            <h2 className="text-sm font-bold text-slate-900 tracking-tight flex items-center gap-2.5 mb-6">
              <Navigation className="w-4.5 h-4.5 text-slate-400" />
              Route Plan
            </h2>

            <div className="relative pl-7 space-y-6">
              {/* Vertical dotted line */}
              <div className="absolute left-[9.5px] top-2 bottom-2 w-0.5 border-l-2 border-dashed border-slate-200"></div>

              {/* Origin */}
              <div className="relative">
                <span className="absolute -left-[27.5px] top-1 w-3 h-3 rounded-full border-2 border-blue-600 bg-white ring-4 ring-white"></span>
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Origin (Pickup Address)</p>
                  <p className="text-xs font-bold text-slate-800 mt-1 leading-relaxed">{shipment.pickupInformation?.address}</p>
                  <p className="text-[11px] font-semibold text-slate-500 mt-1.5 flex flex-wrap items-center gap-1.5">
                    <User size={13} className="text-slate-400 shrink-0" />
                    <span>{shipment.pickupInformation?.personName}</span>
                    <span className="text-slate-350">|</span>
                    <Phone size={13} className="text-slate-400 shrink-0" />
                    <span>{shipment.pickupInformation?.phone}</span>
                  </p>
                </div>
              </div>

              {/* Destination */}
              <div className="relative">
                <span className="absolute -left-[27.5px] top-1 w-3 h-3 rounded-full border-2 border-emerald-500 bg-white ring-4 ring-white"></span>
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Destination (Delivery Address)</p>
                  <p className="text-xs font-bold text-slate-800 mt-1 leading-relaxed">{shipment.deliveryInformation?.address}</p>
                  <p className="text-[11px] font-semibold text-slate-500 mt-1.5 flex flex-wrap items-center gap-1.5">
                    <User size={13} className="text-slate-400 shrink-0" />
                    <span>{shipment.deliveryInformation?.personName}</span>
                    <span className="text-slate-350">|</span>
                    <Phone size={13} className="text-slate-400 shrink-0" />
                    <span>{shipment.deliveryInformation?.phone}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Right Column Map Card */}
        <div className="bg-slate-50 border border-slate-200/60 rounded-3xl overflow-hidden relative shadow-sm h-[600px] flex flex-col justify-center items-center">

          {/* Leaflet Map Container */}
          <div id="map-container" className="w-full h-full z-0"></div>

          {/* Loading Overlay */}
          {mapLoading && (
            <div className="absolute inset-0 bg-slate-50/85 backdrop-blur-sm z-20 flex flex-col justify-center items-center space-y-3">
              <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-600"></div>
              <p className="text-xs font-semibold text-slate-500">Calculating route details...</p>
            </div>
          )}

          {/* Error State */}
          {mapError && !mapLoading && (
            <div className="absolute inset-0 bg-slate-50/90 backdrop-blur-sm z-20 flex flex-col justify-center items-center space-y-2 text-center p-6">
              <p className="text-sm font-bold text-slate-700">Dynamic map rendering unavailable</p>
              <p className="text-xs text-slate-500">Could not resolve coordinates for the addresses.</p>
            </div>
          )}

          {/* Floating Route Summary Card */}
          <div className="absolute top-6 left-6 bg-white/95 border border-slate-200/40 backdrop-blur-md rounded-2xl p-4.5 shadow-lg z-10 w-full max-w-[240px]">
            <p className="text-[10px] font-bold text-slate-400 tracking-wider uppercase">Route Summary</p>
            <div className="mt-2 space-y-1.5 text-[11px] font-bold text-slate-700">
              <div className="flex justify-between">
                <span className="text-slate-400">Total Weight:</span>
                <span>{shipment.productInformation?.productWeight} kg</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Qty:</span>
                <span>{shipment.productInformation?.quantity} unit(s)</span>
              </div>
              {routeInfo && (
                <>
                  <div className="flex justify-between pt-1.5 border-t border-slate-100">
                    <span className="text-slate-400">Road Distance:</span>
                    <span className="text-blue-600">{routeInfo.distance}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Est. Duration:</span>
                    <span className="text-blue-600">{routeInfo.duration}</span>
                  </div>
                </>
              )}
            </div>
            <div className="mt-3 pt-3 border-t border-slate-100 text-[10px] text-slate-500 flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              <span>Awaiting Quotation Generation</span>
            </div>
          </div>
        </div>

      </div>

    </div>
  )
}

export default BookingDetails

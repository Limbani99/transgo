# 🚚 TransportHub – Smart Transportation & Logistics Management System

## 📌 Project Overview

TransportHub is a full-stack logistics and transportation management platform built using the MERN Stack (MongoDB, Express.js, React.js, Node.js).

The platform connects three stakeholders:

- 👤 Customer/User
- 🏢 Company/Admin
- 🚛 Driver/Transporter

The system enables customers to book transportation services, companies to manage logistics operations, and drivers to handle pickups and deliveries with real-time tracking.

---

# 🎯 Project Objectives

- Simplify logistics booking process.
- Provide transparent transportation pricing.
- Enable real-time shipment tracking.
- Improve communication between customer, company, and driver.
- Digitize transportation management operations.
- Provide a scalable logistics solution.

---

# 🏗️ System Architecture

```text
Customer App
      │
      ▼
Backend API (Node.js + Express)
      │
      ▼
MongoDB Database
      ▲
      │
Company App
      ▲
      │
Driver App
```

---

# 👥 User Roles

## 1. Customer/User

A customer can:

- Register/Login
- Search logistics companies
- Compare pricing and services
- Create shipment requests
- Accept quotations
- Track shipments
- Make payments
- View shipment history
- Rate company and driver

---

## 2. Company/Admin

A company can:

- Manage shipment requests
- Generate quotations
- Assign drivers
- Manage vehicles
- Monitor deliveries
- Generate invoices
- View analytics and reports
- Manage customers and drivers

---

## 3. Driver/Transporter

A driver can:

- Login securely
- View assigned deliveries
- Accept/reject assignments
- Update shipment status
- Upload pickup and delivery proof
- Share live GPS location
- Verify delivery using OTP

---

# 🔄 Complete Workflow

## Step 1: Customer Creates Shipment Request

Customer enters:

- Pickup Address
- Delivery Address
- Product Type
- Weight
- Dimensions
- Pickup Date
- Special Instructions

Status:

```text
REQUEST_CREATED
```

---

## Step 2: Company Receives Request

Company reviews shipment details.

Status:

```text
PENDING_REVIEW
```

---

## Step 3: Company Generates Quotation

Quotation is calculated based on:

- Distance
- Weight
- Vehicle Type
- Toll Charges
- Additional Services

Status:

```text
QUOTE_SENT
```

---

## Step 4: Customer Accepts Quote

Customer reviews quotation and confirms booking.

Status:

```text
BOOKING_CONFIRMED
```

---

## Step 5: Company Assigns Driver

Company selects:

- Driver
- Vehicle

Status:

```text
DRIVER_ASSIGNED
```

---

## Step 6: Driver Accepts Assignment

Driver receives booking details and accepts delivery.

Status:

```text
ASSIGNMENT_ACCEPTED
```

---

## Step 7: Pickup Process

Driver arrives at pickup location.

Actions:

- Verify shipment
- Upload pickup images
- Confirm pickup

Status:

```text
PICKED_UP
```

---

## Step 8: Transportation

Driver begins delivery journey.

Status:

```text
IN_TRANSIT
```

Features:

- Live GPS Tracking
- Route Visualization
- ETA Updates

---

## Step 9: Delivery Verification

Receiver verifies delivery using:

- OTP Verification
- Digital Signature

Status:

```text
DELIVERED
```

---

## Step 10: Shipment Completion

System generates:

- Invoice
- Payment Receipt
- Shipment Summary

Status:

```text
COMPLETED
```

---

# 📱 Applications

## CUSTOMER APPLICATION

### Authentication Module

- Splash Screen
- Login
- Register
- Forgot Password
- OTP Verification
- Reset Password

### Dashboard Module

- Home Dashboard
- Company Search
- Company Details
- Notifications

### Shipment Module

- Create Shipment
- Shipment Details
- Cost Estimation
- Booking Confirmation
- Payment

### Tracking Module

- Live Tracking
- Driver Details
- Route Map
- Shipment Timeline

### History Module

- Active Shipments
- Completed Shipments
- Cancelled Shipments

### Profile Module

- Profile
- Saved Addresses
- Payment Methods
- Settings

---

## COMPANY APPLICATION

### Authentication

- Login
- Forgot Password

### Dashboard

- Total Orders
- Revenue
- Active Shipments
- Driver Availability

### Booking Management

- New Requests
- Pending Requests
- Active Deliveries
- Completed Deliveries

### Driver Management

- Driver List
- Add Driver
- Driver Profile
- Driver Availability

### Vehicle Management

- Vehicle List
- Add Vehicle
- Maintenance Records
- Vehicle Assignment

### Customer Management

- Customer List
- Customer Details
- Shipment History

### Financial Management

- Quotations
- Payments
- Invoices
- Revenue Reports

### Analytics

- Revenue Analytics
- Shipment Analytics
- Driver Performance
- Monthly Reports

### Settings

- Company Profile
- Notification Settings
- Security Settings

---

## DRIVER APPLICATION

### Authentication

- Login
- Forgot Password

### Dashboard

- Assigned Deliveries
- Active Deliveries
- Earnings Summary

### Delivery Module

- Assigned Orders
- Order Details
- Navigation Screen

### Status Management

Shipment Status:

```text
Assigned
Accepted
Arrived At Pickup
Picked Up
In Transit
Reached Destination
Delivered
```

### Proof Upload

- Pickup Images
- Delivery Images
- Signature Upload

### Earnings Module

- Daily Earnings
- Weekly Earnings
- Monthly Earnings

### Profile Module

- Driver Profile
- Vehicle Information
- Settings

---

# 📊 Database Collections

## Users

```javascript
{
  _id,
  name,
  email,
  phone,
  password,
  role,
  createdAt
}
```

## Companies

```javascript
{
  _id,
  companyName,
  email,
  phone,
  address,
  rating,
  createdAt
}
```

## Drivers

```javascript
{
  _id,
  name,
  phone,
  email,
  vehicleId,
  status,
  currentLocation
}
```

## Vehicles

```javascript
{
  _id,
  vehicleNumber,
  vehicleType,
  capacity,
  companyId,
  driverId
}
```

## Shipments

```javascript
{
  _id,
  customerId,
  companyId,
  driverId,
  pickupAddress,
  deliveryAddress,
  productType,
  weight,
  dimensions,
  cost,
  status,
  createdAt
}
```

## Tracking

```javascript
{
  shipmentId,
  latitude,
  longitude,
  timestamp
}
```

## Payments

```javascript
{
  shipmentId,
  amount,
  paymentMethod,
  paymentStatus
}
```

## Reviews

```javascript
{
  customerId,
  shipmentId,
  companyRating,
  driverRating,
  review
}
```

---

# 🔌 Technology Stack

## Frontend

- React.js
- React Router DOM
- Redux Toolkit
- Axios
- Tailwind CSS / Material UI
- Socket.IO Client

## Backend

- Node.js
- Express.js
- JWT Authentication
- Bcrypt.js
- Socket.IO

## Database

- MongoDB
- Mongoose

## Cloud Services

- Cloudinary
- Firebase Notifications
- Google Maps API

## Payment Integration

- Razorpay
- Stripe

---

# 🔐 Security Features

- JWT Authentication
- Role-Based Access Control (RBAC)
- Password Hashing
- Protected Routes
- OTP Verification
- Input Validation
- API Security Middleware

---

# 📡 Real-Time Features

Using Socket.IO:

- Live Driver Tracking
- Shipment Status Updates
- Driver Assignment Notifications
- Customer Notifications
- Company Notifications

---

# ✨ Advanced Features

### Customer

- Real-Time Tracking
- Shipment History
- Saved Addresses
- Multiple Payment Methods
- Ratings & Reviews

### Company

- Driver Assignment
- Vehicle Management
- Revenue Analytics
- Invoice Generation
- Fleet Monitoring

### Driver

- Navigation Support
- Live GPS Tracking
- Delivery Verification
- Earnings Dashboard

---

# 📁 Project Structure

```text
transporthub/

├── customer-app/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── company-app/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── driver-app/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── server/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── services/
│   ├── sockets/
│   ├── utils/
│   └── app.js
│
├── docs/
│
└── README.md
```

---

# 🚀 Future Enhancements

- AI Route Optimization
- Dynamic Pricing System
- Warehouse Management
- Fleet Management
- Fuel Monitoring
- Delivery ETA Prediction
- AI Customer Support
- Driver Performance Analytics

---

# 🎓 Learning Outcomes

This project demonstrates:

- Full MERN Stack Development
- REST API Development
- Authentication & Authorization
- Real-Time Communication
- Geolocation Tracking
- Payment Gateway Integration
- Cloud Storage Integration
- Scalable System Architecture

---

# 📜 License

This project is developed for educational and academic purposes.

---

# 👨‍💻 Developer

**Patel Malhar**

Bachelor of Computer Applications (BCA)  
Silver Oak University, Ahmedabad

### Skills

- MERN Stack Development
- UI/UX Design
- Graphic Design
- Full Stack Web Development

---

# 🚚 TransportHub

Smart Transportation & Logistics Management Platform

Connecting Customers, Logistics Companies, and Drivers through a single intelligent ecosystem.
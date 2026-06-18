import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import Dashboard from './pages/Dashboard';
import AssignedDeliveries from './pages/AssignedDeliveries';
import ActiveDeliveries from './pages/ActiveDeliveries';
import DeliveryHistory from './pages/DeliveryHistory';
import Notifications from './pages/Notifications';
import Profile from './pages/Profile';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="assigned-deliveries" element={<AssignedDeliveries />} />
          <Route path="active-deliveries" element={<ActiveDeliveries />} />
          <Route path="delivery-history" element={<DeliveryHistory />} />
          <Route path="notifications" element={<Notifications />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
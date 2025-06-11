// src/AppRoutes.jsx
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Home from './pages/Home';
import NotFound from './pages/NotFound';
import BlogNew from './pages/BlogNew';

import BlogDetails from './pages/BlogDetails';
import DeveloperProfile from './pages/DeveloperProfile';

import Login from './features/auth/Login';
import Register from './features/auth/Register';

import ProtectedRoute from './utils/ProtectedRoute';

//import { useSelector } from 'react-redux';

// const ProtectedRoute = ({ children }) => {
//   const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
//   return isAuthenticated ? children : <Navigate to="/login" replace />;
// };

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      {/* Auth routes */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* Protected route example */}
      <Route
        path="/blogs/new"
        element={
          <ProtectedRoute>
            <BlogNew />
          </ProtectedRoute>
        }
      />
      <Route path="blogs/:id" element={<BlogDetails />} />
      <Route path="developers/:id" element={<DeveloperProfile />} />

      {/* 404 fallback */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
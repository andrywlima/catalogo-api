// src/routes/AppRoutes.tsx
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from '../pages/Login';
import Home from '../pages/Home';
import ApiDetail from '../pages/ApiDetail';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const AppRoutes: React.FC = () => {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <Routes>
      <Route
        path="/login"
        element={!isAuthenticated ? <Login /> : <Navigate to="/" replace />}
      />
      <Route
        path="/"
        element={isAuthenticated ? <Home /> : <Navigate to="/login" replace />}
      />
      <Route
        path="/api/:id"
        element={isAuthenticated ? <ApiDetail /> : <Navigate to="/login" replace />}
      />
      {/* Rotas adicionais podem ser adicionadas aqui */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default AppRoutes;

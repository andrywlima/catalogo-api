// src/routes/AppRoutes.tsx
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import ApiDetail from '../pages/ApiDetail';
import { useAuth } from '../context/AuthContext'; // Usando o hook personalizado
import PersistentDrawer from '../components/PersistentDrawer'; // Drawer para rotas protegidas
import PrivateRoute from '../components/PrivateRoute'; // Componente para rotas protegidas
import Header from '../components/Header'; // Importando o Header

const AppRoutes: React.FC = () => {
  const { isAuthenticated } = useAuth();

  return (
    <>
      <Header /> {/* Renderiza o Header que contém o botão de Logout */}
      <Routes>
        {/* Rota de login: Só acessível se o usuário não estiver autenticado */}
        <Route path="/login" element={!isAuthenticated ? <Login /> : <Navigate to="/" replace />} />

        {/* Rotas protegidas */}
        <Route element={<PrivateRoute />}>
          {/* Rotas que possuem o PersistentDrawer */}
          <Route
            path="/"
            element={
              <PersistentDrawer>
                <Home />
              </PersistentDrawer>
            }
          />
          <Route
            path="/api/:id"
            element={
              <PersistentDrawer>
                <ApiDetail />
              </PersistentDrawer>
            }
          />
        </Route>

        {/* Redirecionamento padrão para home se a rota não for encontrada */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
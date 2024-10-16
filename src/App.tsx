import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes'; // Importando AppRoutes que gerencia todas as rotas
import { AuthProvider } from './context/AuthContext'; // Certifique-se de que o AuthProvider está correto

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Router>
        <AppRoutes /> {/* Gerenciando todas as rotas aqui */}
      </Router>
    </AuthProvider>
  );
};

export default App;
// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PersistentDrawer from './components/PersistentDrawer';
import Home from './pages/Home';
import Login from './pages/Login'; // Certifique-se de que você tem uma página Login

const App: React.FC = () => {
  return (
    <Router>
      <PersistentDrawer>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          {/* Adicione outras rotas conforme necessário */}
        </Routes>
      </PersistentDrawer>
    </Router>
  );
};

export default App;

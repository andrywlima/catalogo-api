import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'; // Atualizando a importação
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
} from '@mui/material';

const Header: React.FC = () => {
    const { isAuthenticated, logout } = useAuth(); // Usando o hook para acessar o contexto
    const navigate = useNavigate();
  
    console.log('Estado de autenticação:', isAuthenticated); // Adicione este log
  
    const handleLogout = () => {
      logout(); // Chama a função de logout do contexto
      navigate('/login'); // Redireciona para a página de login após logout
    };
  
    return (
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>
              Catálogo de APIs
            </Link>
          </Typography>
          {isAuthenticated ? (
            <Button color="inherit" onClick={handleLogout}>
              Logout
            </Button>
          ) : (
            <Button color="inherit" component={Link} to="/login">
              Login
            </Button>
          )}
        </Toolbar>
      </AppBar>
    );
  };

export default Header;
// src/components/PersistentDrawer.tsx
import React, { useState } from 'react';
import {
  Box,
  CssBaseline,
  AppBar,
  Toolbar,
  List,
  Typography,
  Divider,
  IconButton,
  Drawer,
  ListItem,
  ListItemText,
  ListItemButton,
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { styled } from '@mui/material/styles';

const drawerWidth = 240;

// Estilizando o AppBar sem a propriedade `open`
const AppBarStyled = styled(AppBar)(({ theme }) => ({
  zIndex: theme.zIndex.appBar, // Usando o zIndex do AppBar
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
}));

// Estilizando o Drawer
const DrawerStyled = styled(Drawer)(({ theme }) => ({
  '& .MuiDrawer-paper': {
    width: drawerWidth,
    boxSizing: 'border-box',
    zIndex: theme.zIndex.drawer || 1200, // Usando um valor padrão se não estiver definido
  },
}));

const PersistentDrawer: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [open, setOpen] = useState(false); // Inicializa o Drawer fechado

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      {/* O AppBar não precisa da propriedade `open` */}
      <AppBarStyled position="fixed" sx={{ ...(open && { marginLeft: drawerWidth, width: `calc(100% - ${drawerWidth}px)` }) }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Catálogo de APIs
          </Typography>
        </Toolbar>
      </AppBarStyled>

      <DrawerStyled variant="persistent" anchor="left" open={open}>
        <div>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>
          <ListItem component={RouterLink} to="/" disablePadding>
            <ListItemButton>
              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem>
          <ListItem component={RouterLink} to="/login" disablePadding>
            <ListItemButton>
              <ListItemText primary="Login" />
            </ListItemButton>
          </ListItem>
          {/* Adicione outros links conforme necessário */}
        </List>
      </DrawerStyled>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          bgcolor: 'background.default',
          padding: 3,
          transition: theme => theme.transitions.create(['margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
          marginLeft: open ? `${drawerWidth}px` : '0', // Controlando a margem de acordo com o estado do Drawer
        }}
      >
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
};

export default PersistentDrawer;

import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer: React.FC = () => {
  return (
    <Box
      sx={{
        bgcolor: 'primary.main',
        color: 'white',
        textAlign: 'center',
        padding: 2,
        position: 'relative',
        bottom: 0,
        width: '100%',
      }}
    >
      <Typography variant="body2">
        &copy; {new Date().getFullYear()} Sua Empresa. Todos os direitos reservados.
      </Typography>
    </Box>
  );
};

export default Footer;
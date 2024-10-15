import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Box, Typography, Button, Card } from '@mui/material';
import { apiList } from '../mock/data';

const ApiDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const api = apiList.find((item) => item.id === Number(id));

  if (!api) {
    return (
      <Box sx={{ padding: 4, textAlign: 'center' }}>
        <Typography variant="h5" color="error">
          API Não Encontrada
        </Typography>
        <Link to="/">
          <Button variant="outlined" sx={{ mt: 2 }}>
            Voltar ao Catálogo
          </Button>
        </Link>
      </Box>
    );
  }

  return (
    <Box sx={{ padding: 4 }}>
      <Card variant="outlined" sx={{ padding: 4, boxShadow: 3 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          {api.name}
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          <strong>Descrição:</strong> {api.description}
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          <strong>Versão:</strong> {api.version}
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          <strong>Endpoint:</strong> {api.endpoint}
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          <strong>Documentação:</strong>{' '}
          <a href={api.documentation} target="_blank" rel="noopener noreferrer">
            Acessar
          </a>
        </Typography>
        <Link to="/">
          <Button variant="contained" sx={{ mt: 2 }}>
            Voltar ao Catálogo
          </Button>
        </Link>
      </Card>
    </Box>
  );
};

export default ApiDetail;
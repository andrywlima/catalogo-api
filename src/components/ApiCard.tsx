// src/components/ApiCard.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Typography, Button, Card, CardContent, Chip } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import DescriptionIcon from '@mui/icons-material/Description';

interface ApiCardProps {
  id: number;
  name: string;
  description: string;
  status: string;
  githubLink: string;
  documentationLink: string;
}

const ApiCard: React.FC<ApiCardProps> = ({ id, name, description, status, githubLink, documentationLink }) => {
  return (
    <Card
      variant="outlined"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        boxShadow: 3,
        transition: 'transform 0.2s ease-in-out',
        '&:hover': {
          transform: 'scale(1.05)',
        },
      }}
    >
      <CardContent>
        <Typography variant="h5" component="div" gutterBottom>
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          {description}
        </Typography>

        {/* Status da API */}
        <Chip
          label={status === 'online' ? 'Online' : 'Offline'}
          color={status === 'online' ? 'success' : 'error'}
          sx={{ mb: 2 }}
        />

        {/* Botões de GitHub e Documentação */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
          <Button
            variant="outlined"
            startIcon={<GitHubIcon />}
            href={githubLink}
            target="_blank"
          >
            GitHub
          </Button>
          <Button
            variant="outlined"
            startIcon={<DescriptionIcon />}
            href={documentationLink}
            target="_blank"
          >
            Documentação
          </Button>
        </Box>
      </CardContent>

      {/* Link para Detalhes da API */}
      <Box sx={{ mt: 'auto', p: 2 }}>
        <Button component={Link} to={`/api/${id}`} variant="contained" fullWidth>
          Ver Detalhes
        </Button>
      </Box>
    </Card>
  );
};

export default ApiCard;

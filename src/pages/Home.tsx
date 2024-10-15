import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import { apiList } from '../mock/data';
import ApiCard from '../components/ApiCard';

const Home: React.FC = () => {
  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" gutterBottom>
        Catálogo de APIs
      </Typography>

      <Grid container spacing={3}>
        {apiList.map((api) => (
          <Grid item xs={12} md={6} lg={4} key={api.id}>
            <ApiCard
              id={api.id}
              name={api.name}
              description={api.description}
              status={api.status}
              githubLink={api.githubLink}
              documentationLink={api.documentation}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Home;
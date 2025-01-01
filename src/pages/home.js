// mui
import { Box, Typography, Button, Container } from "@mui/material";
//other
import React from "react";


const Home = ()  => {
    return (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
          }}
        >
          <Container maxWidth="md" sx={{ textAlign: 'center' }}>
            <Typography variant="h2" component="h1" gutterBottom>
              Добро пожаловать в CareerWay
            </Typography>
            <Typography variant="h5" color="textSecondary" gutterBottom>
              Изучайте информативные и понятные роадмапы для достижения своих целей.
              Следите за прогрессом и открывайте новые возможности!
            </Typography>
            <Button
              variant="contained"
              size="large"
              sx={{
                mt: 4,
                backgroundColor: '#1976d2',
                '&:hover': { backgroundColor: '#1565c0' },
              }}
            >
              Начать свой путь
            </Button>
          </Container>
        </Box>
      );
};

export default Home;
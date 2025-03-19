// mui
import { Box, Button, Typography } from '@mui/material';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
// other
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';


const Profile = () => {
  const [user, setUser] = useState(null); 
  const [error, setError] = useState(null); 
  const [testHistory, setTestHistory] = useState([]);
  const navigate = useNavigate(); 

  useEffect(() => {
      const fetchUser = async () => {
        const token = localStorage.getItem('access'); 

        if (!token) {
          setError('Похоже, вы не зарегистрированы');
          return;                  
        }

        try {
          const payload = JSON.parse(atob(token.split('.')[1])); // декодирация токена
          const currentTime = Math.floor(Date.now() / 1000); 
          if (payload.exp < currentTime) {
              throw new Error('Token expired');
          }
        } catch (err) {
          localStorage.removeItem('access'); 
          localStorage.removeItem('refresh');
          return;
        }

        try {
          const response = await axios.get('http://127.0.0.1:8000/api/current-user/', {
            headers: {
              Authorization: `Bearer ${token}`, 
                },
            });
            setUser(response.data); 
        } catch (err) {
          setError('Failed to fetch user data'); 
        }
      };

      const fetchTestHistory = async () => {

        const token = localStorage.getItem('access'); 

        try {
          const response = await axios.get('http://127.0.0.1:8000/api/proftest/', {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
          );
          setTestHistory(response.data.test_results);
        } catch (error) {}
      };

      fetchUser();
      fetchTestHistory();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('access');
    localStorage.removeItem('refresh');
    navigate('/login');
  };

  if (error) {
    return (
        <Box sx={{
           display: 'flex',
          justifyContent: 'center', 
          alignItems: 'center',
          height: '100vh', 
          textAlign: 'center' 
          }}>
            <Box>
              <SentimentDissatisfiedIcon sx={{height: '10em', width: '10em'}} />
                <Typography sx={{
                  color: 'red', 
                  fontFamily: 'Arial, sans-serif' 
                  }}>
                  {error}
                </Typography>
                <Button
              variant="contained"
              size="large"
              sx={{
                mt: 4,
                backgroundColor: 'dark-blue',
                '&:hover': { backgroundColor: '#1565c0' },
              }}
              href='/login'
            >
              Зарегистрироваться
            </Button>
            </Box>
        </Box>
    );
}

  if (!user) {
      return <div>Загрузка...</div>; 
  }

  return (
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
      }}>
        <Box sx={{
          textAlign: 'center',
          marginTop: '1em'
        }}>
        <Typography variant='h4' color='default' gutterBottom>
          Добро пожаловать, {user.username}!
        </Typography>
        <Typography variant='h5' color='default' gutterBottom>
          Email: {user.email}
        </Typography>
        <Typography>
          <Button onClick={handleLogout}>Выйти из аккаунта</Button>
        </Typography>
        </Box>

        <Box sx={{display: "flex", justifyContent: "center", py: 5}}>
          <Typography>
            Твой результат профориентационного теста: 
            {Object.entries(testHistory).map(([key, value]) => (
              <Typography sx={{justifyContent: "center", display: "flex"}}>
                {key}: {value}
              </Typography>
            ))}
          </Typography>
          
        </Box>
      </Box>
  );
};

export default Profile;
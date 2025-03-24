// mui
import { Box, Button, Typography, Divider} from '@mui/material';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
// other
import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Account from '../components/profile/account';
import Test from '../components/profile/test';
import LeftBar from '../components/profile/leftBar';
import { useNavigate } from 'react-router-dom';


const Profile = () => {
  const [user, setUser] = useState(null); 
  const [error, setError] = useState(null); 
  const navigate = useNavigate();
  const [testHistory, setTestHistory] = useState([]);
  const [activeSection, setActiveSection] = useState(() => {
    const saved = localStorage.getItem('activeSection');
    return saved || 'account';
  });


  useEffect(() => {
    localStorage.setItem('activeSection', activeSection);
  }, [activeSection]);

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
        } catch (error) {
          console.error("error:", error);
        }
      };

      fetchUser();
      fetchTestHistory();
  }, [navigate]);


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
      return <Box sx={{height: "100vh"}}>Загрузка...</Box>; 
  }


    return (
      <Box sx={{
        flexDirection: "row",
        display: "flex",
        width: "100%"
      }}>
        
          <LeftBar setActiveSection={setActiveSection}/>
        
        <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "center" }}>
        {activeSection === 'account' && <Account username={user.username} email={user.email} />}
        {activeSection === 'test' && <Test testHistory={testHistory} />}
        </Box>
      </Box>
    );
};

export default Profile;
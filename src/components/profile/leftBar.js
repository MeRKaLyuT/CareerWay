import React from "react";
import {Box, Button, Divider} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const LeftBar = ({setActiveSection}) => {
    const navigate = useNavigate(); 

    const handleLogout = () => {
        localStorage.removeItem('access');
        localStorage.removeItem('refresh');
        navigate('/login');
      };

    return (
        <Box className="leftBar">
        <Box className="navigation">
          <button className='navigationBtn' variant='none' onClick={() => setActiveSection('account')}>АККАУНТ</button>
          <Divider/>
          <button className='navigationBtn' variant='none' onClick={() => setActiveSection('test')}>ПРОФ. ТЕСТ</button>
          <Divider/>
          <button className='navigationBtn' variant='none'>НАСТРОЙКИ</button>
          <Divider />
          <button className='navigationBtn' variant='none'>FAQ</button>
        </Box>

        <Box sx={{marginTop: "auto", display: "flex", justifyContent: "center"}}>
          <Button onClick={handleLogout} variant='none'>Выйти из аккаунта</Button>
        </Box>
      </Box>
    );
}

export default LeftBar;
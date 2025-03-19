// mui
import { Box, Typography, IconButton } from '@mui/material';
import { Telegram } from '@mui/icons-material';

//other
import React from 'react';
import '../../styles/main.css';


function Footer() {
    return (
        <Box component='footer' sx={
            {
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                padding: '16px',
                backgroundColor: 'black',
            }
        }>
            <Typography variant='h6' sx={{mb: 1}} >
                CareerWay
            </Typography>
            <Typography variant='body2' sx={{mb: 2}}>
                © {new Date().getFullYear()} Все права защищены.
            </Typography>
            <Box sx={{display: 'flex', gap: 1}}>
                <IconButton color="inherit" component='a' href="https://web.telegram.org/k/#@merkalyut" target='_blank'><Telegram /></IconButton>
            </Box>
        </Box>
    );
}

export default Footer;
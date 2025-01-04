// mui
import { Box, Button, Typography, TextField } from '@mui/material';
// other
import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../services/useAuth';


function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const text = {
        title: 'Авторизация',
        usernameLabel: 'Имя пользователя',
        passwordLabel: 'Пароль',
        loginButton: 'Вход',
        error: 'Неверное имя пользователя или пароль',
    };

    const token = localStorage.getItem('access');
    console.log(token);

    useAuth();

    const handleLogin = async () => {
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/token/', {
                username,
                password,
            });

            localStorage.setItem('access', response.data.access);
            localStorage.setItem('refresh', response.data.refresh);
            setError('');
            alert('Вход успешно совершен');
            navigate('/');

        } catch (err) {
            setError(text.error);
            setPassword('');
            console.error('Ошибка входа в', err);
        };
    }

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
          }}>
            <Typography sx={{marginBottom: '1em'}} variant='h4' gutterBottom>{text.title}</Typography>
            <TextField
            variant='outlined'
            label={text.usernameLabel}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            sx={{ marginBottom: 2, width: '100%', maxWidth: '300px' }}
            autoComplete='username'
            />
            <TextField
            variant='outlined'
            label={text.passwordLabel}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            sx={{ marginBottom: 2, width: '100%', maxWidth: '300px' }}
            />
            <Button onClick={handleLogin} variant='contained' color='secondary' sx={{ width: '300px', padding: '10px 0'}}>{text.loginButton}</Button>
            {error && (
            <Typography variant="body2" color="error" sx={{ marginTop: 2 }}>
                {error}
            </Typography>
            )}
        </Box>
    );
};

export default Login;

// mui
import { Box, Button, Typography, TextField } from '@mui/material';
// other
import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../services/useAuth';


function AuthPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const [isRegister, setIsRegister] = useState(true);

    const text = {
        titleL: 'Авторизация',
        titleR: 'Регистрация',
        usernameLabel: 'Имя пользователя',
        passwordLabel: 'Пароль',
        email: 'Email',
        loginButton: 'Вход',
        error: 'Неверное имя пользователя или пароль',
    };
    
    const handleToggle = () => {
        setIsRegister(!isRegister);
    };
    
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
            navigate('/');
            
        } catch (err) {
            setError(text.error);
            setPassword('');
            console.error('Ошибка входа в', err);
        }
    };

    function getCookie(name) {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
        return null;
    }

    const handleRegister = async (e) => {
        e.preventDefault();
        const csrfToken = getCookie('csrftoken');
        await axios.get('http://127.0.0.1:8000/api/register/', { withCredentials: true });
        try {
        const response = await axios.post(
            'http://127.0.0.1:8000/api/register/',
            {
                username,
                email,
                password,
            },
            {
                headers: {
                  'X-CSRFToken': csrfToken,
                  'Content-Type': 'application/json',
                },
                withCredentials: true,
              }
        );

            if(response.status === 201) {
                setIsRegister(!isRegister);
                setError('');
            } else {
                alert('Ошибка регистрации. Попробуйте позже');
            }
        } catch (err) {
            if (err.response) {
                console.log('server response data:', err.response.data);
                setError(JSON.stringify(err.response.data) || 'ошибка');
            }
        }
    };

    if (isRegister == true) {
        return (
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100vh',
              }}>
                <Typography sx={{marginBottom: '1em'}} variant='h4' gutterBottom>{text.titleL}</Typography>
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
                    type='password'
                    onChange={(e) => setPassword(e.target.value)}
                    sx={{ marginBottom: 2, width: '100%', maxWidth: '300px' }}
                />
                <Button onClick={handleLogin} variant='contained' sx={{ width: '300px', padding: '10px 0'}}>{text.loginButton}</Button>
                {error && (
                <Typography variant="body2" color="error" sx={{ marginTop: 2 }}>
                    {error}
                </Typography>
                )}
                <Typography id='alert'></Typography>
                <Button onClick={handleToggle}>
                    Еще нет аккаунта?
                </Button>
            </Box>
        );
    } else {
        return (
            
                <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100vh',
              }}>
                <Typography sx={{marginBottom: '1em'}} variant='h4' gutterBottom>{text.titleR}</Typography>
                <TextField label={text.usernameLabel} value={username} required sx={{ marginBottom: 2, width: '100%', maxWidth: '300px' }} onChange={(e) => setUsername(e.target.value)}/>
                <TextField label={text.email} value={email} required sx={{ marginBottom: 2, width: '100%', maxWidth: '300px' }} onChange={(e) => setEmail(e.target.value)}/>
                <TextField label={text.passwordLabel} value={password} required sx={{ marginBottom: 2, width: '100%', maxWidth: '300px' }} onChange={(e) => setPassword(e.target.value)}/>
                <Button variant="contained" color="primary" type="submit" sx={{ width: '300px', padding: '10px 0'}} onClick={handleRegister}>
                    Зарегистрироваться
                </Button>
                {error && (
                <Typography variant="body2" color="error" sx={{ marginTop: 2 }}>
                    {error}
                </Typography>
                )}
                <Button onClick={handleToggle}>
                    Уже зарегистрированы?
                </Button>
                </Box>
            
        );
    }
}

export default AuthPage;

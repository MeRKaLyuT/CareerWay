// mui components
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
// import { createTheme, ThemeProvider} from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import useMediaQuery from '@mui/system/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AppsIcon from '@mui/icons-material/Apps';
// other
import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/main.css';


// const Theme = createTheme({
//   palette: {
//     primary: {
//       main: '#6a1b9a',
//         contrastText: '#ffffff',
//     },
//     secondary: {
//       main: '#e91e63',
//     }
//   },
//   typography: {
//     button: {
//       fontSize: '1em',
//     },
//   }
// });


function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Используем адаптивность
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // Для мобильных

  return (
    <>
      <AppBar position="static" color='default'>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            CareerWay
          </Typography>
          {isMobile ? (
            // Показываем меню только на мобильных устройствах
            <IconButton
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={() => setDrawerOpen(true)}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            // Показываем кнопки только на больших экранах
            <Box sx={{ display: 'flex', gap: 2}}>
              <Button color="inherit" startIcon={<HomeIcon />}><Link to='/' className='appBar'>Главная</Link></Button>
              <Button color="inherit" startIcon={<AppsIcon />}><Link to='/roadmap' className='appBar'>Роадмапы</Link></Button>
              <Button color="inherit" startIcon={<AccountCircleIcon />}><Link to='/profile' className='appBar'>Профиль</Link></Button>
            </Box>
          )}
        </Toolbar>
      </AppBar>

      {/* Drawer для мобильных устройств */}
      <Drawer anchor="left" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <List>
          <ListItem button>
            <ListItemText><Link to='/' className='appBar'>Главная</Link></ListItemText>
          </ListItem>
          <ListItem button>
            <ListItemText><Link to='/roadmap' className='appBar'>Роадмапы</Link></ListItemText>
          </ListItem>
          <ListItem button>
            <ListItemText><Link to='/profile' className='appBar'>Профиль</Link></ListItemText>
          </ListItem>
        </List>
      </Drawer>
    </>
  );
}

export default Header;
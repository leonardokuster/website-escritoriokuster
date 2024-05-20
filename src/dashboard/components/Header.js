import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import MessageIcon from '@mui/icons-material/Message';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Settings from '@mui/icons-material/Settings';
import HomeIcon from '@mui/icons-material/Home';
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
import Logout from '@mui/icons-material/Logout';
import styles from '../styles/header.module.css';
import Image from 'next/image';
import Link from 'next/link';

export default function Header({ onPageChange }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [currentPage, setCurrentPage] = useState('home');
  const [userType, setUserType] = useState('');
  const [userName, setUserName] = useState('');
  const router = useRouter();

  const handleClick = (event) => {
    setMenuOpen(true);
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setMenuOpen(false);
    setAnchorEl(null);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('nome');
    localStorage.removeItem('tipo');
    router.push('/login');
  };

  useEffect(() => {
    const storedUserName = localStorage.getItem('nome');
    if (storedUserName) {
      setUserName(storedUserName);
    }

    const storedUserType = localStorage.getItem('tipo');
    if (storedUserType) {
      setUserType(storedUserType);
    }
  }, []);

  const primeiraLetra = userName ? userName.charAt(0).toUpperCase() : '';

  const handleSettings = () => {
    onPageChange('settings');
    handleClose();
  };

  const userTypeRoutes = {
    admin: [
      { route: '/home', text: 'Home', icon: <HomeIcon /> },
      { route: '/clients', text: 'Clientes', icon: <PersonSearchIcon /> },
      { route: '/services', text: 'Serviços', icon: <HomeRepairServiceIcon /> },
      { route: '/contact', text: 'Contato', icon: <MessageIcon /> },
    ],
    collaborator: [
      { route: '/home', text: 'Home', icon: <HomeIcon /> },
      { route: '/clients', text: 'Clientes', icon: <PersonSearchIcon /> },
      { route: '/services', text: 'Serviços', icon: <HomeRepairServiceIcon /> },
      { route: '/contact', text: 'Contato', icon: <MessageIcon /> },
    ],
    user: [
      { route: '/home', text: 'Home', icon: <HomeIcon /> },
      { route: '/services', text: 'Serviços', icon: <HomeRepairServiceIcon /> },
      { route: '/contact', text: 'Contato', icon: <MessageIcon /> },
    ],
  };

  const handleMenuItemClick = (route) => {
    onPageChange(route); 
    handleClose();
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: '#070E26', zIndex: menuOpen ? 1100 : 1000 }} className={styles['header']}>
      <Toolbar>
        <Typography component="div" sx={{ flexGrow: 1 }}>
          <Link href="/">
            <Image src="/images/Logo.webp" alt="Logo do escritório" width={136} height={50} priority />
          </Link>
        </Typography>
        <Tooltip title="Conta">
          <IconButton
            size="small"
            edge="end"
            color="inherit"
            aria-label="account-menu"
            aria-controls="account-menu"
            aria-haspopup="true"
            aria-expanded={menuOpen ? 'true' : 'false'}
            onClick={handleClick}
            sx={{ display: { xs: 'block', md: 'none' }, mr: 0 }}
          >
            <Avatar sx={{ width: 48, height: 48, color: '#070E26', backgroundColor: '#d3d6d8' }}>{primeiraLetra}</Avatar>
          </IconButton>
        </Tooltip>
        <Menu
          id="account-menu"
          anchorEl={anchorEl}
          open={menuOpen}
          onClose={handleClose}
          onClick={handleClose}
          anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
          transformOrigin={{ horizontal: 'right', vertical: 'top' }}
          getcontentanchorel={null}
          keepMounted
          PaperProps={{
            elevation: 0,
            sx: {
              overflow: 'visible',
              filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
              mt: 1.5,
              '& .MuiAvatar-root': {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              '&::before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: 'background.paper',
                transform: 'translateY(-50%) rotate(45deg)',
                zIndex: 0,
              },
            },
          }}            
        >
          {userType && userTypeRoutes[userType].map(({ route, text, icon }) => (
            <MenuItem key={route} onClick={() => handleMenuItemClick(route)}>
              <ListItemIcon>{icon}</ListItemIcon>
              {text}
            </MenuItem>
          ))}
          <Divider />
          <MenuItem onClick={handleSettings}>
            <ListItemIcon>
              <Settings fontSize="small" />
            </ListItemIcon>
            Configurações
          </MenuItem>
          <Link href="/" className={styles['botao']}>
            <MenuItem onClick={handleLogout}>
              <ListItemIcon>
                <Logout fontSize="small" />
              </ListItemIcon>
              Sair
            </MenuItem>
          </Link>  
        </Menu>
        {menuOpen && (
          <Box
            className={styles['overlay']} 
            sx={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.5)', zIndex: 1099 }}
            onClick={handleClose} 
          />
        )}
        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
          {userType && userTypeRoutes[userType].map(({ route, text }) => (
            <MenuItem key={route} onClick={() => handleMenuItemClick(route)}>
              {text}
            </MenuItem>
          ))}
          <MenuItem onClick={handleSettings}>
            <ListItemIcon>
              <Settings fontSize="small" />
            </ListItemIcon>
            Configurações
          </MenuItem>
          <Link href="/" className={styles['botao']}>
            <MenuItem onClick={handleLogout}>
              Sair
            </MenuItem>
          </Link>  
        </Box>              
      </Toolbar> 
    </AppBar>
  );
}

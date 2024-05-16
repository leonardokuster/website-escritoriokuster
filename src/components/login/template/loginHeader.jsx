import * as React from 'react';
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import ListItemIcon from '@mui/material/ListItemIcon';
import DescriptionIcon from '@mui/icons-material/Description';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import AnnouncementIcon from '@mui/icons-material/Announcement';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import styles from '../../../styles/dashboard/loginHeader.module.css';
import Image from 'next/image';
import Link from 'next/link';

export default function LoginHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [userType, setUserType] = useState('');
  const [userName, setUserName] = useState('');

  const handleClick = (event) => {
    setMenuOpen(true);
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setMenuOpen(false);
    setAnchorEl(null);
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

  return (
    <React.Fragment>
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
            {userType === 'admin' && (
              <>
                <Link href="" className={styles['link-menu']}>
                  <MenuItem onClick={handleClose}>
                    <ListItemIcon><PersonSearchIcon /></ListItemIcon>
                    Clientes
                  </MenuItem>
                </Link>
                <Link href="" className={styles['link-menu']}>
                  <MenuItem onClick={handleClose}>
                    <ListItemIcon><DescriptionIcon /></ListItemIcon>
                    Documentos
                  </MenuItem>
                </Link>
                <Link href="" className={styles['link-menu']}>
                  <MenuItem onClick={handleClose}>
                    <ListItemIcon><AnnouncementIcon /></ListItemIcon>
                    Solicitações
                  </MenuItem>
                </Link>
              </>
            )}
            {userType === 'collaborator' && (
              <>
                <Link href="" className={styles['link-menu']}>
                  <MenuItem onClick={handleClose}>
                    <ListItemIcon><PersonSearchIcon /></ListItemIcon>
                    Clientes
                  </MenuItem>
                </Link>
                <Link href="" className={styles['link-menu']}>
                  <MenuItem onClick={handleClose}>
                    <ListItemIcon><DescriptionIcon /></ListItemIcon>
                    Documentos
                  </MenuItem>
                </Link>
                <Link href="" className={styles['link-menu']}>
                  <MenuItem onClick={handleClose}>
                    <ListItemIcon><AnnouncementIcon /></ListItemIcon>
                    Solicitações
                  </MenuItem>
                </Link>
              </>
            )}
            {userType === 'user' && (
              <>
                <Link href="" className={styles['link-menu']}>
                  <MenuItem onClick={handleClose}>
                    <ListItemIcon><DescriptionIcon /></ListItemIcon>
                    Documentos
                  </MenuItem>
                </Link>
                <Link href="" className={styles['link-menu']}>
                  <MenuItem onClick={handleClose}>
                    <ListItemIcon><AnnouncementIcon /></ListItemIcon>
                    Solicitações
                  </MenuItem>
                </Link>
              </>
            )}
            <Divider />
            <Link href="" className={styles['link-menu']}>
              <MenuItem onClick={handleClose}>
                <ListItemIcon>
                  <Settings fontSize="small" />
                </ListItemIcon>
                Configurações
              </MenuItem>
            </Link>
            <Link href="" className={styles['link-menu']}>
              <MenuItem onClick={handleClose}>
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
          {userType === 'admin' && (
            <>
              <Link href="/" className={styles['link-menu']}><Button color="inherit">Clientes</Button></Link>
              <Link href="/" className={styles['link-menu']}><Button color="inherit">Documentos</Button></Link>
              <Link href="/" className={styles['link-menu']}><Button color="inherit">Solicitações</Button></Link>
              <Link href="/" className={styles['link-menu']}><Button color="inherit">Clientes</Button></Link>
              <Link href="/" className={styles['link-menu']}><Button color="inherit">Configurações</Button></Link>
              <Link href="/" className={styles['link-menu']}><Button color="inherit">Sair</Button></Link>
            </>
            )}
            {userType === 'collaborator' && (
              <>
                <Link href="/" className={styles['link-menu']}><Button color="inherit">Clientes</Button></Link>
                <Link href="/" className={styles['link-menu']}><Button color="inherit">Documentos</Button></Link>
                <Link href="/" className={styles['link-menu']}><Button color="inherit">Solicitações</Button></Link>
                <Link href="/" className={styles['link-menu']}><Button color="inherit">Clientes</Button></Link>
                <Link href="/" className={styles['link-menu']}><Button color="inherit">Configurações</Button></Link>
                <Link href="/" className={styles['link-menu']}><Button color="inherit">Sair</Button></Link>
              </>
            )}
            {userType === 'user' && (
              <>
                <Link href="/" className={styles['link-menu']}><Button color="inherit">Documentos</Button></Link>
                <Link href="/" className={styles['link-menu']}><Button color="inherit">Solicitações</Button></Link>
                <Link href="/" className={styles['link-menu']}><Button color="inherit">Configurações</Button></Link>
                <Link href="/" className={styles['link-menu']}><Button color="inherit">Sair</Button></Link>
              </>
            )}    
          </Box>              
        </Toolbar> 
      </AppBar>
    </React.Fragment>
  );
}

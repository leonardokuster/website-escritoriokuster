import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Button from '@mui/material/Button';
import Link from 'next/link';
import styles from './header.module.css';
import Image from 'next/image';

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setMenuOpen(true);
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setMenuOpen(false);
        setAnchorEl(null);
    };

    return (
        <div className={styles['header']}>
            <AppBar position="static" sx={{ backgroundColor: '#070E26', zIndex: menuOpen ? 1100 : 1000 }}>
                <Toolbar>
                    <Typography component="div" sx={{ flexGrow: 1 }}>
                        <Link href="/">
                            < Image src="/images/Logo.webp" alt="Logo do escritório" width={136} height={50} priority/>
                        </Link>
                    </Typography>
                    <IconButton
                        size="large"
                        edge="end"
                        color="inherit"
                        aria-label="menu"
                        aria-controls="menu"
                        aria-haspopup="true"
                        aria-expanded={menuOpen ? 'true' : 'false'}
                        onClick={handleClick}
                        sx={{ display: { xs: 'block', md: 'none' }, mr: 0 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Menu
                        id="menu"
                        anchorEl={anchorEl}
                        open={menuOpen}
                        onClose={handleClose}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}
                        getcontentanchorel={null}
                        keepMounted
                        sx={{ marginTop: '10px' }}
                    >
                        <Link href="/" className={styles['link-menu']}>
                            <MenuItem onClick={handleClose} sx={{ borderBottom: '1px solid #070e2636', width: '45vw', justifyContent: 'center', paddingRight: '16px', '&:hover': { backgroundColor: '#070e2636', color: 'black' } }}>Home</MenuItem>
                        </Link>
                        <Link href="/about" className={styles['link-menu']}>
                            <MenuItem onClick={handleClose} sx={{ borderBottom: '1px solid #070e2636', width: '45vw', justifyContent: 'center', paddingRight: '16px', '&:hover': { backgroundColor: '#070e2636', color: 'black' } }}>Sobre nós</MenuItem>
                        </Link>
                        <Link href="/services" className={styles['link-menu']}>
                            <MenuItem onClick={handleClose} sx={{ borderBottom: '1px solid #070e2636', width: '45vw', justifyContent: 'center', paddingRight: '16px', '&:hover': { backgroundColor: '#070e2636', color: 'black' } }}>Soluções</MenuItem>
                        </Link>
                        <Link href="/contact" className={styles['link-menu']}>
                            <MenuItem onClick={handleClose} sx={{ borderBottom: '1px solid #070e2636', width: '45vw', justifyContent: 'center', paddingRight: '16px', '&:hover': { backgroundColor: '#070e2636', color: 'black' } }}>Contato </MenuItem>
                        </Link>
                        <Link href="/budget" className={styles['link-orcamento']}>
                            <MenuItem onClick={handleClose} sx={{ borderBottom: '1px solid #070e2636', width: '45vw', justifyContent: 'center', paddingRight: '16px', '&:hover': { backgroundColor: '#070e2636', color: 'black' } }}>Orçamento</MenuItem>
                        </Link>
                        <Link href="/login" className={styles['link-menu']} style={{ borderLeft: { xs: 'none', md: '1px solid white' } }}>
                            <MenuItem onClick={handleClose} sx={{ width: '45vw',fontWeight: 'bold' , justifyContent: 'center', paddingRight: '16px', '&:hover': { backgroundColor: '#070e2636', color: 'black' } }}>Área do cliente</MenuItem>
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
                        <Link href="/" className={styles['link-menu']}><Button color="inherit">Home</Button></Link>
                        <Link href="/about" className={styles['link-menu']}><Button color="inherit">Sobre nós</Button></Link>
                        <Link href="/services" className={styles['link-menu']}><Button color="inherit">Soluções</Button></Link>
                        <Link href="/contact" className={styles['link-menu']}><Button color="inherit">Contato</Button></Link>
                        <Link href="/budget" className={styles['link-orcamento']}><Button color="inherit">Orçamento</Button></Link>
                        <Link href="/login" className={styles['link-cliente']} style={{ borderLeft: "1px solid white" }}><Button color="inherit">Área do cliente</Button></Link>
                    </Box>
                </Toolbar>
            </AppBar>
        </div>
    );
}
import logoImage from '@src/assets/images/logo/findou8.png';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';

const pages = [
  { title: 'Home', path: '/home' },
  { title: 'Services', path: '/services' },
  { title: 'Portfolio', path: '/portfolio' },
  { title: 'About', path: '/about' },
  { title: 'Contact', path: '/contact' },
];

export const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = React.useState({ left: false });
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setDrawerOpen({ ...drawerOpen, left: open });
  };
  const list = () => (
    <Box
      sx={{
        width: '50vw',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '1rem',
      }}
      role='presentation'
      onClick={toggleDrawer('left', false)}
      onKeyDown={toggleDrawer('left', false)}
    >
      {pages.map((page, index) => {
        return (
          <MenuItem key={index} component={Link} to={page.path}>
            <Typography
              textAlign='center'
              sx={{
                color: 'black',
                fontFamily: 'Poppins',
                fontWeight: 500,
                fontSize: '0.9rem',
              }}
            >
              {page.title}
            </Typography>
          </MenuItem>
        );
      })}
    </Box>
  );
  return (
    <AppBar position='static' sx={{ background: '#fdfdfd', color: '#000' }}>
      <Container maxWidth='xl'>
        <Toolbar disableGutters sx={{}}>
          <Typography
            noWrap
            component={Link}
            to={'/'}
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              textDecoration: 'none',
              justifyContent: 'space-between',
              width: 150,
            }}
          >
            <img src={logoImage} alt='Findou8' />
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <React.Fragment key={'left'}>
              <Button onClick={toggleDrawer('left', true)}>
                <MenuIcon />
              </Button>
              <SwipeableDrawer
                anchor={'left'}
                open={drawerOpen['left']}
                onClose={toggleDrawer('left', false)}
                onOpen={toggleDrawer('left', true)}
              >
                {list('left')}
              </SwipeableDrawer>
            </React.Fragment>
          </Box>
          <Typography
            variant='h2'
            noWrap
            component={Link}
            to={'/'}
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              textDecoration: 'none',
              width: 130,
            }}
          >
            <img src={logoImage} alt='Logo' />
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'none', md: 'flex', justifyContent: 'flex-end' },
            }}
          >
            {pages.map((page, index) => (
              <Button
                key={index}
                sx={{
                  my: 2,
                  color: '#000',
                  display: 'block',
                  fontFamily: 'Poppins',
                  fontWeight: 500,
                  fontSize: '0.9rem',
                }}
                component={Link}
                to={page.path}
              >
                {page.title}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

// import { Link } from 'react-router-dom'
// import { styled } from '@mui/material'
// import { List } from '@mui/material'
// import { NavbarLinks } from '@src/layout/clients/components/NavbarLinks'
// import { NavToggler } from '@src/layout/clients/components/NavToggler'

// const NavLinks = styled(Link)(() => ({
//     textDecoration: 'none',
// }));

// export const Navbar = () => {
//   return (
//     <div className='main-navbar'>
//       <div className="nav-logo">
//         <NavLinks to='/'>
//           <img src={logoImage} alt="Logo" className='logo'/>
//         </NavLinks>
//       </div>
//       <div className='navbar-links'>
//         <List component='nav'>{NavbarLinks}</List>
//       </div>
//       <div className="nav-toggler">
//         <NavToggler/>
//       </div>
//     </div>
//   )
// }

import logoImage from '@src/assets/images/logo/findou8.png';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';

const pages = [
  { title: 'Home', path: '/home' },
  { title: 'Services', path: '/services' },
  { title: 'Portfolio', path: '/portfolio' },
  { title: 'About', path: '/about' },
  { title: 'Contact', path: '/contact' },
];

export const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position='static' className='navbar'>
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
            }}
          >
            <img src={logoImage} alt='Logo' className='logo' />
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size='large'
              aria-label='account of current user'
              aria-controls='menu-appbar'
              aria-haspopup='true'
              onClick={handleOpenNavMenu}
              color='inherit'
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id='menu-appbar'
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page, index) => {
                return (
                  <MenuItem key={index} component={Link} to={page.path}>
                    <Typography textAlign='center' color='black'>
                      {page.title}
                    </Typography>
                  </MenuItem>
                );
              })}
            </Menu>
          </Box>
          <Typography
            variant='h2'
            noWrap
            component={Link}
            to={'/'}
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              textDecoration: 'none',
            }}
          >
            <img src={logoImage} alt='Logo' className='logo' />
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
                sx={{ my: 2, color: 'white', display: 'block' }}
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

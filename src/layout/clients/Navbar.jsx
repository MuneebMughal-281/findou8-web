import logoImage from '@src/assets/images/logo/findou8.png'
import { Link } from 'react-router-dom'
import { styled } from '@mui/material'
import { List } from '@mui/material'
import { NavbarLinks } from '@src/layout/clients/components/NavbarLinks'
import { Menu } from '@mui/icons-material/'
import { NavToggler } from '@src/layout/clients/components/NavToggler'

const NavLinks = styled(Link)(() => ({
    textDecoration: 'none',
}));

export const Navbar = () => {
  return (
    <div className='main-navbar'>
      <div className="nav-logo">
      <NavLinks to='/'>
          <img src={logoImage} alt="Logo" />
        </NavLinks>
      </div>
      <div className='navbar-links'>
        <List component='nav'>{NavbarLinks}</List>
      </div>
      <div className="nav-toggler">
        <NavToggler/>
        <Menu className='toggler-icon'/>
      </div>
    </div>
  )
}


import { Link } from 'react-router-dom';
import { styled } from '@mui/material';

const NavLinks = styled(Link)(() => ({
    textDecoration: 'none',
}));
export const NavbarLinks = (
    <div className='navbar-links'>
        <NavLinks to='/'>
            <p>Home</p>
        </NavLinks>
        <NavLinks to='/services'>
            <p>Services</p>
        </NavLinks>
        <NavLinks to='/portfolio'>
            <p>Portfolio</p>
        </NavLinks>
        <NavLinks to='/about'>
            <p>About Us</p>
        </NavLinks>
        <NavLinks to='/contact'>
            <p>Contact</p>
        </NavLinks>
    </div>
);
import { Facebook, Instagram, LinkedIn } from '@mui/icons-material'
import { Link } from 'react-router-dom';
import { styled } from '@mui/material';

const NavLinks = styled(Link)(() => ({
    textDecoration: 'none',
}));
export const TopBar = () => {
    return (
        <div className="topbar">
            <div className="social">
                <a href='#' target='_blank'>
                    <Facebook className='fb'/>
                </a>
                <a href='#' target='_blank'>
                    <Instagram className='fb'/>
                </a>
                <a href='#' target='_blank'>
                    <LinkedIn className='fb'/>
                </a>
            </div>
            <div className="topbar-btn">
            <NavLinks to='/testimonials'>
                <p>testimonials</p>
            </NavLinks>
            <NavLinks to='/careers'>
                <p>Careers</p>
            </NavLinks>
            </div>
        </div>
    );
}
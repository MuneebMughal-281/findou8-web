import { Facebook, Instagram, LinkedIn } from '@mui/icons-material'
// import InstagramIcon from '@mui/icons-material/Instagram';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material';

const NavLinks = styled(Link)(() => ({
    textDecoration: 'none',
}));
export const TopBar = () => {
    return (
        <div className="topbar">
            <div className="social">
                <Facebook className='fb'/>
                <Instagram className='ig'/>
                <LinkedIn className='li'/>
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
import { Facebook, Instagram, LinkedIn } from '@mui/icons-material'
import logoImage from '@src/assets/images/logo/findou8.png'
import { Link } from 'react-router-dom'
import { styled } from '@mui/material'

const NavLinks = styled(Link)(() => ({
    textDecoration: 'none',
}));

export const WebFooter = () => {
    return (
        <div className="footer">
            <div className="main-footer">
                <div className="footer-item overview">
                    <h2 className='title'>company overview</h2>
                    <p>Founded in 1993, Nextbridge provides cutting-edge digital solutions to help startups, small, medium, and large companies transform their operations.</p>
                </div>
                <div className="footer-item partner">
                    <h2 className='title'>services partner</h2>
                    <a  href='#' target='_blank'>Abendsoft Institute</a>
                </div>
                <div className="footer-item usefull-links">
                    <h2 className='title'>usefull links</h2>
                    <NavLinks to='/company'>company</NavLinks>
                    <NavLinks to='/team'>meet the team</NavLinks>
                    <NavLinks to='/inustries'>industries</NavLinks>
                    <NavLinks to='/technologies'>technologies</NavLinks>
                    <NavLinks to='/careers'>careers</NavLinks>
                </div>
                <div className="footer-item address">
                    <NavLinks to='/'>
                        <img src={logoImage} alt="Logo" />
                    </NavLinks>
                    <h3>427/428 G-IV Block, M.A. Johar Town, Lahore</h3>
                    <h3>
                        For Business Inquiries:<br/>
                        <NavLinks to='mailto:sales@findou8.com'>sales@findou8.com</NavLinks>
                    </h3>
                    <h3>
                        For Job Applications:<br/>
                        <NavLinks to='mailto:careers@findou8.com'>careers@findou8.com</NavLinks>
                    </h3>
                </div>
            </div>
            <div className="footer-copyrights">
                <div className="footer-copyrights-item copyrights">
                    <p>Copyright © 2022, Findou8. All Rights Reserved.</p>
                </div>
                <div className="footer-copyrights-item privacy">
                    <NavLinks to='/privacypolicy'>privacy policy</NavLinks>
                    <NavLinks to='/imspolicy'>IMS Policy</NavLinks>
                </div>
                <div className="footer-copyrights-item social">
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
            </div>
        </div>
    );
}
/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'
import { styled } from '@mui/material'

const NavLinks = styled(Link)(() => ({
    textDecoration: 'none',
}));

export const Header = (props) => {
    return (
        <div className="container-fluid header">
                <img src={props.background} alt="" />
            <div className="overlay"></div>
            <div className="content">
                <h2>{props.title}</h2>
                <p>{props.discription}</p>
                <NavLinks to={props.path}>{props.button}</NavLinks>
            </div>
        </div>
    );
}
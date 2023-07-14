import React from 'react';
import { List, SwipeableDrawer, Button, Box } from '@mui/material'
import { NavbarLinks } from '@src/layout/clients/components/NavbarLinks'

export const NavToggler = () => {
    const [state, setState] = React.useState({
        right: false,
    });
    
    const toggleDrawer = (anchor, open) => (event) => {
        if (
            event &&
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return;
        }
        setState({ ...state, [anchor]: open });
    };
    
    const list = (anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
        <List>
            <div className='mobile-navbar-links'>
                <List component='nav'>{NavbarLinks}</List>
            </div>
        </List>
        </Box>
    );
    
    return (
        <div>
            {['right'].map((anchor) => (
            <React.Fragment key={anchor}>
                <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
                <SwipeableDrawer
                    anchor={anchor}
                    open={state[anchor]}
                    onClose={toggleDrawer(anchor, false)}
                    onOpen={toggleDrawer(anchor, true)}
                >
                    {list(anchor)}
                </SwipeableDrawer>
            </React.Fragment>
            ))}
        </div>
    );
}
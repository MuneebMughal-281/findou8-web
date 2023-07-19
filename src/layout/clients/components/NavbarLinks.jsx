import { Link } from 'react-router-dom';
import { List, ListItemButton, ListItemText, styled } from '@mui/material';

const ListItemButtonWrap =
  styled(ListItemButton) <
  {} >
  (({ theme }) => ({
    '& .MuiListItemText-primary': {
      color: theme.palette.grey[100],
      fontWeight: 500,
    },
    '&:hover': {
      backgroundColor: theme.palette.common.white,
      color: theme.palette.common.black,
      '& .MuiListItemIcon-root, .MuiListItemText-primary': {
        color: theme.palette.common.black,
      },
    },
  }));

export const NavbarLinks = () => {
  return (
    <List component='nav'>
      <ListItemButtonWrap component={Link} to='/'>
        <ListItemText primary='Home' />
      </ListItemButtonWrap>
      <ListItemButtonWrap component={Link} to='/services'>
        <ListItemText primary='Services' />
      </ListItemButtonWrap>
      <ListItemButtonWrap component={Link} to='/portfolio'>
        <ListItemText primary='Portfolio' />
      </ListItemButtonWrap>
      <ListItemButtonWrap component={Link} to='/about'>
        <ListItemText primary='About' />
      </ListItemButtonWrap>
      <ListItemButtonWrap component={Link} to='/contact'>
        <ListItemText primary='Contact' />
      </ListItemButtonWrap>
    </List>
  );
};

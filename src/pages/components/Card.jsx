import { experimentalStyled as styled } from '@mui/material/styles';
import { Box, Paper, Grid } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export const Card = () => {
  return (
    <Box sx={{ flexGrow: 1, my: 5, px: 4 }}>
      <Grid
        container
        spacing={{ xs: '0.6rem', md: 1 }}
        columns={{ xs: 3, sm: 6, md: 12 }}
      >
        <Grid item xs={3} sm={3} md={3}>
          <Item sx={{ fontFamily: 'Poppins' }}>xs=2</Item>
        </Grid>
        <Grid item xs={3} sm={3} md={3}>
          <Item sx={{ fontFamily: 'Poppins' }}>xs=2</Item>
        </Grid>
        <Grid item xs={3} sm={3} md={3}>
          <Item sx={{ fontFamily: 'Poppins' }}>xs=2</Item>
        </Grid>
        <Grid item xs={3} sm={3} md={3}>
          <Item sx={{ fontFamily: 'Poppins' }}>xs=2</Item>
        </Grid>
      </Grid>
    </Box>
  );
};

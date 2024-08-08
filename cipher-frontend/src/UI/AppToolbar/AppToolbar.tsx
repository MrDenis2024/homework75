import {AppBar, styled, Toolbar, Typography} from '@mui/material';
import {Link} from 'react-router-dom';

const StyleLink = styled(Link)({
  color: 'inherit',
  textDecoration: 'none',
  '&:hover': {
    color: 'inherit',
  }
});

const AppToolbar = () => {
  return (
    <AppBar position="sticky" sx={{mb: 2}}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
          <StyleLink to='/'>Cipher</StyleLink>
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default AppToolbar;
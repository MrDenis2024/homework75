import {Box, Typography} from '@mui/material';

const AppFooter = () => (
  <Box
    component="footer"
    sx={{
      width: '100%',
      color: 'primary',
      py: 2,
      textAlign: 'center',
      borderTop: '1px solid #e0e0e0',
      mt: 'auto',
      backgroundColor: 'primary.main'
    }}
  >
    <Typography variant="body2">Made by Denis Khrunev student Attractor school 2024</Typography>
  </Box>
);

export default AppFooter;
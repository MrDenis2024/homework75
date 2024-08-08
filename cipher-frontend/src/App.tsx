import {Container, Typography} from '@mui/material';
import {Route, Routes} from 'react-router-dom';
import AppToolbar from './UI/AppToolbar/AppToolbar';
import AppFooter from './UI/AppFooter/AppFooter';
import Cipher from './features/ciphers/Cipher';

const App = () => (
  <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
    <header>
      <AppToolbar />
    </header>
    <Container maxWidth='xl' component='main'>
      <Routes>
        <Route path='/' element={<Cipher />} />
        <Route path='*' element={<Typography variant='h1'>Not found</Typography>} />
      </Routes>
    </Container>
    <AppFooter />
  </div>
);

export default App;

import {Container, Typography} from '@mui/material';
import {Route, Routes} from 'react-router-dom';

const App = () => (
  <>
    <header>

    </header>
    <Container maxWidth='xl' component='main'>
      <Routes>
        <Route path='*' element={<Typography variant='h1'>Not found</Typography>} />
      </Routes>
    </Container>
  </>
);

export default App;

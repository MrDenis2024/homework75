import ReactDOM from 'react-dom/client';
import App from './App';
import {store} from './app/store';
import {Provider} from 'react-redux';
import theme from './theme';
import {CssBaseline, ThemeProvider} from '@mui/material';
import {BrowserRouter} from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </Provider>,
);

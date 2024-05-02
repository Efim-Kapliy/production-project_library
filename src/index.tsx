import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import ThemeProvider from './theme/ThemeProvider';

render(
  <div>
    <BrowserRouter>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </div>,
  document.getElementById('root')
);

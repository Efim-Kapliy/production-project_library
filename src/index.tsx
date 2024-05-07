import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './app/App';
import { ThemeProvider } from 'app/providers/ThemeProvider';
import 'shared/config/i18n/i18n';

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

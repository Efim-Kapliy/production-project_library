import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './App';

render(
  <div>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </div>,
  document.getElementById('root')
);

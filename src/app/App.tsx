import { Link } from 'react-router-dom';

import { useTheme } from 'app/providers/ThemeProvider';
import { AppRouter } from 'app/providers/router';

import './styles/index.scss';
import { classNames } from 'shared/lib/classNames/classNames';

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>TOGGLE</button>
      <Link to='/'>Главная</Link>
      <Link to='/about'>О сайте</Link>
      <AppRouter />
    </div>
  );
};

export default App;

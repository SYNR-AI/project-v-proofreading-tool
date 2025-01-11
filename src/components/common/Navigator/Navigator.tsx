import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { useLocation } from 'react-router-dom';

const Navigator = () => {
  const location = useLocation();
  return (
    <div>
      <Link to="/" className={classNames('px-4', { 'text-blue-500 font-bold': location.pathname === '/' })}>Home</Link>
      <Link to="/about" className={classNames('px-4', { 'text-blue-500 font-bold': location.pathname === '/about' })}>About</Link>
      <Link to="/dashboard" className={classNames('px-4', { 'text-blue-500 font-bold': location.pathname === '/dashboard' })}>Dashboard</Link>
    </div>
  );
};

export default Navigator;
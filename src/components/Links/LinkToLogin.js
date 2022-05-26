import './Link.css';
import { Link } from 'react-router-dom';

const LinkToLogin = () => {
  return (
    <nav className='navLink'>
      <Link to='/' className='link'><u><strong>Faça login aqui</strong></u></Link>
    </nav>
  );
};

export default LinkToLogin;
import './Link.css';
import { Link } from 'react-router-dom';

const LinkToRegister = () => {
  return (
    <nav className='navLink'>

      <Link
        to='register'
        className='link'
      >
        <u>
          <strong>
            Cadastra-se aqui
          </strong>
        </u>
      </Link>

    </nav>
  );
};

export default LinkToRegister;
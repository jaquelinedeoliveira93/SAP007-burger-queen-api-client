import { Link } from "react-router-dom";
import './Navbar.css';

function NavBar() {
  return (
    <nav className='navegationBar'>
      <Link to='/hall' className='linkNavbar'>Salão</Link>
      <Link to='/kitchen' className='linkNavbar'>Cozinha</Link>
      <Link to='/readyOrders' className='linkNavbar'>Pedidos prontos</Link>
      <Link to='/' className='linkNavbar'>Sair</Link>
    </nav>
  );
};

export default NavBar;
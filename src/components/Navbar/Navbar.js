import { NavLink } from "react-router-dom";
import './Navbar.css';

function NavBar() {
  return (
    <nav className='navegationBar'>
      <span className='brand'>Burger Queen</span>
      <ul className='linksUl'>
        <li className='linkLi'>
          <NavLink to='/hall' className='linkNavbar'>
            Salão
          </NavLink>
        </li>
        <li className='linkLi'>
          <NavLink to='/kitchen' className='linkNavbar'>
            Cozinha
          </NavLink>
        </li>
        <li className='linkLi'>
          <NavLink to='/readyOrders' className='linkNavbar'>
            Pedidos prontos
          </NavLink>
        </li>
        <li className='linkLi'>
          <NavLink to='/' className='linkNavbar'>
            Sair
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;



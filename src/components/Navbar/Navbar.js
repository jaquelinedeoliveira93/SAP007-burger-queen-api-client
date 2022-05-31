import { NavLink, useNavigate } from "react-router-dom";
import { logout } from "../../services/localStorege";
import './Navbar.css';

function NavBar() {
  const navigate = useNavigate();

  return (
    <nav className='navegationBar'>
      <span className='brand'>Soberano Burger</span>
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
          <button className='buttonLogout' onClick={() => {logout(); navigate('/')}}>
            Sair
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;

import './ButtonsMenu.css';

function ButtonsMenu() {
  return (
    <nav className='navegationMenu'>

    <ul className='menuUl'>

      <li className='menuLi'>
        <button className='buttonMenu'>
          CAFÉ DA MANHÃ
        </button>
      </li>

      <li className='menuLi'>
        <button className='buttonMenu'>
          HAMBÚRGUERES
        </button>
      </li>

      <li className='menuLi'>
        <button className='buttonMenu'>
          ACOMPANHAMENTOS
        </button>
      </li>

      <li className='menuLi'>
        <button className='buttonMenu'>
          BEBIBAS
        </button>
      </li>

      <li className='menuLi'>
        <button className='buttonMenu'>
          ADICIONAIS
        </button>
      </li>

    </ul>
    
  </nav>
  );
};

export default ButtonsMenu;
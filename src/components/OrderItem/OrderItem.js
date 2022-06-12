import './OrderItem.css';
import Button from "../Button/Button";
import plus from '../../img/plus.png';

function OrderItem({ name, price, quantity, onclick, onClick }) {
  return (
    <ul>
      <li className='listOrderItem'>
        <p>{quantity}</p>
      </li>
      <li className='listOrderItem'>
        <p>{name}</p>
      </li>
      <li className='listOrderItem'>
        <Button className='buttonRemoveAndAdd' onClick={onclick}>
          <img className='plusIcon' src={plus} alt='icone com sinal de mais' />
        </Button>
      </li>
      <li className='listOrderItem'>
        <p>R$ {price}</p>
      </li>
      <li className='listOrderItem'>
        <Button className='buttonRemoveAndAdd' onClick={onClick} operator='-' />
      </li>
    </ul>
  );
};

export default OrderItem
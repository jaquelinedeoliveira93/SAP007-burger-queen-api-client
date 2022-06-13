import './OrderItem.css';
import plus from '../../img/plus.png';
import minus from '../../img/minus.png';

/*function OrderItem({ name, price, qtd, onclick, onClick }) {
  return (
    <ul>
      <li className='listOrderItem'>
        <p>{name}</p>
      </li>
      <li className='listOrderItem'>
        <p>R$ {price}</p>
      </li>
      <li className='listOrderItem'>
        <Button className='buttonRemoveAndAdd' onClick={onclick}>
          <img className='plusIcon' src={plus} alt='icone com sinal de mais' />
        </Button>
      </li>
      <li className='listOrderItem'>
        <p>{qtd}</p>
      </li>
      <li className='listOrderItem'>
        <Button className='buttonRemoveAndAdd' onClick={onClick} operator='-' />
      </li>
    </ul>
  );
};*/

function OrderItem({ name, price, qtd, onclick, onClick }) {
  return (
    <section>
      <article>
        <p className='orderDetails'>{name}</p>
        <p className='orderDetails'>R$ {price}</p>
        <div className='counter'>
          <input type='image' src={plus} alt='icone com sinal de mais' className='buttonRemoveAndAdd' onClick={onclick} />
          <p className='inputCounter'>{qtd}</p>
          <input type='image' src={minus} alt='icone com sinal de menos' className='buttonRemoveAndAdd' onClick={onClick} operator='-' />
        </div>
      </article>
    </section>
  );
};

export default OrderItem
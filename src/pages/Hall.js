import './index.css';
import './Hall.css';

// import components
import Navbar from '../components/Navbar/Navbar';
import Button from '../components/Button/Button';
import ButtonsMenu from '../components/Button/ButtonsMenu';
import Input from '../components/Form/Input';

function Hall() {
  return (
    <div>
      <Navbar />
      <ButtonsMenu />
      <section className='orderPad'>
        <div className='backgroundTitleOrders'>
          <p className='titleOrders'>PEDIDOS</p>
        </div>
        <div className='clientAndTable'>
          <Input
            className='inputCliente'
            type='text'
            label='Nome:'
            name='name'
          />

          <Input
            className='inputTable'
            type='number'
            label='Mesa:'
            name='table'
          />
        </div>
        <div className='totalAndButton'>
          <p className='valueOrder'>TOTAL:</p>

          <Button
            className='confirmButton'
            text='CONFIRMAR'
          />
        </div>
      </section >
    </div >
  );
}

export default Hall;

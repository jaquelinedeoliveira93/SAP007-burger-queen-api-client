import { useEffect, useState } from 'react';
import { getProducts, dataFilter } from '../services/API';

import './index.css';
import './Hall.css';

// import components
import Navbar from '../components/Navbar/Navbar';
import Button from '../components/Button/Button';
import Input from '../components/Form/Input';
import { Card } from '../components/Card/Card';
import Message from '../components/Message/Message';

function Hall() {
  const [products, setProducts] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const handleFilter = (option) => {
    getProducts()
      .then((response) => {
        switch (response.status) {
          case 200:
            return response.json();
          case 400:
            setErrorMessage('Preencha todos os campos');
            break;
          default:
            setErrorMessage('Algo deu errado, tente novamente')
        }
      })
      .then((data) => {
        setProducts(dataFilter(data, option))
      })
      .catch((error) => {
      });
  };

  const handleMenu = (e) => {
    handleFilter(e.target.value);
  };

  useEffect(() => {
    handleFilter("breakfast");
  }, []);

  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main>
        <section className='menu'>
          <button onClick={handleMenu} value='breakfast' className='buttonMenu'>
            CAFÉ DA MANHÃ
          </button>
          <button onClick={handleMenu} value='hamburguer' className='buttonMenu'>
            HAMBÚRGUERES
          </button>
          <button onClick={handleMenu} value='side' className='buttonMenu'>
            ACOMPANHAMENTOS
          </button>
          <button onClick={handleMenu} value='drinks' className='buttonMenu'>
            BEBIBAS
          </button>
          <button onClick={handleMenu} value='complement' className='buttonMenu'>
            ADICIONAIS
          </button>
        </section>

        <section className='show-menu'>
          <article className='card-products-container'>
            <ul className='card-products'>
              {products.map((product) => {
                return (
                  <li
                    className='cardContainer'
                    key={`products-${product.id}`}
                  >
                    <Card
                      name={product.name}
                      image={product.image}
                      price={product.price}
                      flavor={product.flavor}
                    />
                  </li>
                );
              })}
            </ul>
          </article>
        </section>

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

          <Message
            disable={errorMessage ? false : true}
            message={errorMessage}
          />

        </section >
      </main>
    </div >
  );
}

export default Hall;

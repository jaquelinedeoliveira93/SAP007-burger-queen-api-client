import { useEffect, useState } from 'react';
import {
  getProducts,
  dataFilter,
  sendOrder
} from '../services/API';

import './index.css';
import './Hall.css';

// import components
import Navbar from '../components/Navbar/Navbar';
import Button from '../components/Button/Button';
import Input from '../components/Form/Input';
import { Card } from '../components/Card/Card';
import Message from '../components/Message/Message';
import OrderItem from '../components/OrderItem/OrderItem';

function Hall() {
  const [products, setProducts] = useState([]);
  const [order, setOrder] = useState([]);
  const [table, setTable] = useState("");
  const [client, setClient] = useState("");
  const [total, setTotal] = useState(0);
  const [errorMessage, setErrorMessage] = useState('');

  const handleFilter = (option) => {
    getProducts()
      .then((response) => {
        switch (response.status) {
          case 200:
            return response.json();
          case 401:
            setErrorMessage('Usuário não autenticado');
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

  const handleAddProductOnCommand = (product) => {
    let newOrder = [...order];

    const productOnCommand = newOrder.find((item) => item.id === product.id);

    if (productOnCommand) {
      productOnCommand.qtd += 1;
    } else {
      const newProduct = {
        id: product.id,
        name: product.name,
        price: product.price,
        qtd: 1,
      };
      newOrder.push(newProduct);
    }
    setOrder(newOrder);
  };

  const handleRemoveProductOnCommand = (product) => {
    let newOrder = [...order];

    const productOnCommand = newOrder.find((item) => item.id === product.id);

    if (productOnCommand.qtd > 1) {
      productOnCommand.qtd -= 1;
    } else {
      newOrder = newOrder.filter((item) => item.id !== product.id);
    }
    setOrder(newOrder);
  };

  const handleSendOrder = (e) => {
    sendOrder(client, table, order)
      .then((response) => {
        switch (response.status) {
          case 200:
            return response.json();
          case 401:
            setErrorMessage('Usuário não autenticado');
            break;
          default:
            setErrorMessage('Algo deu errado, tente novamente')
        }
      })
      .then(() => {
        setOrder([]);
        setTable("");
        setClient("");
      });
  };

  useEffect(() => {
    handleFilter("breakfast");
  }, []);

  useEffect(() => {
    const sum = order.reduce((previousValue, product) => {
      return previousValue + product.qtd * product.price;
    }, 0);
    setTotal(sum);
  }, [order]);

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
          <article className='productsContainer'>
            <ul className='cardProduct'>
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
                      onClick={() => handleAddProductOnCommand(product)}
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
          <section className='clientAndTable'>
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
          </section>
          <section className='containerOrderItem'>
            <ul className='ulOrderItem'>
              {order.map((product) => {
                return (
                  <li
                    className='liOrderItem'
                    key={`products-order-${product.id}`}
                  >
                    <OrderItem
                    quantity={product.quantity}
                    name={product.name}
                    price={product.price * product.quantity}
                    onclick={() => handleAddProductOnCommand(product)}
                    onClick={() => handleRemoveProductOnCommand(product)}
                    />
                  </li>
                );
              })}
            </ul>
          </section>
          <section className='totalAndButton'>
            <p className='valueOrder'>TOTAL: R${total}</p>
            <Button
              className='confirmButton'
              text='CONFIRMAR'
              onClick={handleSendOrder}
            />
          </section>

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

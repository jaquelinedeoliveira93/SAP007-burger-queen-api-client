// import hooks
import { useState, useEffect } from 'react';

// import functions API
import { getOrders, updateOrderStatus, orderDate, orderReadyFilter} from '../../services/API';

// import components
import Navbar from '../../components/Navbar/Navbar';
import ReadyOrderCard from '../../components/ReadyOrderCard/ReadyOrderCard';

// import styles
import './ReadyOrders.css';
import '../index.css';

function ReadyOrders() {
  const [readyOrders, setReadyOrders] = useState([]);

  const sortOrdersReady = () => {
    getOrders()
    .then((response) => response.json())
    .then((data) => {
      const filterOrders = orderReadyFilter(data, 'done');
      const sortOrder = filterOrders.sort((a, b) => b.id - a.id);
      setReadyOrders(sortOrder)
    });
  };

const handleupdateOrderStatus = (item) => {
    updateOrderStatus(item.id, 'served').then((response) => {
      let newOrderReady = readyOrders;
      if (response.status === 200) {
        newOrderReady = readyOrders.filter((element) => element.id !== item.id);
      }
      setReadyOrders(newOrderReady);
    });
  };

  useEffect(() => {
    sortOrdersReady();
  }, []);

  return (
    <section>
      <header>
        <Navbar />
        <h1 className='titleOrder'>PEDIDOS PRONTOS PARA SERVIR</h1>
      </header>
      <main>
        <section className='OrderReadyList'>
          <ul className='readyCards'>
            {readyOrders.map((item) => {
              return (
                <li className='listcard' key={`item-${item.id}`}>
                  <ReadyOrderCard 
                  id={item.id}
                  clientName={item.client_name}
                  table={item.table}
                  status={item.status}
                  createdAt={orderDate(item.createdAt)}
                  updatedAt={orderDate(item.updatedAt)}
                  products={item.Products}
                  onClick={() => handleupdateOrderStatus(item)}
                  />
                </li>
              )
            })}
          </ul>
        </section>
      </main>
    </section>
  );
};

export default ReadyOrders
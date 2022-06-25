// import hooks
import { useState, useEffect } from 'react';

// import functions API
import {
  getOrders,
  orderFilter,
  orderDate,
  orderPreparationTime,
  updateOrderStatus
} from '../../services/API';

// import components
import Navbar from '../../components/Navbar/Navbar';
import OrderCard from '../../components/OrderCard/OrderCard';

//import styles
import './Kitchen.css';
import '../index.css';

function Kitchen() {
  const [order, setOrder] = useState([]);

    function Order() {
      getOrders()
        .then((response) => response.json())
        .then((data) => {
          const orderDone = orderFilter(data, 'done');
          const serveOrder = orderFilter(orderDone, 'serve');
  
          setOrder(serveOrder);
        });
    };
  
  useEffect(() => {
    Order();
  }, []);

  useEffect(() => {
    console.log(order);
  }, [order]);

  const handleUpdateOrderStatus = (item, e) => {
    updateOrderStatus(item.id, e.target.value)
      .then((response) => {
        if (response.status === 200) {
          const resultResponse = order.map((element) => {
            if (element.id === item.id) {
              element.status = e.target.value;
            }
            return element;
          });
          setOrder(resultResponse);
        }
      });
  };

  return (
    <section>
      <header>
        <Navbar />
        <h1 className='TitleKitchen'>PEDIDOS EM PREPARO</h1>
      </header>
      <main>
        <section className='kitchenOrderList'>
          <ul className='kitchenCards'>
            {order.map((item) => {
              return (
                <li key={`ìtem-${item.id}`}>
                  <OrderCard
                    id={item.id}
                    clientName={item.client_name}
                    table={item.table}
                    status={item.status}
                    createdAt={orderDate(item.createdAt)}
                    updatedAt={orderDate(item.updatedAt)}
                    orderPreparationTime={orderPreparationTime(
                      item.createdAt,
                      item.processedAt
                    )}
                    products={item.Products}
                    onClick={(e) => handleUpdateOrderStatus(item, e)}
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

export default Kitchen
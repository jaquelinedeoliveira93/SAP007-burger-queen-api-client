import Button from '../Button/Button';
import './OrderCard.css';

function CardOrder({ id, clientName, table, status, orderPreparationTime, products, onClick }) {
  return (
    <article className='cardKitchen'>
      <p className='textStyle'>Cliente: {clientName} Mesa: {table}</p>
      <p className='textStyle'>Pedido: {id}</p>
      {
        orderPreparationTime >= '0' ? (
          <p className='textStyle'>Tempo de preparo: {orderPreparationTime}</p>
        ) : (
          ''
        )
      }
      {products.map((orderItem) => {
        return (
            <div key={`orderItem-${orderItem.id}`}>
              <p className='textStyle'>{orderItem.name} Qtd: {orderItem.qtd}</p>
              {orderItem.flavor !== null ? (
                <p className='flavor textStyle'>Sabor: {orderItem.flavor}</p>
              ) : (
                ''
              )}
              {orderItem.complement !== null ? (
                <p className='flavor textStyle'>Adicional: {orderItem.complement}</p>
              ) : (
                ''
              )}
            </div>
        );
      })}
      <section className='buttonsKitchen'>
        {status === 'pending' ? (
          <Button
            className='buttonStart'
            text='PREPARAR'
            value='preparing'
            onClick={onClick}
          />
        ) : (
          status === 'preparing' && (
            <Button
              className='buttonEnd'
              text='PRONTO'
              value='done'
              onClick={onClick}
            />
          )
        )}
      </section>
    </article>
  );
};

export default CardOrder;


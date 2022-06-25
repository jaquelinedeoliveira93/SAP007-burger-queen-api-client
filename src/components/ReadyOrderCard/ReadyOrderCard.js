import Button from '../Button/Button';
import './ReadyOrderCard.css';

function ReadyOrderCard({ id, clientName, table, status, createdAt, products, onClick }) {
  return (
    <article className='cardReadyOrder'>
      <p className='textStyle'>Nome: {clientName} Mesa: {table}</p>
      <p className='textStyle'>Pedido: {id} Status: {status}</p>
      <p className='textStyle'>Criado: {createdAt}</p>
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
                <p className='textStyle'>Adicional: {orderItem.complement}</p>
              ) : (
                ''
              )}
            </div>
        );
      })}
      <Button
      className='serveButton'
      value='done'
      text='SERVIR'
      onClick={onClick}
      />

    </article>
  )
}

export default ReadyOrderCard
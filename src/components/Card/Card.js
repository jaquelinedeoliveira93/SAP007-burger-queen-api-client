import './Card.css';

export const Card = ({ name, price, flavor, complement, image, onClick }) => {
  return (
    <section className='cards'>
      <article className="card">
        <img className='img' src={image} alt='ItemCard' />
        <p className='detailProduct'>{name}</p>
        {flavor != null ? (
          <p className='detailProduct'>Sabor: {flavor}</p>
        ) : (
          ''
        )}
        <p className='detailProduct'>Preço: R${price}</p>
        <p className='detailProduct'>{complement}</p>
        <button className='buttonAddProduct' onClick={onClick}>
          Adicionar
        </button>
      </article>
    </section>
  );
};


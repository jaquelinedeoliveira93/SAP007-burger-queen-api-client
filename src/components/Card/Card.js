import './Card.css';

function Card({ name, price, flavor, complement, image, onClick }) {
  return (
      <article className='card'>
        <img className='img' src={image} alt='Imagem do produto' />
        <p className='detailProduct'>{name}</p>
        {flavor != null ? (
          <p className='detailProduct'>Sabor: {flavor}</p>
        ) : (
          ''
        )}
        {complement != null ? (
          <p className='detailProduct'> Adicional: {complement}</p>
        ) : (
          ""
        )}
        <p className='detailProduct'>Preço: R${price}</p>
        <button className='buttonAddProduct' onClick={onClick}>
          Adicionar
        </button>
      </article>
  );
};

export default Card
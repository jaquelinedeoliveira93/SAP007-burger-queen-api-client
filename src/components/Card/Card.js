import './Card.css';

export const Card = ({ name, price, flavor, complement, image, onClick }) => {
  return (
      <ul className="card">
        <li className="img-card listCard">
          <img className="img" src={image} alt="ItemCard " />
        </li>
        <li className="name-card listCard">
          <p className="info-products">{name}</p>
        </li>
        {flavor != null ? (
          <li className="flavor-card listCard">
            <p className="info-products">Sabor:{flavor}</p>
          </li>
        ) : (
          ""
        )}
        <li className="price-card listCard">
          <p className="info-products">Preço: R${price}</p>
        </li>
        <li className="btn-card listCard">
          <button className="btn-add-product" onClick={onClick}>
            Adicionar
          </button>
        </li>
      </ul>
  );
};



import "./main.css";

function Card(props) {
  return (
    <div className="card-wrapper">
      <div className="card-item">
        <div className="card-image-wrapper">
          <img src={props.image} alt="Sneaker" />
        </div>
        <div className="card-information">
          <h3>{props.brand}</h3>
          <p>{props.type}</p>
          <span>{props.size}</span>
        </div>
        <span className="card-price">${props.price}</span>
        <button
          className="card-button"
          onClick={() => {
            props.addToCart(props.item);
          }}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default Card;

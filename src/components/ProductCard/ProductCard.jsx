import { useState } from "react";
import "./productCard.css";

const ProductCard = ({ title, price, imageId, addToCart }) => {

  const handleAddToCartClick = () => {
    addToCart(price);
    setCounterItem(counterItem + 1);
  }

  const [counterItem, setCounterItem] = useState(0);

  return (
    <>
      <div className="card">
        <img src={"https://picsum.photos/id/" + imageId + "/600/400"}
          className="card-img-top" alt={title} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">
            {price}€
          </p>
          <div className="d-flex align-items-center justify-content-between">
            <button className="btn btn-primary" onClick={handleAddToCartClick}>+</button>
            <span><b>{counterItem}</b> {counterItem >= 1 ? "produits" : "produit"}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;

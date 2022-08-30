import { useState } from "react";
import "./productCard.css";

const ProductCard = ({ title, price, imageId, addToCart, delToCart }) => {

  const [counterItem, setCounterItem] = useState(0); 

  const handleAddToCartClick = () => {
    addToCart(price);
    setCounterItem(counterItem + 1);
  }
  const handleDelToCartClick = () => {
    if (counterItem > 0){
      delToCart(price);
      setCounterItem(counterItem - 1);
    }
  }

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
            <div>
              <button className="btn btn-primary me-2" onClick={handleAddToCartClick}>+</button>
              <button className="btn btn-danger" onClick={handleDelToCartClick}>-</button>
            </div>
            <span><b>{counterItem}</b> {counterItem >= 1 ? "produits" : "produit"}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;

import "./productCard.css";

const ProductCard = ({title, price, imageId, addToCart}) => {

  const handleAddToCartClick = () => {
    addToCart(price);
  }

  return (
    <>
      <div className="card">
        <img src={"https://picsum.photos/id/"+imageId+"/600/400"} 
             className="card-img-top" alt={title} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">
            {price}€
          </p>
          <button className="btn btn-primary" onClick={handleAddToCartClick}>+</button>
        </div>
      </div>
    </>
  );
};

export default ProductCard;

import "./shoppingCart.css";
import { RiShoppingCart2Fill, RiShoppingCart2Line } from "react-icons/ri";

const ShoppingCart = ({ itemsCount, price }) => {

  // let shoppingCartIcon = <RiShoppingCart2Fill />;
  // if (itemsCount === 0) {
  //   shoppingCartIcon = <RiShoppingCart2Line />;
  // }

  return (
    <div className="shopping-cart d-flex align-items-center">
      {/* Afficher le panier plein ou vide en fonction du nombre d'articles dans le panier */}
      {/* {itemsCount > 0 && <RiShoppingCart2Fill />}
    {itemsCount === 0 && <RiShoppingCart2Line />} */}
      {/* OU */}
      <span className="text-primary ">
        {itemsCount === 0 ? <RiShoppingCart2Line size={22}/> : <RiShoppingCart2Fill size={22}/>}
      </span>
      {/* OU */}
      {/* {shoppingCartIcon} */}
      <span className="badge text-bg-info ms-1">{itemsCount}</span>
      <span className="price-indicator ms-1">{price}€</span>
    </div>
  );
};

export default ShoppingCart;

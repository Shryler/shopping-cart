import ShoppingCart from "../ShoppingCart/ShoppingCart";
import "./navBar.css";

const NavBar = ({itemsCount, price}) => {

  return (
    <>
      <nav className="navbar bg-light">
        <div className="container-fluid">
          <span className="navbar-brand">Navbar</span>
          <ShoppingCart itemsCount={itemsCount} price={price}/>
        </div>
      </nav>
    </>
  );
};

export default NavBar;

import ShoppingCart from "../ShoppingCart/ShoppingCart";
import "./navBar.css";

const NavBar = () => {



  return (
    <>
      <nav className="navbar bg-light">
        <div className="container-fluid">
          <span className="navbar-brand">Navbar</span>
          <ShoppingCart/>
        </div>
      </nav>
    </>
  );
};

export default NavBar;

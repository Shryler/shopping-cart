import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import { useState } from 'react';
import './App.css';
import Counter from './components/Counter';
import NavBar from './components/NavBar/NavBar';
import OnChange from './components/OnChange';
import ProductCard from './components/ProductCard/ProductCard';
import Register from './components/Register/Register';

function App() {

  const [itemsCount, setItemsCount] = useState(0);
  const [price, setPrice] = useState(0);
// OU
  // const cartObj = {itemsCount:0, price:0};
  // const [cart, setCart] = useState(cartObj);
// OU
  // const [cart, setCart] = useState({itemsCount, price});

  const addToCart = (priceToAdd) => {
    setItemsCount(itemsCount + 1);
    const newPrice = +price + +priceToAdd;
    setPrice(newPrice);
  }
  const delToCart = (priceToDel) => {
    if (price > 0){
      setItemsCount(itemsCount - 1);
      const newPrice = +price - +priceToDel;
      setPrice(newPrice);
    }
  }

  const productsInit = [
    { id: "1", title: "produit 1", price: "99.90", imageId: "1001" },
    { id: "2", title: "produit 2", price: "19.90", imageId: "1002" },
    { id: "3", title: "produit 3", price: "34.90", imageId: "1003" },
    { id: "4", title: "produit 4", price: "57.90", imageId: "1004" }
  ]

  const productElements = productsInit.map(product =>
    <div className='col-12 col-lg-3 ' key={product.id}>
      <ProductCard title={product.title} price={product.price} imageId={product.imageId} addToCart={addToCart} delToCart={delToCart}/>
    </div>
  );

  return (
    <div className="App container-fluid">
      <NavBar itemsCount={itemsCount} price={price}/>
      <div className='product-container container'>
        <div className='row'>
          {productElements}
        </div>
        <Counter />
        <OnChange />
        <Register />
      </div>
    </div>
  );
}

export default App;

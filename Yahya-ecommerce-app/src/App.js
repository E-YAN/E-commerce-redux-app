import './App.css';
import NavBar from './Components/NavBar/navBar';
import Products from './Components/ProductsDisplay/AllProducts/products';
import SingleProduct from './Components/ProductsDisplay/SingleProduct/singleProduct'
import { Route, Routes } from 'react-router-dom';
import ShoppingCart from './Components/ProductsDisplay/ShoppingCart/shoppingCart'

function App() {
  return (
    <div className="App">
      

      <NavBar />
      <Routes>
        <Route path='/' element={<Products />} />
        <Route path='/products' element={<Products />} />
        <Route path='/shoppingCart' element={<ShoppingCart />} />
        <Route path='/singleProduct' element={<SingleProduct />} />
        <Route path= {`/products/:id`} element={<SingleProduct />} />
        
        <Route />
        <Route />

      </Routes>

    </div>
  );
}

export default App;

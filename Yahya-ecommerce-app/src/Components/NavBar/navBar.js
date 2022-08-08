import React from 'react';
import { Link } from 'react-router-dom';
import './navBar.css';
import { MdShoppingCart, MdOutlineAddShoppingCart } from 'react-icons/md';
import { useSelector } from "react-redux";




function NavBar() {
  const insideCart = useSelector(state => state)
  const counter = insideCart.length;
  return (
    <nav className='navBar'>
      <div className='navBar-logo' >
        <Link className='navLink' to={'/'}>JUST Enjoy</Link>
      </div>
      <div className='menu-icon'>
        <ul className='menu'>
          <li>
            <Link className='navLink' to={'/products'}>All Products</Link>
          </li>
          <li>
            {insideCart.length > 0 ?
              <Link className='navLink' to={'/shoppingCart'}>
                <MdShoppingCart />{" " + counter}
              </Link> :
              <Link className='navLink' to={'/shoppingCart'}>
                <MdOutlineAddShoppingCart />{" " + counter}
              </Link>}
          </li>


          <li></li>
        </ul>
      </div>

    </nav >
  )
}

export default NavBar;

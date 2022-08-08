import React from 'react';
import './shoppingCart.css';
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import { useSelector } from "react-redux";
//import { useDispatch } from "react-redux";
import { motion } from 'framer-motion';
import '../AllProducts/products.css';
import './shoppingCart.css'



function ShoppingCart() {
  const insideCart = useSelector(state => state)
  //const removeFromCart = useSelector(state => state.removeFromCart)
  const [productsItems, setProductsItems] = useState([]);
  const totalPrice = [];
  // let [totalPrice, setTotalPrice] = useState([]);
  //const dispatch = useDispatch();
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((datajson) => {
        //console.log(datajson)
        setProductsItems(datajson)
      })
      .catch((err) => console.error(err))
  }, [])

  // const cartPrice =0 ;
  productsItems && (productsItems.map((product) => insideCart.includes(product.id) && (
    // setTotalPrice(product.price)
    console.log(product.price),
    totalPrice.push(product.price)

  )

  ))

  let cartTotal = 0;
  // for(let i =0; i < productsItems.length;i++){
  //   // cartTotal+= totalPrice[i]
  //   cartTotal+= productsItems.price;
  // }
  console.log("total" + totalPrice);
  for (let i of totalPrice)

    cartTotal += i;

  return (
    <>
      <div className='totalPrice'>
        Total Price : {cartTotal} $
      </div>
      <div className='productsList'>
        {
          productsItems && (productsItems.map(product => insideCart.includes(product.id) && (

            <motion.div key={product.id} className='productsCard'
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.9 }}
            >
              <Link to={`/products/${product.id}`}
                className='linkToProduct'>
                <h2 >{product.title}</h2>
                <p className='price'>
                  {" "} {product.price}"$"
                </p>

                <img className='productsImage' alt="" src={product.image} />





              </Link>
            </motion.div>


          )

          ))}
      </div>
    </>
  )



}

export default ShoppingCart;



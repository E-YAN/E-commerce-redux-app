import React from 'react';
import './singleProduct.css';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { addToCart } from '../../../Reducers/Actions/cartActions';
import { removeProduct } from '../../../Reducers/Actions/cartActions';
import { useDispatch } from 'react-redux';
import { useSelector } from "react-redux";

function SingleProduct() {
  const insideCart = useSelector(state => state);
  //const removeFromCart = useSelector(state => state.id);
  const dispatch = useDispatch();
  console.log(insideCart);

  let { id } = useParams();
  console.log(useParams)
  const [product, setProduct] = useState()
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((response) => response.json())
      // .then ((datajosn) => console.log(datajosn))   
      .then((datajosn) => setProduct(datajosn))
      .catch((err) => console.error(err))
  },[id])
  return (
    <div className='SingleProductCart'>
      <button className='backButton'><Link className='backButtonLink' to={'/products'}  > Back</Link></button>
      <div className='oneProduct'>

        {product?.id ? (

          <div key={product.id} className='pro'>

            <div className='productTop'>
              <img className='productImage' alt="" src={product.image} />
              <br />
              <h3 className='description'>
                {product.description}
              </h3>

            </div>
            <div>
              <div className='price'>
                <h2 >{product.title}</h2>{" "} {product.price}"$"
              </div>



              {
                insideCart?.find((item) => item === product.id) ?

                  // {/* {insideCart?.find((item) => item === product.id) !== undefined ? */}
                  <button onClick={() => dispatch(removeProduct(product.id))}>Remove From The Cart</button>
                  :
                  // {!insideCart.includes(product.id)&&(
                  <button onClick={() => dispatch(addToCart(product.id))}>Add To The Cart</button>
                // console.log("inside mappppNo "+insideCart)
              }
            </div>

          </div>

        )
          : 'No Details'}

      </div>
    </div>
  )
}

export default SingleProduct;

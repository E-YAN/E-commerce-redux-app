import React from 'react';
import './products.css';
// import {useParams} from "react-router-dom" ;
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
//import SingleProduct from '../SingleProduct/singleProduct';
import { motion } from 'framer-motion';

function Products() {
    const [productsItems, setProductsItems] = useState([])
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then((response) => response.json())
            .then((datajson) => {
                console.log(datajson)
                setProductsItems(datajson)
            })
            .catch((err) => console.error(err))
    }, [])
    return (
        <div className='productsList'>
            {productsItems ? productsItems.map((product, i) => {
                return (

                    <motion.div key={i} className='productsCard'
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
                            <br />


                            <p className='moreDetailsButton'>More detials</p>


                        </Link>
                    </motion.div>

                )
            }
            ) : "No Post Data"}
        </div>
    )
};
export default Products;










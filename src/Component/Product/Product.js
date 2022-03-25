import React from 'react';
import './Product.css'
import { FaShoppingCart } from "@react-icons/all-files/fa/FaShoppingCart";

const Product = ({ products, addToCard }) => {
    const { id, name, img, price, Brand } = products;
    // console.log(products)
    return (
        <div className='all-product'>
            <img src={img} alt="" />
            <div className='product-deatails'>
                <h3>Name: {name} </h3>
                <h3>Price: ${price}</h3>
                <h3>Brand: {Brand} </h3>
            </div>
            <button onClick={addToCard} className='button-cart'>
                <p className='button-text'> Add to Cart </p>
                <FaShoppingCart />
            </button>
        </div>
    );
};

export default Product;
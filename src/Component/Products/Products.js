import { faHourglass2 } from '@fortawesome/free-regular-svg-icons';
import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import SelectProduct from '../SelectProduct/SelectProduct';
import './Products.css';

const Products = () => {
    // console.log(props)
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    // console.log(cart)
    const addToCard = (products) => {
        const newCart = [...cart, products];
        setCart(newCart)
    }
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);
    return (
        <div className='shop-container'>
            <div className='proudcts-container'>
                {
                    products.map(
                        (products) => <Product key={products.id} products={products} addToCard={addToCard}></Product>
                    )
                }
            </div>
            <div className='selected-products'>
                <h1>this is selects</h1>
                {
                    cart.map((cart) => (
                        <h3 key={cart.id}>{cart.name}</h3>
                    ))
                }
            </div>
        </div>
    );
};

export default Products;
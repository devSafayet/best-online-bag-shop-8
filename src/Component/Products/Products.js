import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Products.css';

const Products = () => {
    // console.log(props)
    const addToCard = () => {
        console.log('added')
    }
    const [products, setProducts] = useState([]);
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
                <h2>selected proudcts</h2>
            </div>
        </div>
    );
};

export default Products;
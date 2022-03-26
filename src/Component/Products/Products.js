import { faHourglass2 } from '@fortawesome/free-regular-svg-icons';
import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import QuestionAns from '../QuestionAns/QuestionAns';
import SelectProduct from '../SelectProduct/SelectProduct';
import './Products.css';

const Products = () => {
    // console.log(props)
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    // console.log(cart)

    const addToCard = (products) => {
        const newCart = [...cart, products];
        if (newCart.length > 4) {
            alert('You Already Select Four Products.')
            return newCart;
        }
        setCart(newCart);
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
            {/* ------------Selected products Area -------------- */}
            <div className='selected-products'>
                <h1>Selected Products</h1>
                {
                    cart.map((cart) => (
                        <h4 key={cart.id}>{cart.name}</h4>
                    ))
                }
                <button className='one-btn'>CHOOSE 1 FOR ME</button> <br />
                <button className='again-btn'>CHOOSE AGAIN</button>
            </div>
            {/* Question And Answer Part  */}
            <QuestionAns></QuestionAns>
        </div>
    );
};

export default Products;
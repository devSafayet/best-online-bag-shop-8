import React from 'react';

const Product = ({ products }) => {
    const { id, name, img, price, Brand } = products;
    // console.log(products)
    return (
        <div>
            <img src={img} alt="" />
            <div>
                <h2>Name: {name} </h2>
                <h3>Price: {price}</h3>
                <h3>Brand: {Brand} </h3>
            </div>
        </div>
    );
};

export default Product;
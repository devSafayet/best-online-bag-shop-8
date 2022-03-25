import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Products = () => {
    // console.log(props)
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);
    return (
        <div>
            <div className=''>
                {
                    products.map(
                        (products) => <Product key={products.id} products={products}></Product>
                    )
                }
            </div>
        </div>
    );
};

export default Products;
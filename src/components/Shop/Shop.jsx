import React, { useEffect, useState } from 'react';
import './Shop.css';
import Product from '../Product/Product';


const Shop = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('products.json').then(res => res.json()).then(data => setProducts(data));
    }, [])
    console.log(products[3]);

    const handleAddToCart = (product) => {
        console.log(product);
    }
    return (
        <div className='shop-container'>
            <div className='product-container'>
                {
                    // products.map(product=>console.log(product))
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    ></Product>)
                }
            </div>
            <div className='cart-container'>
                <h4>Order Summery</h4>
            </div>
        </div>
    );
};
export default Shop;
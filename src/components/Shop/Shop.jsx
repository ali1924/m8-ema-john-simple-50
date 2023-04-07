import React, { useEffect, useState } from 'react';
import './Shop.css';
import Product from '../Product/Product';
const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('products.json').then(res => res.json()).then(data => setProducts(data));
    }, [])
    // console.log(products[3]);

    const handleAddToCart = (product) => {
        // console.log(product);
        const newCart = [...cart, product];
        setCart(newCart);
    }
    // console.log(cart);
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
                <p>Selected Item:{cart.length}</p>
                {
                    // cart.map(cart=>console.log(cart))
                    cart.map(cart=>console.log(cart))
                }
            </div>
        </div>
    );
};
export default Shop;
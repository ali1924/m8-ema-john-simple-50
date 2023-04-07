import React, { useEffect, useState } from 'react';
import './Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('products.json').then(res => res.json()).then(data => setProducts(data));
    }, [])
    // console.log(products[3]);
    useEffect(() => {
        const storedCart = getShoppingCart();
        // console.log(storedCart);
        // Step-1 get ID
        for (const id in storedCart) {
            // console.log(id);
            // step-2 get the product by using id
            const addedProduct = products.find(product => product.id === id);
            // console.log(savedProduct);
            // step-3 get quantity of the product
            const quantity = storedCart[id];
            addedProduct.quantity = quantity;
            console.log(addedProduct);
        }
    }, [products]);

    const handleAddToCart = (product) => {
        // console.log(product);
        const newCart = [...cart, product];
        setCart(newCart);
        addToDb(product.id);
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
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};
export default Shop;
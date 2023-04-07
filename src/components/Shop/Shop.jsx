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
        const savedCart = [];
        for (const id in storedCart) {
            // step-1 get id
            // console.log(id);
            // step-2 get the product by using id
            const addedProduct = products.find(product => product.id === id);
            // step-3 get quantity of the product
            if (addedProduct) {
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                // step-4 add the added product to the saved cart
                savedCart.push(addedProduct);

            }
            // console.log(addedProduct);
            // step-5 set the cart
            setCart(savedCart);
        }
    }, [products]);

    const handleAddToCart = (product) => {
        // console.log(product);
        // const newCart = [...cart, product];
        // option-2 quantity fixed
        let newCart = [];
        // Step-1 if doesn't exist in  the cart, then set quantity=1
        const exists = cart.find(pd => pd.id === product.id);
        if (!exists) {
            product.quantity = 1;
            newCart = [...cart, product];
        }
        else {
            exists.quantity += 1;
            const remaining = cart.filter(pd => pd.id !== product.id);
            newCart = [...remaining, exists];
        }

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
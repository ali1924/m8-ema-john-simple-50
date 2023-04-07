import React from 'react';
import './Product.css';
const Product = (props) => {
    // console.log(props.product);
    const { id, img, name, price, quantity, ratings } = props.product;
    const { ratingsCount, seller, shipping, stock } = props.product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <h6>{name}</h6>
            <div className='product-info'>
                <p>Price:${price}</p>
                <p>Manufacturer:{seller}</p>
                <p>Rating:{ratings}</p>
            </div>
            <button className='btn-cart'>Add To Cart</button>
        </div>
    );
};

export default Product;
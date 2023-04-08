import React from 'react';
import './ReviewItem.css';
const ReviewItem = ({ product }) => {
    const { id, img, name, quantity,price } = product;
    console.log(product);
    return (
        <div className='review-item'>
            <img src={img} alt="" />
            <h2>{name}</h2>
            <p>Price:${price}</p>
            <p>Quantity:${quantity}</p>
            
        </div>
    );
};

export default ReviewItem;
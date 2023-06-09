import React from 'react';
import './Product.css';
import ReactDOM from 'react-dom'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faShoppingCart} from '@fortawesome/free-solid-svg-icons'
const Product = (props) => {
    // console.log(props.product);
    const { id, img, name, price, quantity, ratings } = props.product;
    const { ratingsCount, seller, shipping, stock } = props.product;
    // add to cart
    // const handleAddToCart = (product) => {
    //     console.log(product);
    // }
    const handleAddToCart = props.handleAddToCart;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <h6>{name}</h6>
            <div className='product-info'>
                <p>Price:${price}</p>
                <p>Manufacturer:{seller}</p>
                <p>Rating:{ratings}</p>
            </div>
            <button className='btn-cart'
            onClick={()=>handleAddToCart(props.product)}
            >Add To Cart
                <FontAwesomeIcon icon={faShoppingCart} />
            </button>
        </div>
    );
};

export default Product;
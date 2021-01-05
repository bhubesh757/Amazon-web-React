import React from 'react'

import './Product.css'
// importing useStatevalue rom the stateprovider

import {useStateValue} from '/home/bhubesh/react-clone-two/src/StateProvider.js'
function Product({title , image , rating , price , id}) {

    const [{cart} , dispatch] = useStateValue();
    console.log('this is the basket' , cart );
    // addToCart

    const addToCart = () => {
        // dispatching the item to the data layer
        // pushing the item
        dispatch ({
            type : 'ADD_TO_CART',
            item : {
                // id is the random it creates as a random one
                id : id , 
                title : title ,
                image : image ,
                price : price,
                rating : rating
            }
        })

    }
    return (
        <div className = 'product'>
            {/* info */}
            <div className="product__info">
                <p> {title} </p>
                <p className = 'product__price'>
                    <small>₹</small>
                     <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {Array(rating).fill().map((_,i) => (
                    <p>✩</p>
                    ) )}
                </div>
            </div>
            <img  className = 'product_image' src= {image} alt = ''></img>

            {/* <button className = 'product__Buybutton'> Buy Now</button> */}
            <button onClick = {addToCart} className = 'product__button'> Add to cart</button>
        </div>
    )
}

export default Product

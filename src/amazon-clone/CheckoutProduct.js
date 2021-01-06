import React from 'react'

import './CheckoutProduct.css'

// context api
import {useStateValue} from '/home/bhubesh/react-clone-two/src/StateProvider.js'
function CheckoutProduct({id , image , title , price , rating }) {
    const [{cart} , dispatch] = useStateValue();
    console.log('this is the basket' , cart );
    // removeFromCart

    const removeFromCart = () => {
        // remove the item from the cart
        dispatch ({
            type : 'REMOVE_FROM_CART',
            id : id ,
        })

    }
    return (
        <div className = 'CheckoutProduct'>
            {/* img */}
            {/* title */}
            <img className = 'checkoutproduct__image' src = {image}>
            </img>

            <div className="checkoutproduct__info">
                <p className = 'checkoutproduct__title'>
                    {title}
                </p>

                <p className = 'checkoutproduct__price'>
                <small>₹</small>
                     <strong>{price}</strong>
                </p>
                <div className="checkoutproduct__rating">
                    {Array(rating).fill().map((_,i) => (
                    <p>✩</p>
                    ) )}
                </div>
                <button onClick = {removeFromCart} className = 'checkoutproduct__button'>Remove From Cart</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
import React from 'react'

import './Checkout.css'

// context api
import {useStateValue} from '/home/bhubesh/react-clone-two/src/StateProvider.js'
import Subtotal from './Subtotal'
import CheckoutProduct from './CheckoutProduct'
function Checkout() {
    const [{cart ,user} , dispatch] = useStateValue();

    return (
        <div className = 'checkout'>
           {/* checkut left */}
           <div className="checkout__left">
            <img className = 'checkout__adimage' src = 'https://images-eu.ssl-images-amazon.com/images/G/31/img20/Vernac13th/1500x150_V2_Eng._CB412582591_.jpg' alt = ''>
            </img>

            <div>
                <h3>{user?.email}</h3>
                <h2 className = 'checkout__title'>
                    <strong>Shopping Cart </strong>
                </h2>
                <h3>
                Deselect all items
                </h3>
                
                {cart.map(item => (
                    <CheckoutProduct
                    id= {item.id}
                    title = {item.title}
                    image = {item.image}
                    price = {item.price}
                    rating= {item.rating}
                    >
                        
                    </CheckoutProduct>
                ))}
                {/* checkout__cartitems */}
                {/* checkout__cartitems*/}
                {/* checkout__cartitems */}
           </div>
           {/* checkout right */}

           
          
        </div>
        <div className = 'checkout__right'>
            <Subtotal></Subtotal>
                <h2> 
                     Subtotal
                </h2>
           </div>
        </div>
        
    )
}

export default Checkout

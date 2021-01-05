import React from 'react'

import './Subtotal.css'
import CurrencyFormat from "react-currency-format";

// context api
import {useStateValue} from '/home/bhubesh/react-clone-two/src/StateProvider.js'
import { getCartTotal } from '../reducer';
function Subtotal() {

    const [{cart} , dispatch] = useStateValue();

    return (
        <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
        Subtotal ({cart.length} items): <strong> {value} </strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getCartTotal(cart)} 
        displayType={"text"}
        thousandSeparator={true}
        prefix={"₹"}
      />

      <button >Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal

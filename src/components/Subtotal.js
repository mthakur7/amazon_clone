import React from 'react';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from './reducer';
import { useStateValue } from './StateProvider';
import {useHistory} from 'react-router-dom';

function Subtotal() {
    const history=useHistory();
    const [{ basket }, dispatch] = useStateValue();

    return (
        <div className="cart_checkout">
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <span>Subtotal({basket?.length} items): <b>{value}</b></span>
                        <p><input type="checkbox" /> This order contains a gift</p>
                        <button onClick={e=>history.push('/payment')}>Proceed to checkout</button>
                    </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"} />

        </div>


    )
}

export default Subtotal;

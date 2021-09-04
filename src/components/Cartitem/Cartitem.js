import React from 'react';
import './Cartitem.css'

import { useStateValue } from "../StateProvider";

function Cartitem({ id, image, title, price, rating, hideButton }) {
    const [{ basket }, dispatch] = useStateValue();

    const removeFromBasket = () => {
        // remove the item from the basket
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        })
    }

    return (
        <div className='cartitem'>
            <img className='cartitem__image' src={image} />

            <div className='cartitem__info'>
                <span className='cartitem__title'>{title}</span>
                
  <div>               
   <span className="cartitem__price">
              <small>$</small>
                    <strong>{price}</strong>
                </span>
                <span className="cartitem__rating">
                    {Array(rating)
                    .fill()
                    .map((_, i) => (  //underscore means we dont care what is before i/index
                        <span>⭐</span>
                    ))}
                </span>
                </div>
                {!hideButton && (
                    <button onClick={removeFromBasket}>Remove from Basket</button>
                )}
            </div>
        </div>
    )
}

export default Cartitem;
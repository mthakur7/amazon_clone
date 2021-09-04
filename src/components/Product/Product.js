import React from 'react'
import { useStateValue } from "../StateProvider";
import {useToasts } from 'react-toast-notifications';
import './Product.css'

const Product = ({id,title,price,rating,image}) => {
    const { addToast } = useToasts();// for notifications using react-toast-notifications

    //{basket} is the state, dispatch is the action
    const [{basket},dispatch] =useStateValue();

    const addToBasket=()=>{
        //dispatch some action into the data layer, it is updating out basket
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
              id: id,
              title: title,             
              price: price,
              rating: rating,
              image: image,
            },
          });

       // for notifications using react-toast-notifications
            addToast(`${title}..........$${price}` , { appearance: 'success',autoDismissTimeout: 1500,autoDismiss:true});
          
    };

    return (
        <div className="product">
            <div className="product_info">
           
            <span>{title}</span>
            <div>
            <span><small>$</small><b>{price}</b></span>
            <span className="product_rating">
                {Array(rating).fill().map((_,i)=>(<span>⭐</span>))}
            </span>
            </div>
            
</div>

         <img src={image} alt="" />
            <button onClick={addToBasket}>Add to Cart</button>
            

        </div>
    )
}

export default Product;
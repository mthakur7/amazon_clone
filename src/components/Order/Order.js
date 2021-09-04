import React from 'react'
import moment from "moment";
import Cartitem from "../Cartitem/Cartitem.js";
import CurrencyFormat from "react-currency-format";
import './Order.css'

function Order({ order }) {
    return (
        <div className='order'>
             <h4>Order Date</h4>
            <p>{moment.unix(order.data.created).format("MMMM Do YYYY, h:mma")}</p>
            <p className="order__id">
                <small><h5>Order Id: </h5>{order.id}</small>
            </p>
            {order.data.basket?.map(item => (
                <Cartitem
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                    hideButton
                />
            ))}
            <CurrencyFormat
                renderText={(value) => (
                    <h3 className="order__total">Order Total: {value}</h3>
                )}
                decimalScale={2}
                value={order.data.amount / 100}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />   
        </div>
    )
}

export default Order
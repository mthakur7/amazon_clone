import React, { useState, useEffect } from 'react';
import { db } from "../firebase";
import { useStateValue } from "../StateProvider";
import Order from '../Order/Order.js'
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js'
import './Orders.css'
import { Link } from "react-router-dom";


function Orders() {
  const [{ basket, user }, dispatch] = useStateValue();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if(user) {
        db
        .collection('users')
        .doc(user?.uid)
        .collection('orders')
        .orderBy('created', 'desc')
        .onSnapshot(snapshot => (
            setOrders(snapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data()
            })))
        ))
    } else {
        setOrders([])
    }

  }, [user])

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

    return (
        <>
        <div className='orders'>
        <Header/>
        <div className='orders_cont'>
 
          
        {orders.length>0 ?
             <>
             <h1>Your Orders</h1>
                {orders.map(order => (
                    <Order order={order} />
                ))}
           </>
            :<>
                <img src="https://pixelclerks.com/assets/img/features/noorders.png" className="orders_noOrder"/>
            <h3>No Order Found</h3>
            <Link to="/"> <button>Continue Shopping</button></Link>
            </>}
          
        </div>
        <Footer />
        </div>
        </>
    )
}

export default Orders
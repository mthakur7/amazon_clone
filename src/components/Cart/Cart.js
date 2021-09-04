import React from "react";
import Header from "../Header/Header.js";
import Footer from "../Footer/Footer.js";
import Subtotal from "../Subtotal";
import Cartitem from "../Cartitem/Cartitem.js";
import { useStateValue } from "../StateProvider";
import { Link } from "react-router-dom";
import "./Cart.css";

const Cart = () => {
  const [{ basket, user }, dispatch] = useStateValue();
   React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="cart">
        <Header />
        {basket.length > 0 ? (
          <div className="cart_top">
            <div className="cart_banner">
              <img
                src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/AmazonPay/LPAOffers/April/Prime/Store/V2/LPA501_1500x250.jpg"
                alt=""
              />
              <h1>Shopping Cart</h1>
            </div>
            <Subtotal />
          </div>
        ) : (
          <></>
        )}

        <div className="cart_orders">
          {/*we are taking data from our basket/cart for cartitems*/}
          {basket.length > 0 ? (
            basket.map((item) => (
              <Cartitem
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))
          ) : (
            <>
              <div className="cart_empty">
                <img src="data:image/png;base64,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" alt=""/>
               <Link to="/"> <button>Continue Shopping</button></Link>
              </div>
            </>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cart;

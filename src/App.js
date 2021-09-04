import React,{useEffect} from 'react';
import './App.css';
import Home from './components/Home/Home.js'
import Cart from './components/Cart/Cart.js';
import Signin from './components/Signin/Signin.js';
import {Route, Switch,Redirect} from 'react-router-dom'
import { auth } from './components/firebase';
import {useStateValue} from './components/StateProvider'
import Payment from './components/Payment/Payment.js';
import {loadStripe} from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js"
import Orders from "./components/Orders/Orders.js"
import SearchProducts from "./components/SearchProducts.js";

//public key
const promise =loadStripe("pk_test_51JMYvaSFCgqg44DgIhNEzGA0pezmk9ShAjj1FCVqn6s6OaJl1A0RX72E9WfLNLM1AgCsK28KtNcdoVdXBS642qFd00izwe7V3u");

function App() {
const [{},dispatch]=useStateValue();

// to keep track of who has signed in
  useEffect(()=>{
    //as soon as the app loads on signin/sognout we attach this listener
    auth.onAuthStateChanged((authUser) => {
      //if there is an authorized user
if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  },[]);

  return (
  <>  
   <Switch>
     <Route exact path="/" component={Home} />
     <Route exact path="/signin" component={Signin} />
     <Route exact path="/cart" component={Cart} />
     
     <Route  path="/payment">
     <Elements stripe={promise} >
       <Payment/>
       </Elements>
     </Route>

     <Route path="/orders" component={Orders} />
     <Route path="/search">
              
              <SearchProducts />
            </Route>
    <Redirect to="/"/>
   </Switch>
  </>
  );
}

export default App;
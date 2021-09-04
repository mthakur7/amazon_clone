import React from "react";
import Product from "./Product/Product.js";
import { useLocation, useHistory } from "react-router-dom";
import { Button } from "@material-ui/core";
import { useStateValue } from "./StateProvider";
import { ToastProvider } from 'react-toast-notifications';
import Header from './Header/Header'
import Footer from "./Footer/Footer";



function SearchProducts(props) {
  const location = useLocation();
  const history = useHistory();

  const [{ products }, dispatch] = useStateValue();

  var searchProducts = [];

  if (location.data) {//if something is written in search box
   
    var searchTerm = location.data.searchTerm;
    console.log(searchTerm?.toLowerCase())
    searchProducts = products.filter(({ title }) => {     
      return (        
        title.toLowerCase().includes(searchTerm?.toLowerCase())
       );
    });
   
  } else {
    history.push("/");
  }
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
     <Header/>
    <div
      style={{
        marginTop: "60px",       
        minHeight:"70vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor:"rgb(247 247 247)",
        
      }}
    >
      
      {searchProducts.length === 0 ? (
        <>
        <h3 style={{ margin: "20px", textAlign: "center" }}>
       No Results Found
      </h3>
        <Button
          style={{
            backgroundColor: "#f0c14b",
            border: "1px solid",
            borderColor: "#a88734 #9c7e31 #846a29",
            margin:"10px"
          }}
          onClick={() => history.push("/") }
          variant="contained" >
          Start Shopping
        </Button>
        </>
      ) : null}
      <div
        style={{
          marginTop: "0px",
          width: "90vw",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          
        }}
      >
       <>
      
       <ToastProvider>
        {searchProducts.map(({ id, title, price, rating, image }) => (
   <div   style={{
       
        margin:"10px",
        }}>
    <Product
            key={id}
            id={id}
            title={title}
            price={price}
            rating={rating}
            image={image}
           
          />
         
         </div>
        ))}
      
        </ToastProvider>
        </>
      </div>
    </div>
    <Footer/>
    </>
  );
}

export default SearchProducts;
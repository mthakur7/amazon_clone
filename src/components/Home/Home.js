import React, { useState, useEffect } from 'react'

import Product from '../Product/Product.js'
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';
import { ToastProvider } from 'react-toast-notifications';
import { useStateValue } from "../StateProvider";
import { db } from "../firebase";
import './Home.css'
// import Loader from "react-loader-spinner";
import { Carousel } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css'; {/*changed text-decoration in line no.230 of bootstrap.css */ }

const slider_array = [
   "https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg",
   "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_2x._CB432458382_.jpg",
   "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Toys_en_US_2x._CB431858162_.jpg",
   "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Beauty_v2_en_US_2x._CB429089928_.jpg",
   "https://images-eu.ssl-images-amazon.com/images/G/02/kindle/journeys/YjE2NjU3MTEt/YjE2NjU3MTEt-ZThlMmM3NWIt-w3000._CB664737538_.jpg",
   "https://images-eu.ssl-images-amazon.com/images/G/02/kindle/journeys/NDY4NmExNTct/NDY4NmExNTct-MWQ2NWQ2YWIt-w1500._CB644939564_.jpg",
   "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Home_v2_en_US_1x._CB429090084_.jpg"

]




const Home = () => {

   // for searching products 
   const [{ products }, dispatch] = useStateValue();
   const [loading, setLoading] = useState(null);

   useEffect(() => {
      setLoading(true);
      
      db.collection("products").onSnapshot((snapshot) => {
         
         var items = snapshot.docs.map((doc) => {
            var { title, image, price, rating } = doc.data();
         
            return {
               title,
               image,
               price,
               rating,
               id: doc.id,
            };
         });
         dispatch({
            type: "SET_PRODUCTS",
            products: items,
         });
        
         setLoading(false);
      });
   }, []);

   React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

   return (
      <>
       {loading ? (
            <div className="home_loader">
               <img src="https://cdn.dribbble.com/users/115601/screenshots/4825044/shopping-bag.gif" alt=""/>

            </div>
         ) : (
            <>
               <Header />
               <div className="home_carousel">
                  <Carousel>
                     <Carousel.Item interval={1500}>
                        <img
                           className="d-block w-100"
                           src={slider_array[0]}
                           alt=""
                        />

                     </Carousel.Item>
                     <Carousel.Item interval={1500}>
                        <img
                           className="d-block w-100"
                           src={slider_array[1]}
                           alt=""
                        />
                     </Carousel.Item>
                     <Carousel.Item interval={1500}>
                        <img
                           className="d-block w-100"
                           src={slider_array[2]}
                           alt=""
                        />

                     </Carousel.Item>
                     <Carousel.Item interval={1500}>
                        <img
                           className="d-block w-100"
                           src={slider_array[3]}
                           alt=""
                        />

                     </Carousel.Item>
                     <Carousel.Item interval={1500}>
                        <img
                           className="d-block w-100"
                           src={slider_array[4]}
                           alt=""
                        />

                     </Carousel.Item>
                     <Carousel.Item interval={1500}>
                        <img
                           className="d-block w-100"
                           src={slider_array[5]}
                           alt=""
                        />

                     </Carousel.Item>
                  </Carousel>

               </div>
               <ToastProvider >
                  <div className="home_products">

                     <div className="home_row home_row0">

                        <Product id="00" title="Whatever It Takes:Habits to Transform Business, Relationships & Life, A book By Brandon Bornancin"
                           price={21.5} rating={4} image="https://m.media-amazon.com/images/I/71ZWm0rmwmL._AC_UY327_FMwebp_QL65_.jpg" />

                        <Product id="01" title="Self-Love Workbook for Women: Release Self-Doubt & confidence, A book By Megan Logan MSW"
                           price={39} rating={5} image="https://images-na.ssl-images-amazon.com/images/I/51-wvPXhMsL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg" />

                        <Product id="02" title="Master Your Emotions: Practical Guide for Negativity & Better Feelings, A book By Thibaut Meurisse"
                           price={28.25} rating={3} image="https://m.media-amazon.com/images/I/61-DK6orSFL._AC_UY327_QL65_.jpg" />

                     </div>


                     <div className="home_row home_row1">
                        <Product id="10" title="Amazon Basics Small Digital Alarm Clock with Nightlight and Battery Backup, modern & neon color"
                           price={180.25} rating={4} image="https://m.media-amazon.com/images/I/41gT9mzRM8L._AC_SY200_.jpg" />

                        <Product id="11" title="LG 55UP8000PUA Alexa Technology Built-in 55 4K Smart UHD TV Thin excellent with high definition"
                           price={215} rating={5} image="https://m.media-amazon.com/images/I/51NKhnjhpGL._AC_UL480_FMwebp_QL65_.jpg" />

                     </div>


                     <div className="home_row home_row2">
                        <Product id="20" title="Tommy Hilfiger Boys Wear:   Alexander Blazers,  Single Breasted with Pockets, Solid Color with Stripes"
                           price={59} rating={4} image="https://m.media-amazon.com/images/I/816p98IunWL._AC_UL480_FMwebp_QL65_.jpg" />

                        <Product id="21" title="BINPAW Boys Wear Cotton Sweatpants, trouser, black in color, with excellent fitting and long lasting"
                           price={49.7} rating={5} image="https://m.media-amazon.com/images/I/51r000KvO+L._AC_UL480_FMwebp_QL65_.jpg" />

                        <Product id="22" title=" Boys Wear Regular Half Sleeve Casual T-Shirt, available in different colors and sizes,  comfortabe wear"
                           price={45} rating={3} image="https://m.media-amazon.com/images/I/71Owur1oEQL._AC_UL480_FMwebp_QL65_.jpg" />

                     </div>

                     <div className="home_row home_row3">
                        <Product id="30" title="GORLYA Girls Wear Short Sleeve Tie Waist Casual Swing Midi Shirt Dress with Pockets for 4-14T Kids"
                           price={42.90} rating={3} image="https://m.media-amazon.com/images/I/613VfncBjHL._AC_UY550_.jpg" />

                        <Product id="31" title="Active  Girls Wear Zip-Up T shirt, simple and easy to carry with extra flexibility, Buy in any color & size"
                           price={39} rating={2} image="https://m.media-amazon.com/images/I/81BpHZuRBkL._AC_UL480_FMwebp_QL65_.jpg" />

                        <Product id="32" title="Girls Wear Cotton Ethnic Printed Tunic  Front Slit RollUp Sleeve Button Down Neck Pocket Long Kurti"
                           price={55.55} rating={4} image="https://m.media-amazon.com/images/I/61GYqHG8vIL._AC_UL480_FMwebp_QL65_.jpg" />

                     </div>


                     <div className="home_row home_row4">
                        <Product id="40" title="L Shaped Desk, Home Desk and Office Desk and L Table with Round Corners with Large Monitor Stand"
                           price={251} rating={5} image="https://m.media-amazon.com/images/I/712jdsXABtS._AC_UL480_FMwebp_QL65_.jpg" />

                        <Product id="41" title="Amazon Basics Classic Puresoft PU-Padded Mid-Back Office Computer Desk Chair with Armrest - Black"
                           price={153.45} rating={4} image="https://m.media-amazon.com/images/I/71i08qnZeDL._AC_UL480_FMwebp_QL65_.jpg" />

                     </div>

                     <div className="home_row home_row5">

                        <Product id="50" title="Polar Bottle sipper  Breakaway Insulated Bike Water Bottle - BPA Free, Cycling & Sports Squeeze Bottle"
                           price={62} rating={3} image="https://m.media-amazon.com/images/I/71vZmUduLlL._AC_UL480_FMwebp_QL65_.jpg" />

                        <Product id="51" title="Travel Bag Platinum Elite Softside Expandable Spinner Wheel Luggage, Vintage Grey, Carry-On 21-Inch"
                           price={90.45} rating={4} image="https://images-na.ssl-images-amazon.com/images/G/01/acs/amazon-designer/2017/02/03/DURM-213F370665902D13.jpeg" />


                        <Product id="52" title="Road Bike Cycling Shoes or Peloton Bike Shoes, Compatible  Riding stylish Shoes Indoor/Outdoor  wear"
                           price={101.10} rating={5} image="https://m.media-amazon.com/images/I/51EsAu+h4KL._AC_SR160,160_.jpg" />



                     </div>

                  </div>
               </ToastProvider>
               <Footer />


            </>
         )}


      </>
   )
}

export default Home;



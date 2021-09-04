import React, { useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Link, useHistory } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import { auth } from "../firebase";
import "./Header.css";

//drawer for sidebar
import { Drawer, Divider } from "antd";
import "antd/dist/antd.css";

const Header = () => {
  const [visible, setVisible] = useState(false);
  const [{ basket, user }, dispatch] = useStateValue();
  const [searchTerm, setSearchTerm] = useState("");
  const history = useHistory();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
      history.push('/')
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.length === 0) {
      history.push("/");
    } else {
      history.push({
        pathname: "/search",
        data: { searchTerm: searchTerm },
      });
    }
  };



  return (
    <div className="header">
      {/* Sidebar & menuicon   */}
      <div className="header_menu">
        <IconButton>
          <MenuIcon
            onClick={() => {
              setVisible(true);
            }}
            className="menu_icon"
            fontSize="large"
          />
        </IconButton>
      </div>
      <Drawer
        title={`Hello, ${!user ? "Guest" : user.email.split("@")[0]}`}
        headerStyle={{ backgroundColor: "#232F3E", color: "#fff" }}
        placement="left"
        visible={visible}
        onClose={() => {
          setVisible(false);
        }}
        className="drawer"
        footer={
          <div className="menuFooter">
            <p className="menu_body_title">Digital Content</p>
            <p>Amazon Fire TV</p>
            <p>Amazon Prime Video</p>
            <p>Amazon Music</p>
            <Divider />
            <p className="menu_body_title">Shop By Department</p>
            <p>Books</p>          
            <p>Computers</p>           
            <p>Furniture</p>
          </div>
        }
      >
        <div className="menu_body">         
          <Link to={user ? "/orders" : "/signin"}>
             <p>Returns & Orders</p>
          </Link>
          <Link to={!user && "/signin"}>
            <p onClick={handleAuthentication}>
              {user ? "Sign Out" : "Sign In"}
            </p>
          </Link>
        </div>
      </Drawer>

      {/* logo */}
      <div className="header_logo">
        <Link to="/">
          {" "}
          <img src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="" />
        </Link>
      </div>
      {/* searchbar */}
      <div className="header_searchbar">
        <div className="header_searchselect">
          <select onChange={(e) => setSearchTerm(e.target.value)}>
            <option value="">All </option>
            <option value="Book">Book </option>
            <option value="Boys Wear">Boys wear</option>
            <option value="Girls Wear">Girls Wear</option>
            <option value="Clock">Clock</option>
            <option value="Tv">TV</option>
            <option value="Desk">Desk</option>
            <option value="Chair">Chair</option>
            <option value="Bottle">Bottle</option>
            <option value="Travel Bag">Travel Bag</option>
            <option value="Shoes">Shoes</option>
          </select>
        </div>

        <div className="header_form">
          <form>
            <input
              type="text"
              placeholder="Search items"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button
              onClick={handleSearch}
              className="header_searchbutton"
              type="submit"
            >
              <SearchIcon />
            </button>
          </form>
        </div>
      </div>

      {/* signin box */}
      <Link to={!user && "/signin"}>
        <div className="header_signin" onClick={handleAuthentication}>
          <span style={{ textDecoration: "none !important" }}>
            Hello {!user ? "Guest" : user.email.split("@")[0]},
          </span>
          <span>{user ? "Sign Out" : "Sign In"}</span>
        </div>
      </Link>

      {/* returns & orders box */}
      <Link to={user ? "/orders" : "/signin"}>
        <div className="header_returns">

          <span>Returns</span>
          <span>& Orders</span>
        </div>
      </Link>

      {/* cart box */}
      <Link to={user ? "/cart" : "/signin"}>
        <div className="header_cart">
          <ShoppingCartIcon />
          <span>{basket?.length}</span> {/*? is used for error handling */}
        </div>
      </Link>
    </div>
  );
};
export default Header;

import { useContext, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faUser} from '@fortawesome/free-regular-svg-icons'
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import {faXmark} from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";
import { ShopContext } from "../../context/shopContext";
import Cart from "../Cart/Cart";
import axios from 'axios'
import "./navbar.css";

import logo from "./../../assests/images/logo.png";




export default function Navbar() {
  
  const {getCartCount,openBasket,setOpenBasket} = useContext(ShopContext)
  
  let [categories,setcategories]= useState([])
  async function getCategories(){
    let data= await axios.get("https://fakestoreapi.com/products/categories")
    setcategories(data.data)
    
  }
  
  useEffect(() => {
   getCategories()
  }, []);
  const [menu ,setMenu]=useState()
  const Showmenu=() => {
    setMenu('show-menu-links')
  }
  const Hidemenu =() => {
    setMenu('hide-menu-links')
  }
  

  const styles ={
    open: {
        display: openBasket ? " " : "none",
      },
  }

  return (
    <>
      <div className="header">
        <div className="container">
          <img className="logo" src={logo} alt="" />
          <div className="links">
            <ul className="menu" id={menu} >
              <li className="xmark">
                <FontAwesomeIcon onClick={Hidemenu} icon={faXmark} ></FontAwesomeIcon>
              </li>
              <li>
                <Link to="">{categories[3]}</Link>
              </li>
              <li>
                <Link to="">{categories[2]}</Link>
              </li>
              <li>
                <Link to="">{categories[1]}</Link>
              </li>
              <li>
                <Link to="">{categories[0]}</Link>
              </li>
            </ul>
          </div>
          <div className="icons">
            <span className="icon">
               <FontAwesomeIcon onClick={Showmenu}  icon={faBars} className="bars"/>
            </span>
            <FontAwesomeIcon className="mt-1" icon={faSearch} />
            <div>
              <FontAwesomeIcon icon={faUser} />
              <Link className="login" to="#">login</Link>
            </div>
            <a onClick={() => (setOpenBasket(true))} >
            <FontAwesomeIcon className="shoppingbag" onClick={() => (setOpenBasket(true))} icon={faShoppingBag} />
            <sub>{getCartCount()}</sub>
            </a>
            
          </div>
        </div>
      </div>
      <div className="showCartbasket " style={styles.open} >
        <Cart /> 
      </div>
    </>
  );
}



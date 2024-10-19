import React from "react";
import { useContext,useState,useEffect } from "react";
import { ShopContext } from "../../context/shopContext";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBasketShopping } from "@fortawesome/free-solid-svg-icons";
import { faMoneyCheck } from "@fortawesome/free-solid-svg-icons";
import { faListCheck } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { faTruck } from "@fortawesome/free-solid-svg-icons";
import Undraw from "./../../assests/images/undraw.png";

export default function Confirmation() {
  
  const {price ,information,tempProducts,cartItems}=useContext(ShopContext)

  function getProduct(id) {
    let element = tempProducts.find((product) => product.id == id);

    return element;
  }


  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    const tempData = [];

    for (const items in cartItems) {
      if (cartItems[items] > 0) {
        tempData.push({
          id: items,
          quantity: cartItems[items],
        });
      }
    }
    setCartData(tempData);
  }, [cartItems]);

  
  return (
    <>
      <div className="container checkout">
        <div className="checklink">
          <div>
            <FontAwesomeIcon icon={faBasketShopping} />
            <a href="#">1.Checkout</a>
          </div>
          <div>
            <FontAwesomeIcon icon={faMoneyCheck} />
            <a href="#">2.Payment</a>
          </div>
          <div className="active">
            <FontAwesomeIcon icon={faListCheck} />
            <a href="#">3.Confirmation</a>
          </div>
        </div>
      </div>
      <div className="container confirmation-con">
        <div className="confir1">
          <img src={Undraw} alt="" />
          <h3>Order Confirmed</h3>
          <p>
            Your order have been confirmed, please wait and track your order
          </p>
          <button>Go to track page</button>
        </div>
        <div className="confir2">
          <div>
            <div className="date">
              <p>
                <FontAwesomeIcon  icon={faClock}></FontAwesomeIcon>
                <span>10 days delivery</span>
              </p>
              <p>
                <FontAwesomeIcon icon={faTruck}></FontAwesomeIcon>
                <span>DHL Express</span>
              </p>
            </div>
            <div>
              {
                cartData.map((item) => {
                  let element =getProduct(item.id);
                  return <>
                    <div key={item.id} className="payitem">
                    <p className="itemname">{element.title}</p>
                    <label>{item.quantity}xIDR{element.price}</label>
                    </div>
                  </>
                })
              }
            </div>
            <div className="detail">
              <div>
                <h5>Subtotal</h5>
                <p>Rp {price}</p>
              </div>
              <div>
                <h5>Shipping Cost</h5>
                <p>Rp 0</p>
              </div>
              <div>
                <h5>Packaging</h5>
                <p>Rp 0</p>
              </div>
            </div>
            <div className="result">
              <h5>Grand Total</h5>
              <p>Rp{price}</p>
            </div>
            <div className="shipping">
               <p>Shipping Address</p>
               <p>{information.shipping}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

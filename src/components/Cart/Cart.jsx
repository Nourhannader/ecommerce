import React, { useContext, useEffect, useState  } from "react";
import { ShopContext } from "../../context/shopContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import './Cart.css'
import { Link,useNavigate } from "react-router-dom";

const Cart = () => {
  const { tempProducts, cartItems,setPrice,setShoppingData,setOpenBasket,updataToCart} = useContext(ShopContext);
  let price=0;
  let totalPrice;
  function getProduct(id) {
    let element = tempProducts.find((product) => product.id == id);

    return element;
  }

  const navigate = useNavigate();
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

  const handleIncrease = (id) => {
    setCartData((prevData) =>
      prevData.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
    setShoppingData(cartData)
    updataToCart(id,1)
  };

  const handleDecrease = (id) => {
    setCartData((prevData) =>
      prevData.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
    setShoppingData(cartData)
    updataToCart(id,-1)
  };
  const handleRemove = (id) => {
    setCartData(prevData => prevData.filter(item => item.id !== id));
    setShoppingData(cartData)
  };
   
  const handlePrice = (price)=>{
    setPrice(price)
  }
  
  const CheckoutClicked = () => {
    handlePrice(totalPrice);
    navigate('/checkout')
    setOpenBasket(false);
    
  }

  return (
    <>
      <div>
        <div className="container cartbask">
          { cartData.map((item) => {
            
            let element = getProduct(item.id);
            return (
              <>
                <div className="shoppingcontent">
                  <div className="shoppingdata">
                    <img src={element.image} alt="" />
                    <div>
                      <p>{element.title}</p>
                      <p>Rp {element.price}</p>
                    </div>
                  </div>
                  <div className="shopping">
                    <label htmlFor="packagr">Select Packaging</label>
                    <select name="package" id="material">
                      <option value="default">Default Packaging (Free)</option>
                      <option value="wooden">
                        Wooden Packaging (Rp 50.000)
                      </option>
                    </select>
                    <div className="shoppingbtn">
                      <button className="minus1" onClick={() => handleDecrease(item.id)}>
                        <FontAwesomeIcon icon={faMinus} />
                      </button>
                      <span>{item.quantity}</span>
                      <button className="plus1" onClick={() => handleIncrease(item.id)}>
                        <FontAwesomeIcon icon={faPlus} />
                      </button>
                      <span>Rp {item.quantity*element.price}</span>
                      <button className="remove" onClick={() => handleRemove(item.id)}>
                        <FontAwesomeIcon icon={faTrashCan} />
                      </button>
                    </div>
                  </div>
                  <p className="calcprice">{price=price+(element.price * item.quantity)}</p>
                </div>
                <hr/>
              </>
            );
          })}
           <div className="bill">
             <div className="billprom">
               <label htmlFor="prom" className="me-3">Kode Promo</label>
               <input className="me-3" type="text" id="prom" placeholder="INDONESIA" />
               <span className="text-success">35% OFF</span>
             </div>
             <div className="billcontent">
              <p>Subtotal</p>
              <div>
                <p>{price}</p>
                <p>Rp {totalPrice=price - 0.35 * price}</p>
                
              </div>
             </div>
           </div>
           <button  onClick={CheckoutClicked} className="checkbtn mt-3">Checkout</button>
        </div>
      </div>
    </>
  );
};
export default Cart;

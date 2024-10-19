import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useContext ,useEffect ,useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBasketShopping } from "@fortawesome/free-solid-svg-icons";
import { faMoneyCheck } from "@fortawesome/free-solid-svg-icons";
import { faListCheck } from "@fortawesome/free-solid-svg-icons";
import { ShopContext } from "../../context/shopContext";
import pay1 from './../../assests/images/pay1.png'
import pay2 from './../../assests/images/pay2.png'
import pay3 from './../../assests/images/pay3.png'
import pay4 from './../../assests/images/pay4.png'
import pay5 from './../../assests/images/pay5.png'
import pay6 from './../../assests/images/pay6.png'
import pay7 from './../../assests/images/pay7.png'
import pay8 from './../../assests/images/pay8.png'
import pay9 from './../../assests/images/pay9.png'
import pay10 from './../../assests/images/pay10.png'
import "./checkout.css";

export default function Payment() {
  // // const { values } = useParams();
  const {price ,information,tempProducts,cartItems}=useContext(ShopContext)

  console.log(information);
  
  console.log(tempProducts)
  console.log(cartItems);
  
  
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
          <div className="active">
            <FontAwesomeIcon icon={faMoneyCheck} />
            <a href="#">2.Payment</a>
          </div>
          <div>
            <FontAwesomeIcon icon={faListCheck} />
            <a href="#">3.Confirmation</a>
          </div>
        </div>
      </div>
      <div className="container checkbillcontent">
        <div className="payment-con">
          <div className="detailorder">
            <h1>Detail Order</h1>
            <div className="detail1">
              <div>
                <h5>Subtotal</h5>
                <p>Rp{price} </p>
              </div>
              <div>
                <h5>Shipping Cost</h5>
                <p>Rp 0</p>
              </div>
              <div>
                <h5>Promo Code</h5>
              </div>
              <div>
                <h5>Packaging</h5>
                <p>Rp 0</p>
              </div>
            </div>
            <hr />
            <div className="detail2">
              <h5>Grand Total</h5>
              <p className="totalprice">Rp {price} </p>
            </div>
          </div>
          <div className="paymentdetail">
            <h1>Payment Detail <span>11:55:55</span></h1>
            <p>Please make a payment according with the limit time specified, starting from now</p>
          </div>
        </div>
        <div className="orderdetail billingaddress">
          <h1>Order Detail</h1>
          <div>
            <h6>Order Number</h6>
            <div>
              <p>MTAWEB-3A86D4DB <span className="text-danger ml-3 ">copy</span></p>
              <label>Always remember Order Number for easy tracking</label>
            </div>
          </div>
          <div>
            <h6>Purchase Date</h6>
            <div>
             <p>2019-11-07 14:01:48</p>
            </div>
          </div>
          <div>
            <h6>Items</h6>
            <div>
              {
                cartData.map((item) => {
                  let element =getProduct(item.id);
                  return <>
                    <div key={item.id} className="payitem">
                    <p>{element.title}</p>
                    <label>{item.quantity}xIDR{element.price}</label>
                    </div>
                  </>
                })
              }
            </div>
          </div>
          <div>
            <h6>Name </h6>
             <div>
               <p>{information.fullname}</p>
             </div>
          </div>
          <div>
            <h6>Phone</h6>
            <div>
              <p>{information.phone}</p>
            </div>
          </div>
          <div>
            <h6>Email</h6>
            <div>
              <p>{information.email}</p>
            </div>
          </div>
          <div>
            <h6>Shipping Address</h6>
            <div>
              <p>{information.shipping}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container paymentmethod">
        <div>
          <input type="radio" name="payment" id="pay1" />
          <label htmlFor="pay1">BNI Cicilan 0%</label>
          <div>
            <img src={pay1} alt="" />
          </div>
        </div>
        <div>
          <input type="radio" name="payment" id="pay2" />
          <label htmlFor="pay2">Mandiri Cicilan 0%</label>
          <div>
            <img src={pay2} alt="" />
          </div>
        </div>
        <div>
          <input type="radio" name="payment" id="pay3" />
          <label htmlFor="pay3">Bank Transfer</label>
          <div>
            <img src={pay3} alt="" />
          </div>
        </div>
        <div>
          <input type="radio" name="payment" id="pay4" />
          <label htmlFor="pay4">Credit Card</label>
          <div>
            <img src={pay4} alt="" />
            <img src={pay5} alt="" />
          </div>
        </div>
        <div>
          <input type="radio" name="payment" id="pay5" />
          <label htmlFor="pay5">Credit Card Cicilan 0% (Danamon, UOB & Standard Chartered)</label>
          <div>
            <img src={pay6} alt="" />
            <img src={pay7} alt="" />
            <img src={pay8} alt="" />
          </div>
        </div>
        <div>
          <input type="radio" name="payment" id="pay6" />
          <label htmlFor="pay6">GO-PAY</label>
          <div>
            <img src={pay9} alt="" />
          </div>
        </div>
        <div>
          <input type="radio" name="payment" id="pay7" />
          <label htmlFor="pay7">Krdivo</label>
          <div>
            <img src={pay10} alt="" />
          </div>
        </div>
      </div>
      <div className="container procced">
        <Link to="/confirmation">Proceed Payment</Link>
      </div>
    </>
  );
}

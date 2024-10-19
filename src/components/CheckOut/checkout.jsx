import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { ShopContext } from "../../context/shopContext";
import { useState ,useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBasketShopping } from "@fortawesome/free-solid-svg-icons";
import { faMoneyCheck } from "@fortawesome/free-solid-svg-icons";
import { faListCheck } from "@fortawesome/free-solid-svg-icons";
import "./checkout.css";

export default function CheckOut() {
   
  const { price,setInformation } = useContext(ShopContext);
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    phone: '',
    shipping: '',
    country:'Egypt',
    state:'Aswan',
    city:'Cairo',
    zipcode:'',
    courier:'DHL'
  })

  const [errors, setErrors] = useState({})
  const navigate = useNavigate();
  
  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData({
        ...formData, [name] : value
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault()
    const validationErrors = {}
    if(!formData.fullname) {
        validationErrors.fullname = "username is required"
    }

    if(!formData.email) {
        validationErrors.email = "email is required"
    } else if(!/\S+@\S+\.\S+/.test(formData.email)){
        validationErrors.email = "email is not valid"
    }

    if(!formData.phone) {
        validationErrors.phone = "Numberphone is required"
    } 

    if(!formData.shipping) {
      validationErrors.shipping = "shipping address is required"
    } 
     
    if(!formData.zipcode) {
      validationErrors.zipcode = "zip code is required"
    } 
    setErrors(validationErrors)

    if(Object.keys(validationErrors).length === 0) {
        alert("Form Submitted successfully")
        setInformation(formData)
        navigate('/payment');
    }

  }

  return (
    <>
      <div className="container checkout">
        <div className="checklink">
          <div className="active">
            <FontAwesomeIcon icon={faBasketShopping} />
            <a href="#">1.Checkout</a>
          </div>
          <div>
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
        <div className="detailorder">
          <h1>Detail Order</h1>
          <div className="detail1">
            <div>
              <h5>Subtotal</h5>
              <p>Rp {price} </p>
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
            <p className="totalprice">Rp{price}</p>
          </div>
        </div>
        <div className="billingaddress">
          <form action="" onSubmit={handleSubmit} >
            <div className="forminput">
            <h1>Billing Address</h1>
            <div className="form-group">
              <label htmlFor="fullname">Fullname</label>
              <input
                type="text"
                className="form-control"
                id="fullname"
                name="fullname"
                placeholder="Ex: Rasyidin Arsyad Nasution"
                onChange={handleChange} 
              />
              {errors.fullname && <span>{errors.fullname}</span>}  
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="text"
                className="form-control"
                id="email"
                name="email"
                placeholder="Ex: rasyid.arsyad@gmail.com"
                onChange={handleChange} 
              />
              {errors.email && <span>{errors.email}</span>}  
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="text"
                className="form-control"
                id="phone"
                name="phone"
                placeholder="Ex: 089111888999"
                onChange={handleChange} 
              />
              {errors.phone && <span>{errors.phone}</span>}  
            </div>
            <div className="form-group">
              <label htmlFor="shipping">Shipping Address</label>
              <input
                type="text"
                className="form-control"
                id="shipping"
                name="shipping"
                placeholder="Ex: Patriot Street Number 666, Ngaklik, Sleman"
                onChange={handleChange} 
              />
              {errors.shipping && <span>{errors.shipping}</span>}  
            </div>
            <div className="form-group">
              <label htmlFor="country">Country</label>
              <select className="form=control" name="country" id="country" onChange={handleChange} >
                <option value="egypt" selected>
                  Egypt
                </option>
                <option value="usa">USA</option>
                <option value="	Palestinian territories">
                  {" "}
                  Palestinian territories
                </option>
              </select>
               
            </div>
            <div className="form-group">
              <label htmlFor="state">State/Province</label>
              <select className="form=control" name="state" id="state" onChange={handleChange} >
                <option value="Aswan" selected>
                  Aswan
                </option>
                <option value="cario">Cario</option>
                <option value="Alexandria">Alexandria</option>
              </select>
              {errors.state && <span>{errors.state}</span>}  
            </div>
            <div className="cityzip">
              <div className="form-group col-md-5 ">
                <label htmlFor="city">City</label>
                <select className="form=control" name="city" id="city" onChange={handleChange} >
                  <option value="cairo" selected>
                    Cairo
                  </option>
                  <option value="luxor">Luxor</option>
                  <option value="Rosetta">Rosetta</option>
                </select>
                {errors.city && <span>{errors.city}</span>}  
              </div>
              <div className="form-group">
                <label htmlFor="zip">Zip Code</label>
                <input type="text" className="zip" placeholder="Ex: 94024" name="zipcode" onChange={handleChange}  />
                {errors.zipcode && <span>{errors.zipcode}</span>}  
              </div>
            </div>
            <div className="form-group col">
              <label htmlFor="courier">Choose Courier</label>
              <select className="form=control" name="courier" id="courier" onChange={handleChange} >
                <option value="DHL" selected>
                  DHL
                </option>
                <option value="FedExCorp">FedExCorp</option>
                <option value="DTDC">DTDC</option>
              </select>
              
            </div>
           </div>  
           <div className="formbtn">
              
              <button type="button">Continue Shopping</button>
            
              <button type="submit">Place My Order</button>
            </div>     
          </form>
          
        </div>
      </div>
      
    </>
  );
}

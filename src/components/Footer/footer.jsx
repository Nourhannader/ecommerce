import image1 from "./../../assests/images/image25.png";
import image2 from "./../../assests/images/image26.png";
import image3 from "./../../assests/images/image27.png";
import image4 from "./../../assests/images/image28.png";
import image5 from "./../../assests/images/image29.png";
import image6 from "./../../assests/images/image32.png";
import image7 from "./../../assests/images/image33.png";
import image8 from "./../../assests/images/image34.png";
import image9 from "./../../assests/images/image35.png";
import image10 from "./../../assests/images/image36.png";
import image from "./../../assests/images/image30.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faFacebook} from '@fortawesome/free-brands-svg-icons'
import {faYoutube} from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";


import "./footer.css";
export default function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footer1">
          <div className="container">
            <div>
              <img src={image1} alt="" />
            </div>
            <div>
              <img src={image2} alt="" />
            </div>
            <div>
              <img src={image3} alt="" />
            </div>
            <div>
              <img src={image4} alt="" />
            </div>
            <div>
              <img src={image5} alt="" />
            </div>
            <div>
              <img src={image6} alt="" />
            </div>
            <div>
              <img src={image7} alt="" />
            </div>
            <div>
              <img src={image8} alt="" />
            </div>
            <div>
              <img src={image9} alt="" />
            </div>
            <div>
              <img src={image10} alt="" />
            </div>
          </div>
        </div>
        <div className="footer2">
            <div className="container">
                 <div className="info">
                    <div className="image">
                        <img src={image} alt="" />
                    </div>
                    <div className="address">
                        <h4>Address</h4>
                        <label>Store&Office</label>
                        <label>Jl.SetrasariKulonIII,No.10/12,</label>
                        <label>Sukarasa,Sukasari,Bandung,</label>
                        <label>JawaBarat,Indonesia40152</label>
                    </div>
                    <div className="hour">
                        <h4>OfficeHour</h4>
                        <p>Monday/Sunday</p>
                        <label>10.00/18.00</label>
                    </div>
                 </div>
                 <div className="geton">
                    <h3>Get in touch</h3>
                    <div>
                        <h6>Phone</h6>
                        <p>02220277564</p>
                    </div>
                    <div>
                        <h6>Service Center</h6>
                        <p>08112338899</p>
                    </div>
                    <div>
                        <h6>Customer Service</h6>
                        <p>08112359988</p>
                    </div>
                    <div className="icons">
                        <FontAwesomeIcon icon={faFacebook} className="br"></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faInstagram} className="br"></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faTwitter} className="br"></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faYoutube} className="br"></FontAwesomeIcon>
                    </div>
                 </div>
                 <div className="useful">
                    <h3>Useful Link</h3>
                    <p>Warranty & Complaints</p>
                    <p>Order & Shipping</p>  
                    <p>Tracking Order</p>
                    <p>About Us</p> 
                    <p>Repair</p>
                    <p>Terms</p>
                    <p>FAQ</p>
                 </div>
                 <div className="Campaign">
                    <h3>Campaign</h3>
                    <p>Mengenal Arti Cukup </p>
                    <p>Tell Your Difference</p>
                    <p>Waykambas</p>
                    <p>Rebrand</p>
                    <p>Gallery</p>
                    <p>Singo</p>
                    <p>Rakai</p>
                 </div>
                 <div className="categories">
                  <h3>Categories</h3>
                  <a href="#">women's clothing</a>
                  <a href="#">men's clothing</a>
                  <a href="#">jewelery</a>
                  <a href="#">electronics</a>
                 </div>
            </div>

        </div>
      </div>
    </>
  );
}

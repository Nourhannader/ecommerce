import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Slider from "../Slider/slider";
import Nacklace from "./../../assests/images/nacklace.jpg";
import Heels from "./../../assests/images/heels.jpg";
import ClothTravel from "./../../assests/images/travel.jpg";
import Testimonials from "./../../assests/images/testimonials.jpg";
import instimg1 from "./../../assests/images/image2.jpg";
import instimg2 from "./../../assests/images/image1.jpg";
import instimg3 from "./../../assests/images/image3.jpg";
import instimg4 from "./../../assests/images/image4.jpg";
import instimg5 from "./../../assests/images/image5.jpg";
import line from "./../../assests/images/Vector.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import "./home.css";
import axios from "axios";

export default function Home() {
  /* show all products style*/
  let [showAll, setshowall] = useState(false);
  let [showButton, setShowButton] = useState(true);
  const styles = {
    show: {
      height: showAll ? "auto" : "86vh",
    },
    hide: {
      display: showButton ? "" : "none",
    },
  };
  /*storage all prodducts*/
  let [products, setproducts] = useState([]);
  async function getproducts() {
    let apiProducts = await axios.get("https://fakestoreapi.com/products");
    setproducts(apiProducts.data);
  }

  useEffect(() => {
    getproducts();
  }, []);
  /*template*/
  let [tempProduct, setTempProduct] = useState([]);
  async function getTempProducts() {
    let tempProducts = await axios.get("https://fakestoreapi.com/products");
    setTempProduct(tempProducts.data);
  }

  useEffect(() => {
    getTempProducts();
  }, []);
  const categoryCheck = (productCategory) => {
    const newProducts = tempProduct.filter(
      (product) => product.category == productCategory
    );

    setproducts(newProducts);
    setShowButton(false);
  };

  return (
    <>
      <Slider />
      <div className="container cont-text ">
        <div className="text">
          <h4>
            <span>silver</span> jewellery
          </h4>
          <p>shine bright and make a statement with a necklace</p>
          <Link>Discover Now</Link>
          <img src={Nacklace} alt="" />
        </div>
        <div className="text">
          <h4>
            <span>Comfortable</span> Heels
          </h4>
          <p>
            From destination weddings to business trips, these are your go-to
            travel shoes.
          </p>
          <Link>Discover Now</Link>
          <img src={Heels} alt="" />
        </div>
      </div>
      <div className="lastest">
        <div className="container">
          <h3>Lastest Deals</h3>
          <div className="row   g-4">
            {tempProduct
              .filter(
                (prod) =>
                  prod.id == 3 || prod.id == 4 || prod.id == 7 || prod.id == 19
              )
              .map((filterProd) => (
                <Link
                  className="linkproduct"
                  to={"productDetails/" + filterProd.id}
                >
                  <div className="col m-2">
                    <div>
                      <img
                        src={filterProd.image}
                        className="card-img-top"
                        alt=""
                      />
                      <div className="card-body">
                        <h5 className="card-title">{filterProd.title}</h5>
                        <p className="card-text">Rp {filterProd.price} $ </p>
                        <div className="like-part">
                          <span>
                            <FontAwesomeIcon
                              className="like-icon"
                              icon={faHeart}
                            ></FontAwesomeIcon>
                          </span>
                          <button>
                            <Link>Add to card</Link>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
      <div className="recent">
        <h3>Recent News</h3>
        <div className="content">
          <div>
            <p>Where To Travel</p>
            <h4>
              Matoa Where To Travel?
              <br /> Yogyakarta
            </h4>
            <button>Discover</button>
          </div>
          <div className="image">
            <div>
              <img src={line} className="w-100 imgline" alt="" />
              <img src={line} className="w-100 imgline " alt="" />
              <img src={line} className="w-100 imgline " alt="" />
              <img src={ClothTravel} className="travelimg" alt="" />
              <img src={line} className="w-100 imgline1 " alt="" />
              <img src={line} className="w-100 imgline1" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="containerproducts">
        <div className="container">
          <div className="linkscat">
            <Link onClick={() => setproducts(tempProduct)}>All</Link>
            <Link onClick={() => categoryCheck("women's clothing")}>
              Women's clothing
            </Link>
            <Link onClick={() => categoryCheck("men's clothing")}>
              Men's clothing
            </Link>
            <Link onClick={() => categoryCheck("jewelery")}>Jewelery</Link>
            <Link onClick={() => categoryCheck("electronics")}>
              Electronics
            </Link>
          </div>
          <div className="linkscat2">
            <select
              onChange={(e) => {
                const value = e.target.value;
                if (value === "all") {
                  setproducts(tempProduct);
                } else {
                  categoryCheck(value);
                }
              }}
            >
              <option value="all">All</option>
              <option value="women's clothing">Women's clothing</option>
              <option value="men's clothing">Men's clothing</option>
              <option value="jewelery">Jewelery</option>
              <option value="electronics">Electronics</option>
            </select>
          </div>
          <div className="products row-cols-md-3 " style={styles.show}>
            {products.map((element) => (
              <Link className="linkproduct" to={"productDetails/" + element.id}>
                <div className="product" key={element.id}>
                  <div className="productimage">
                    <img src={element.image} alt="" />
                  </div>
                  <div className="productcontent">
                    <p>{element.title}</p>
                    <p>Rp {element.price} $</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <button
            onClick={() => {
              setshowall(true);
            }}
            style={styles.hide}
          >
            See More
          </button>
        </div>
      </div>
      <div className="Testimonials">
        <div className="content">
          <div className="image">
            <img src={line} className="w-75 imgline" alt="" />
            <img src={line} className="w-75 imgline" alt="" />
            <img src={line} className="w-75 imgline" alt="" />
            <img src={Testimonials} className="testimg" alt="" />
            <div className="testarrow">
              <FontAwesomeIcon className="arrowleft" icon={faArrowLeft} />
              <FontAwesomeIcon className="arrowright" icon={faArrowRight} />
            </div>
          </div>
          <div className="test-content">
            <h3>Testimonials</h3>
            <p>
              I Love this blouse. It is made of polyester. It is comfortable and
              <br /> suitable for many occasions{" "}
            </p>
            <h5>Gita Savitri</h5>
            <p>Gita Savitri</p>
          </div>
        </div>
      </div>
      <div className="instagram">
        <div className="container"></div>
      </div>
      <div className="instagram">
        <div className="container">
          <h3>Instagram</h3>
          <div className="instagram-images">
            <img src={instimg1} alt="" />
            <img src={instimg2} alt="" />
            <img src={instimg3} alt="" />
            <img src={instimg4} alt="" />
            <img src={instimg5} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

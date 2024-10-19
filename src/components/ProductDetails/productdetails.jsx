import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { ShopContext } from "../../context/shopContext";
import "./productdetails.css";

export default function ProductDetails() {
  const { id: productId } = useParams();
  let [count, setCount] = useState(1);
  let [show, setShow] = useState(false);
  const { tempProducts, addToCart } = useContext(ShopContext);
  const styles = {
    hide: {
      display: show ? "none" : "",
    },
  };

  /*get product*/
  let [product, setProduct] = useState([]);
  async function getProduct() {
    let response = await axios.get(
      `https://fakestoreapi.com/products/${productId}`
    );
    setProduct(response.data);
  }

  useEffect(() => {
    getProduct();
  }, []);

  /*template*/

  const Miuns = () => {
    if (count != 1) {
      count = count - 1;
      setCount(count);
    }
  };

  return (
    <>
      <section>
        <div className="urlofproduct">
          Home / Products / {product.category} / <span>{product.title}</span>
        </div>
        <div className="product-container">
          <div className="productImage">
            <div>
              <img src={product.image} alt="" />
            </div>
          </div>
          <div className="productDetails">
            <h1 className="producttitle">{product.title}</h1>
            <p className="newprice">Rp {product.price} $</p>
            <div className="buttons">
              <button className="miuns" onClick={Miuns}>
                -
              </button>
              <span className="num">{count}</span>
              <button className="plus" onClick={() => setCount(count + 1)}>
                +
              </button>
              <button
                onClick={() => addToCart(product.id, count)}
                className="addcart"
              >
                {" "}
                <FontAwesomeIcon
                  className="iconshop"
                  icon={faCartShopping}
                ></FontAwesomeIcon>
                <Link to={""}>Add to cart</Link>
              </button>
              <button>cicil</button>
            </div>
          </div>
        </div>
      </section>
      <div className="container">
        <div className="productlinks">
          <Link onClick={() => setShow(false)} className="activelink">
            Detail
          </Link>
          <Link onClick={() => setShow(true)}>Warranty</Link>
          <Link onClick={() => setShow(true)}>Custom Engrave</Link>
          <Link onClick={() => setShow(true)}>How to Adjust</Link>
          <Link onClick={() => setShow(true)}>How to Care</Link>
          <Link onClick={() => setShow(true)}>Gallery</Link>
        </div>
        <div className="productlinks2">
          <select
            name=""
            id=""
            onChange={(e) => {
              if (
                e.target.value === "warranty" ||
                e.target.value === "customengrave" ||
                e.target.value === "howtoadjust" ||
                e.target.value === "howtocare" ||
                e.target.value === "gallery"
              ) {
                setShow(true);
              } else {
                setShow(false);
              }
            }}
          >
            <option value="detail" selected>
              Detail
            </option>
            <option value="warranty">Warranty</option>
            <option value="customengrave">Custom Engrave</option>
            <option value="howtoadjust">How to Adjust</option>
            <option value="howtocare">How to Care</option>
            <option value="gallery">Gallery</option>
          </select>
        </div>
        <div className="container content-product">
          <div className="informationproduct " style={styles.hide}>
            <div>
              <h1>Description</h1>
              <p>{product.description}</p>
            </div>
            <div className="text2">
              <h1>Material</h1>
              <p>
                Made of 80% cotton in addition to other Materials that do not
                cause allergies to any skin{" "}
              </p>
            </div>
            <div>
              <h1>Important to Note</h1>
              <p>
                Reading the care labels on clothing is very important because
                labels provide information about the fabric and how to wash it.
                They can tell you if you should wash your garment in cold water
                or warm water, what type of detergent should be used, and what
                temperature should be set for dryer cycles
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container relate">
        <h3>Relate Products</h3>
        <div className="row row-cols-1  g-4 containerproducts">
          {tempProducts
            .filter((prod) => prod.category == product.category)
            .map((filterProd) => (
              <Link  to={"productDetails/" + filterProd.id} >
                <div className="col m-2">
                  <div className="card">
                    <img
                      src={filterProd.image}
                      className="card-img-top"
                      alt=""
                    />
                    <div className="card-body">
                      <h5 className="card-title">
                        {filterProd.title.slice(0, 12)}
                      </h5>
                      <p className="card-text">Rp {filterProd.price} $ </p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </>
  );
}

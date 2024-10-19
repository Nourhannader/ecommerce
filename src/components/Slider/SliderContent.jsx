import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCartShopping} from '@fortawesome/free-solid-svg-icons'


function SliderContent({ activeIndex, sliderImage }) {
  return (
    <section>
      {sliderImage.map((slide, index) => (
        <div
          key={index}
          className={index === activeIndex ? "slides active" : "inactive"}
        >
          <div className="slide-image">
            <img src={slide.url} alt="" />
          </div>
          <div className="slide-content">
            <h3>{slide.title}</h3>
            <p>{slide.description}</p>
            <a className="link-one" href="#">Discover</a>
            <button> <FontAwesomeIcon className="iconshop" icon={faCartShopping}></FontAwesomeIcon>
                <a href="#">add to cart</a></button>
            <button>cicil</button>
          </div>
        </div>
      ))}
    </section>
  );
}

export default SliderContent;
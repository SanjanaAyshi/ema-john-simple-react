import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./ReviewItems.css";
const ReviewItems = (props) => {
  const { handleProductRemove, product } = props;
  const { name, img, price, shipping, quantity } = product;
  return (
    <div className="review-items">
      <div>
        <img src={img} alt="" srcset="" />
      </div>
      <div className="review-item-details-container">
        <div className="review-item-details">
          <p className="product-name" title={name}>
            {name.length > 20 ? name.slice(0, 20) + "..." : name}
          </p>
          <p>
            Price:<span className="orange">${price}</span>
          </p>
          <p>
            <small>Shipping:${shipping}</small>
          </p>
          <p>
            <small>Quantity:{quantity}</small>
          </p>
        </div>
        <div className="delete-container">
          <button
            onClick={() => handleProductRemove(product)}
            className="delete-button"
          >
            <FontAwesomeIcon
              className="delete-icon"
              icon={faTrashAlt}
            ></FontAwesomeIcon>
            {/* <button>Delete</button> */}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewItems;

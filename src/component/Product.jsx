import React from "react";

export default function Product(props) {
  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <img src={props.product.imgs} className="card-img-top" />
        <div className="card-body">
          <h3 className="card-title">{props.product.MobName}</h3>
          <h5 className="card-title">₹ {props.product.Price}</h5>
          Quantity: -
          <div
            className="btn-group"
            role="group"
            aria-label="Basic mixed styles example"
          >
            <button
              type="button"
              className="btn btn-danger"
              onClick={() => {
                props.decrementQuantity(props.index);
              }}
            >
              -
            </button>
            <button type="button" className="btn btn-warning">
              {props.product.Quantity}
            </button>
            <button
              type="button"
              className="btn btn-success"
              onClick={() => {
                props.incrementQuantity(props.index);
              }}
            >
              +
            </button>
          </div>
          <div className="total-price">
            <b>Total Price: - {props.product.Quantity * props.product.Price}</b>
          </div>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" className="btn btn-danger">
            Buy This
          </a>
        </div>
      </div>
    </>
  );
}

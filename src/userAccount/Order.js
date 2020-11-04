import React from "react";
import { myOrderDetails } from "../metadata/data";
import "../styles/order.css";
export default class Order extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className={`${!this.props.isMobileDevice ? "boxing" : ""}`}>
        {!this.props.isMobileDevice ? (
          <h3>My Orders</h3>
        ) : (
          <h4 className="orderSubTitle">Pending Orders</h4>
        )}
        {myOrderDetails.map((order) => {
          return (
            <div
              className={
                this.props.isMobileDevice ? "myMobileOrder" : "MyDesktopOrder"
              }
              key={order.id}
            >
              <img className="myOrderPoster" src={order.poster} alt="poster" />
              <span className="myOrderPrice">
                Credit Card Payment <br />
                <strong style={{ color: "black" }}>
                  Rs {order.orderprice}
                </strong>
              </span>
              <div className="myOrderContainerDesktop">
                <span className="orderid">Order #{order.orderid}</span>
                <br />
                <p className="orderdesc">{order.content}</p>
                <br />
                <br />
                <p className="orderDate">
                  {"Express Delivery by" + order.date}
                </p>
              </div>
              <span className="arrow">&gt;</span>
              <br />
              <button
                className={`progress ${
                  order.onProcess ? "pending" : "completed"
                }`}
              >
                Pending
              </button>
            </div>
          );
        })}
      </div>
    );
  }
}

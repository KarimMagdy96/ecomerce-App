import React from "react";
import Helmet from "../../Components/Helmet/Helmet";
import CommonSection from "../../Components/Ui/CommonSection";
import tdImg from "../../assets/images/arm-chair-01.jpg";
import { motion } from "framer-motion";
import { CartAction } from "../../redux/slice/CartSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
export default function Cart() {
  const cartItems = useSelector((state) => state.Cart.CartItem);
  const totalAmount = useSelector((state) => state.Cart.totalAmount);
  const dispatch = useDispatch(CartAction.deleteItems());
  return (
    <Helmet title="Cart">
      <CommonSection title="Shopping Cart" />
      <div className="section mt-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-9">
              {cartItems.length === 0 ? (
                <h2 className="fs-4 text-center vh-100  ">
                  No Items Added To The Cart
                </h2>
              ) : (
                <table className="table bordered pt-5   ">
                  <thead>
                    <tr>
                      <th>Image</th>
                      <th>Title</th>
                      <th>Price</th>
                      <th>Qty</th>
                      <th>Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map((item, i) => (
                      <Tr item={item} key={i} />
                    ))}
                  </tbody>
                </table>
              )}
            </div>
            <div className="col-lg-3 ">
              <h6 className="d-flex justify-content-between align-items-center">
                Subtotal
                <span className="fs-4 fw-bold">$ {totalAmount}</span>
              </h6>
              <p className=" fs-6 mt-2">
                Taxes and Shipping Will be Calculated In Checkout
              </p>
              <div>
                <Link to="/Checkout">
                  <button className="buyBtn w-100 ">Checkout</button>
                </Link>
                <Link to="/shop">
                  <button className="buyBtn w-100 my-3">
                    <Link to="/shop">Continue Shopping</Link>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Helmet>
  );
}
const Tr = ({ item }) => {
  const dispatch = useDispatch();
  const deleteProducts = () => {
    dispatch(CartAction.deleteItems(item.id));
  };
  return (
    <tr>
      <td>
        <img src={item.imgUrl} alt="" />
      </td>
      <td>{item.productName}</td>
      <td>{item.price}$</td>
      <td>{item.quantity}</td>
      <td>
        <i onClick={deleteProducts} class="ri-delete-bin-line"></i>
      </td>
    </tr>
  );
};

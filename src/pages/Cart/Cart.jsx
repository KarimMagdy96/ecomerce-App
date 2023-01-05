import React from "react";
import Helmet from "../../Components/Helmet/Helmet";
import CommonSection from "../../Components/Ui/CommonSection";
import tdImg from "../../assets/images/arm-chair-01.jpg";
import { motion } from "framer-motion";
import { CartAction } from "../../redux/slice/CartSlice";
import { useDispatch, useSelector } from "react-redux";

export default function Cart() {
  const cartItems = useSelector((state) => state.Cart.CartItem);
  const dispatch = useDispatch(CartAction.deleteItems());
  return (
    <Helmet title="Cart">
      {console.log(cartItems)}
      <CommonSection title="Shopping Cart" />
      <div className="section">
        <div className="container">
          <div className="row">
            <div className="col-lg-9">
              {cartItems.length === 0 ? (
                <h2 className="fs-4 text-center vh-100 pt-5 ">
                  No Items Added To The Cart
                </h2>
              ) : (
                <table className="table bordered">
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
            <div className="col-lg-3"></div>
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
        {console.log(item.id)}
        <i onClick={deleteProducts} class="ri-delete-bin-line"></i>
      </td>
    </tr>
  );
};

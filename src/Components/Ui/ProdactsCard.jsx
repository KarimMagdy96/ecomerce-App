import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { CartAction } from "../../redux/slice/CartSlice";
import { toast } from "react-toastify";
export default function ProdactsCard({ item }) {
  const dispatch = useDispatch();
  const addTOCart = () => {
    dispatch(
      CartAction.addItem({
        id: item.id,
        productName: item.productName,
        price: item.price,
        image: item.imgUrl,
      })
    );
    toast.success("Product Added Successfully");
  };

  return (
    <div className="  col-lg-3  col-md-6 mb-2 ">
      <div className="productItem ">
        <div className="productImg overflow-hidden">
          <motion.img
            whileHover={{ scale: 1.3 }}
            src={item.imgUrl}
            alt="prodact"
          />
        </div>
        <div className="p-2 productInfo">
          <h3 className="productName">
            <Link to={`/shop/${item.id}`}>{item.productName}</Link>
          </h3>
          <span className="">{item.category}</span>
        </div>
        <div className="productCardBottom d-flex align-items-center justify-content-between p-2">
          <span className="price">${item.price}</span>
          <motion.span whileTap={{ scale: 1.2 }} onClick={addTOCart}>
            <i className="ri-add-line"></i>
          </motion.span>
        </div>
      </div>
    </div>
  );
}

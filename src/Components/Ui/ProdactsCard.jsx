import React from "react";
import { motion } from "framer-motion";
import prodactImg from "../../assets/images/arm-chair-01.jpg";
import { Link } from "react-router-dom";
export default function ProdactsCard() {
  return (
    <div className="  col-lg-3  col-md-4">
      <div className="productItem ">
        <div className="productImg overflow-hidden">
          <motion.img
            whileHover={{ scale: 1.3 }}
            src={prodactImg}
            alt="prodact"
          />
        </div>
        <div className="p-2 productInfo">
          <h3 className="productName">
            <Link to="/shop/id">Modern ArmChair</Link>
          </h3>
          <span className="">Chair</span>
        </div>
        <div className="productCardBottom d-flex align-items-center justify-content-between p-2">
          <span className="price">$299</span>
          <motion.span whileTap={{ scale: 1.2 }}>
            <i class="ri-add-line"></i>
          </motion.span>
        </div>
      </div>
    </div>
  );
}

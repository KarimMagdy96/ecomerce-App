import React from "react";
import prodactImg from "../../assets/images/arm-chair-01.jpg";
export default function ProdactsCard() {
  return (
    <>
      <div className="productItem">
        <div className="productImg">
          <img src={prodactImg} alt="prodact" />
        </div>
        <div className="productName">Modern ArmChair</div>
        <span>Chair</span>
        <div className="productCardBottom">
          <span className="price">$299</span>
          <span>
            <i class="ri-add-line"></i>
          </span>
        </div>
      </div>
    </>
  );
}

import { motion } from "framer-motion";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import products from "../../assets/data/products";
import Helmet from "../../Components/Helmet/Helmet";
import CommonSection from "../../Components/Ui/CommonSection";
export default function Prodactdetails() {
  const [tab, setTab] = useState("desc");
  const { id } = useParams();
  const product = products.find((item) => item.id === id);
  const {
    imgUrl,
    productName,
    price,
    avgRating,
    reviews,
    description,
    shortDesc,
  } = product;
  return (
    <>
      <Helmet title={productName}>
        <CommonSection title={productName} />
        <section className="pt-5">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <img src={imgUrl} alt="product" />
              </div>
              <div className="col-lg-6">
                <div className="prodauctDetailes">
                  <h2>{productName}</h2>
                  <div className="prodactRating d-flex align-items-center gap-5 mb-3">
                    <div>
                      <span>
                        <i class="ri-star-fill"></i>
                      </span>
                      <span>
                        <i class="ri-star-fill"></i>
                      </span>
                      <span>
                        <i class="ri-star-fill"></i>
                      </span>
                      <span>
                        <i class="ri-star-fill"></i>
                      </span>
                      <span>
                        <i class="ri-star-half-line"></i>
                      </span>
                    </div>
                    <p>
                      (<span>{avgRating}</span> Rating)
                    </p>
                  </div>
                  <span className="productPrice">${price}</span>
                  <p className="mt-3">{shortDesc}</p>
                  <motion.button whileTap={{ scale: 1.2 }} className="buyBtn">
                    Add To Cart
                  </motion.button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="tabWraaper d-flex align-items-center gap-5">
                  <h6
                    className={`${tab === "desc" ? "activeTab" : ""}`}
                    onClick={() => setTab("desc")}
                  >
                    Description
                  </h6>
                  <h6
                    className={`${tab === "rev" ? "activeTab" : ""}`}
                    onClick={() => setTab("rev")}
                  >
                    Reviews ({reviews.length})
                  </h6>
                </div>
                {tab === "desc" ? (
                  <div className="tabContent mt-5">
                    <p>{description}</p>
                  </div>
                ) : (
                  <div className="productReview mt-5">
                    <div className="reviewWrapper">
                      <ul>
                        {reviews.map((item, i) => (
                          <li key={i}>
                            <span>{item.rating} (rating)</span>
                            <p>{item.text}</p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </Helmet>
    </>
  );
}

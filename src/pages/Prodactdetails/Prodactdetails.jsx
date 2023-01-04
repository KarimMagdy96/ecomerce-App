import { motion } from "framer-motion";
import React, { useRef, useState } from "react";
import { useParams } from "react-router-dom";
import products from "../../assets/data/products";
import Helmet from "../../Components/Helmet/Helmet";
import ProductsList from "../../Components/Ui/ProductsList";
import CommonSection from "../../Components/Ui/CommonSection";
export default function Prodactdetails() {
  const [tab, setTab] = useState("desc");
  const reviewUser = useRef("");
  const reviewMsg = useRef("");
  const [rate, setrate] = useState(null);
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
    category,
  } = product;
  const ratedProdacts = products.filter((item) => item.category === category);
  const submitHandler = (e) => {
    e.preventDefault();
    const reviewUserName = reviewUser.current.value;
    const reviewUserMsg = reviewMsg.current.value;
  };
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
                  <div className="d-flex justify-content-start  gap-5 align-items-center">
                    <span className="productPrice">${price}</span>
                    <span>Category: {category}</span>
                  </div>
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
                        {reviews?.map((item, i) => (
                          <li key={i} className="mb-4">
                            <h6>Karim</h6>
                            <span>{item.rating} (rating)</span>
                            <p>{item.text}</p>
                          </li>
                        ))}
                      </ul>
                      <div className="reviewForm ">
                        <h4>Leave Your Experience</h4>
                        <form action="" onSubmit={submitHandler}>
                          <div className="formGroup">
                            <input
                              type="text"
                              placeholder="Enter name"
                              ref={reviewUser}
                            />
                          </div>
                          <div className="formGroup d-flex align-items-center gap-5">
                            <span
                              onClick={() => {
                                setrate(1);
                              }}
                            >
                              1<i class="ri-star-fill"></i>
                            </span>
                            <span
                              onClick={() => {
                                setrate(2);
                              }}
                            >
                              2<i class="ri-star-fill"></i>
                            </span>
                            <span
                              onClick={() => {
                                setrate(3);
                              }}
                            >
                              3<i class="ri-star-fill"></i>
                            </span>
                            <span
                              onClick={() => {
                                setrate(4);
                              }}
                            >
                              4<i class="ri-star-fill"></i>
                            </span>
                            <span
                              onClick={() => {
                                setrate(5);
                              }}
                            >
                              5<i class="ri-star-fill"></i>
                            </span>
                            <span>
                              6<i class="ri-star-fill"></i>
                            </span>
                          </div>
                          <div className="formGroup">
                            <textarea
                              ref={reviewMsg}
                              rows="4"
                              type="text"
                              placeholder="Review Massage"
                            />
                          </div>
                          <button className="buyBtn">Submit</button>
                        </form>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="col-lg-12 mt-5">
                <h2 className="relatedTittle">You may also like</h2>
              </div>
              <ProductsList data={ratedProdacts} />
            </div>
          </div>
        </section>
      </Helmet>
    </>
  );
}

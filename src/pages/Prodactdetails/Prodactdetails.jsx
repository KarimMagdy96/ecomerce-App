import React from "react";
import { useParams } from "react-router-dom";
import products from "../../assets/data/products";
import Helmet from "../../Components/Helmet/Helmet";
import CommonSection from "../../Components/Ui/CommonSection";

export default function Prodactdetails() {
  const { id } = useParams();
  const product = products.find((item) => item.id === id);
  const {
    imgUrl,
    productName,
    price,
    avgRating,
    review,
    discription,
    shortDesc,
  } = product;
  return (
    <>
      <Helmet title="Products Details">
        <CommonSection />
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
                  <button className="buyBtn">Add To Cart</button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Helmet>
    </>
  );
}

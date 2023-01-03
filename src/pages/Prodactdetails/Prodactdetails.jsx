import React from "react";
import { useParams } from "react-router-dom";
import products from "../../assets/data/products";
import Helmet from "../../Components/Helmet/Helmet";
import CommonSection from "../../Components/Ui/CommonSection";

export default function Prodactdetails() {
  const { id } = useParams();
  const product = products.find((item) => item.id === id);
  const { imgUrl, ProdactName, price, avgRating, review, discription } =
    product;
  return (
    <>
      <Helmet title="Products Details">
        <CommonSection />
        <section className="pt-0">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <img src={imgUrl} alt="product" />
              </div>
              <div className="col-lg-6"></div>
            </div>
          </div>
        </section>
      </Helmet>
    </>
  );
}

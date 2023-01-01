import React, { useEffect, useState } from "react";
import Helmate from "../../Components/Helmet/Helmate";
import heroImg from "../../assets/images/hero-img.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Services from "../../Components/Services/Services";
import ProductsList from "../../Components/Ui/ProductsList";
import prodacts from "../../assets/data/products";
export default function Home() {
  const [data, setdata] = useState(prodacts);
  const year = new Date().getFullYear();
  useEffect(() => {
    const filterdProdacts = prodacts.filter(
      (item) => item.category === "chair"
    );
    setdata(filterdProdacts);
  }, []);
  return (
    <Helmate title={"Home"}>
      {console.log(data)}
      <section className="heroSection">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-6">
              <div className="heroContent">
                <p className="heroSubTittle">Trending Products in {year}</p>
                <h2>Make Your Interior More Minimalists & Modern</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
                  eius esse accusantium accusamus veritatis id eaque sed quia
                  consequatur vel? Aliquid, modi explicabo? Fuga, fugiat.
                </p>
                <motion.button whileTap={{ scale: 1.2 }} className="buyBtn">
                  <Link className="w-100" to="/shop">
                    SHOP NOW
                  </Link>
                </motion.button>
              </div>
            </div>
            <div className="col-md-6 col-lg-6">
              <div className="heroImg">
                <img src={heroImg} alt="hero img" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Services />
      <section className="trendingProducts">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="sectionTitle">Trending Products</h2>
            </div>
            <ProductsList data={data} />
          </div>
        </div>
      </section>
    </Helmate>
  );
}

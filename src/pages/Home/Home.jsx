import React from "react";
import Helmate from "../../Components/Helmet/Helmate";
import heroImg from "../../assets/images/hero-img.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Services from "../../Components/Services/Services";
import ProductsList from "../../Components/Ui/ProductsList";
export default function Home() {
  const year = new Date().getFullYear();
  return (
    <Helmate title={"Home"}>
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
            <ProductsList />
          </div>
        </div>
      </section>
    </Helmate>
  );
}

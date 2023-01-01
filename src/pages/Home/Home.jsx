import React, { useEffect, useState } from "react";
import Helmet from "../../Components/Helmet/Helmet";
import heroImg from "../../assets/images/hero-img.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import countImg from "../../assets/images/counter-timer-img.png";
import Services from "../../Components/Services/Services";
import ProductsList from "../../Components/Ui/ProductsList";
import products from "../../assets/data/products";
import Clock from "../../Components/Ui/Clock";
export default function Home() {
  const [trendingProducts, setTrendingProducts] = useState([]);
  const [bestSalesProducts, setBestSalesProducts] = useState([]);
  const year = new Date().getFullYear();
  useEffect(() => {
    const filteredTreadingProducts = products.filter(
      (item) => item.category === "chair"
    );
    const filteredBestSalesProducts = products.filter(
      (item) => item.category === "sofa"
    );
    setTrendingProducts(filteredTreadingProducts);
    setBestSalesProducts(filteredBestSalesProducts);
  }, []);
  return (
    <Helmet title={"Home"}>
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
            <ProductsList data={trendingProducts} />
          </div>
        </div>
      </section>
      <section className="bestSales">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="sectionTitle">Best Sales</h2>
            </div>
            <ProductsList data={bestSalesProducts} />
          </div>
        </div>
      </section>
      <section className="timerCounter">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="clockTopContent">
                <h4 className="text-white fs-6 mb-2">Limited Offers</h4>
                <h3 className="text-white fs-5 mb-3">Quality ArmChair</h3>
              </div>
              <Clock />
              <motion.button
                whileTap={{ scale: 1.2 }}
                className="buyBtn storeBtn"
              >
                <Link to="/shop">Visit Store</Link>
              </motion.button>
            </div>
            <div className="col-lg-6 col-md-6 text-end ">
              <img src={countImg} alt="chair img" />
            </div>
          </div>
        </div>
      </section>
    </Helmet>
  );
}

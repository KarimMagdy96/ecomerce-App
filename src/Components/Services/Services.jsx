import React from "react";
import { motion } from "framer-motion";
import serviceData from "../../assets/data/serviceData";
export default function Services() {
  return (
    <>
      <section className="services">
        <div className="container">
          <div className="row">
            {serviceData.map((item, i) => (
              <div key={i} className="col-md-6 col-lg-3 p-1">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="servicesItem"
                  style={{ background: `${item.bg}` }}
                >
                  <span>
                    <i class={item.icon}></i>
                  </span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.subtitle}</p>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

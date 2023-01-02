import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <>
      <footer className="footer ">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="logo">
                <div className="logoName">
                  <h1 className="text-white">KMarket</h1>
                </div>
              </div>
              <p className="footerText mt-4">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Inventore mollitia delectus dignissimos ratione id aliquam nisi
                quibusdam natus animi adipisci?
              </p>
            </div>
            <div className="col-lg-3 text-white">
              <div className="footerLinks">
                <h4 className="footerLinksTitle">Top Categories</h4>
                <ul className=" p-0 text-muted">
                  <li className="mb-2">
                    <Link to="#">Mobil Phones</Link>
                  </li>
                  <li className="mb-2">
                    <Link to="#">Modern Sofas</Link>
                  </li>
                  <li className="mb-2">
                    <Link to="#">Arm Chairs</Link>
                  </li>
                  <li className="mb-2">
                    <Link to="#">Smart Watches</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 ">
              <h4 className="footerLinksTitle text-white">Useful Links</h4>
              <ul className=" p-0 text-muted">
                <li className="mb-2">
                  <Link to="/shop">Shop</Link>
                </li>
                <li className="mb-2">
                  <Link to="/cart">Cart</Link>
                </li>
                <li className="mb-2">
                  <Link to="/login">Login</Link>
                </li>
                <li className="mb-2">
                  <Link to="#">Privacy Polices</Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 text-white">
              <h4 className="footerLinksTitle">Content</h4>
              <ul className=" p-0 text-muted">
                <li className="mb-2">
                  <i class="ri-map-pin-line"></i> <span>123 Giza, Haram</span>
                </li>
                <li className="mb-2">
                  <i class="ri-phone-line"></i> <span>01097220712</span>
                </li>
                <li className="mb-2">
                  <i class="ri-mail-line"></i>{" "}
                  <span>karimmagdy096@gmail.com</span>
                </li>
              </ul>
            </div>
            <div className="col-md-12">
              {" "}
              <p className="footerCopyRight text-center pt-4 pb-3">
                CopyRight {year} made with{" "}
                <span className="text-danger">❤</span> by Karim
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

import React from "react";
import Helmet from "../../Components/Helmet/Helmet";
import CommonSection from "../../Components/Ui/CommonSection";
export default function Checkout() {
  return (
    <>
      <Helmet title="CheckOut">
        <CommonSection title="CheckOut" />
        <section>
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <h6 className="mb-4 fw-bold">Billing Information</h6>
                <form className="billingForm">
                  <div className="formGroup">
                    <input type="text" placeholder="Enter Your Name" />
                  </div>
                  <div className="formGroup">
                    <input type="email" placeholder="Enter Your Email" />
                  </div>
                  <div className="formGroup">
                    <input type="number" placeholder="Enter Your Phone" />
                  </div>
                  <div className="formGroup">
                    <input type="text" placeholder="Street Address" />
                  </div>
                  <div className="formGroup">
                    <input type="text" placeholder="City" />
                  </div>
                  <div className="formGroup">
                    <input type="text" placeholder="Postal Code" />
                  </div>
                  <div className="formGroup">
                    <input type="text" placeholder="Country" />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </Helmet>
    </>
  );
}

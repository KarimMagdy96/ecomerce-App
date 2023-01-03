import React from "react";
import CommonSection from "../../Components/Ui/CommonSection";
import Helmet from "../../Components/Helmet/Helmet";
export default function Shop() {
  return (
    <Helmet title="shop">
      <CommonSection title="Products" />
      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-3">
              <div className="filterWidget">
                <select>
                  <option value="sofa">Sofa</option>
                  <option value="mobile">Mobile</option>
                  <option value="Chair">Chair</option>
                  <option value="Watch">Watch</option>
                </select>
              </div>
            </div>
            <div className="col-lg-3 col-md-3"></div>
            <div className="col-lg-6 col-md-6"></div>
          </div>
        </div>
      </section>
    </Helmet>
  );
}

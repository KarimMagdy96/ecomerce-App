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
                  <option value="sofa">Filter By Category</option>
                  <option value="sofa">Sofa</option>
                  <option value="mobile">Mobile</option>
                  <option value="Chair">Chair</option>
                  <option value="Watch">Watch</option>
                  <option value="Wireless">Wireless</option>
                </select>
              </div>
            </div>
            <div className="col-lg-3 col-md-3">
              <select>
                <option value="sofa">Sort By </option>
                <option value="ascending">Ascending</option>
                <option value="Descending">Descending</option>
              </select>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="searchBox">
                <input type="text" placeholder="Search...." />
                <span>
                  <i class="ri-search-line"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Helmet>
  );
}

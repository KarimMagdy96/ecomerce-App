import React, { useState } from "react";
import CommonSection from "../../Components/Ui/CommonSection";
import products from "../../assets/data/products";
import Helmet from "../../Components/Helmet/Helmet";
import ProductsList from "../../Components/Ui/ProductsList";
export default function Shop() {
  const [productsData, setProductsData] = useState(products);
  const handelFilter = (e) => {
    const filterValue = e.target.value;
    if (filterValue === "sofa") {
      const filterProducts = products.filter(
        (item) => item.category === "sofa"
      );
      setProductsData(filterProducts);
    }
    if (filterValue === "mobile") {
      const filterProducts = products.filter(
        (item) => item.category === "mobile"
      );
      setProductsData(filterProducts);
    }
    if (filterValue === "wireless") {
      const filterProducts = products.filter(
        (item) => item.category === "wireless"
      );
      setProductsData(filterProducts);
    }
    if (filterValue === "chair") {
      const filterProducts = products.filter(
        (item) => item.category === "chair"
      );
      setProductsData(filterProducts);
    }
    if (filterValue === "watch") {
      const filterProducts = products.filter(
        (item) => item.category === "watch"
      );
      setProductsData(filterProducts);
    }
    if (filterValue === "") {
      setProductsData(products);
    }
  };
  return (
    <Helmet title="shop">
      <CommonSection title="Products" />
      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-3">
              <div className="filterWidget">
                <select onChange={handelFilter}>
                  <option disabled selected>
                    Filter By Category
                  </option>
                  <option value="">All</option>
                  <option value="sofa">Sofa</option>
                  <option value="mobile">Mobile</option>
                  <option value="chair">Chair</option>
                  <option value="watch">Watch</option>
                  <option value="wireless">Wireless</option>
                </select>
              </div>
            </div>
            <div className="col-lg-3 col-md-3">
              <div className="filterWidget">
                <select>
                  <option value="sofa">Sort By </option>
                  <option value="ascending">Ascending</option>
                  <option value="Descending">Descending</option>
                </select>
              </div>
            </div>
            <div className="col-lg-6 col-md-6  ">
              <div className="searchBox ">
                <input type="text" placeholder="Search..." />
                <i class="ri-search-line"></i>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="container pb-3 pt-0">
        <div className="row">
          {productsData.length === 0 ? (
            <div className="w-100 vh-100">NO Products Found !</div>
          ) : (
            <ProductsList data={productsData} />
          )}
        </div>
      </div>
    </Helmet>
  );
}

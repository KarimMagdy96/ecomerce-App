import React from "react";

export default function CommonSection({ title }) {
  return (
    <>
      <section className="commonSection">
        <div className="container text-center">
          <h5 className="h1">{title}</h5>
        </div>
      </section>
    </>
  );
}

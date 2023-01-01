import React from "react";
import ProdactsCard from "./ProdactsCard";
export default function ProductsList({ data }) {
  return (
    <>
      {data?.map((item, i) => (
        <ProdactsCard key={i} item={item} />
      ))}
    </>
  );
}

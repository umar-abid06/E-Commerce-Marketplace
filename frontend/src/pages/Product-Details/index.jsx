import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { productData } from "../../data";

import ProductDetails from "../../components/product-details";

const ProductDetailsPage = () => {
  const { name } = useParams();
  const [data, setData] = useState();
  const productName = name.replace(/-/g, " ");

  useEffect(() => {
    const d = productData.find((i) => i.name === productName);
    setData(d);
  }, []);

  return (
    <>
      <ProductDetails data={data} />
    </>
  );
};

export default ProductDetailsPage;

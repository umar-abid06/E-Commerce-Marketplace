import { useEffect, useState } from "react";
import styles from "../../assets/styles";
import { useSearchParams } from "react-router-dom";
import { productData } from "../../data";
import ProductCard from "../../components/product-card";

const ProductsPage = () => {
  const [data, setData] = useState([]);
  const [searchParams] = useSearchParams();
  const categoryData = searchParams.get("category");

  useEffect(() => {
    if (categoryData == null) {
      const d =
        productData && productData.sort((a, b) => b.total_sell - a.total_sell);
      setData(d);
    } else {
      const d =
        productData && productData.filter((i) => i.category === categoryData);
      setData(d);
    }
  }, []);

  return (
    <div className="mt-12">
      <div className={`${styles.section}`}>
        <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12">
          {data && data.map((i, index) => <ProductCard data={i} key={index} />)}
        </div>
        {data && data.length === 0 ? (
          <h1 className="text-center w-full pb-[100px] text-[20px]">
            No Products Found!
          </h1>
        ) : null}
      </div>
    </div>
  );
};

export default ProductsPage;

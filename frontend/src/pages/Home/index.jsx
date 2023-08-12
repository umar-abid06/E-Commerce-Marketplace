import BestDeals from "../../components/best-deals";
import Carousel from "../../components/carousel";
import Categories from "../../components/categories";
import Events from "../../components/event-products";
import FeaturedProduct from "../../components/featured-product";
import Sponsored from "../../components/sponsors";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="flex justify-center items-center ">
        <Carousel />
      </div>
      <Categories />
      <BestDeals />
      <Events />
      <FeaturedProduct />
      <Sponsored />
    </>
  );
};

export default Home;

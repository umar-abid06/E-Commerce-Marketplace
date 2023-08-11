import BestDeals from "../../components/best-deals";
import Carousel from "../../components/carousel";
import Categories from "../../components/categories";
import Events from "../../components/event-products";
import FeaturedProduct from "../../components/featured-product";
import Footer from "../../components/footer";
import Header from "../../components/header";
import Sponsored from "../../components/sponsors";

const Home = () => {
  return (
    <>
      <Header />
      <div className="flex justify-center items-center bg-white">
        <Carousel />
      </div>
      <Categories />
      <BestDeals />
      <Events />
      <FeaturedProduct />
      <Sponsored />
      <Footer />
    </>
  );
};

export default Home;

import Carousel from "../../components/carousel";
import Categories from "../../components/categories";
import Header from "../../components/header";

const Home = () => {
  return (
    <>
      <Header />
      <div className="flex justify-center items-center bg-white">
        <Carousel />
      </div>
      <Categories />
    </>
  );
};

export default Home;

import { useCallback, useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import { BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { getAllProducts } from "../../features/product/products-slice";
import { productData } from "../../data";

const Header = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchData, setSearchData] = useState(null);
  const [winWidth, setWinWidth] = useState(window.innerWidth);
  const allProducts = productData;

  const handleSearchChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    const filteredProducts = allProducts?.filter((product) =>
      product.name.toLowerCase().includes(term.toLowerCase())
    );
    setSearchData(filteredProducts.slice(0, 5));
  };

  const handleClick = () => {
    setSearchTerm("");
    setSearchData(null);
  };

  const handleResize = useCallback(() => {
    setWinWidth(window.innerWidth);
  }, []);
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

  return (
    <>
      <div className="navbar h-[50px]">
        <div className="navbar-start ">
          <Link
            to={"/"}
            className={`btn btn-ghost normal-case text-lg mr-2 md:text-2xl font-bold  `}
          >
            ECM
          </Link>
        </div>
        <div className="navbar-center w-[180px] sm:w-[320px] md:w-[540px] lg:w-[728px]">
          <div className="form-control w-full relative -ml-3 md:-ml-0">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered hover:border-slate-600 h-10"
              value={searchTerm}
              onChange={handleSearchChange}
            />
            <BsSearch
              size={24}
              className="cursor-pointer absolute right-4 top-2 z-10 "
            />
            {searchTerm && searchData && searchData.length !== 0 ? (
              <div className="overflow-y-scroll absolute min-h-[30vh] h-[35vh] md:h-[55vh]  bg-slate-50 shadow-sm-2 z-50 p-1 md:p-4 mt-10 w-[200px] md:w-full ">
                {searchData &&
                  searchData.map((i, index) => {
                    return (
                      <Link
                        to={`/products/${i.name}`}
                        key={index}
                        onClick={handleClick}
                      >
                        <div className="w-full flex items-start-py-3 border bottom-1 hover:bg-slate-100 p-2 bg-slate-300 ">
                          <img
                            src={`${i.image_Url[0].url}`}
                            alt=""
                            className="w-[40px] h-[40px] mr-[10px]"
                          />

                          <h1>
                            {i.name.length > 20
                              ? winWidth < 500
                                ? i.name.slice(0, 15) + "..."
                                : i.name
                              : i.name}
                          </h1>
                        </div>
                      </Link>
                    );
                  })}
              </div>
            ) : null}
          </div>
        </div>
        <div className="navbar-end">
          <Link
            to="/shop-create"
            className="btn btn-outline bg-slate-900  text-gray-200 text-[11px] md:text-sm w-[90px]  sm:w-[120px] md:w-[140px] lg:w-[160px]"
          >
            Become a Seller
          </Link>
        </div>
      </div>
      <Navbar />
    </>
  );
};

export default Header;

import Navbar from "./components/Navbar";
import { BsSearch } from "react-icons/bs";

const Header = () => {
  return (
    <>
      <div className={`navbar h-[50px]  `}>
        <div className="navbar-start ">
          <a
            className={`btn btn-ghost normal-case text-lg mr-2 md:text-2xl font-bold  `}
          >
            ECM
          </a>
        </div>
        <div className=" navbar-center  w-[180px] sm:w-[320px] md:w-[540px] lg:w-[728px] ">
          <div className="form-control w-full relative -ml-3 md:-ml-0">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered hover:border-slate-600 h-10"
            />
            <BsSearch
              size={24}
              className="cursor-pointer absolute right-4 top-2 z-10 "
            />
          </div>
        </div>
        <div className="navbar-end">
          <a className="btn btn-outline bg-slate-900  text-gray-200 text-[11px] md:text-sm w-[90px]  sm:w-[120px] md:w-[140px] lg:w-[160px]">
            Become a Seller
          </a>
        </div>
      </div>
      <Navbar />
    </>
  );
};

export default Header;

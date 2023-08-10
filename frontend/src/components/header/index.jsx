import Navbar from "./components/Navbar";
import { ImSearch } from "react-icons/im";

const Header = () => {
  return (
    <>
      <div className="navbar bg-base-100 ">
        <div className="navbar-start ">
          <a className="btn btn-ghost normal-case text-2xl font-bold">ECM</a>
        </div>
        <div className="join w-full ">
          <div className="form-control w-full">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered hover:border-slate-600  "
            />
          </div>
          <div className="indicator">
            <button className="btn btn-primary -ml-2 join-item ">
              <ImSearch size={17} />
            </button>
          </div>
        </div>
        <div className="navbar-end">
          <a className="btn btn-outline bg-slate-900  text-gray-200">
            Become a seller
          </a>
        </div>
      </div>
      <Navbar />
    </>
  );
};

export default Header;

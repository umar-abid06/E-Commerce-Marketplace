import Navbar from "./components/Navbar";
import { ImSearch } from "react-icons/im";
import { useState } from "react";
const Header = () => {
  const [active, setActive] = useState(false);
  window.addEventListener("scroll", () => {
    if (window.scrollY > 90) {
      setActive(true);
    } else {
      setActive(false);
    }
  });
  return (
    <>
      <div
        className={`navbar bg-base-100 ${
          active ? "shadow-sm fixed top-0 left-0 z-10 bg-black" : null
        } `}
      >
        <div className="navbar-start ">
          <a
            className={`btn btn-ghost normal-case text-2xl font-bold ${
              active ? "text-white" : null
            }`}
          >
            ECM
          </a>
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
            Become a Teacher
          </a>
        </div>
      </div>
      <Navbar />
    </>
  );
};

export default Header;

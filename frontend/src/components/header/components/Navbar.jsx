import { VscAccount } from "react-icons/vsc";
import { categoriesData } from "../../../data";
import { Link } from "react-router-dom";
import { userLogout } from "../../../features/user/userLogin-slice";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { HiOutlineBell } from "react-icons/hi";

const Navbar = () => {
  const [active, setActive] = useState(false);

  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(userLogout());
  };

  window.addEventListener("scroll", () => {
    if (window.scrollY > 75) {
      setActive(true);
    } else {
      setActive(false);
    }
  });
  return (
    <div
      className={`navbar text-primary-content ${
        active ? "shadow-sm fixed top-0 left-0 z-10 bg-success" : "bg-primary "
      }`}
    >
      <div className={`navbar ${active ? "text-white" : null}`}>
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-slate-200  rounded-box w-52 text-black "
            >
              <li>
                <Link to={"/home"}>Home</Link>
              </li>
              <li>
                <Link to={"/best-selling"}>Best Selling</Link>
              </li>
              <li>
                <a>Categories</a>
                <ul className="p-2 text-gray-700 z-10">
                  <li>
                    <a>Wear</a>
                  </li>
                  <li>
                    <a>Electronics</a>
                  </li>
                </ul>
              </li>
              <li>
                <Link to={"/products"}>Products</Link>
              </li>
              <li>
                <Link to={"/events"}>Events</Link>
              </li>
              <li>
                <Link to={"/faq"}>FAQ</Link>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-lg md:text-xl">
            Marketplace
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal  px-1 font-bold z-10">
            <li>
              <Link to={"/home"}>Home</Link>
            </li>
            <li>
              <Link to={"/best-selling"}>Best Selling</Link>
            </li>
            <li tabIndex={0}>
              <details>
                <summary>Categories</summary>
                <ul className="px-2  text-gray-700">
                  {categoriesData.slice(0, 5).map((category) => (
                    <>
                      <li>
                        <a>{category.title}</a>
                      </li>
                    </>
                  ))}
                  <li>
                    <a>More...</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <Link to={"/products"}>Products</Link>
            </li>
            <li>
              <Link to={"/events"}>Events</Link>
            </li>
            <li>
              <Link to={"/faq"}>FAQ</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle -mr-3">
              <div className="indicator">
                <HiOutlineBell size={22} />
                <span
                  className={`badge badge-xs ${
                    active ? " badge-neutral text-white" : "badge-info"
                  } indicator-item`}
                ></span>
              </div>
            </label>
            <div
              tabIndex={0}
              className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
            >
              <div className="card-body">
                <span className="font-bold text-lg text-gray-700">
                  4 Notifications
                </span>
                <span className="text-info">ABC Firm: Dear Customer, ...</span>
                <div className="card-actions">
                  <button className="btn btn-primary btn-block ">
                    See More
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle -mr-3">
              <div className="indicator">
                <AiOutlineShoppingCart size={22} />
                <span
                  className={`badge badge-sm text-white ${
                    active ? " badge-neutral " : "badge-info"
                  } indicator-item `}
                >
                  8
                </span>
              </div>
            </label>
            <div
              tabIndex={0}
              className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
            >
              <div className="card-body">
                <span className="font-bold text-lg text-gray-700">8 Items</span>
                <span className="text-info">Subtotal: $999</span>
                <div className="card-actions">
                  <button className="btn btn-primary btn-block">
                    View cart
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle -mr-2">
              <div className="indicator">
                <VscAccount size={22} />
                <span
                  className={`badge badge-sm ${
                    active ? " badge-neutral text-white" : "badge-info"
                  } indicator-item `}
                ></span>
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-gray-700"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a onClick={handleLogout}>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

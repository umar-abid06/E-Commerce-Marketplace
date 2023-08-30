import { VscAccount } from "react-icons/vsc";
import { categoriesData } from "../../../data";
import { Link } from "react-router-dom";
import { userLogout } from "../../../features/user/userLogin-slice";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";

import {
  AiOutlineShoppingCart,
  AiOutlineHeart,
  // AiOutlineSearch,
} from "react-icons/ai";

import { IoIosArrowDown } from "react-icons/io";

import DropDown from "../../dropdown";
import Cart from "../../cart";
import Wishlist from "../../wishlist";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [dropDown, setDropDown] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);
  const [categoryShow, setCategoryShow] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  const [openWishlist, setOpenWishlist] = useState(false);

  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(userLogout());
  };

  // console.log(windowWidth);
  useEffect(() => {
    setWindowWidth(window.innerWidth);
    if (windowWidth > 450) {
      setCategoryShow(true);
    }
  }, [windowWidth, categoryShow]);

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
          {categoryShow ? (
            <div
              onClick={() => setDropDown(!dropDown)}
              className="relative normal-case w-[240px] h-[40px] text-center bg-neutral rounded-md flex justify-center items-center cursor-pointer ml-6 font-bold"
            >
              All Categories
              <IoIosArrowDown
                size={20}
                className="absolute right-2 top-2 cursor-pointer "
                onClick={() => setDropDown(!dropDown)}
              />
              <div className="">
                {dropDown ? (
                  <DropDown
                    categoriesData={categoriesData}
                    setDropDown={setDropDown}
                  />
                ) : null}
              </div>
            </div>
          ) : (
            <a className="btn btn-ghost normal-case text-lg md:text-xl">
              Marketplace
            </a>
          )}
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal  px-1 font-bold z-10">
            <li>
              <Link to={"/home"}>Home</Link>
            </li>
            <li>
              <Link to={"/best-selling"}>Best Selling</Link>
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
          <div
            className="dropdown dropdown-end"
            onClick={() => setOpenWishlist(true)}
          >
            <label tabIndex={0} className="btn btn-ghost btn-circle -mr-3">
              <div className="indicator">
                <AiOutlineHeart size={22} />
                <span
                  className={`badge badge-sm text-white ${
                    active ? " badge-neutral " : "badge-info"
                  } indicator-item `}
                >
                  4
                </span>
              </div>
            </label>
          </div>
          <div
            className="dropdown dropdown-end"
            onClick={() => setOpenCart(true)}
          >
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
              <Link to="/profile">
                <li>
                  <a className="justify-between">Profile Settings</a>
                </li>
              </Link>

              <li>
                <a onClick={handleLogout}>Logout</a>
              </li>
            </ul>
          </div>
        </div>

        {openCart ? <Cart setOpenCart={setOpenCart} /> : null}
        {openWishlist ? <Wishlist setOpenWishlist={setOpenWishlist} /> : null}
      </div>
    </div>
  );
};

export default Navbar;

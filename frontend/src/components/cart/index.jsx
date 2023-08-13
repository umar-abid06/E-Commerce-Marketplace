/* eslint-disable react/prop-types */
import { RxCross1 } from "react-icons/rx";
import { IoBagHandleOutline } from "react-icons/io5";
// import { HiOutlineMinus, HiPlus } from "react-icons/hi";
import styles from "../../assets/styles";
import CartSingle from "../cart-single";
import { Link } from "react-router-dom";

const Cart = ({ setOpenCart }) => {
  const cartData = [
    {
      name: "Iphone 14 pro max",
      description: "test",
      price: 999,
    },
    {
      name: "Iphone 14 pro max",
      description: "test",
      price: 1099,
    },
    {
      name: "Iphone 14 pro max",
      description: "test",
      price: 656,
    },
  ];
  return (
    <div className="fixed top-0 left-0 w-full bg-[#33333379] h-screen z-10">
      <div className="fixed top-0 right-0 min-h-full w-9/12 lg:w-1/4 bg-white  flex flex-col justify-between shadow-sm">
        <div>
          <div className="flex w-full justify-end pt-5 pr-5 text-black">
            <RxCross1
              size={25}
              className="cursor-pointer"
              onClick={() => setOpenCart(false)}
            />
          </div>
          {/* Item length */}
          <div className={`${styles.normalFlex} p-4 text-black`}>
            <IoBagHandleOutline size={25} />
            <h5 className="pl-2 text-[20px] font-[500]">3 Items</h5>
          </div>

          <div className="w-full border-t">
            {cartData &&
              cartData.map((i, index) => <CartSingle key={index} data={i} />)}
          </div>
        </div>

        <div className="px-5 mb-3">
          <Link to="/checkout">
            <div
              className={`h-[45px] flex items-center justify-center w-[100%] bg-[#e44343] rounded-[5px]`}
            >
              <h1 className="text-white text-[18px] font-[600]">
                Checkout Now US $108
              </h1>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;

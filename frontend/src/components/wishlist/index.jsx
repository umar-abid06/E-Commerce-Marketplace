/* eslint-disable react/prop-types */
import { RxCross1 } from "react-icons/rx";
import styles from "../../assets/styles";
import WishlistSingle from "../wishlist-single";
import { AiOutlineHeart } from "react-icons/ai";

const Wishlist = ({ setOpenWishlist }) => {
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
      <div className="fixed top-0 right-0 min-h-full w-4/5 md:w-2/5  lg:w-1/4 bg-white  flex flex-col justify-between shadow-sm">
        <div>
          <div className="flex w-full justify-end pt-5 pr-5 text-black">
            <RxCross1
              size={25}
              className="cursor-pointer"
              onClick={() => setOpenWishlist(false)}
            />
          </div>
          {/* Item length */}
          <div className={`${styles.normalFlex} p-4 text-black`}>
            <AiOutlineHeart size={25} />
            <h5 className="pl-2 text-[20px] font-[500]">3 Items</h5>
          </div>

          <div className="w-full border-t">
            {cartData &&
              cartData.map((i, index) => (
                <WishlistSingle key={index} data={i} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wishlist;

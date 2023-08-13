/* eslint-disable react/prop-types */
import { BsCartPlus } from "react-icons/bs";
import { RxCross1 } from "react-icons/rx";

const WishlistSingle = ({ data }) => {
  return (
    <div className="border-b p-4 ">
      <div className="w-full flex items-center justify-between">
        <RxCross1 className="cursor-pointer text-black" />
        <img
          src="https://static.vecteezy.com/system/resources/previews/011/996/555/original/3d-black-headphone-illustration-ecommerce-icon-png.png"
          className="w-[80px] h-[80px] ml-2 "
        />

        <div className="pl-[5px] text-slate-700">
          <h1>{data.name}</h1>
          <h4 className="font-[600] text-[17px] pt-[3px] text-[#d02222]  ">
            US ${data.price}
          </h4>
        </div>
        <div>
          <BsCartPlus
            size={20}
            className="cursor-pointer text-slate-700"
            title="Add to cart"
          />
        </div>
      </div>
    </div>
  );
};

export default WishlistSingle;

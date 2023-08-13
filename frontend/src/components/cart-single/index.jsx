/* eslint-disable react/prop-types */
import { useState } from "react";
import styles from "../../assets/styles";
import { HiOutlineMinus, HiPlus } from "react-icons/hi";
import { RxCross1 } from "react-icons/rx";

const CartSingle = ({ data }) => {
  const [value, setValue] = useState(1);
  const totalPrice = data.price * value;
  return (
    <div className="border-b p-4 ">
      <div className="w-full flex items-center">
        <div>
          <div
            className={`bg-[#e44343] border border-[#e4434373] rounded-full w-[25px] h-[25px] ${styles.normalFlex} justify-center cursor-pointer`}
            onClick={() => setValue(value + 1)}
          >
            <HiPlus size={18} />
          </div>
          <span className="pl-[10px] text-black">{value}</span>

          <div
            className="bg-[#a7abb14f] rounded-full w-[25px] h-[25px] flex items-center justify-center cursor-pointer"
            onClick={() => {
              setValue(value === 1 ? 1 : value - 1);
            }}
          >
            <HiOutlineMinus size={16} color="#7d879c" />
          </div>
        </div>
        <div>
          <img
            src="https://static.vecteezy.com/system/resources/previews/011/996/555/original/3d-black-headphone-illustration-ecommerce-icon-png.png"
            className="w-[80px] h-[80px] ml-2 "
          />
        </div>
        <div className="pl-[5px] text-slate-700">
          <h1>{data.name}</h1>
          <h1 className="font-[400] text-[15px] ">${data.price * value}</h1>
          <h4 className="font-[600] text-[17px] pt-[3px] text-[#d02222]  ">
            {" "}
            US ${totalPrice}
          </h4>
        </div>
        <RxCross1 className="cursor-pointer" />
      </div>
    </div>
  );
};

export default CartSingle;

/* eslint-disable react/prop-types */

import { useNavigate } from "react-router-dom";
import styles from "../../assets/styles/index";

const DropDown = ({ categoriesData, setDropDown }) => {
  const navigate = useNavigate();
  const submitHandle = (i) => {
    navigate(`/products?category=${i.title}`);
    setDropDown(false);
    window.location.reload();
  };
  return (
    <div className="pb-2 w-[240px] bg-gray-100 text-slate-700 absolute z-50 rounded-md shadow-sm mt-6 right-0">
      {categoriesData &&
        categoriesData.map((i, index) => (
          <div
            key={index}
            className={`${styles.normalFlex}`}
            onClick={() => submitHandle(i)}
          >
            <img
              src={i.image_Url}
              style={{
                width: "20px",
                height: "20px",
                objectFit: "contain",
                marginLeft: "15px",
                userSelect: "none",
              }}
              alt=""
            />
            <h3 className="m-3 cursor-pointer select-none text-sm">
              {i.title}
            </h3>
          </div>
        ))}
    </div>
  );
};

export default DropDown;

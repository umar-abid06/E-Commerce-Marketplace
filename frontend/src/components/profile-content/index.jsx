/* eslint-disable react/prop-types */
import {
  AiOutlineArrowRight,
  AiOutlineCamera,
  AiOutlineDelete,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import styles from "../../assets/styles";
import { yupResolver } from "@hookform/resolvers/yup";
import { profileSchema } from "../../utils/functions/validation";
import { useForm, Controller } from "react-hook-form";
import { DataGrid } from "@mui/x-data-grid";
import { MdOutlineTrackChanges } from "react-icons/md";

//name, email,phone, zip, address1 , address2

const ProfileContent = ({ active }) => {
  return (
    <div className="w-full">
      {/* Profile Section */}
      {active === 1 && (
        <div>
          <ProfileForm />
        </div>
      )}

      {/* Order Section */}
      {active === 2 && (
        <div>
          <AllOrders />
        </div>
      )}

      {/* Refund Orders */}
      {active === 3 && (
        <div>
          <RefundOrders />
        </div>
      )}

      {/* Track Orders */}
      {active === 5 && (
        <div>
          <TrackOrders />
        </div>
      )}

      {/* Card Details */}
      {active === 7 && (
        <div>
          <Address />
        </div>
      )}
    </div>
  );
};

export default ProfileContent;

const ProfileForm = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(profileSchema),
  });

  const onSubmit = async (data) => {
    // Handle form submission here (e.g., login API call)
    console.log(data);
    // dispatch(userLogin(data));
  };
  return (
    <>
      <div className="flex justify-center w-full ">
        <div className="relative">
          <img
            // src={`${backend_url}${user.avatar}`}
            src="https://thumbs.dreamstime.com/b/unknown-male-avatar-profile-image-businessman-vector-unknown-male-avatar-profile-image-businessman-vector-profile-179373829.jpg"
            className="w-[150px] h-[150px] rounded-full object-cover border-[3px] border-[#3ad132]"
            alt=""
          />
          <div className="w-[30px] h-[30px] bg-[#E3E9EE] rounded-full flex justify-center items-center cursor-pointer absolute bottom-[5px] right-[5px]">
            <AiOutlineCamera />
          </div>
        </div>
        <br />
        <br />
      </div>
      <div className="m-2 p-2">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4">
            <div className="">
              <Controller
                control={control}
                name="fullName"
                render={({ field }) => (
                  <>
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2 px-1"
                      htmlFor="fullName"
                    >
                      Full Name
                    </label>
                    <input
                      {...field}
                      type="text"
                      className="block min-h-[auto] w-full rounded border border-slate-400 px-3 py-[0.32rem] "
                      placeholder="Full Name"
                    />
                  </>
                )}
              />
              {errors.fullName && (
                <span className="text-red-600">{errors.fullName.message}</span>
              )}
            </div>
            <div className="">
              <Controller
                control={control}
                name="email"
                render={({ field }) => (
                  <>
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2 px-1"
                      htmlFor="fullName"
                    >
                      Email
                    </label>
                    <input
                      {...field}
                      type="email"
                      className="block min-h-[auto] w-full rounded border border-slate-400 px-3 py-[0.32rem] "
                      placeholder="Email Address"
                    />
                  </>
                )}
              />
              {errors.email && (
                <span className="text-red-600">{errors.email.message}</span>
              )}
            </div>
            <div className="">
              <Controller
                control={control}
                name="phone"
                render={({ field }) => (
                  <>
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2 px-1"
                      htmlFor="fullName"
                    >
                      Phone
                    </label>
                    <input
                      {...field}
                      type="number"
                      className="block min-h-[auto] w-full rounded border border-slate-400 px-3 py-[0.32rem] "
                      placeholder="Phone"
                    />
                  </>
                )}
              />
              {errors.phone && (
                <span className="text-red-600">{errors.phone.message}</span>
              )}
            </div>
            <div className="">
              <Controller
                control={control}
                name="postalCode"
                render={({ field }) => (
                  <>
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2 px-1"
                      htmlFor="fullName"
                    >
                      Postal Code
                    </label>
                    <input
                      {...field}
                      type="text"
                      className="block min-h-[auto] w-full rounded border border-slate-400 px-3 py-[0.32rem] "
                      placeholder="Postal Code"
                    />
                  </>
                )}
              />
              {errors.postalCode && (
                <span className="text-red-600">
                  {errors.postalCode.message}
                </span>
              )}
            </div>
            <div className="">
              <Controller
                control={control}
                name="address1"
                render={({ field }) => (
                  <>
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2 px-1"
                      htmlFor="fullName"
                    >
                      Current Address
                    </label>
                    <input
                      {...field}
                      type="text"
                      className="block min-h-[auto] w-full rounded border border-slate-400 px-3 py-[0.32rem] "
                      placeholder="Current Address"
                    />
                  </>
                )}
              />
              {errors.address1 && (
                <span className="text-red-600">{errors.address1.message}</span>
              )}
            </div>
            <div className="">
              <Controller
                control={control}
                name="address2"
                render={({ field }) => (
                  <>
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2 px-1"
                      htmlFor="fullName"
                    >
                      Permanent Address
                    </label>
                    <input
                      {...field}
                      type="text"
                      className="block min-h-[auto] w-full rounded border border-slate-400 px-3 py-[0.32rem] "
                      placeholder="Permanent Address"
                    />
                  </>
                )}
              />
              {errors.address2 && (
                <span className="text-red-600">{errors.address2.message}</span>
              )}
            </div>
          </div>
          {/* Submit button */}
          <div className="my-4 pb-1 pt-1 text-center w-1/2">
            <button
              className="mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white  shadow-slate-200 transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-md bg-primary"
              type="submit"
            >
              Update
              {/* <ToastContainer /> */}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

const AllOrders = () => {
  const orders = [
    {
      _id: "37483695746587",
      orderItems: [{ name: "Iphone 14 pro max" }],
      totalPrice: 120,
      orderStatus: "Processing",
    },
    {
      _id: "3473846946581",
      orderItems: [{ name: "Iphone 14 pro max" }],
      totalPrice: 200,
      orderStatus: "Delivered",
    },
  ];

  const columns = [
    {
      field: "id",
      headerName: "Order ID",
      minWidth: 150,
      flex: 0.7,
    },
    {
      field: "status",
      headerName: "Status",
      minWidth: 130,
      flex: 0.7,
      cellClassName: (params) => {
        // console.log(params.row.status);
        return params.row.status === "Delivered" ? "greenColor" : "redColor";
      },
    },
    {
      field: "itemsQty",
      headerName: "Items Quantity",
      type: "number",
      minWidth: 130,
      flex: 0.7,
    },
    {
      field: "total",
      headerName: "Total",
      type: "number",
      minWidth: 130,
      flex: 0.7,
    },
    {
      field: " ",
      headerName: "",
      flex: 1,
      minWidth: 150,
      type: "number",
      sortable: false,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/order/${params.id}`}>
              <button>
                <AiOutlineArrowRight size={20} />
              </button>
            </Link>
          </>
        );
      },
    },
  ];

  const row = [];

  orders &&
    orders.forEach((item) => {
      row.push({
        id: item._id,
        itemsQty: item.orderItems.length,
        total: "US $" + item.totalPrice,
        status: item.orderStatus,
      });
    });
  return (
    <div className="pl-8 pt-1">
      <DataGrid
        rows={row}
        columns={columns}
        pageSize={10}
        disableSelectionOnClick
        autoHeight
      />
    </div>
  );
};

const RefundOrders = () => {
  const orders = [
    {
      _id: "37483695746587",
      orderItems: [{ name: "Iphone 14 pro max" }],
      totalPrice: 120,
      orderStatus: "Processing",
    },
  ];

  const columns = [
    {
      field: "id",
      headerName: "Order ID",
      minWidth: 150,
      flex: 0.7,
    },
    {
      field: "status",
      headerName: "Status",
      minWidth: 130,
      flex: 0.7,
      cellClassName: (params) => {
        // console.log(params.row.status);
        return params.row.status === "Delivered" ? "greenColor" : "redColor";
      },
    },
    {
      field: "itemsQty",
      headerName: "Items Quantity",
      type: "number",
      minWidth: 130,
      flex: 0.7,
    },
    {
      field: "total",
      headerName: "Total",
      type: "number",
      minWidth: 130,
      flex: 0.7,
    },
    {
      field: " ",
      headerName: "",
      flex: 1,
      minWidth: 150,
      type: "number",
      sortable: false,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/order/${params.id}`}>
              <button>
                <AiOutlineArrowRight size={20} />
              </button>
            </Link>
          </>
        );
      },
    },
  ];

  const row = [];

  orders &&
    orders.forEach((item) => {
      row.push({
        id: item._id,
        itemsQty: item.orderItems.length,
        total: "US $" + item.totalPrice,
        status: item.orderStatus,
      });
    });
  return (
    <div className="pl-8 pt-1">
      <DataGrid
        rows={row}
        columns={columns}
        pageSize={10}
        disableSelectionOnClick
        autoHeight
      />
    </div>
  );
};
const TrackOrders = () => {
  const orders = [
    {
      _id: "37483695746587",
      orderItems: [{ name: "Iphone 14 pro max" }],
      totalPrice: 120,
      orderStatus: "Processing",
    },
  ];

  const columns = [
    {
      field: "id",
      headerName: "Order ID",
      minWidth: 150,
      flex: 0.7,
    },
    {
      field: "status",
      headerName: "Status",
      minWidth: 130,
      flex: 0.7,
      cellClassName: (params) => {
        // console.log(params.row.status);
        return params.row.status === "Delivered" ? "greenColor" : "redColor";
      },
    },
    {
      field: "itemsQty",
      headerName: "Items Quantity",
      type: "number",
      minWidth: 130,
      flex: 0.7,
    },
    {
      field: "total",
      headerName: "Total",
      type: "number",
      minWidth: 130,
      flex: 0.7,
    },
    {
      field: " ",
      headerName: "",
      flex: 1,
      minWidth: 150,
      type: "number",
      sortable: false,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/order/${params.id}`}>
              <button>
                <MdOutlineTrackChanges size={20} />
              </button>
            </Link>
          </>
        );
      },
    },
  ];

  const row = [];

  orders &&
    orders.forEach((item) => {
      row.push({
        id: item._id,
        itemsQty: item.orderItems.length,
        total: "US $" + item.totalPrice,
        status: item.orderStatus,
      });
    });
  return (
    <div className="pl-8 pt-1">
      <DataGrid
        rows={row}
        columns={columns}
        pageSize={10}
        disableSelectionOnClick
        autoHeight
      />
    </div>
  );
};

const Address = () => {
  return (
    <div className="w-full px-5">
      <div className="flex justify-between items-center w-full">
        <h1 className="text-[25px] font-[600] text-[#000000ba] pb-2">
          My Addresses
        </h1>
        <div className={`${styles.button} !rounded-md`}>
          <span className="text-white">Add New</span>
        </div>
      </div>
      <br />
      <div className="w-full bg-white h-[70px] rounded-sm flex items-center justify-between px-3 pr-10 shadow">
        <div className="flex items-center">
          <h5 className="pl-5 font-bold">Default</h5>
        </div>
        <div className="flex items-center pl-8">
          <h6 className="">Nazimabad Block#03, Karachi.</h6>
        </div>
        <div className="flex items-center pl-8">
          <h6 className="">(021) 111-222-999</h6>
        </div>
        <div className="min-w-[10%] flex items-center pl-8">
          <AiOutlineDelete size={25} className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

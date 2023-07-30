// import { useState } from "react";
// import { useForm } from "react-hook-form";
// import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
// import styles from "../../assets/styles/index";
// import { Link } from "react-router-dom";

// const Register = () => {
//   const [visible, setVisible] = useState(false);

//   const {
//     register,
//     handleSubmit,
//     // watch,
//     formState: { errors },
//   } = useForm();

//   // console.log(watch("email"));
//   // console.log(watch("password"));
//   const onSubmit = (data) => console.log(data);

//   return (
//     <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
//       <div className="sm:mx-auto sm:w-full sm:max-w-md">
//         <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
//           Register As A New User
//         </h2>
//       </div>
//       <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
//         <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
//           <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
//             <div>
//               <label
//                 htmlFor="email"
//                 className="block text-sm font-medium text-gray-700"
//               >
//                 Full Name
//               </label>
//               <div className="mt-1">
//                 <input
//                   type="text"
//                   name="fullName"
//                   autoComplete="fullName"
//                   // required
//                   {...register("fullName", { required: true })}
//                   // value={email}
//                   // onChange={(e) => setEmail(e.target.value)}
//                   className=" appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//                 />
//                 {errors.fullName && (
//                   <span className=" text-red-600 mt-1">
//                     This field is required
//                   </span>
//                 )}
//               </div>
//             </div>
//             <div>
//               <label
//                 htmlFor="email"
//                 className="block text-sm font-medium text-gray-700"
//               >
//                 Email Address
//               </label>
//               <div className="mt-1">
//                 <input
//                   type="email"
//                   name="email"
//                   autoComplete="email"
//                   // required
//                   {...register("email", { required: true })}
//                   // value={email}
//                   // onChange={(e) => setEmail(e.target.value)}
//                   className=" appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//                 />
//                 {errors.email && (
//                   <span className=" text-red-600 mt-1">
//                     This field is required
//                   </span>
//                 )}
//               </div>
//             </div>
//             <div>
//               <label
//                 htmlFor="password"
//                 className="block text-sm font-medium text-gray-700"
//               >
//                 Password
//               </label>
//               <div className="mt-1 relative">
//                 <input
//                   type={visible ? "text" : "password"}
//                   name="password"
//                   autoComplete="current-password"
//                   // required
//                   {...register("password", { required: true })}
//                   // value={password}
//                   // onChange={(e) => setPassword(e.target.value)}
//                   className=" appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//                 />

//                 {errors.password && (
//                   <span className=" text-red-600 mt-1">
//                     This field is required
//                   </span>
//                 )}
//                 {visible ? (
//                   <AiOutlineEye
//                     className="absolute right-2 top-2 cursor-pointer"
//                     size={25}
//                     onClick={() => setVisible(false)}
//                   />
//                 ) : (
//                   <AiOutlineEyeInvisible
//                     className="absolute right-2 top-2 cursor-pointer"
//                     size={25}
//                     onClick={() => setVisible(true)}
//                   />
//                 )}
//               </div>
//             </div>
//             <div>
//               <label
//                 htmlFor="password"
//                 className="block text-sm font-medium text-gray-700"
//               >
//                 Confirm Password
//               </label>
//               <div className="mt-1 relative">
//                 <input
//                   type={visible ? "text" : "password"}
//                   name="password"
//                   autoComplete="current-password"
//                   // required
//                   {...register("confirmPassword", { required: true })}
//                   // value={password}
//                   // onChange={(e) => setPassword(e.target.value)}
//                   className=" appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//                 />

//                 {errors.password && (
//                   <span className=" text-red-600 mt-1">
//                     This field is required
//                   </span>
//                 )}
//                 {visible ? (
//                   <AiOutlineEye
//                     className="absolute right-2 top-2 cursor-pointer"
//                     size={25}
//                     onClick={() => setVisible(false)}
//                   />
//                 ) : (
//                   <AiOutlineEyeInvisible
//                     className="absolute right-2 top-2 cursor-pointer"
//                     size={25}
//                     onClick={() => setVisible(true)}
//                   />
//                 )}
//               </div>
//             </div>

//             <div>
//               <button
//                 type="submit"
//                 className="group relative w-full h-[40px] flex justify-center py-2 px-4 border border-transparent  text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
//               >
//                 Submit
//               </button>
//             </div>
//             <div className={`${styles.normalFlex} w-full `}>
//               <h4>{"Already Have An Account?"}</h4>
//               <Link to="/login" className="text-blue-600 pl-2">
//                 Log In
//               </Link>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Register;

import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Link } from "react-router-dom";
import axios from "axios";

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup.string().required("Password is required"),
});

const Register = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    // Handle form submission here

    console.log(data);
    await axios
      .post("http://192.168.0.151:8000/api/v1/auth/register", data, {
        "Content-Type": "application/json", // Example: JSON data
        // You can add other headers here as needed
      })
      .then((response) => {
        console.log("Data posted successfully:", response.data);
        // You can handle the response here
      })
      .catch((error) => {
        console.error("Error posting data:", error);
        // Handle errors here
      });
  };

  return (
    <section className="gradient-form h-screen bg-neutral-200 dark:bg-neutral-700">
      <div className="container h-full p-6 pl-16">
        <div className="g-6 flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
          <div className="w-full">
            <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-800">
              <div className="g-0 lg:flex lg:flex-wrap">
                {/* Left column container */}
                <div className="px-4 md:px-0 lg:w-6/12">
                  <div className="md:mx-6 md:p-12">
                    {/*Logo*/}
                    <div className="text-center">
                      <img
                        className="mx-auto w-48"
                        src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                        alt="logo"
                      />
                      <h4 className="mb-12 mt-1 pb-1 text-xl font-semibold">
                        We Are The Trend Setter
                      </h4>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)}>
                      <p className="mb-4">Register a new account</p>
                      {/* Name input */}
                      <div className="relative mb-4">
                        <Controller
                          control={control}
                          name="name"
                          render={({ field }) => (
                            <input
                              {...field}
                              type="text"
                              className="peer block min-h-[auto] w-full rounded border bg-inherit px-3 py-[0.32rem] leading-[1.6] transition-all duration-200 ease-linear motion-reduce:transition-none"
                              placeholder="Name"
                            />
                          )}
                        />
                        {errors.name && (
                          <span className="text-red-600">
                            {errors.name.message}
                          </span>
                        )}
                      </div>

                      {/* Email input */}
                      <div className="relative mb-4">
                        <Controller
                          control={control}
                          name="email"
                          render={({ field }) => (
                            <input
                              {...field}
                              type="email"
                              className="peer block min-h-[auto] w-full rounded border bg-inherit px-3 py-[0.32rem] leading-[1.6] transition-all duration-200 ease-linear motion-reduce:transition-none"
                              placeholder="Email"
                            />
                          )}
                        />
                        {errors.email && (
                          <span className="text-red-600">
                            {errors.email.message}
                          </span>
                        )}
                      </div>

                      {/* Password input */}
                      <div className="relative mb-4">
                        <Controller
                          control={control}
                          name="password"
                          render={({ field }) => (
                            <input
                              {...field}
                              type="password"
                              className="peer block min-h-[auto] w-full rounded border bg-inherit px-3 py-[0.32rem] leading-[1.6] transition-all duration-200 ease-linear motion-reduce:transition-none"
                              placeholder="Password"
                            />
                          )}
                        />
                        {errors.password && (
                          <span className="text-red-600">
                            {errors.password.message}
                          </span>
                        )}
                      </div>

                      {/* Submit button */}
                      <div className="mb-2 pb-1 pt-1 text-center">
                        <button
                          className="mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
                          type="submit"
                          data-te-ripple-init
                          data-te-ripple-color="light"
                          style={{
                            background:
                              "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)",
                          }}
                        >
                          Register
                        </button>
                      </div>
                    </form>
                    <div className="flex items-center justify-between pb-6">
                      <p className="mb-0 mr-2">Already have an Account?</p>
                      <Link to="/login">
                        <button
                          type="button"
                          className="inline-block rounded border-2 border-danger px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-danger-600 focus:border-danger-600 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                        >
                          Log In
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Right column container */}
                <div
                  className="flex items-center rounded-b-lg lg:w-6/12 lg:rounded-r-lg lg:rounded-bl-none"
                  style={{
                    background:
                      "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)",
                  }}
                >
                  <div className="px-4 py-6 text-white md:mx-6 md:p-12">
                    <h4 className="mb-6 text-xl font-semibold">
                      We are more than just a company
                    </h4>
                    <p className="text-sm">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;

import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { registerSchema } from "../../utils/functions/validation.js";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const [visible, setVisible] = useState(false);
  const [res, setRes] = useState();
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
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

        toast.success(response.data.message, {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        setTimeout(() => {
          navigate("/login");
        }, 5000);
      })
      .catch((error) => {
        console.error("Error posting data:", error);
        console.log(error.response.data.message);
        setRes(error.response.data.passDetails);
        console.log(res);
        toast.error(error.response.data.message, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });

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
                              type={visible ? "text" : "password"}
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
                        {visible ? (
                          <AiOutlineEye
                            className="absolute right-2 top-2 cursor-pointer"
                            size={25}
                            onClick={() => setVisible(false)}
                          />
                        ) : (
                          <AiOutlineEyeInvisible
                            className="absolute right-2 top-2 cursor-pointer"
                            size={25}
                            onClick={() => setVisible(true)}
                          />
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
                          <ToastContainer
                            position="top-center"
                            autoClose={3000}
                            hideProgressBar={true}
                            newestOnTop={false}
                            closeOnClick
                            rtl={false}
                            pauseOnFocusLoss
                            draggable
                            theme="dark"
                          />
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
                  {res ? (
                    <div className="px-4 py-6 text-white md:mx-6 md:p-12">
                      <h4 className="mb-6 text-xl font-semibold">
                        Guidelines For Password!
                      </h4>
                      {res?.map((i) => (
                        <p key={i} className="text-sm">
                          ⇒ {i}
                        </p>
                      ))}
                    </div>
                  ) : (
                    <div className="px-4 py-6 text-white md:mx-6 md:p-12">
                      <h4 className="mb-6 text-xl font-semibold">
                        We are more than just a company
                      </h4>
                      <p className="text-sm">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex
                        ea commodo consequat.
                      </p>
                    </div>
                  )}
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

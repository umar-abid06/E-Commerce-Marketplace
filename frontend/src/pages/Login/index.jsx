import { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { loginSchema } from "../../utils/functions/validation.js";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../../features/user/userLogin-slice.js";
import Loader from "../../components/loader/Loader";

const Login = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((state) => state.userLogin);
  const { isLoading, isError, message, token } = user;

  // console.log(status, isLoading, isError, message, data, token);
  if (!isError && message) {
    toast.success(message, {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  }
  if (isError && message) {
    toast.error(message, {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  }
  const redirect = location.search ? location.search.split("=")[1] : "/";

  useEffect(() => {
    if (!(token === null)) {
      setTimeout(() => {
        navigate(redirect);
      }, 4000);
    }
  }, [navigate, redirect, token]);
  const onSubmit = async (data) => {
    // Handle form submission here (e.g., login API call)
    console.log(data);
    dispatch(userLogin(data));
  };

  return (
    <section className="gradient-form h-screen bg-neutral-200 dark:bg-neutral-700">
      <div className="container h-full p-6 pl-16">
        <div className="flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
          <div className="w-full">
            <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-800">
              <div className="g-0 lg:flex lg:flex-wrap">
                {/* Left column container */}
                <div
                  className="flex items-center rounded-b-lg lg:w-6/12 lg:rounded-r-lg lg:rounded-bl-none"
                  style={{
                    background:
                      "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)",
                  }}
                  // style={{
                  //   background:
                  //     "linear-gradient(to right, #77410c, #344c51, 	#344c51, 	#77410c)",
                  // }}
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

                {/* Right column container */}
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
                        We are The Top-Rated
                      </h4>
                    </div>
                    {isLoading ? (
                      <Loader />
                    ) : (
                      <>
                        <form onSubmit={handleSubmit(onSubmit)}>
                          <p className="mb-4">Please login to your account</p>
                          {/* Username input */}
                          <div className="relative mb-4">
                            <Controller
                              control={control}
                              name="email"
                              render={({ field }) => (
                                <>
                                  <input
                                    {...field}
                                    type="email"
                                    className=" block min-h-[auto] w-full rounded border bg-inherit px-3 py-[0.32rem] "
                                    placeholder="Email"
                                  />
                                </>
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
                          <div className="mb-4 pb-1 pt-1 text-center">
                            <button
                              className="mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white  shadow-slate-200 transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-md"
                              type="submit"
                              data-te-ripple-init
                              data-te-ripple-color="light"
                              style={{
                                background:
                                  "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)",
                              }}
                            >
                              Log in
                              <ToastContainer />
                            </button>

                            {/* Forgot password link */}
                            <a href="#!">Forgot password?</a>
                          </div>

                          {/* Register button */}
                          <div className="flex items-center justify-between pb-6">
                            <p className="mb-0 mr-2">Dont have an account?</p>
                            <Link to="/sign-up">
                              <button
                                type="button"
                                className="inline-block rounded border-2 border-danger px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-danger-600 focus:border-danger-600 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                              >
                                Register
                              </button>
                            </Link>
                          </div>
                        </form>
                      </>
                    )}
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

export default Login;

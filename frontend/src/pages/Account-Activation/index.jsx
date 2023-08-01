import { Link } from "react-router-dom";
const AccountActivation = () => {
  const error = false;
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {error ? (
        <p>Your token is expired!</p>
      ) : (
        <div
          className="flex flex-col items-center justify-center pb-6 h-screen w-full"
          style={{
            background:
              "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)",
          }}
        >
          <p className="text-white text-lg font-Roboto font-semibold mb-5">
            Your account has been created suceessfully!
          </p>
          {/* <p className="mb-0 mr-2">Already have an Account?</p> */}
          <Link to="/login">
            <button
              type="button"
              className="inline-block rounded border-2 border-danger px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-danger-600 focus:border-danger-600 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10 text-white"
            >
              Log In
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default AccountActivation;

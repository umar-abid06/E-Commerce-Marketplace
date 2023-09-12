/* eslint-disable react/prop-types */
// import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer";
// import Header from "../components/Header";
// import Footer from "../components/Footer";

const ProtectedRoutes = () => {
  // const isToken = useSelector((state) => state.userLogin.token);
  const isToken = true;
  return isToken ? (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  ) : (
    <Navigate to={"/login"} />
  );
};

export default ProtectedRoutes;

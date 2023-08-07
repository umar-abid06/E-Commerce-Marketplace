import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import FallbackComponent from "./utils/FallbackComponent";
import ProtectedRoutes from "./utils/ProtectedRoutes";
import AccountActivation from "./pages/Account-Activation";

const Register = React.lazy(() => import("./pages/Register"));
const Login = React.lazy(() => import("./pages/Login"));
const Home = React.lazy(() => import("./pages/Home"));
const App = React.lazy(() => import("./App"));

const Router = () => {
  return (
    <Suspense fallback={<FallbackComponent />}>
      <Routes>
        <Route element={<ProtectedRoutes />}>
          <Route element={<Home />} path="/home" exact />
        </Route>

        <Route element={<Login />} path="/login" />
        <Route element={<Register />} path="/register" />
        <Route element={<AccountActivation />} path="/activation" />
      </Routes>
    </Suspense>
  );
};
export default Router;

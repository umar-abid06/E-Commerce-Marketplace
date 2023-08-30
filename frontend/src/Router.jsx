import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import FallbackComponent from "./utils/FallbackComponent";
import ProtectedRoutes from "./utils/ProtectedRoutes";
import AccountActivation from "./pages/Account-Activation";
import ProductsPage from "./pages/Products";
import BestSellingPage from "./pages/Best-Selling";
import EventsPage from "./pages/Events";
import FAQPage from "./pages/FAQ";
import ProductDetailsPage from "./pages/Product-Details";
import ProfilePage from "./pages/Profile";

const Register = React.lazy(() => import("./pages/Register"));
const Login = React.lazy(() => import("./pages/Login"));
const Home = React.lazy(() => import("./pages/Home"));

const Router = () => {
  return (
    <Suspense fallback={<FallbackComponent />}>
      <Routes>
        <Route element={<ProtectedRoutes />}>
          <Route element={<Home />} path="/" exact />
          <Route element={<Home />} path="/home" exact />
          <Route element={<ProductsPage />} path="/products" />
          <Route element={<ProductDetailsPage />} path="/products/:name" />
          <Route element={<BestSellingPage />} path="/best-selling" />
          <Route element={<EventsPage />} path="/events" />
          <Route element={<FAQPage />} path="/faq" />
          <Route element={<ProfilePage />} path="/profile" />
        </Route>

        <Route element={<Login />} path="/login" />
        <Route element={<Register />} path="/register" />
        <Route element={<AccountActivation />} path="/activation" />
      </Routes>
    </Suspense>
  );
};
export default Router;

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AccountActivation from "./pages/Account-Activation";
import ProtectedRoute from "./utils/ProtectedRoute";
import { useSelector } from "react-redux";

const Router = () => {
  const isAuthenticated = useSelector(
    (state) => state.userLogin.isAuthenticated
  );
  console.log(isAuthenticated);
  const routes = [
    {
      path: "/",
      element: <App />,
      //   loader: rootLoader,
      children: [],
    },
    {
      path: "login",
      element: <Login />,
      //   loader: rootLoader,
      children: [],
    },
    {
      path: "sign-up",
      element: <ProtectedRoute component={<Register />} />,
      // loader: teamLoader,
    },
    {
      path: "/activation",
      element: <AccountActivation />,
      //   loader: rootLoader,
      children: [],
    },
  ];
  const router = createBrowserRouter(routes);
  return <RouterProvider router={router} />;
};

export default Router;

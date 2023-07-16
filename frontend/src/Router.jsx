import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Login from "./pages/Login";
import Register from "./pages/Register";

const routes = [
  {
    path: "/",
    element: <App />,
    //   loader: rootLoader,
    children: [],
  },
  {
    path: "/login",
    element: <Login />,
    //   loader: rootLoader,
    children: [],
  },
  {
    path: "/sign-up",
    element: <Register />,
    //   loader: rootLoader,
    children: [],
  },
];
const router = createBrowserRouter(routes);
export default router;

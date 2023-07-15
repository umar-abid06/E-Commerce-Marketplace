import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Login from "./pages/Login";

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
];
const router = createBrowserRouter(routes);
export default router;

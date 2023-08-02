import ReactDOM from "react-dom/client";
import "./index.css";
// import router from "./Router";
import { Provider } from "react-redux";
import store from "./features/store";
import Router from "./Router";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <Router />
  </Provider>
);

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { RouterProvider } from "react-router/dom";
import { createBrowserRouter } from "react-router";
import { Shop } from "./components/Shop/Shop";
import Review from "./components/Review/Review";
import Manage from "./components/Manage/Manage";
import ProductsDetails from "./components/ProductDetails/ProductsDetails";
import NotFound from "./components/NotFound/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      { index: true, Component: Shop },
      { path: "review", Component: Review },
      { path: "manage", Component: Manage },
      { path: "shop", Component: Shop },
      { path: "/products/:productKey", Component: ProductsDetails },
      { path: "*", Component: NotFound },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);

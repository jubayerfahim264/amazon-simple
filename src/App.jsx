import React from "react";
import Header from "./components/Header/Header";
import { Shop } from "./components/Shop/Shop";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Review from "./components/Review/Review";
import Manage from "./components/Manage/Manage";
import NotFound from "./components/NotFound/NotFound";
import ProductsDetails from "./components/ProductDetails/ProductsDetails";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/shop",
      element: <Shop />,
    },
    {
      path: "/review",
      element: <Review />,
    },
    {
      path: "/manage",
      element: <Manage />,
    },
    {
      path: "/",
      element: <Shop />,
    },
    {
      path: "/products/:productKey",
      element: <ProductsDetails />,
    },
    { path: "*", element: <NotFound /> },
  ]);
  return (
    <div>
      <Header />
      <RouterProvider router={router} />
    </div>
  );
};

export default App;

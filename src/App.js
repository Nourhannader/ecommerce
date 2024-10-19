import "./App.css";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import Skoloton from "./components/Skeleton/skeleton";
import Home from "./components/Home/home";
import ProductDetails from "./components/ProductDetails/productdetails";
import CheckOut from "./components/CheckOut/checkout";
import Payment from "./components/CheckOut/payment";
import Confirmation from "./components/CheckOut/confirmation";
import Expectation from "./components/ExpectationError/expectation";
import axios from "axios";
import React, { useEffect, useState } from "react";

let allRoutes = createBrowserRouter([
  {
    path: "/",
    element: <Skoloton />,
    children: [
      { path: "", element: <Home /> },
      {
        path: "productDetails/:id",
        element: <ProductDetails />,
        children: [{ path: "productDetails/:id", element: <ProductDetails /> }],
      },
      { path: "checkout/", element: <CheckOut /> },
      { path: "/payment", element: <Payment /> },
      { path: "confirmation/", element: <Confirmation /> },
    ],
  },
  { path: "*", element: <Expectation /> },
]);

function App() {
  /*template*/
  let [tempProducts, setTempProducts] = useState([]);
  async function getTempProducts() {
    let tempProducts = await axios.get("https://fakestoreapi.com/products");
    setTempProducts(tempProducts.data);
  }

  useEffect(() => {
    getTempProducts();
  }, []);
  return (
    <>
      <RouterProvider router={allRoutes}></RouterProvider>
    </>
  );
}

export default App;

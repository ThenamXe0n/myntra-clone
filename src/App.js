import Tabs from "./components/Tabs";
import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Products from "./components/Products";
import HomePage from "./pages/HomePage";
import Playground from "./components/Playground";
import ItemCart from "./components/ItemCart";
import TestButton from "./components/TestButton";
import TestPage from "./pages/TestPage";

const btnNames = ["HTML","CSS","Javascript","nodesJS"]


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage></HomePage>,
  },
  {
    path: "/tab",
    element: <Tabs buttonNames={btnNames}></Tabs>,
  },
  {
    path: "/product",
    element: <Products></Products>,
  },
  {
    path: "/playground",
    element: <Playground></Playground>,
  },
  {
    path: "/card",
    element: <ItemCart />,
  },
  {
    path: "/test",
    element: <TestPage></TestPage>,
  },
]);

function App() {
  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

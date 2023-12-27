import Tabs from "./components/Tabs";
import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Products from "./components/Products";
import HomePage from "./pages/HomePage";
import CarouselTwo from "./components/CarouselTwo";


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage></HomePage>,
  },
  {
    path: "/tab",
    element: <CarouselTwo></CarouselTwo>,
  },
  {
    path: "/product",
    element: <Products></Products>,
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

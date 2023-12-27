import React, { useState } from "react";
import "../styles/LandingPage.css";

const NavBar = () => {
  const [searchVal, setSearchVal] = useState([]);
  const [product, setProduct] = useState();
  const [hoverMenu, setHoverMenu] = useState(0);
  const handleInput = (e) => {
    setSearchVal(e.target.value);
    console.log(searchVal);
  };
  const handleSubmenuShow = () => {
    setHoverMenu(1);
  };
  const handleSubmenuhide = () => {
    setHoverMenu(0);
  };

  async function fetchData() {
    try {
      const response = await fetch("https://dummyjson.com/products");
      const data = await response.json();
      const items = data.products;
      setProduct(items);
      console.log(product);
    } catch (error) {
      console.error("Error:", error);
    }
  }

  return (
    <>
      {" "}
      <div className="w-screen h-20 bg-white navbar-container flex justify-between">
        <div
          className=" items-center flex"
          id="logo-container"
          onClick={fetchData}
        >
          <a className="header-logo block hover:cursor-pointer"></a>
        </div>
        <nav className="  ml-[5%] md:ml-[1%] lg:ml-[5%] h-full">
          <div id="nav-container" className="flex gap-9 h-full">
            <div id="navitem-container">
              <a
                href="#"
                id="navlinks"
                onMouseEnter={handleSubmenuShow}
                onMouseLeave={handleSubmenuhide}
              >
                Men
              </a>
            </div>
            <div id="navitem-container">
              <a
                href="#"
                id="navlinks"
                onMouseEnter={handleSubmenuShow}
                onMouseLeave={handleSubmenuhide}
              >
                Women
              </a>
            </div>
            <div id="navitem-container">
              <a
                href="#"
                id="navlinks"
                onMouseEnter={handleSubmenuShow}
                onMouseLeave={handleSubmenuhide}
              >
                Kids
              </a>
            </div>
            <div id="navitem-container">
              <a
                href="#"
                id="navlinks"
                onMouseEnter={handleSubmenuShow}
                onMouseLeave={handleSubmenuhide}
              >
                Home & Living
              </a>
            </div>
            <div id="navitem-container">
              <a
                href="#"
                id="navlinks"
                onMouseEnter={handleSubmenuShow}
                onMouseLeave={handleSubmenuhide}
              >
                Beauty
              </a>
            </div>
            <div id="navitem-container">
              <a
                href="#"
                id="navlinks"
                onMouseEnter={handleSubmenuShow}
                onMouseLeave={handleSubmenuhide}
              >
                Studio <sup className=" text-red-600 font-semibold">new</sup>
              </a>
            </div>
          </div>
        </nav>
        <div id="searchbar" className="ml-[3%] flex h-full w-1/3 flex-col">
          <div
            id="searchbar-container"
            className="rounded-md w-full flex bg-[whitesmoke]"
          >
            <div
              id="searchicon-container"
              className="h-auto flex searchbar-icon"
            ></div>
            <form>
              <input
                type="text"
                placeholder="Search for product ,brands and more"
                className="focus:outline-none  w-full bg-[whitesmoke] p-3 rounded-xl"
                value={searchVal}
                onChange={(e) => {
                  handleInput(e);
                }}
              />
            </form>
          </div>
          <div
            className={
              searchVal.length < 3 || searchVal === "null" || searchVal === ""
                ? "hidden"
                : "w-full flex flex-col mt-8 z-20"
            }
            id="searchbar-suggestions"
          >
            <h5 className=" bg-gray-200 text-gray-600 font-bold text-sm p-1">
              all others
            </h5>
            <ul className="flex flex-col list-none bg-white text-black text-sm font-medium p-1">
              <li className="suggested-listitem">mens jeans</li>
              <li className="suggested-listitem">T-shirt</li>
              <li className="suggested-listitem">Shirts</li>
              <li className="suggested-listitem">Shorts</li>
            </ul>
          </div>
        </div>
        <div
          id="user-navigation"
          className="w-[13%] flex justify-evenly h-full"
        >
          <div className="flex flex-col items-center justify-center cursor-pointer">
            <div className="usernavigation-items desktop-profileicon "></div>
            <h6 className="text-[12px] font-semibold text-black capitalize">
              profile
            </h6>
          </div>
          <div className="flex flex-col items-center justify-center cursor-pointer">
            <div className="usernavigation-items desktop-wishlisticon"></div>
            <h6 className="text-[12px] font-semibold text-black capitalize">
              wishlist
            </h6>
          </div>
          <div className="flex flex-col items-center justify-center cursor-pointer">
            <div className="usernavigation-items desktop-bagicon "></div>
            <h6 className="text-[12px] font-semibold text-black capitalize">
              bag
            </h6>
          </div>
        </div>
      </div>
      <div
      id="submenu"
        className={
          hoverMenu === 1
            ? `w-[60vw] h-[33vh] bg-[whitesmoke] absolute left-72 flex flex-row p-4 justify-between`
            : `hidden`
        }
        onMouseEnter={handleSubmenuShow}
        onMouseLeave={handleSubmenuhide}
      >
        <div>
          <h4 className="font-semibold text-red-500">upperwears</h4>
          <ul className="submenu-links list-none">
            <li className="text-black font-medium my-2"> Shirts </li>
            <li className="text-black font-medium my-2"> T-shirts </li>
            <li className="text-black font-medium my-2"> Jackets </li>
            <li className="text-black font-medium my-2"> Hoodies </li>
            <li className="text-black font-medium my-2"> Tank-Tops </li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-red-500">Lowerwear</h4>
          <ul className=" list-none submenu-links">
            <li className="text-black font-medium my-2"> Jeans </li>
            <li className="text-black font-medium my-2"> Trousers </li>
            <li className="text-black font-medium my-2"> Joggers </li>
            <li className="text-black font-medium my-2"> Shorts </li>
            <li className="text-black font-medium my-2"> InnerWear </li>
            <li className="text-black font-medium my-2"> boxers </li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-red-500">Ethics</h4>
          <ul className=" list-none submenu-links">
            <li className="text-black font-medium my-2"> Kurta set </li>
            <li className="text-black font-medium my-2"> Dhoti </li>
            <li className="text-black font-medium my-2"> Shervani </li>
            <li className="text-black font-medium my-2"> Lungis </li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-red-500">Sports Wear</h4>
          <ul className=" list-none submenu-links">
            <li className="text-black font-medium my-2"> Track Pants </li>
            <li className="text-black font-medium my-2"> Compression wear </li>
            <li className="text-black font-medium my-2"> boxers </li>
            <li className="text-black font-medium my-2"> Supporters </li>
            <li className="text-black font-medium my-2"> Accessories </li>
            <li className="text-black font-medium my-2"> Sunglasses </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default NavBar;

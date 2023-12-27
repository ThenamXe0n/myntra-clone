import React, { useEffect, useState } from "react";

const Products = () => {
  const [items, setItems] = useState([
    { title: "nameet" },
    { title: "mandwal" },
  ]);
  const [searchVal, setSearchVal] = useState("");
  const [products, setProducts] = useState("");

  const fetchAllProducts = async () => {
    const fetchedItems = await fetch("https://dummyjson.com/products");
    const result = await fetchedItems.json();
    const ItemsArray = result.products;
    const filterArray = result.products;
    setItems(ItemsArray);
    setProducts(filterArray);

    console.log(items);
    return result;
  };

  const filterAllProdducts = (e) => {
    setSearchVal(e.target.value);
    const ItemsArray = items;
    let filter = searchVal;
    const filteredArray = ItemsArray.filter((item) => {
      return item.title.toLocaleLowerCase().includes(searchVal);
    });
    console.log(filteredArray);
    if (searchVal.length >= 1) {
      setItems(filteredArray);
    } else {
      setItems(products);
    }
  };

  return (
    <>
      <div className="my-10 flex justify-center">
        <input
          className=" focus:outline-none text-2xl w-1/2 "
          type="text"
          id="inputSearchBar"
          value={searchVal}
          placeholder="search here..."
          onChange={(e) => filterAllProdducts(e)}
        />
        {console.log(searchVal)}
      </div>
      <div>
        <ul className="bg-gray-700 flex flex-col items-center">
          {items.map((item, index) => (
            <li key={index} className=" mt-5  text-white w-2/6">
            <img src={item.thumbnail} height="20px" alt={item.title} />
              <h1 className="text-2xl align-center">{item.title}</h1>
            </li>
          ))}
        </ul>
        <button onClick={fetchAllProducts}>fetch Items</button>
        <button onClick={filterAllProdducts}>filter Items</button>
      </div>
    </>
  );
};

export default Products;

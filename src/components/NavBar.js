import React, { useState } from "react";
import "../styles/LandingPage.css";

const NavBar = () => {
  const ProductItems = [
    {
      id: 1,
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      price: 109.95,
      description:
        "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      category: "men's clothing",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      rating: {
        rate: 3.9,
        count: 120,
      },
    },
    {
      id: 2,
      title: "Mens Casual Premium Slim Fit T-Shirts ",
      price: 22.3,
      description:
        "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
      category: "men's clothing",
      image:
        "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
      rating: {
        rate: 4.1,
        count: 259,
      },
    },
    {
      id: 3,
      title: "Mens Cotton Jacket",
      price: 55.99,
      description:
        "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
      category: "men's clothing",
      image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
      rating: {
        rate: 4.7,
        count: 500,
      },
    },
    {
      id: 4,
      title: "Mens Casual Slim Fit",
      price: 15.99,
      description:
        "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
      category: "men's clothing",
      image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
      rating: {
        rate: 2.1,
        count: 430,
      },
    },
    {
      id: 5,
      title:
        "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
      price: 695,
      description:
        "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
      category: "jewelery",
      image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
      rating: {
        rate: 4.6,
        count: 400,
      },
    },
    {
      id: 6,
      title: "Solid Gold Petite Micropave ",
      price: 168,
      description:
        "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
      category: "jewelery",
      image: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
      rating: {
        rate: 3.9,
        count: 70,
      },
    },
    {
      id: 7,
      title: "White Gold Plated Princess",
      price: 9.99,
      description:
        "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
      category: "jewelery",
      image: "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
      rating: {
        rate: 3,
        count: 400,
      },
    },
    {
      id: 8,
      title: "Pierced Owl Rose Gold Plated Stainless Steel Double",
      price: 10.99,
      description:
        "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
      category: "jewelery",
      image: "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
      rating: {
        rate: 1.9,
        count: 100,
      },
    },
    {
      id: 9,
      title: "WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
      price: 64,
      description:
        "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
      category: "electronics",
      image: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
      rating: {
        rate: 3.3,
        count: 203,
      },
    },
    {
      id: 10,
      title: "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
      price: 109,
      description:
        "Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)",
      category: "electronics",
      image: "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
      rating: {
        rate: 2.9,
        count: 470,
      },
    },
    {
      id: 11,
      title:
        "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
      price: 109,
      description:
        "3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.",
      category: "electronics",
      image: "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg",
      rating: {
        rate: 4.8,
        count: 319,
      },
    },
    {
      id: 12,
      title:
        "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
      price: 114,
      description:
        "Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty",
      category: "electronics",
      image: "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg",
      rating: {
        rate: 4.8,
        count: 400,
      },
    },
    {
      id: 13,
      title: "Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin",
      price: 599,
      description:
        "21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate: 75Hz - Using HDMI port Zero-frame design | ultra-thin | 4ms response time | IPS panel Aspect ratio - 16: 9. Color Supported - 16. 7 million colors. Brightness - 250 nit Tilt angle -5 degree to 15 degree. Horizontal viewing angle-178 degree. Vertical viewing angle-178 degree 75 hertz",
      category: "electronics",
      image: "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg",
      rating: {
        rate: 2.9,
        count: 250,
      },
    },
    {
      id: 14,
      title:
        "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED ",
      price: 999.99,
      description:
        "49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT (QLED) TECHNOLOGY, HDR support and factory calibration provides stunningly realistic and accurate color and contrast 144HZ HIGH REFRESH RATE and 1ms ultra fast response time work to eliminate motion blur, ghosting, and reduce input lag",
      category: "electronics",
      image: "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",
      rating: {
        rate: 2.2,
        count: 140,
      },
    },
    {
      id: 15,
      title: "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
      price: 56.99,
      description:
        "Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. Detachable Functional Liner: Skin Friendly, Lightweigt and Warm.Stand Collar Liner jacket, keep you warm in cold weather. Zippered Pockets: 2 Zippered Hand Pockets, 2 Zippered Pockets on Chest (enough to keep cards or keys)and 1 Hidden Pocket Inside.Zippered Hand Pockets and Hidden Pocket keep your things secure. Humanized Design: Adjustable and Detachable Hood and Adjustable cuff to prevent the wind and water,for a comfortable fit. 3 in 1 Detachable Design provide more convenience, you can separate the coat and inner as needed, or wear it together. It is suitable for different season and help you adapt to different climates",
      category: "women's clothing",
      image: "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
      rating: {
        rate: 2.6,
        count: 235,
      },
    },
    {
      id: 16,
      title:
        "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
      price: 29.95,
      description:
        "100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort / 2 pockets of front, 2-For-One Hooded denim style faux leather jacket, Button detail on waist / Detail stitching at sides, HAND WASH ONLY / DO NOT BLEACH / LINE DRY / DO NOT IRON",
      category: "women's clothing",
      image: "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg",
      rating: {
        rate: 2.9,
        count: 340,
      },
    },
    {
      id: 17,
      title: "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
      price: 39.99,
      description:
        "Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.",
      category: "women's clothing",
      image: "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
      rating: {
        rate: 3.8,
        count: 679,
      },
    },
    {
      id: 18,
      title: "MBJ Women's Solid Short Sleeve Boat Neck V ",
      price: 9.85,
      description:
        "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem",
      category: "women's clothing",
      image: "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg",
      rating: {
        rate: 4.7,
        count: 130,
      },
    },
    {
      id: 19,
      title: "Opna Women's Short Sleeve Moisture",
      price: 7.95,
      description:
        "100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away, Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort",
      category: "women's clothing",
      image: "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
      rating: {
        rate: 4.5,
        count: 146,
      },
    },
    {
      id: 20,
      title: "DANVOUY Womens T Shirt Casual Cotton Short",
      price: 12.99,
      description:
        "95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.",
      category: "women's clothing",
      image: "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
      rating: {
        rate: 3.6,
        count: 145,
      },
    },
  ];

  const MEN = [
    {
      title: "upperwear",
      list: [
        { category: "shirts", href: "https://www.google.com" },
        { category: "t-shirt", href: "www.youtube.com" },
        { category: "Hoodies", href: "www.github.com" },
        { category: "jackets", href: "www.pornhub.com" },
      ],
    },
    {
      title: "lowerwear",
      list: [
        { category: "jeans", href: "https://www.google.com" },
        { category: "t-shirt", href: "www.youtube.com" },
        { category: "Hoodies", href: "www.github.com" },
        { category: "jackets", href: "www." },
      ],
    },
    {
      title: "Festivewear",
      list: [
        { category: "Kurtas", href: "https://www.google.com" },
        { category: "Dhotis", href: "www.youtube.com" },
        { category: "Sherwani", href: "www.github.com" },
        { category: "Nehru Jackets", href: "www.pornhub.com" },
      ],
    },
  ];
  const WOMEN = [
    {
      title: "INDIAN & FUSION WEARS",
      list: [
        { category: "Kurata and Suits", href: "https://www.google.com" },
        { category: "Kurtis ,Tunics & Tops", href: "www.youtube.com" },
        { category: "Sarees", href: "www.github.com" },
        { category: "Ethinc Wears", href: "fkjhsd" },
        { category: "Jackets", href: "fkjhsd" },
        { category: "Lehnaga Cholis", href: "fkjhsd" },
        { category: "Dupattas and Shawls", href: "fkjhsd" },
      ],
    },
    {
      title: "Western Wears",
      list: [
        { category: "Dresses", href: "htkshk" },
        { category: "Tops", href: "htkshk" },
        { category: "Tshits", href: "htkshk" },
        { category: "Jeans", href: "htkshk" },
        { category: "Playsuits", href: "htkshk" },
        { category: "shrugs", href: "htkshk" },
        { category: "Sweater & Sweatshirts", href: "htkshk" },
      ],
    },
    {
      title: "Sports & Active Wears",
      list: [
        { category: "Clothing", href: "jjhsdjkh" },
        { category: "Footwears", href: "kjhsdkj" },
        { category: "Sports Accessories", href: "lkkjsdlj" },
      ],
    },
  ];
  const KIDS = [
    {
      title: "Boys Clothing",
      list: [
        { category: "Shirts", href: "https://www.google.com" },
        { category: "t-shirt", href: "www.youtube.com" },
        { category: "Jeans", href: "www.github.com" },
        { category: "Clothing set", href: "fkjhsd" },
        { category: "Ethnic Wear", href: "fkjhsd" },
        { category: "Party Wear", href: "fkjhsd" },
        { category: "Nightwears & Loungewear", href: "fkjhsd" },
      ],
    },
    {
      title: "Girls Clothing",
      list: [
        { category: "Dresses", href: "https://www.google.com" },
        { category: "Tops", href: "www.youtube.com" },
        { category: "Clothing sets", href: "www.github.com" },
        { category: "Kurta sets", href: "fkjhsd" },
        { category: "jackets and Sweatshirts", href: "fkjhsd" },
        { category: "Party Wear", href: "fkjhsd" },
        { category: "Dungrees & Jumpsuits", href: "fkjhsd" },
      ],
    },
    {
      title: "Footwears",
      list: [
        { category: "Casual Shoes", href: "https://www.google.com" },
        { category: "Flipflops", href: "www.youtube.com" },
        { category: "Sports Shoes", href: "www.github.com" },
        { category: "Flats", href: "fkjhsd" },
        { category: "Scandals", href: "fkjhsd" },
        { category: "Heels", href: "fkjhsd" },
        { category: "Socks", href: "fkjhsd" },
      ],
    },
    {
      title: "Toys and games",
      list: [
        { category: "Learning & Development", href: "https://www.google.com" },
        { category: "Activity Toys", href: "www.youtube.com" },
        { category: "Soft Toys", href: "www.github.com" },
        { category: "Action Figure / Play sets", href: "fkjhsd" },
      ],
    },
  ];
  const HOME = [
    {
      title: "Beds Linen & Furnishing",
      list: [
        { category: "Bed Runners", href: "https://www.google.com" },
        { category: "Mattress protector", href: "www.youtube.com" },
        { category: "Bedsheets ", href: "www.github.com" },
        { category: "Blankets,Quilts & Dohars", href: "fkjhsd" },
        { category: "Pillow & Pillow Covers", href: "fkjhsd" },
        { category: "Sofa Covers", href: "fkjhsd" },
        { category: "Chair Pad & Covers", href: "fkjhsd" },
      ],
    },
    {
      title: "Bath",
      list: [
        { category: "Bath Towels", href: "https://www.google.com" },
        { category: "Hand & Face Towels", href: "www.youtube.com" },
        { category: "Bath Rugs", href: "www.github.com" },
        { category: "Shower Curtains", href: "fkjhsd" },
        { category: "Bathroom Accessories", href: "fkjhsd" },
      ],
    },
    {
      title: "Floorings ",
      list: [
        { category: "Floor Runner ", href: "https://www.google.com" },
        { category: "Carpet ", href: "www.youtube.com" },
        { category: "Floor Mats & Dhurries", href: "www.github.com" },
        { category: "Door Mats ", href: "fkjhsd" },
      ],
    },
    {
      title: "Home Decor",
      list: [
        { category: "Plants & Planters ", href: "https://www.google.com" },
        { category: "Clocks ", href: "www.youtube.com" },
        { category: "Wall Decor", href: "www.github.com" },
        { category: "Mirror ", href: "fkjhsd" },
        { category: "Fountain", href: "fkjhsd" },
        { category: "Pooja Essentials", href: "fkjhsd" },
        { category: "Showpeices & Vases", href: "fkjhsd" },
      ],
    },
    {
      title: "Lamps and Lighting ",
      list: [
        { category: "Floor Lamps  ", href: "https://www.google.com" },
        { category: "Ceiling Lamps", href: "www.youtube.com" },
        { category: "Table Lamps  ", href: "www.github.com" },
        { category: "Outdoors Lamps", href: "fkjhsd" },
        { category: "String Lamps", href: "fkjhsd" },
      ],
    },
  ];
  const BEAUTY = [
    {
      title: "Makeup",
      list: [
        { category: "Lipstic", href: "https://www.google.com" },
        { category: "Lip Gloss ", href: "www.youtube.com" },
        { category: "Lip Liner ", href: "www.github.com" },
        { category: "Eyeliner", href: "fkjhsd" },
        { category: "Primer", href: "fkjhsd" },
        { category: "nail Polish", href: "fkjhsd" },
        { category: "Kajal", href: "fkjhsd" },
      ],
    },
    {
      title: "Skincare, Bath & Body ",
      list: [
        { category: "Face Mosituriser ", href: "https://www.google.com" },
        { category: "Cleanser", href: "www.youtube.com" },
        { category: "Mask &b Peel  ", href: "www.github.com" },
        { category: "Sunscreen ", href: "fkjhsd" },
        { category: "Serum ", href: "fkjhsd" },
        { category: "Face Wash", href: "fkjhsd" },
        { category: "Body Lotion", href: "fkjhsd" },
        { category: "Hand Cream", href: "fkjhsd" },
      ],
    },
    {
      title: "Haircare ",
      list: [
        { category: "Shampoo  ", href: "https://www.google.com" },
        { category: "Conditioners", href: "www.youtube.com" },
        { category: "Hair Cream", href: "www.github.com" },
        { category: "Hair Oil", href: "fkjhsd" },
        { category: "Hair Accessory", href: "fkjhsd" },
        { category: "Hair Gel", href: "fkjhsd" },
      ],
    },
    {
      title: "Fragrence",
      list: [
        { category: "Perfumes", href: "https://www.google.com" },
        { category: "Deodorents", href: "www.youtube.com" },
        { category: "Body Mist", href: "www.github.com" },
      ],
    },
  ];
  const STUDIO = [];

  const [searchVal, setSearchVal] = useState([]);
  const [hoveredValue, setHoveredVal] = useState([]);
  const [items, setItems] = useState(ProductItems);
  const [hoverMenu, setHoverMenu] = useState(0);
  const handleInput = (e) => {
    setSearchVal(e.target.value);
    const ItemsArray = ProductItems;
    const filteredArray = ItemsArray.filter((item) => {
      return item.description.toLocaleLowerCase().includes(searchVal);
    });
    console.log(filteredArray);
    console.log(items);
    if (searchVal.length >= 2) {
      setItems(filteredArray);
    } else {
      setItems(ProductItems);
    }
  };
  const handleSubmenuShow = (e) => {
    setHoveredVal(e);
    setHoverMenu(1);
  };
  const handleSubmenuhide = () => {
    setHoveredVal("");
    setHoverMenu(0);
  };

  return (
    <>
      {" "}
      <div className="w-screen h-20 bg-white navbar-container flex">
        <div className=" items-center flex" id="logo-container">
          <a className="header-logo block hover:cursor-pointer"></a>
        </div>
        <nav className="  ml-[5%] md:ml-[1%] lg:ml-[5%] h-full">
          <div id="nav-container" className="flex gap-9  h-full">
            <div id="navitem-container" onMouseEnter={handleSubmenuhide}>
              <a
                href="#"
                id="navlinks"
                onMouseEnter={(e) => {
                  handleSubmenuShow(e.target.innerText);
                }}
                className={hoveredValue === "MEN" ? `bottom-border-red` : ``}
              >
                Men
              </a>
            </div>
            <div id="navitem-container">
              <a
                href="#"
                id="navlinks"
                onMouseEnter={(e) => {
                  handleSubmenuShow(e.target.innerText);
                }}
                className={hoveredValue === "WOMEN" ? `bottom-border-pink` : ``}
              >
                Women
              </a>
            </div>
            <div id="navitem-container">
              <a
                href="#"
                id="navlinks"
                onMouseEnter={(e) => {
                  handleSubmenuShow(e.target.innerText);
                }}
                className={
                  hoveredValue === "KIDS" ? `bottom-border-yellow` : ``
                }
              >
                Kids
              </a>
            </div>
            <div id="navitem-container">
              <a
                href="#"
                id="navlinks"
                onMouseEnter={(e) => {
                  handleSubmenuShow(e.target.innerText);
                }}
                className={
                  hoveredValue === "HOME & LIVING" ? `bottom-border-teal` : ``
                }
              >
                Home & Living
              </a>
            </div>
            <div id="navitem-container">
              <a
                href="#"
                id="navlinks"
                onMouseEnter={(e) => {
                  handleSubmenuShow(e.target.innerText);
                }}
                className={
                  hoveredValue === "BEAUTY" ? `bottom-border-orchid` : ``
                }
              >
                Beauty
              </a>
            </div>
            <div id="navitem-container">
              <a
                href="#"
                id="navlinks"
                className="hover:border-red-600 border-b-2"
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
              searchVal.length < 2 || searchVal === "null" || searchVal === ""
                ? "hidden"
                : "w-full flex flex-col mt-8 z-20"
            }
            id="searchbar-suggestions"
          >
            <h5 className=" bg-gray-200 text-gray-600 font-bold text-sm p-1">
              all others
            </h5>
            <ul className="flex flex-col list-none bg-white text-black text-sm font-medium p-1">
              {items.map((item) => (
                <div className="suggested-listitem flex my-2 items-center">
                  <div className="w-12 h-12 overflow-hidden">
                    <img src={item.image} alt={item.title} className="w-12" />
                  </div>
                  <h5 className="ml-6">{item.title}</h5>
                </div>
              ))}
            </ul>
          </div>
        </div>
        <div
          id="user-navigation"
          className="w-[13%] flex justify-evenly h-full ml-8"
        >
          <div className="flex flex-col items-center justify-center cursor-pointer">
            <div className="usernavigation-items desktop-profileicon "></div>
            <h6
              id="profile"
              onMouseEnter={(e)=>{setHoveredVal(e.target.innerText)}}
              className={hoveredValue==="Profile"?`text-[12px] font-semibold text-black capitalize bottom-border-red`:`text-[12px] font-semibold text-black capitalize`}
            >
              profile
            </h6>
            <div className={hoveredValue==="Profile"?`max-h-fit bg-white shadow-2xl p-5 absolute top-20 w-[20%] z-40`:`hidden`} onMouseLeave={()=>{setHoveredVal("")}}>
              <div id="userlogin">
                <h3>welcome</h3>
                <p className="text-sm font-thin">
                  To access account and manage order
                </p>
                <div className="p-2 mt-4 duration-300" id="signin-btn">
                  {" "}
                  LOGIN / SIGNUP
                </div>
              </div>
              <div id="userprofile-nav-list" className="border-none">
                <ul>
                  <li className="nav-list" >order</li>
                  <li className="nav-list" >wishlist</li>
                  <li className="nav-list" >Gift card</li>
                  <li className="nav-list" >contact us</li>
                  <li className="nav-list" >Myntra Insider <i className="bg-pink-600 text-white text-[8px] py-[2px] px-1 rounded-md">new</i></li>
                </ul>
              </div>
              <div id="myntra-nav-list">
                <ul >
                  <li className="nav-list">myntra credit</li>
                  <li className="nav-list">coupon</li>
                  <li className="nav-list">Saved card</li>
                  <li className="nav-list">Saved VPA</li>
                  <li className="nav-list">Saved Address </li>
                </ul>
              </div>
            </div>
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
        className={
          hoverMenu === 1 ? `submenu-container w-screen h-screen` : `hidden`
        }
        onMouseLeave={handleSubmenuhide}
      >
        <div
          id="submenu"
          className={
            hoverMenu === 1
              ? `w-[60vw] ml-[10%] bg-[whitesmoke] flex flex-row p-4 justify-between`
              : `hidden`
          }
          onMouseLeave={handleSubmenuhide}
        >
          <div className="flex justify-around gap-10 p-5 rounded-md overflow-x-scroll ">
            {hoveredValue === "MEN"
              ? MEN.map((item) => (
                  <div className="flex flex-col">
                    <h4 className="font-semibold text-red-500">{item.title}</h4>
                    <ul>
                      {item.list.map((listItem) => (
                        <li key={listItem.category}>
                          <a id="submenu-links" href={listItem.href}>
                            {listItem.category}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))
              : hoveredValue === "WOMEN"
              ? WOMEN.map((item) => (
                  <div className="flex flex-col">
                    <h4
                      className={
                        hoveredValue === "WOMEN"
                          ? `text-pink-500 font-semibold`
                          : ``
                      }
                    >
                      {item.title}
                    </h4>
                    <ul>
                      {item.list.map((listItem) => (
                        <li key={listItem.category}>
                          <a id="submenu-links" href={listItem.href}>
                            {listItem.category}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))
              : hoveredValue === "KIDS"
              ? KIDS.map((item) => (
                  <div className="flex flex-col">
                    <h4
                      className={
                        hoveredValue === "KIDS"
                          ? `text-yellow-500 font-semibold`
                          : ``
                      }
                    >
                      {item.title}
                    </h4>
                    <ul>
                      {item.list.map((listItem) => (
                        <li key={listItem.category}>
                          <a id="submenu-links" href={listItem.href}>
                            {listItem.category}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))
              : hoveredValue === "HOME & LIVING"
              ? HOME.map((item) => (
                  <div className="flex flex-col">
                    <h4
                      className={
                        hoveredValue === "HOME & LIVING"
                          ? `text-teal-600 font-semibold`
                          : ``
                      }
                    >
                      {item.title}
                    </h4>
                    <ul>
                      {item.list.map((listItem) => (
                        <li key={listItem.category}>
                          <a href={listItem.href} id="submenu-links">
                            {listItem.category}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))
              : hoveredValue === "BEAUTY"
              ? BEAUTY.map((item) => (
                  <div className="flex flex-col">
                    <h4
                      className={
                        hoveredValue === "BEAUTY" ? `text-[orchid]` : ``
                      }
                    >
                      {item.title}
                    </h4>
                    <ul>
                      {item.list.map((listItem) => (
                        <li key={listItem.category}>
                          <a id="submenu-links" href={listItem.href}>
                            {listItem.category}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))
              : STUDIO.map((item) => (
                  <div className="flex flex-col">
                    <h4 className="font-semibold text-red-500">{item.title}</h4>
                    <ul>
                      {item.list.map((listItem) => (
                        <li key={listItem.category}>
                          <a id="submenu-links" href={listItem.href}>
                            {listItem.category}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;

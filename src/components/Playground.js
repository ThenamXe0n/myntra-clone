import React, { useState } from "react";

const options = ["cricket", "football", "hockey"];
const day = ["weekday", "weekend"];
const countries = [
  { name: "India", value: "IN", cities: ["mumbai", "Indore"] },
  { name: "Pakistan", value: "PAK", cities: ["lahore", "karachi"] },
  { name: "Bangladesh", value: "BAN", cities: ["Dhaka", "Chittagong"] },
];

const Playground = () => {
  const [game, setGame] = useState("_______");
  const [days, setDays] = useState("________");
  const [country,setCountry] = useState("")
  const handleOnChange = (e) =>{
setCountry(e)
  }
  const handleInputGame = (e) => {
    setGame(e);
  };
  return (
    <div className="px-40 pt-14">
      <select className="bg-gray-700 text-white"  onChange={(e)=>{handleOnChange(e.target.value)}}>
      {countries.map((option)=>(
        <option name="country" value={option.name}>{option.value}</option>
      ))}
       
      </select>
    </div>
    // <div className="p-[50px]">
    //   <h1 className="text-3xl font-bold">Which Game?</h1>
    //   {options.map((currentgame) => (
    //     <>
    //       <label for={currentgame}>{currentgame}</label>
    //       <input
    //         type="radio"
    //         name="game"
    //         id={currentgame}
    //         value={currentgame}
    //         onChange={(e) => {
    //           setGame(e.target.value);
    //         }}
    //       />
    //       <br />
    //     </>
    //   ))}

    //   <h2 className="text-3xl font-bold">you will Play</h2>
    //   {day.map((currentgame) => (
    //     <>
    //       <label for={currentgame}>{currentgame}</label>
    //       <input
    //         type="radio"
    //         name="day"
    //         id={currentgame}
    //         value={currentgame}
    //         onChange={(e) => {
    //           setDays(e.target.value);
    //         }}
    //       />{" "}
    //       <br />
    //     </>
    //   ))}
    //   <h1>
    //     I would like to play <strong className="text-red-500">{game}</strong> on{" "}
    //     <strong className="text-red-500">{days}</strong>
    //   </h1>
    // </div>

   
  );
};

export default Playground;

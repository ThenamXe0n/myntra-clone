import React, { useState } from "react";

const TestButton = (prop) => {
  const [count,setCount] = useState(0)
  return (
    <>
      <button onClick={(E)=>{setCount(count+1)}}>{count}</button>
    </>
  );
};

export default TestButton;

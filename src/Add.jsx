import { useState } from "react";

export default function Add() {
  const [anyCount, setCount] = useState(20);

  const handleClick = () => {
    setCount((count) => count + 1);
  };

  const coutnStyle = {
    border: "2px solid red",
    margin: "20px",
    padding: "20px",
    borderRadius: "20px",
    color: "violet",
  };

  return (
    <div style={coutnStyle}>
      <h3>count any think: {anyCount}</h3>
      <button onClick={handleClick}>Add</button>
    </div>
  );
}

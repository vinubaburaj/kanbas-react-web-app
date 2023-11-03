import React, { useState } from "react";
function Counter() {
  const [count, setCount] = useState(7);
  console.log(count);
  return (
    <>
      <h2>Counter: {count}</h2>
      <button
        onClick={() => setCount(count+1)}
        className="btn btn-success ms-2"
      >
        Up
      </button>
      <button
        onClick={() => setCount(count-1)}
        className="btn btn-danger ms-2"
      >
        Down
      </button>
    </>
  );
}
export default Counter;

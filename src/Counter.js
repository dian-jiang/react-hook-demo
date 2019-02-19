import React, { useState } from "react";

function Counter(props) {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <p>Current count is {count}</p>
      <button onClick={handleIncrement}>Add</button>
      <button onClick={handleDecrement}>Subtract</button>
    </div>
  );
}

export default Counter;

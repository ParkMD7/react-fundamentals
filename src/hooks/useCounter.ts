import { useState, useEffect } from "react";

const useCounter = (initialCount: number) => {
  const [count, setCount] = useState(initialCount);

  useEffect(() => {
    console.log("count", count);
  }, [count]);

  const increment = () => {
    setCount(count + 1);
  };

  return { count, increment };
};

export default useCounter;

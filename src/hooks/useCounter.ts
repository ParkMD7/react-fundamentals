import { useState, useEffect } from "react";

const useCounter = (initialCount: number) => {
  const [count, setCount] = useState(initialCount);

  useEffect(() => {
  }, [count]);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    // prevent count from going below 0
    if (count === 0) return;

    setCount(count - 1);
  };

  const setCustomCount = (num: number) => {
    if (count + num <= 0) {
      setCount(0)
    } else {
      setCount(count + num)
    }
  }

  return { count, setCustomCount, increment, decrement };
};

export default useCounter;

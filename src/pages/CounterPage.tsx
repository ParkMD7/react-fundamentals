import { useState } from "react";

import Button from "../components/Button";
import Panel from "../components/Panel";

import useCounter from "../hooks/useCounter";

interface CounterPageProps {
  initialCount: number;
}

const CounterPage = ({ initialCount }: CounterPageProps) => {
  const [valueToAdd, setValueToAdd] = useState(0);
  const { count, setCustomCount, increment, decrement } = useCounter(initialCount);

  const handleOnChange = (event: React.FormEvent<HTMLInputElement>) => {
    // adding "|| 0 " to protect against edge case of user deleting value in text input
    // calling parseInt on that value (an empty string) results in NaN
    const value = parseInt(event.currentTarget.value) || 0;
    setValueToAdd(value);
  };

  const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    // prevent default browser behavior to refresh the page on form submission
    event.preventDefault();

    setCustomCount(valueToAdd);
    setValueToAdd(0);
  };

  return (
    <Panel className="m-3">
      <h1 className="text-lg">Count is: {count}</h1>
      <div className="flex flex-row">
        <Button primary outline onClick={increment}>
          Increment
        </Button>
        <Button danger outline onClick={decrement}>
          Decrement
        </Button>
      </div>

      <form onSubmit={handleOnSubmit}>
        <label>Add a lot!</label>
        <input
          // I dont want to show 0 if the user hasn't typed -- empty string looks cleaner
          value={valueToAdd || ""}
          type="number"
          onChange={handleOnChange}
          className="p-1 m-3 bg-gray-50 border border-gray-300"
        />
        <Button primary>
          Add!
        </Button>
      </form>
    </Panel>
  );
};

export default CounterPage;

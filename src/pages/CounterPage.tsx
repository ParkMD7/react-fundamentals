// implementation with useReducer
import { useReducer } from "react";
import { produce } from "immer";

import Button from "../components/Button";
import Panel from "../components/Panel";

import {
  INCREMENT,
  DECREMENT,
  VALUE_TO_ADD,
  UPDATE_COUNT,
} from "../constants/constants";

interface CounterPageProps {
  initialCount: number;
}

interface CounterPageState {
  count: number;
  valueToAdd: number;
}

interface ActionObj {
  type: string;
  payload?: any;
}

// whatever we return from our reducer function will be our new version of state (if we return nothing then our state will be undefined)
// no async/await, no requests, no promises, no outside vars
// dont modify state object in any way -- we want to return a new state obj
const reducer = (state: CounterPageState, action: ActionObj) => {
  const { type } = action;

  switch (type) {
    case INCREMENT:
      return { ...state, count: state.count + 1 };
    case DECREMENT:
      return { ...state, count: state.count - 1 };
    case VALUE_TO_ADD:
      return { ...state, valueToAdd: action.payload };
    case UPDATE_COUNT:
      return { ...state, count: state.count + state.valueToAdd, valueToAdd: 0 };
    default:
      return state;
  }
};

// Immer library allows us to directly mutate state && we do not have to return a new value
// We still need to return from each case so we dont fall through to the next switch statement condition
const reducerWithImmer = (state: CounterPageState, action: ActionObj) => {
  const { type } = action;

  switch (type) {
    case INCREMENT:
      state.count = state.count + 1;
      return;
    case DECREMENT:
      state.count = state.count - 1;
      return;
    case VALUE_TO_ADD:
      state.valueToAdd = action.payload;
      return;
    case UPDATE_COUNT:
      state.count = state.count + state.valueToAdd;
      state.valueToAdd = 0;
      return;
    default:
      return state;
  }
};

const CounterPage = ({ initialCount }: CounterPageProps) => {
  // dispatch is our setter function for updating state with useReducer
  // calling dispatch with an argument will show up as the second arg in our reducer function (action)
  // const [state, dispatch] = useReducer(reducer, { count: initialCount, valueToAdd: 0 }); // -- normal reducer

  // reducer with Immer library
  const [state, dispatch] = useReducer(produce(reducerWithImmer), {
    count: initialCount,
    valueToAdd: 0,
  });

  const { count, valueToAdd } = state;

  const handleOnChange = (event: React.FormEvent<HTMLInputElement>) => {
    // adding "|| 0 " to protect against edge case of user deleting value in text input
    // calling parseInt on that value (an empty string) results in NaN
    const value = parseInt(event.currentTarget.value) || 0;
    dispatch({ type: VALUE_TO_ADD, payload: value });
  };

  const handleIncrement = () => {
    dispatch({ type: INCREMENT });
  };

  const handleDecrement = () => {
    dispatch({ type: DECREMENT });
  };

  const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    // prevent default browser behavior to refresh the page on form submission
    event.preventDefault();

    dispatch({ type: UPDATE_COUNT });
  };

  return (
    <Panel className="m-3">
      <h1 className="text-lg">Count is: {count}</h1>
      <div className="flex flex-row">
        <Button primary outline onClick={handleIncrement}>
          Increment
        </Button>
        <Button danger outline onClick={handleDecrement}>
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
        <Button primary>Add!</Button>
      </form>
    </Panel>
  );
};

export default CounterPage;

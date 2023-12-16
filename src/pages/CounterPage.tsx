import Button from "../components/Button";
import useCounter from "../hooks/useCounter";

interface CounterPageProps {
  initialCount: number;
}

const CounterPage = ({ initialCount }: CounterPageProps) => {
  const { count, increment } = useCounter(initialCount);

  return (
    <div>
      <h1>Count is: {count}</h1>
      <Button primary outline onClick={increment}>Increment</Button>
    </div>
  );
};

export default CounterPage;

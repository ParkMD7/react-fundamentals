import Table from "../components/Table";

const TablePage = () => {
  const data = [
    { name: "apple", color: "bg-red-500", score: 1 },
    { name: "orange", color: "bg-orange-500", score: 2 },
    { name: "banana", color: "bg-yellow-500", score: 3 },
    { name: "lime", color: "bg-green-500", score: 4 },
    { name: "blue raspberry", color: "bg-blue-500", score: 5 },
    { name: "purple cow", color: "bg-purple-500", score: 6 },
  ]
  return (
    <div>
      <Table data={data} />
    </div>
  );
};

export default TablePage;

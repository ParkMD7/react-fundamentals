import Table from "../components/Table";
import SortableTable from "../components/SortableTable";
import { TableDataItem, TableConfigItem } from "../types/types";

const TablePage = () => {
  const data: TableDataItem[] = [
    { name: "red", color: "bg-red-500", score: 1 },
    { name: "orange", color: "bg-orange-500", score: 2 },
    { name: "yellow", color: "bg-yellow-500", score: 3 },
    { name: "green", color: "bg-green-500", score: 69 },
    { name: "blue", color: "bg-blue-500", score: 5 },
    { name: "purple", color: "bg-purple-500", score: 6 },
  ];

  const config: TableConfigItem[] = [
    {
      label: "Name",
      render: (item) => item.name,
      sortValue: (item) => item.name,
    },
    {
      label: "Color",
      render: (item) => <div className={`p-3 m-2 ${item.color}`}></div>,
    },
    {
      label: "Score",
      render: (item) => item.score,
      sortValue: (item) => item.score,
    },
  ];

  const keyFn = (item: TableDataItem) => item.name;

  return (
    <div className="flex justify-evenly">
      <Table data={data} config={config} keyFn={keyFn} />
      <SortableTable data={data} config={config} keyFn={keyFn} />
    </div>
  );
};

export default TablePage;

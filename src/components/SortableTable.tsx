import Table from "./Table";
import ColumnHeaderIcon from "./ColumnHeaderIcon";
import useSort from "../hooks/useSort";
import { TableDataItem, TableConfigItem } from "../types/types";

interface SortableTableProps {
  data: TableDataItem[];
  config: TableConfigItem[];
  keyFn: (item: TableDataItem) => string;
}

const SortableTable = ({ config, data, ...props }: SortableTableProps) => {
  const { sortBy, sortOrder, sortedData, setSortColumn } = useSort(
    data,
    config
  );

  const configWithSort = config.map((column) => {
    if (!column.sortValue) return column;

    return {
      ...column,
      header: () => (
        <th
          className="cursor-pointer hover:bg-gray-100"
          onClick={() => setSortColumn(column.label)}
        >
          <div className="flex items-center">
            <ColumnHeaderIcon
              label={column.label}
              sortBy={sortBy}
              sortOrder={sortOrder}
            />
            {column.label}
          </div>
        </th>
      ),
    };
  });

  return <Table {...props} config={configWithSort} data={sortedData} />;
};

export default SortableTable;

import { useState } from "react";
import { GoArrowDown, GoArrowUp } from "react-icons/go";

import Table from "./Table";
import { TableDataItem, TableConfigItem } from "../types/types";

interface SortableTableProps {
  data: TableDataItem[];
  config: TableConfigItem[];
  keyFn: (item: TableDataItem) => string;
}

type SortOrder = "asc" | "desc" | null;
type SortBy = TableConfigItem["label"] | null;

const getIcon = (label: string, sortBy: SortBy, sortOrder: SortOrder) => {
  // if were not sorting by this label show both icons
  if (label !== sortBy) {
    return (
      <div>
        <GoArrowUp />
        <GoArrowDown />
      </div>
    );
  }

  // no sorting so show both
  if (sortOrder === null) {
    return (
      <div>
        <GoArrowUp />
        <GoArrowDown />
      </div>
    );
  } else if (sortOrder === "asc") {
    return (
      <div>
        <GoArrowUp />
      </div>
    );
  } else if (sortOrder === "desc") {
    return (
      <div>
        <GoArrowDown />
      </div>
    );
  }
};

const SortableTable = ({ config, data, ...props }: SortableTableProps) => {
  const [sortOrder, setSortOrder] = useState<SortOrder>(null);
  const [sortBy, setSortBy] = useState<SortBy>(null);

  const handleClick = (label: SortBy) => {
    // handle edge case where if were clicking a different column we'd want to sort by asc by default
    if (sortBy && sortBy !== label) {
      setSortOrder("asc");
      setSortBy(label);
      return;
    }

    if (sortOrder === null) {
      setSortOrder("asc");
      setSortBy(label);
    } else if (sortOrder === "asc") {
      setSortOrder("desc");
      setSortBy(label);
    } else if (sortOrder === "desc") {
      setSortOrder(null);
      setSortBy(null);
    }
  };

  const configWithSort = config.map((column) => {
    if (!column.sortValue) return column;

    return {
      ...column,
      header: () => (
        <th className="cursor-pointer hover:bg-gray-100" onClick={() => handleClick(column.label)}>
          <div className="flex items-center">
          {getIcon(column.label, sortBy, sortOrder)}
          {column.label}
          </div>
        </th>
      ),
    };
  });

  let sortedData = data;
  // only sort data if sortOrder && sortBy are not null
  // if they are both not null - make a copy of the data prop (SORT MUTATES THE ORIGINAL ARRAY)
  if (sortOrder && sortBy) {
    // find the correct sortValue fn
    // @ts-ignore
    const { sortValue } = config.find(
      (column) => column.label === sortBy && column.sortValue
    );

    sortedData = [...data].sort((a, b) => {
      const valueA = sortValue(a);
      const valueB = sortValue(b);

      const reverseOrder = sortOrder === "asc" ? 1 : -1;

      if (typeof valueA === "string") {
        return valueA.localeCompare(valueB) * reverseOrder;
      } else {
        return (valueB - valueA) * reverseOrder;
      }
    });
  }

  return <Table {...props} config={configWithSort} data={sortedData} />;
};

export default SortableTable;

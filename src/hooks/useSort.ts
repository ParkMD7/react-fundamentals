import { useState } from "react";
import {
  TableConfigItem,
  TableDataItem,
  SortOrder,
  SortBy,
} from "../types/types";

const useSort = (data: TableDataItem[], config: TableConfigItem[]) => {
  const [sortOrder, setSortOrder] = useState<SortOrder>(null);
  const [sortBy, setSortBy] = useState<SortBy>(null);

  const setSortColumn = (label: SortBy) => {
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

  return { sortBy, sortOrder, sortedData, setSortColumn };
};

export default useSort;

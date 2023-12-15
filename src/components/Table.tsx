import { Fragment } from "react";
import { TableDataItem, TableConfigItem } from "../types/types";

interface TableProps {
  data: TableDataItem[];
  config: TableConfigItem[];
  keyFn: (item: TableDataItem) => string; // make dev using Table component provide fn to create keys so data remains as reusable as possible
}

const Table = ({ data, config, keyFn }: TableProps) => {
  const renderedHeaders = config.map((column) => {
    if (column.header) {
      // allow returning table header cell without wrapping in a div (causes invalid HTML)
      return <Fragment key={column.label}>{column.header()}</Fragment>;
    }

    return <th key={column.label}>{column.label}</th>;
  });

  const renderedRows = data.map((rowData) => {
    return (
      <tr key={keyFn(rowData)} className="border-b">
        {config.map((column) => {
          return (
            <td key={column.label} className="p-3">
              {column.render(rowData)}
            </td>
          );
        })}
      </tr>
    );
  });

  return (
    <table className="table-auto border-spacing-2">
      <thead>
        <tr className="border-b-2">{renderedHeaders}</tr>
      </thead>
      <tbody>{renderedRows}</tbody>
    </table>
  );
};

export default Table;

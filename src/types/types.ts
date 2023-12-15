export interface Option {
  label: string;
  value: string;
}

export interface AccordionItem {
  id: string;
  label: string;
  content: string;
}

export interface TableDataItem {
  name: string;
  color: string;
  score: number;
}

export interface TableConfigItem {
  label: string;
  render: (rowData: TableDataItem) => any;
  // optional fn to render a custom column header
  header?: () => any;
  // optional fn to describe how to extract values for sorting when column is clicked
  sortValue?: (rowData: TableDataItem) => any;
}

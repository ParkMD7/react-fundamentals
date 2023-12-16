import { GoArrowDown, GoArrowUp } from "react-icons/go";
import { SortBy, SortOrder } from "../types/types";

interface ColumnHeaderIconProps {
  label: string;
  sortBy: SortBy;
  sortOrder: SortOrder;
}

const ColumnHeaderIcon = ({
  label,
  sortBy,
  sortOrder,
}: ColumnHeaderIconProps) => {
  // if were not sorting by this label show both icons
  if (label !== sortBy) {
    return (
      <div>
        <GoArrowUp />
        <GoArrowDown />
      </div>
    );
  }

  if (sortOrder === "asc") {
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

  // no sorting so show both
  return (
    <div>
      <GoArrowUp />
      <GoArrowDown />
    </div>
  );
};

export default ColumnHeaderIcon;

import { useState } from "react";
import Dropdown from "../components/Dropdown";
import { Option } from "../types/types";

const DropdownPage = () => {
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);

  const handleSelect = (option: Option) => setSelectedOption(option);

  const options = [
    { label: "red", value: "red" },
    { label: "orange", value: "orange" },
    { label: "yellow", value: "yellow" },
    { label: "green", value: "green" },
    { label: "blue", value: "blue" },
    { label: "indigo", value: "indigo" },
    { label: "violet", value: "violet" },
  ];

  return (
    <div className="flex">
      <Dropdown
        options={options}
        value={selectedOption}
        onChange={handleSelect}
      />
    </div>
  );
};

export default DropdownPage;

import { useState, useEffect, useRef } from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";

import Panel from "./Panel";
import { Option } from "../types/types";

interface DropdownProps {
  options: Option[];
  value: Option | null;
  onChange: (option: Option) => void;
}

const Dropdown = ({ options, value, onChange }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // add an event listener to close the dropdown on any click outside of the dropdown
  useEffect(() => {
    const handler = (event: MouseEvent) => {
      if (!ref.current) return;
      // @ts-ignore
      if (!ref.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    // adding third arg here to fire event capture phase of click event
    // why: difference in time between react page re-render is LESS than time
    // it takes for the browser event bubble phase
    document.addEventListener("click", handler, true);

    return () => document.removeEventListener("click", handler);
  }, []);

  const handleClick = () => setIsOpen((currentIsOpen) => !currentIsOpen);

  const handleOptionClick = (option: Option) => {
    onChange(option);
    setIsOpen(false);
  };

  const renderedOptions = options.map((option) => {
    return (
      <div
        key={option.label}
        className="hover:bg-sky-100 rounded cursor-pointer p-1"
        onClick={() => handleOptionClick(option)}
      >
        {option.label}
      </div>
    );
  });

  return (
    <div ref={ref} className="w-48 relative">
      <Panel
        className="flex justify-between items-center cursor-pointer"
        onClick={handleClick}
      >
        {value?.label || "Select..."}
        {isOpen ? <GoChevronDown /> : <GoChevronLeft />}
      </Panel>
      {isOpen && <Panel className="absolute top-full">{renderedOptions}</Panel>}
    </div>
  );
};

export default Dropdown;

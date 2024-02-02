import { useState } from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";

import { AccordionItem } from "../types/types";

interface AccordionProps {
  items: AccordionItem[];
}

const Accordion = ({ items }: AccordionProps) => {
  const [expandedIndex, setExpandedIndex] = useState(0);

  const handleClick = (idx: number) => {
    // normal state update
    // idx === expandedIndex ? setExpandedIndex(-1) : setExpandedIndex(idx);

    // functional state update to prevent edge case double click bug
    setExpandedIndex((currentIndex) => {
      return currentIndex === idx ? -1 : idx;
    });
  };

  const renderedItems = items.map((item, idx) => {
    const isExpanded = idx === expandedIndex;

    return (
      <div key={item.id}>
        <div
          className="flex justify-between p-3 bg-gray-50 border-b items-center cursor-pointer"
          onClick={() => handleClick(idx)}
        >
          {item.label}
          {isExpanded ? <GoChevronDown /> : <GoChevronLeft />}
        </div>
        {isExpanded && <div className="border-b p-5">{item.content}</div>}
      </div>
    );
  });

  return <div className="border-x border-t rounded">{renderedItems}</div>;
};

export default Accordion;

import Accordion from "../components/Accordion";

import { AccordionItem } from "../types/types";

const AccordionPage = () => {
  const items: AccordionItem[] = [
    {
      id: "1",
      label: "FIRST",
      content:
        "heres one with quite a but of content to seee what it looks like. how long can this goooooooo? wwow so cool",
    },
    { id: "2", label: "second label", content: "two" },
    { id: "3", label: "anotha one", content: "three" },
  ];

  return <Accordion items={items} />;
};

export default AccordionPage;

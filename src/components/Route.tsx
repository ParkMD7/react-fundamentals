import useNavigation from "../hooks/useNavigation";

interface AccordionProps {
  children: any;
  pathTo: string;
}

const Route = ({ pathTo, children }: AccordionProps) => {
  const { currentPath } = useNavigation();

  return pathTo === currentPath ? children : null;
}

export default Route;
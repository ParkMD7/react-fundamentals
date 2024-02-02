import classNames from "classnames";

import useNavigation from "../hooks/useNavigation";

interface AccordionProps {
  children: any;
  pathTo: string;
  className?: string;
  activeClassName?: string;
}

const Link = ({
  pathTo,
  children,
  className,
  activeClassName,
}: AccordionProps) => {
  const { navigate, currentPath } = useNavigation();

  const classes = classNames(
    "text-blue-500",
    currentPath === pathTo && activeClassName,
    className
  );

  const handleClick = (event: KeyboardEvent) => {
    // if the end-user is holding down the command / control key we want to allow the browser to handle the event as normal (open link in a new tab)
    if (event.metaKey || event.ctrlKey) {
      return;
    }

    event.preventDefault();
    navigate(pathTo);
  };
  return (
    //  @ts-ignore
    <a onClick={handleClick} href={pathTo} className={classes}>
      {children}
    </a>
  );
};

export default Link;

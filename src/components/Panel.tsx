import classNames from "classnames";

interface PanelProps {
  children: any;
  className: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

const Panel = ({ children, className, ...rest }: PanelProps) => {
  const classes = classNames(
    "border rounded p-3 shadow bg-white w-full",
    className
  );

  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  );
};

export default Panel;

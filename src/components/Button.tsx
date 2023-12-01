import React from 'react';
import classNames from 'classnames';

interface ButtonProps {
  children: any;
  primary?: boolean;
  secondary?: boolean;
  success?: boolean;
  warning?: boolean;
  danger?: boolean;
  outline?: boolean;
  rounded?: boolean;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  onMouseEnter?: React.MouseEventHandler<HTMLButtonElement>;
  onMouseLeave?: React.MouseEventHandler<HTMLButtonElement>;
}

function Button({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded,
  ...rest
}: ButtonProps) {
  const classes = classNames(
    rest.className,
    'flex items-center px-3 py-1.5 border m-5',
    {
      'border-blue-500 bg-blue-500 text-white': primary,
      'border-gray-900 bg-gray-900 text-white': secondary,
      'border-green-500 bg-green-500 text-white': success,
      'border-yellow-400 bg-yellow-400 text-white': warning,
      'border-red-500 bg-red-500 text-white': danger,
      'rounded-full': rounded,
      'bg-slate-50': outline,
      'text-slate-900': outline && primary,
      'text-slate-700': outline && secondary,
      'text-green-900': outline && success,
      'text-yellow-500': outline && warning,
      'text-red-900': outline && danger,
    }
  );

  return (
    <button {...rest} className={classes}>
      {children}
    </button>
  );
}

export default Button;

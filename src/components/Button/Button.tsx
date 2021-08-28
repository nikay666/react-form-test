import React from 'react';
import './button.scss';

type ButtonProps =  {
  type: "button" | "submit" | "reset" | undefined,
  className?: string | ''
};

export const Button: React.FC<ButtonProps> = ({ className ,type, children}) => {
  return (
    <button type={type} className={`btn ${className}`}>{children}</button>
  )
};

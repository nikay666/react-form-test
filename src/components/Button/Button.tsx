import React from 'react';
import './button.scss';

type ButtonProps = {
  type: 'button' | 'submit' | 'reset' | undefined,
  className?: string | '',
  children: React.ReactNode,
  onClick: Function,
};

const Button: React.FC<ButtonProps> = ({ className, type, children, onClick }) => {
  const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    onClick();
  };

  return (
    <button onClick={clickHandler} type={type} className={`btn ${className}`}>{children}</button>
  );
};

export default Button;
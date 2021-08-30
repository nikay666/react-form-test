import React, { useState } from 'react';
import './textField.scss';

type TextFieldProps = {
  label: string,
  type: 'text' | 'email' | 'password',
  placeholder: string | '',
  id: string,
  className?: string,
  validation: Function,
  validationCondition: string | number | RegExp,
  valueHandler: Function,
  value: string,
};

const TextField = ({ value, label, type, id, placeholder, className, validation, validationCondition, valueHandler }: TextFieldProps) => {
  const [error, setError] = useState<string | boolean>(false);
  const [pressed, setPresed] = useState(false);

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    valueHandler(e.target.value);
    setError(validation(e.target.value, validationCondition));
  };
  
  const blurHandler = () => {
    setPresed(true);
  };

  return (
    <div className={`text-field ${className}`}>
      <label className="text-field__label label" htmlFor={id}>{label}</label>
      <input
        onChange={changeHandler}
        onBlur={blurHandler}
        value={value}
        className={`input ${pressed && error && 'input--error'}`}
        type={type}
        id={id}
        placeholder={placeholder}
      />
      <p className="text-field__error-message">{pressed && error}</p>
    </div>
  );
};

export default TextField;

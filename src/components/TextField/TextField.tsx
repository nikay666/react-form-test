import React, { useState } from 'react';
import './textField.scss';

type TextFieldProps = {
  label: string,
  type: 'text' | 'email' | 'password',
  placeholder: string | '',
  id: string,
  name: string,
  className: string,
  validation: Function,
  validationCondition: string | number | RegExp
};

const TextField = ({ label, type, id, placeholder, name, className, validation, validationCondition }: TextFieldProps) => {
  const [value, setValue] = useState('');
  const [error, setError] = useState<string | boolean>(false);
  const [pressed, setPresed] = useState(false);

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setValue(e.target.value);
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
        name={name}
        id={id}
        placeholder={placeholder}
      />
      <p className="text-field__error-message">{pressed && error}</p>
    </div>
  );
};

export default TextField;

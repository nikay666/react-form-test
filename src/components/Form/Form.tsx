import React, { useState } from 'react';
import { emailRegExp } from '../../constants';
import { checkValidEmail, checkValidLogin, checkValidPassword } from '../../utilities/formValidation';
import { Button } from '../Button';
import { Message } from '../Message';
import { TextField } from '../TextField';
import './form.scss';

type FormProps = {
  login?: boolean,
  password?: boolean,
  email?: boolean,
  buttonTitle: string,
  submitFunction: Function
};


const Form = ({login, password, email, buttonTitle, submitFunction}: FormProps) => {
  const [loginValue, setLoginValue] = useState('')
  const [emailValue, setEmailValue] = useState('')
  const [passwordValue, setPasswordValue] = useState('')
  const [showMessage, setShowMessage] = useState(false)
  const [messageTitle, setMessageTitle] = useState('')

  const submitHandler = async () => {
    const responce = await submitFunction(loginValue, emailValue, passwordValue);
    setMessageTitle(responce);
    setLoginValue('');
    setEmailValue('');
    setPasswordValue('');
    setShowMessage(true);
  };

  const closeMessage = () =>{ 
    setShowMessage(false);
  }


  return (
    <form className='form container' name='form'>
      { login &&  <TextField
          label='Login*'
          type='text'
          placeholder='Login'
          id='login'
          className='form__group'
          validation={checkValidLogin}
          validationCondition={4}
          valueHandler={setLoginValue}
          value={loginValue}
      />}

      { email && <TextField
        label='Email*'
        type='email'
        placeholder='E-mail'
        id='email'
        className='form__group'
        validation={checkValidEmail}
        validationCondition={emailRegExp}
        valueHandler={setEmailValue}
        value={emailValue}
      />}
      
      { password && <TextField
        label='Password*'
        type='password'
        placeholder='Password'
        id='password'
        className='form__group'
        validation={checkValidPassword}
        validationCondition={6}
        valueHandler={setPasswordValue}
        value={passwordValue}
      />}
      {showMessage && <Message onClick={closeMessage} title={messageTitle} />}
      
      <Button onClick={submitHandler} className='form__button' type='submit'>{buttonTitle}</Button>
    </form>
  );
};

export default Form;
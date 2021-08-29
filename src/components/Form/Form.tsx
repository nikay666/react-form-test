import React from 'react';
import { emailRegExp } from '../../constants';
import { checkValidEmail, checkValidLogin, checkValidPassword } from '../../utilities/formValidation';
import { Button } from '../Button';
import { TextField } from '../TextField';
import './form.scss';

type FormProps = {
  login?: boolean,
  password?: boolean,
  email?: boolean
};

const Form = ({login, password, email}: FormProps) => {

  return (
    <form className='form' name=''>
      { login &&  <TextField
          label='Login*'
          type='text'
          placeholder='Login'
          id='login'
          name='login'
          className='form__group'
          validation={checkValidLogin}
          validationCondition={4}
      />}

      { email && <TextField
        label='Email*'
        type='email'
        placeholder='E-mail'
        id='email'
        name='email'
        className='form__group'
        validation={checkValidEmail}
        validationCondition={emailRegExp}
      />}
      
      { password && <TextField
        label='Password*'
        type='password'
        placeholder='Password'
        id='password'
        name='password'
        className='form__group'
        validation={checkValidPassword}
        validationCondition={6}
      />}
      
      <Button className='form__button' type='submit'>Войти</Button>
    </form>
  );
};

export default Form;
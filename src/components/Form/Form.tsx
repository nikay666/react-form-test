import React from 'react';
import { Button } from '../Button';
import './form.scss';


export const Form: React.FC = () => {
  return (
    <form className='form' name=''>
      <div className='form__group'>
        <label className='label' htmlFor="login">Login*</label>
        <input className='input' name='login' required type="text" placeholder='Login' />
      </div>
      

      <div className='form__group'>
        <label className='label ' htmlFor="password">Password*</label>
        <input className='input' required name='password' type="password" placeholder='Password' />
      </div>   

          
          
    <div className='form__group'> 
      <label className='label' htmlFor="email">Email*</label>
      <input className='input' type="email" name="email" id="" placeholder='E-mail' />
    </div>
      <Button className='form__button' type='submit'>Войти</Button>
    </form>
  )
};

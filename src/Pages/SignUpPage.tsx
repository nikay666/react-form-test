import React from 'react';
import { Form } from '../components/Form';
import { LoginCallout } from '../components/LoginCallout';

export const SignUpPage: React.FC = () => {
  return (
    <div className='page'>
      <h1>Sing up</h1>
      <Form/>

      <LoginCallout
        title='Already have an account?'
        to='/login'
        linkText='Sign in'
      />

    </div>
  )
};

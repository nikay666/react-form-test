import React from 'react';
import { Form } from '../components/Form';
import { LoginCallout } from '../components/LoginCallout';




export const SignInPage: React.FC = () => {
  return (
    <div className='page'>
      <h1>Sign in</h1>
      <Form/>
      <LoginCallout
        to='/singUp'
        title={`Don't have an account yet?`}
        linkText='Create Account'
      />
    </div>
  )
};

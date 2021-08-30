import React from 'react';
import { Form } from '../components/Form';
import { LoginCallout } from '../components/LoginCallout';
import { fetchLogin } from '../actions/registration';

export const SignInPage: React.FC = () => {
  const submitFormHandler = (login: string, email: string, password: string) => {
    const user = {login, password}
    return fetchLogin(user)
  }

  return (
    <div className='page'>
      <h1>Sign in</h1>
      <Form 
        login={true} 
        password={true} 
        buttonTitle='Sign in' 
        submitFunction={submitFormHandler}
      />
      <LoginCallout
        to='/singUp'
        title={`Don't have an account yet?`}
        linkText='Create Account'
      />
    </div>
  );
};

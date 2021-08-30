import React from 'react';
import { Form } from '../components/Form';
import { LoginCallout } from '../components/LoginCallout';
import { fetchRegistration } from '../actions/registration';

export const SignUpPage: React.FC = () => {
  const submitFormHandler = (login: string, email: string, password: string) => {
    const user = {login, email, password}
    return fetchRegistration(user)
  }

  return (
    <div className='page'>
      <h1>Sing up</h1>
      <Form 
        login={true} 
        email={true} 
        password={true} 
        buttonTitle='Sing up' 
        submitFunction={submitFormHandler}
      />
      <LoginCallout
        title='Already have an account?'
        to='/login'
        linkText='Sign in'
      />
    </div>
  );
};

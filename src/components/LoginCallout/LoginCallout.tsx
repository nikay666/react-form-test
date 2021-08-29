import React  from 'react';
import { Link } from 'react-router-dom';
import './loginCallout.scss';

type LoginCalloutProps = {
  title: string, 
  to: string, 
  linkText: string
};

const LoginCallout = ({title, to, linkText}: LoginCalloutProps) => {
  return (
    <div className='login-callout' >
      <p className='login-callout__title subtitle'>{title}</p>
      <Link className='link' to={to}>{linkText}</Link>
    </div>
  );
};

export default LoginCallout;
import React from 'react';
import { Button } from '../Button';
import './message.scss'

interface IMessageProps {
  title: string,
  onClick: Function
}

const Message = ({title, onClick}:IMessageProps) => {

  const clickHandler = () => {
    onClick();
  };

  return (
    <div className='message container'>
      <p className="message__title">{title}</p>
      <Button type='button' className='message__button btn--small' onClick={clickHandler}>Закрыть</Button>
    </div>
  );
};
export default Message;
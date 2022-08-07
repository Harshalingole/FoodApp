import React from 'react';
import { useDispatch } from 'react-redux';

const Button = ({ text, bgColor, hvColor, action }) => {
  const dispatch = useDispatch();
  return (
    <button
      className={`button p-2 ${bgColor} text-center text-lg font-bold text-white w-auto rounded-md hover:shadow-lg `}
      onClick={() => {
        console.log('action');
        dispatch(action());
      }}
    >
      {text}
    </button>
  );
};

export default Button;

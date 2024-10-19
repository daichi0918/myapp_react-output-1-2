import React from 'react';
import './index.css';

export const InputForm = (props) => {
  const { className, placeholder, value, onChange, onKeyDown } = props;
  return (
    <input
      type="text"
      className={className}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
    />
  );
};

import React, { forwardRef } from 'react';
import { InputProps } from './types';

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  return (
    <div>
      <label>{props.label}</label>
      <input {...props} ref={ref} />
      {props.error && <span role='alert'>{props.error}</span>}
    </div>
  );
});

export default Input;

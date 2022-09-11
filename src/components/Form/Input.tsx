import React, { forwardRef } from 'react';
import { InputProps } from './types';

import styles from './Input.module.scss';

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  return (
    <div>
      <input
        className={styles.input}
        placeholder={props.label}
        {...props}
        ref={ref}
      />
      {props.error && <span role='alert'>{props.error}</span>}
    </div>
  );
});

export default Input;

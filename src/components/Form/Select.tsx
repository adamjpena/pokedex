import React, { forwardRef } from 'react';
import { SelectProps } from './types';

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ name, label, options, error, ...props }, ref) => (
    <div>
      <label htmlFor={name}>{label}</label>
      <select name={name} ref={ref} {...props}>
        {options.map(({ label, value }) => (
          <option value={value} key={value}>
            {label}
          </option>
        ))}
      </select>
      {error && <span role='alert'>{error}</span>}
    </div>
  ),
);

export default Select;

import React, {useCallback, useState} from 'react';
import {Option} from '@app/utils/themes';
import {v4 as uuidv4} from 'uuid';

export interface SelectProps {
  disabled?: boolean;
  options: Array<Option>;
  value?: string;
  className?: string;
  type: 'custom' | 'default';
  onChange?: Function;
  children: any;
}

const Select = ({
  disabled,
  options,
  value,
  type,
  children,
  className,
  onChange
}: SelectProps) => {
  const [ID] = useState(uuidv4());

  const handleOnChange = (e: any) => {
    if (onChange) {
      onChange(e.target.value);
    }
  };

  const getSelectClassName = useCallback(() => {
    if (type === 'custom') {
      return 'custom-select';
    }
    return 'form-control';
  }, [type]);

  return (
    <div className={`form-group ${className || ''}`}>
      <label htmlFor={ID} className="select-label" style={{fontWeight: '500'}}>
        {children}
      </label>
      <select
        className={getSelectClassName()}
        id={ID}
        name={ID}
        value={value}
        disabled={disabled}
        onChange={handleOnChange}
      >
        <option>None</option>
        {options.map((option: Option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;

import React, {useCallback, useEffect, useState} from 'react';
import {v4 as uuidv4} from 'uuid';

export interface CheckboxProps {
  checked: boolean;
  type?: 'icheck' | 'default' | 'custom';
  onChange?: Function;
  children: any;
}

const Checkbox = ({
  checked = false,
  onChange,
  type = 'default',
  children
}: CheckboxProps) => {
  const [ID] = useState(uuidv4());
  const [value, setValue] = useState(checked);

  const handleOnChange = (event: any) => {
    setValue(event.target.checked);
  };

  useEffect(() => {
    if (value !== checked) {
      setValue(checked);
    }
  }, [checked]);

  useEffect(() => {
    if (onChange && value !== checked) {
      onChange(value);
    }
  }, [value]);

  const getDivClassName = useCallback(() => {
    if (type === 'icheck') {
      return 'icheck-primary';
    }
    if (type === 'custom') {
      return 'custom-control custom-checkbox';
    }
    return 'form-check';
  }, [type]);

  const getInputClassName = useCallback(() => {
    if (type === 'custom') {
      return 'custom-control-input';
    }
    return 'form-check-input';
  }, [type]);

  const getLabelClassName = useCallback(() => {
    if (type === 'custom') {
      return 'custom-control-label';
    }
    return 'form-check-label';
  }, [type]);

  return (
    <div className={getDivClassName()}>
      <input
        type="checkbox"
        className={getInputClassName()}
        id={ID}
        checked={value}
        onChange={handleOnChange}
      />
      <label htmlFor={ID} className={getLabelClassName()}>
        {children}
      </label>
    </div>
  );
};

export default Checkbox;

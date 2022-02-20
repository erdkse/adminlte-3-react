import React, {ReactNode, useEffect, useState} from 'react';
import {v4 as uuidv4} from 'uuid';

export interface CheckboxProps {
    checked: boolean;
    label: string | ReactNode;
    onChange?: Function;
}

const Checkbox = ({checked = false, label = '', onChange}: CheckboxProps) => {
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

    return (
        <div className="icheck-primary">
            <input
                type="checkbox"
                id={ID}
                checked={value}
                onChange={handleOnChange}
            />
            <label htmlFor={ID}>{label}</label>
        </div>
    );
};

export default Checkbox;

import React, {useEffect, useState} from 'react';
import {v4 as uuidv4} from 'uuid';

const Checkbox = ({checked = false, label = '', onChange}) => {
    const [ID] = useState(uuidv4());
    const [value, setValue] = useState(checked);

    const handleOnChange = (event) => {
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

import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const Input = ({
    className,
    value,
    icon,
    type = 'text',
    placeholder,
    autoComplete,
    ...props
}) => {
    const onChangeHandler = (event) => {
        console.log(event);
    };

    return (
        <div className={`input-group${className ? ` ${className}` : ''}`}>
            <input
                type={type}
                className="form-control"
                placeholder={placeholder}
                value={value}
                autoComplete={autoComplete}
                onChange={onChangeHandler}
                {...props}
            />

            {icon ? (
                <div className="input-group-append">
                    <div className="input-group-text">
                        <FontAwesomeIcon icon={icon} />
                    </div>
                </div>
            ) : null}
        </div>
    );
};

export default Input;

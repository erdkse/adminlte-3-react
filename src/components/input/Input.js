import React, {useEffect, useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const Input = ({
    className,
    value,
    icon,
    type = 'text',
    placeholder,
    autoComplete,
    onChange,
    formik,
    formikFieldProps,
    ...props
}) => {
    const [localValue, setLocalValue] = useState(value || '');
    const [formStatus, setFormStatus] = useState(null);

    useEffect(() => {
        setLocalValue(value || '');
    }, [value]);

    useEffect(() => {
        if (onChange && localValue !== value) {
            onChange(localValue);
        }
        if (formik && formikFieldProps) {
            formik.setFieldValue(formikFieldProps.name, localValue);
        }
    }, [localValue]);

    useEffect(() => {
        if (
            formik.touched[formikFieldProps.name] &&
            formik.errors[formikFieldProps.name]
        ) {
            setFormStatus('is-invalid');
            return;
        }
        if (
            formik.touched[formikFieldProps.name] &&
            !formik.errors[formikFieldProps.name]
        ) {
            setFormStatus('is-valid');
            return;
        }
        setFormStatus(null);
    }, [
        formik.touched[formikFieldProps.name],
        formik.errors[formikFieldProps.name]
    ]);

    const onChangeHandler = (event) => {
        event.preventDefault();
        setLocalValue(event.target.value || '');
    };

    const printFormError = () => {
        if (
            formik.touched[formikFieldProps.name] &&
            formik.errors[formikFieldProps.name]
        ) {
            return (
                <div
                    className="invalid-feedback"
                    style={{display: 'inline-block'}}
                >
                    {formik.errors[formikFieldProps.name]}
                </div>
            );
        }
        return null;
    };

    return (
        <>
            <div className={`input-group${className ? ` ${className}` : ''}`}>
                <input
                    type={type}
                    className={`form-control${
                        formStatus ? ` ${formStatus}` : ''
                    }`}
                    placeholder={placeholder}
                    value={localValue}
                    autoComplete={autoComplete}
                    {...props}
                    onChange={onChangeHandler}
                />

                {icon ? (
                    <div className="input-group-append">
                        <div className="input-group-text">
                            <FontAwesomeIcon icon={icon} />
                        </div>
                    </div>
                ) : null}
            </div>
            {formik && formikFieldProps ? printFormError() : null}
        </>
    );
};

export default Input;

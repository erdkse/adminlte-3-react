import React, {useRef, useState, useEffect} from 'react';
import DropdownMenu from './dropdown-menu/DropdownMenu';

const Dropdown = ({
    isOpen = false,
    size = 'md',
    buttonTemplate,
    menuTemplate,
    className,
    menuContainerTag = 'div',
    onChange
}) => {
    const dropdownRef = useRef(null);
    const [dropdownOpen, setDropdownOpen] = useState(isOpen);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const handleClickOutside = (event) => {
        if (
            dropdownRef &&
            dropdownRef.current &&
            !dropdownRef.current.contains(event.target)
        ) {
            setDropdownOpen(false);
        }
    };

    useEffect(() => {
        if (onChange) {
            onChange(dropdownOpen);
        }
    }, [dropdownOpen]);

    useEffect(() => {
        setDropdownOpen(isOpen);
    }, [isOpen]);

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside, false);
        return () => {
            document.removeEventListener(
                'mousedown',
                handleClickOutside,
                false
            );
        };
    });

    return (
        <li
            ref={dropdownRef}
            className={`nav-item dropdown${className ? ` ${className}` : ''}`}
        >
            <button onClick={toggleDropdown} type="button" className="nav-link">
                {buttonTemplate}
            </button>
            {dropdownOpen ? (
                <DropdownMenu size={size} containerTag={menuContainerTag}>
                    {menuTemplate}
                </DropdownMenu>
            ) : null}
        </li>
    );
};

export default Dropdown;

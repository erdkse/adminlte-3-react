import React, {useRef, useState, useEffect, ReactElement} from 'react';
import DropdownMenu from './dropdown-menu/DropdownMenu';

export interface DropdownProps {
  isOpen: boolean;
  size?: string;
  buttonTemplate: React.ReactChildren | ReactElement;
  menuTemplate: any;
  className?: string;
  menuContainerTag?: string;
  onChange?: Function;
}

const Dropdown = ({
  isOpen = false,
  size = 'md',
  buttonTemplate,
  menuTemplate,
  className,
  menuContainerTag = 'div',
  onChange
}: DropdownProps) => {
  const dropdownRef = useRef<any>(null);
  const [dropdownOpen, setDropdownOpen] = useState(isOpen);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleClickOutside = (event: any) => {
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
      document.removeEventListener('mousedown', handleClickOutside, false);
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

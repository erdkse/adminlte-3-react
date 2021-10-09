import React, {useEffect, useRef, useState} from 'react';

const DropdownMenu = ({size, children}) => {
    const dropdownMenuRef = useRef(null);
    const [styles, setStyles] = useState({left: 'inherit', right: `0px`});
    const [classes, setClasses] = useState(
        `dropdown-menu dropdown-menu-right dropdown-menu-${size} show`
    );

    useEffect(() => {
        setClasses(
            `dropdown-menu dropdown-menu-right dropdown-menu-${size} show`
        );
        const dropdownMenuElement = dropdownMenuRef.current;
        if (dropdownMenuElement) {
            const windowWidth = document.getElementById('root').offsetWidth;
            const offsetLeft = dropdownMenuElement.getBoundingClientRect().left;
            const {offsetWidth} = dropdownMenuElement;
            const visiblePart = windowWidth - offsetLeft;

            if (offsetLeft < 0) {
                setStyles({
                    left: 'inherit',
                    right: `${offsetLeft - 5}px`
                });
            } else if (visiblePart < offsetWidth) {
                setStyles({left: 'inherit', right: `0px`});
            }
        }
    }, [dropdownMenuRef.current, size]);

    return (
        <div ref={dropdownMenuRef} className={classes} style={styles}>
            {children}
        </div>
    );
};

export default DropdownMenu;

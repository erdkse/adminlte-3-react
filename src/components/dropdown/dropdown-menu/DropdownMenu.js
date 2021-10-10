import React, {useEffect, useRef, useState} from 'react';

const DropdownMenu = ({size, children, containerTag}) => {
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

    if (containerTag === 'ul') {
        return (
            <ul
                ref={dropdownMenuRef}
                className={classes}
                style={{...styles, padding: 0}}
            >
                {children}
            </ul>
        );
    }

    return (
        <div
            ref={dropdownMenuRef}
            className={classes}
            style={{...styles, padding: 0}}
        >
            {children}
        </div>
    );
};

export default DropdownMenu;

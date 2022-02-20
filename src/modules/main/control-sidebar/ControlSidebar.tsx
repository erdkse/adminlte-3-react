import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Checkbox} from '@app/components';
import {toggleDarkMode} from '@app/store/reducers/ui';

const ControlSidebar = () => {
    const dispatch = useDispatch();
    const darkMode = useSelector((state: any) => state.ui.darkMode);

    const handleDarkModeChange = () => {
        dispatch(toggleDarkMode());
    };
    return (
        <aside
            className="control-sidebar control-sidebar-dark"
            style={{padding: '16px', paddingTop: '73px'}}
        >
            <h5>Customize AdminLTE</h5>
            <hr className="mb-2" />

            <div style={{padding: '8px 0'}}>
                <Checkbox
                    checked={darkMode}
                    onChange={handleDarkModeChange}
                    label="Dark mode"
                />
            </div>
        </aside>
    );
};

export default ControlSidebar;

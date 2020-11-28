import React from 'react';
import PropTypes from 'prop-types';
import Post from './Post';

const ActivityTab = (props) => {
    const {isActive} = props;
    return (
        <div className={`tab-pane ${isActive ? 'active' : ''}`}>
            <Post />
            <Post isClearfix={false} />
            <Post />
        </div>
    );
};

ActivityTab.propTypes = {
    isActive: PropTypes.bool
};

ActivityTab.defaultProps = {
    isActive: false
};

export default ActivityTab;

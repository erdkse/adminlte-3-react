import React from 'react';
import Post from './Post';

const ActivityTab = ({isActive}) => {
    return (
        <div className={`tab-pane ${isActive ? 'active' : ''}`}>
            <Post />
            <Post isClearfix={false} />
            <Post />
        </div>
    );
};

export default ActivityTab;

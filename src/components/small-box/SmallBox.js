import React from 'react';
import {Link} from 'react-router-dom';
import {useTranslation} from 'react-i18next';

const SmallBox = ({
    type = 'info',
    icon = 'ion-bag',
    count,
    title,
    navigateTo
}) => {
    const [t] = useTranslation();

    const className = `small-box bg-${type}`;
    const iconClass = `ion ${icon || 'ion-bag'}`;

    return (
        <div className={className}>
            <div className="inner">
                <h3>{count}</h3>
                <p>{title}</p>
            </div>
            <div className="icon">
                <i className={iconClass} />
            </div>
            <Link to={navigateTo} className="small-box-footer">
                <span className="mr-2">{t('main.label.moreInfo')}</span>
                <i className="fa fa-arrow-circle-right" />
            </Link>
        </div>
    );
};

export default SmallBox;

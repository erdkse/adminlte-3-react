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
    const {t} = useTranslation();

    let className = 'small-box';
    let iconClass = 'ion';
    switch (type) {
        case 'success':
            className += ' bg-success';
            break;
        case 'warning':
            className += ' bg-warning';
            break;
        case 'danger':
            className += ' bg-danger';
            break;
        case 'info':
            className += ' bg-info';
            break;
        default:
            className += ' bg-info';
            break;
    }

    iconClass += icon ? ` ${icon}` : ' ion-bag';

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

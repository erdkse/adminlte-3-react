import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { NotificationMenu } from '@app/styles/dropdown-menus';

const NotificationsDropdown = () => {
  const [t] = useTranslation();

  return (
    <NotificationMenu hideArrow>
      <div slot="head">
        <i className="far fa-bell" />
        <span className="badge badge-warning navbar-badge">15</span>
      </div>
      <div slot="body">
        <span className="dropdown-item dropdown-header">
          {t('header.notifications.count', { quantity: '15' })}
        </span>
        <div className="dropdown-divider" />
        <Link to="/" className="dropdown-item">
          <i className="fas fa-envelope mr-2" />
          <span>
            {t('header.notifications.newMessagesCount', {
              quantity: '4',
            })}
          </span>
          <span className="float-right text-muted text-sm">
            {t('measurement.quantityUnit', {
              quantity: '3',
              unit: 'mins',
            })}
          </span>
        </Link>
        <div className="dropdown-divider" />
        <Link to="/" className="dropdown-item">
          <i className="fas fa-users mr-2" />
          <span>
            {t('header.notifications.friendRequestsCount', {
              quantity: '5',
            })}
          </span>
          <span className="float-right text-muted text-sm">
            {t('measurement.quantityUnit', {
              quantity: '12',
              unit: 'hours',
            })}
          </span>
        </Link>
        <div className="dropdown-divider" />
        <Link to="/" className="dropdown-item">
          <i className="fas fa-file mr-2" />
          <span>
            {t('header.notifications.reportsCount', {
              quantity: '3',
            })}
          </span>
          <span className="float-right text-muted text-sm">
            {t('measurement.quantityUnit', {
              quantity: '2',
              unit: 'days',
            })}
          </span>
        </Link>
        <div className="dropdown-divider" />
        <Link to="/" className="dropdown-item dropdown-footer">
          {t('header.notifications.seeAll')}
        </Link>
      </div>
    </NotificationMenu>
  );
};

export default NotificationsDropdown;

import React from 'react';
import {Link} from 'react-router-dom';
import {useTranslation} from 'react-i18next';
import {Dropdown} from '@components';
import {PfImage} from '@profabric/react-components';

// const StyledUserImage = styled(PfImage)`
// `;

const MessagesDropdown = () => {
  const [t] = useTranslation();

  return (
    <Dropdown
      isOpen={false}
      size="lg"
      buttonTemplate={
        <>
          <i className="far fa-comments" />
          <span className="badge badge-danger navbar-badge">3</span>
        </>
      }
      menuTemplate={
        <>
          <Link to="/" className="dropdown-item">
            <div className="media">
              <PfImage
                src="/img/default-profile.png"
                alt="User Avatar"
                width={50}
                rounded
                className="mr-2"
              />
              <div className="media-body">
                <h3 className="dropdown-item-title">
                  Brad Diesel
                  <span className="float-right text-sm text-danger">
                    <i className="fas fa-star" />
                  </span>
                </h3>
                <p className="text-sm">Call me whenever you can...</p>
                <p className="text-sm text-muted">
                  <i className="far fa-clock mr-1" />
                  <span>
                    {t<string>('header.messages.ago', {
                      quantity: '30',
                      unit: 'Minutes'
                    })}
                  </span>
                </p>
              </div>
            </div>
          </Link>
          <div className="dropdown-divider" />
          <Link to="/" className="dropdown-item">
            <div className="media">
              <PfImage
                src="/img/default-profile.png"
                alt="User Avatar"
                width={50}
                rounded
                className="mr-2"
              />
              <div className="media-body">
                <h3 className="dropdown-item-title">
                  John Pierce
                  <span className="float-right text-sm text-muted">
                    <i className="fas fa-star" />
                  </span>
                </h3>
                <p className="text-sm">I got your message bro</p>
                <p className="text-sm text-muted">
                  <i className="far fa-clock mr-1" />
                  <span>
                    {t<string>('header.messages.ago', {
                      quantity: '3',
                      unit: 'Hours'
                    })}
                  </span>
                </p>
              </div>
            </div>
          </Link>
          <div className="dropdown-divider" />
          <Link to="/" className="dropdown-item">
            <div className="media">
              <PfImage
                src="/img/default-profile.png"
                alt="User Avatar"
                width={50}
                rounded
                className="mr-2"
              />
              <div className="media-body">
                <h3 className="dropdown-item-title">
                  Nora Silvester
                  <span className="float-right text-sm text-warning">
                    <i className="fas fa-star" />
                  </span>
                </h3>
                <p className="text-sm">The subject goes here</p>
                <p className="text-sm text-muted">
                  <i className="far fa-clock mr-1" />
                  <span>
                    {t<string>('header.messages.ago', {
                      quantity: '4',
                      unit: 'Hours'
                    })}
                  </span>
                </p>
              </div>
            </div>
          </Link>
          <div className="dropdown-divider" />
          <Link to="/" className="dropdown-item dropdown-footer">
            {t<string>('header.messages.seeAll')}
          </Link>
        </>
      }
    />
  );
};

export default MessagesDropdown;

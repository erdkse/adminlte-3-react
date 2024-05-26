import { InfoBox } from '@app/components/info-box/InfoBox';
import { ContentHeader, SmallBox } from '@components';
import {
  faBookmark,
  faEnvelope,
  faChartSimple,
  faCartShopping,
  faUserPlus,
  faChartPie,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Dashboard = () => {
  return (
    <div>
      <ContentHeader title="Dashboard" />

      <section className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-3 col-6">
              <SmallBox
                title="New Orders"
                text="150"
                navigateTo="#"
                variant="info"
                icon={{
                  content: (
                    <FontAwesomeIcon
                      icon={faCartShopping}
                      style={{ fontSize: '62px' }}
                    />
                  ),
                }}
              />
            </div>
            <div className="col-lg-3 col-6">
              <SmallBox
                title="Bounce Rate"
                text="53 %"
                navigateTo="#"
                variant="success"
                icon={{
                  content: (
                    <FontAwesomeIcon
                      icon={faChartSimple}
                      style={{ fontSize: '62px' }}
                    />
                  ),
                }}
                loading
              />
            </div>
            <div className="col-lg-3 col-6">
              <SmallBox
                title="User Registrations"
                text="44"
                navigateTo="#"
                variant="warning"
                icon={{
                  content: (
                    <FontAwesomeIcon
                      icon={faUserPlus}
                      style={{ fontSize: '62px' }}
                    />
                  ),
                }}
                loading="dark"
              />
            </div>
            <div className="col-lg-3 col-6">
              <SmallBox
                title="Unique Visitors"
                text="65"
                navigateTo="#"
                variant="danger"
                icon={{
                  content: (
                    <FontAwesomeIcon
                      icon={faChartPie}
                      style={{ fontSize: '62px' }}
                    />
                  ),
                  variant: 'success',
                }}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-12">
              <InfoBox
                title="Messages"
                text="1,410"
                icon={{
                  content: <FontAwesomeIcon icon={faEnvelope} />,
                  variant: 'info',
                }}
              />
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <InfoBox
                variant="success"
                title="Messages"
                loading="dark"
                text="1,410"
                icon={{ content: <FontAwesomeIcon icon={faEnvelope} /> }}
              />
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <InfoBox
                variant="warning"
                title="Messages"
                text="1,410"
                icon={{ content: <FontAwesomeIcon icon={faEnvelope} /> }}
              />
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <InfoBox
                variant="danger"
                title="Messages"
                text="1,410"
                icon={{ content: <FontAwesomeIcon icon={faEnvelope} /> }}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-12">
              <InfoBox
                icon={{
                  content: <FontAwesomeIcon icon={faBookmark} />,
                  variant: 'info',
                }}
                title="Bookmarks"
                text="41,410"
                progressBar={{
                  description: '70% Increase in 30 Days',
                  level: 70,
                  variant: 'success',
                }}
              />
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <InfoBox
                icon={{ content: <FontAwesomeIcon icon={faBookmark} /> }}
                variant="success"
                title="Bookmarks"
                text="41,410"
                progressBar={{
                  description: '70% Increase in 30 Days',
                  level: 70,
                  variant: 'light',
                }}
              />
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <InfoBox
                icon={{ content: <FontAwesomeIcon icon={faBookmark} /> }}
                variant="warning"
                title="Bookmarks"
                text="41,410"
                loading
                progressBar={{
                  description: '70% Increase in 30 Days',
                  level: 70,
                  variant: 'dark',
                }}
              />
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <InfoBox
                icon={{ content: <FontAwesomeIcon icon={faBookmark} /> }}
                variant="danger"
                title="Bookmarks"
                text="41,410"
                progressBar={{
                  description: '70% Increase in 30 Days',
                  level: 70,
                  variant: 'light',
                }}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;

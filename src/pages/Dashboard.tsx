import { InfoBox } from '@app/components/info-box/InfoBox';
import { ContentHeader } from '@components';
import {
  faBagShopping,
  faBarChart,
  faBookmark,
  faEnvelope,
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
              <div className="small-box bg-info">
                <div className="inner">
                  <h3>150</h3>

                  <p>New Orders</p>
                </div>
                <div className="icon">
                  <i className="ion ion-bag" />
                </div>
                <a href="/" className="small-box-footer">
                  More info <i className="fas fa-arrow-circle-right" />
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-6">
              <div className="small-box bg-success">
                <div className="inner">
                  <h3>
                    53<sup style={{ fontSize: '20px' }}>%</sup>
                  </h3>

                  <p>Bounce Rate</p>
                </div>
                <div className="icon">
                  <i className="ion ion-stats-bars" />
                </div>
                <a href="/" className="small-box-footer">
                  More info <i className="fas fa-arrow-circle-right" />
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-6">
              <div className="small-box bg-warning">
                <div className="inner">
                  <h3>44</h3>

                  <p>User Registrations</p>
                </div>
                <div className="icon">
                  <i className="ion ion-person-add" />
                </div>
                <a href="/" className="small-box-footer">
                  More info <i className="fas fa-arrow-circle-right" />
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-6">
              <div className="small-box bg-danger">
                <div className="inner">
                  <h3>65</h3>

                  <p>Unique Visitors</p>
                </div>
                <div className="icon">
                  <i className="ion ion-pie-graph" />
                </div>
                <a href="/" className="small-box-footer">
                  More info <i className="fas fa-arrow-circle-right" />
                </a>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-6">
              <InfoBox
                title="Messages"
                text="1,410"
                fillBackground={false}
                icon={<FontAwesomeIcon icon={faEnvelope} />}
              />
            </div>
            <div className="col-lg-4 col-6">
              <InfoBox
                variant="success"
                title="Messages"
                text="1,410"
                fillBackground={true}
                icon={<FontAwesomeIcon icon={faEnvelope} />}
              />
            </div>
            <div className="col-lg-4 col-6">
              <InfoBox
                variant="warning"
                title="Messages"
                text="1,410"
                fillBackground={true}
                icon={<FontAwesomeIcon icon={faEnvelope} />}
              />
            </div>
          </div>
          <div className="row">
          <div className="col-lg-4 col-6">
              <InfoBox
                icon={<FontAwesomeIcon icon={faEnvelope} />}
                title="Bookmarks"
                text="41,410"
                progressBar={{
                  description: '70% Increase in 30 Days',
                  level: 70,
                  variant: 'success',
                }}
              />
            </div>
            <div className="col-lg-4 col-6">
              <InfoBox
                icon={<FontAwesomeIcon icon={faBookmark} />}
                variant="success"
                title="Bookmarks"
                text="41,410"
                fillBackground={true}
                progressBar={{
                  description: '70% Increase in 30 Days',
                  level: 70,
                }}
              />
            </div>
            <div className="col-lg-4 col-6">
              <InfoBox
                icon={<FontAwesomeIcon icon={faBookmark} />}
                variant="warning"
                title="Bookmarks"
                text="41,410"
                fillBackground={true}
                progressBar={{
                  description: '70% Increase in 30 Days',
                  level: 70,
                  variant: 'danger',
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

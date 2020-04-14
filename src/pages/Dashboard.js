/* eslint-disable no-console */
import React from 'react';
import SmallBox from '../components/small-box';

const Dashboard = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-3 col-6">
          <SmallBox
            count={150}
            title="New Orders"
            type="info"
            icon="ion-android-people"
            navigateTo="/users"
          />
        </div>
        {/* ./col */}
        <div className="col-lg-3 col-6">
          {/* small box */}
          <SmallBox
            count={53}
            title="Bounce Rate"
            type="success"
            navigateTo="/"
          />
        </div>
        {/* ./col */}
        <div className="col-lg-3 col-6">
          {/* small box */}
          <SmallBox
            count={44}
            title="User Registrations"
            type="warning"
            navigateTo="/"
          />
        </div>
        {/* ./col */}
        <div className="col-lg-3 col-6">
          {/* small box */}
          <SmallBox
            count={65}
            title="Unique Visitors"
            type="danger"
            navigateTo="/"
          />
        </div>
        {/* ./col */}
      </div>
    </div>
  );
};

export default Dashboard;

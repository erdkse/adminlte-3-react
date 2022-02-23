import {SmallBox} from '@app/components';
import React from 'react';

const Dashboard = () => {
  return (
    <div className="container-fluid">
      <h5 className="mb-2">Info Box</h5>
      <div className="row">
        <div className="col-md-3 col-sm-6 col-12">
          <div className="info-box">
            <span className="info-box-icon bg-info">
              <i className="far fa-envelope" />
            </span>

            <div className="info-box-content">
              <span className="info-box-text">Messages</span>
              <span className="info-box-number">1,410</span>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-sm-6 col-12">
          <div className="info-box">
            <span className="info-box-icon bg-success">
              <i className="far fa-flag" />
            </span>

            <div className="info-box-content">
              <span className="info-box-text">Bookmarks</span>
              <span className="info-box-number">410</span>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-sm-6 col-12">
          <div className="info-box">
            <span className="info-box-icon bg-warning">
              <i className="far fa-copy" />
            </span>

            <div className="info-box-content">
              <span className="info-box-text">Uploads</span>
              <span className="info-box-number">13,648</span>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-sm-6 col-12">
          <div className="info-box">
            <span className="info-box-icon bg-danger">
              <i className="far fa-star" />
            </span>

            <div className="info-box-content">
              <span className="info-box-text">Likes</span>
              <span className="info-box-number">93,139</span>
            </div>
          </div>
        </div>
      </div>

      <h5 className="mb-2">
        Info Box With Custom Shadows{' '}
        <small>
          <i>Using Bootstraps Shadow Utility</i>
        </small>
      </h5>
      <div className="row">
        <div className="col-md-3 col-sm-6 col-12">
          <div className="info-box shadow-none">
            <span className="info-box-icon bg-info">
              <i className="far fa-envelope" />
            </span>

            <div className="info-box-content">
              <span className="info-box-text">Shadows</span>
              <span className="info-box-number">None</span>
            </div>
          </div>
          {/* /.info-box */}
        </div>
        {/* /.col */}
        <div className="col-md-3 col-sm-6 col-12">
          <div className="info-box shadow-sm">
            <span className="info-box-icon bg-success">
              <i className="far fa-flag" />
            </span>

            <div className="info-box-content">
              <span className="info-box-text">Shadows</span>
              <span className="info-box-number">Small</span>
            </div>
            {/* /.info-box-content */}
          </div>
          {/* /.info-box */}
        </div>
        {/* /.col */}
        <div className="col-md-3 col-sm-6 col-12">
          <div className="info-box shadow">
            <span className="info-box-icon bg-warning">
              <i className="far fa-copy" />
            </span>

            <div className="info-box-content">
              <span className="info-box-text">Shadows</span>
              <span className="info-box-number">Regular</span>
            </div>
            {/* /.info-box-content */}
          </div>
          {/* /.info-box */}
        </div>
        {/* /.col */}
        <div className="col-md-3 col-sm-6 col-12">
          <div className="info-box shadow-lg">
            <span className="info-box-icon bg-danger">
              <i className="far fa-star" />
            </span>

            <div className="info-box-content">
              <span className="info-box-text">Shadows</span>
              <span className="info-box-number">Large</span>
            </div>
            {/* /.info-box-content */}
          </div>
          {/* /.info-box */}
        </div>
        {/* /.col */}
      </div>
      {/* /.row */}

      {/* =========================================================== */}
      <h5 className="mt-4 mb-2">
        Info Box With <code>bg-*</code>
      </h5>
      <div className="row">
        <div className="col-md-3 col-sm-6 col-12">
          <div className="info-box bg-info">
            <span className="info-box-icon">
              <i className="far fa-bookmark" />
            </span>

            <div className="info-box-content">
              <span className="info-box-text">Bookmarks</span>
              <span className="info-box-number">41,410</span>

              <div className="progress">
                <div className="progress-bar" style={{width: '70%'}} />
              </div>
              <span className="progress-description">
                70% Increase in 30 Days
              </span>
            </div>
            {/* /.info-box-content */}
          </div>
          {/* /.info-box */}
        </div>
        {/* /.col */}
        <div className="col-md-3 col-sm-6 col-12">
          <div className="info-box bg-success">
            <span className="info-box-icon">
              <i className="far fa-thumbs-up" />
            </span>

            <div className="info-box-content">
              <span className="info-box-text">Likes</span>
              <span className="info-box-number">41,410</span>

              <div className="progress">
                <div className="progress-bar" style={{width: '70%'}} />
              </div>
              <span className="progress-description">
                70% Increase in 30 Days
              </span>
            </div>
            {/* /.info-box-content */}
          </div>
          {/* /.info-box */}
        </div>
        {/* /.col */}
        <div className="col-md-3 col-sm-6 col-12">
          <div className="info-box bg-warning">
            <span className="info-box-icon">
              <i className="far fa-calendar-alt" />
            </span>

            <div className="info-box-content">
              <span className="info-box-text">Events</span>
              <span className="info-box-number">41,410</span>

              <div className="progress">
                <div className="progress-bar" style={{width: '70%'}} />
              </div>
              <span className="progress-description">
                70% Increase in 30 Days
              </span>
            </div>
            {/* /.info-box-content */}
          </div>
          {/* /.info-box */}
        </div>
        {/* /.col */}
        <div className="col-md-3 col-sm-6 col-12">
          <div className="info-box bg-danger">
            <span className="info-box-icon">
              <i className="fas fa-comments" />
            </span>

            <div className="info-box-content">
              <span className="info-box-text">Comments</span>
              <span className="info-box-number">41,410</span>

              <div className="progress">
                <div className="progress-bar" style={{width: '70%'}} />
              </div>
              <span className="progress-description">
                70% Increase in 30 Days
              </span>
            </div>
            {/* /.info-box-content */}
          </div>
          {/* /.info-box */}
        </div>
        {/* /.col */}
      </div>
      {/* /.row */}

      {/* =========================================================== */}
      <h5 className="mt-4 mb-2">
        Info Box With <code>bg-gradient-*</code>
      </h5>
      <div className="row">
        <div className="col-md-3 col-sm-6 col-12">
          <div className="info-box bg-gradient-info">
            <span className="info-box-icon">
              <i className="far fa-bookmark" />
            </span>

            <div className="info-box-content">
              <span className="info-box-text">Bookmarks</span>
              <span className="info-box-number">41,410</span>

              <div className="progress">
                <div className="progress-bar" style={{width: '70%'}} />
              </div>
              <span className="progress-description">
                70% Increase in 30 Days
              </span>
            </div>
            {/* /.info-box-content */}
          </div>
          {/* /.info-box */}
        </div>
        {/* /.col */}
        <div className="col-md-3 col-sm-6 col-12">
          <div className="info-box bg-gradient-success">
            <span className="info-box-icon">
              <i className="far fa-thumbs-up" />
            </span>

            <div className="info-box-content">
              <span className="info-box-text">Likes</span>
              <span className="info-box-number">41,410</span>

              <div className="progress">
                <div className="progress-bar" style={{width: '70%'}} />
              </div>
              <span className="progress-description">
                70% Increase in 30 Days
              </span>
            </div>
            {/* /.info-box-content */}
          </div>
          {/* /.info-box */}
        </div>
        {/* /.col */}
        <div className="col-md-3 col-sm-6 col-12">
          <div className="info-box bg-gradient-warning">
            <span className="info-box-icon">
              <i className="far fa-calendar-alt" />
            </span>

            <div className="info-box-content">
              <span className="info-box-text">Events</span>
              <span className="info-box-number">41,410</span>

              <div className="progress">
                <div className="progress-bar" style={{width: '70%'}} />
              </div>
              <span className="progress-description">
                70% Increase in 30 Days
              </span>
            </div>
            {/* /.info-box-content */}
          </div>
          {/* /.info-box */}
        </div>
        {/* /.col */}
        <div className="col-md-3 col-sm-6 col-12">
          <div className="info-box bg-gradient-danger">
            <span className="info-box-icon">
              <i className="fas fa-comments" />
            </span>

            <div className="info-box-content">
              <span className="info-box-text">Comments</span>
              <span className="info-box-number">41,410</span>

              <div className="progress">
                <div className="progress-bar" style={{width: '70%'}} />
              </div>
              <span className="progress-description">
                70% Increase in 30 Days
              </span>
            </div>
            {/* /.info-box-content */}
          </div>
          {/* /.info-box */}
        </div>
        {/* /.col */}
      </div>
      {/* /.row */}

      {/* =========================================================== */}

      {/* Small Box (Stat card) */}
      <h5 className="mb-2 mt-4">Small Box</h5>
      <div className="row">
        <div className="col-lg-3 col-6">
          <SmallBox type="info" count={150} title="New Orders" navigateTo="/" />
        </div>
        <div className="col-lg-3 col-6">
          <SmallBox
            type="success"
            icon="ion-stats-bars"
            count={53}
            title="Bounce Rate"
            navigateTo="/"
          />
        </div>
        <div className="col-lg-3 col-6">
          <SmallBox
            type="warning"
            count={44}
            title="User Registrations"
            navigateTo="/"
          />
        </div>
        <div className="col-lg-3 col-6">
          <SmallBox
            type="danger"
            count={65}
            title="Unique Visitors"
            navigateTo="/"
          />
        </div>
      </div>

      {/* Small Box (Stat card) */}
      <div className="row">
        <div className="col-lg-3 col-6">
          {/* small card */}
          <div className="small-box bg-info">
            <div className="overlay">
              <i className="fas fa-3x fa-sync-alt" />
            </div>
            {/* end loading */}
            <div className="inner">
              <h3>150</h3>

              <p>New Orders</p>
            </div>
            <div className="icon">
              <i className="fas fa-shopping-cart" />
            </div>
            <a href="/" className="small-box-footer">
              More info <i className="fas fa-arrow-circle-right" />
            </a>
          </div>
        </div>
        {/* ./col */}
        <div className="col-lg-3 col-6">
          {/* small card */}
          <div className="small-box bg-success">
            <div className="overlay dark">
              <i className="fas fa-3x fa-sync-alt" />
            </div>
            {/* end loading */}
            <div className="inner">
              <h3>
                53<sup style={{fontSize: '20px'}}>%</sup>
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
        {/* ./col */}
      </div>
      {/* /.row */}
    </div>
  );
};

export default Dashboard;

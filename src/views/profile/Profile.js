import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/button/Button';
import ActivityTab from './ActivityTab';
import TimelineTab from './TimelineTab';
import SettingsTab from './SettingsTab';

const Profile = () => {
  const [activeTab, setActiveTab] = useState('ACTIVITY');

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <>
      <section className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1>Profile</h1>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item">
                  <Link to="/">Home</Link>
                </li>
                <li className="breadcrumb-item active">User Profile</li>
              </ol>
            </div>
          </div>
        </div>
      </section>
      <section className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-3">
              <div className="card card-primary card-outline">
                <div className="card-body box-profile">
                  <div className="text-center">
                    <img
                      className="profile-user-img img-fluid img-circle"
                      src="/img/default-profile.png"
                      alt="User profile"
                    />
                  </div>
                  <h3 className="profile-username text-center">
                    Nina Mcintire
                  </h3>
                  <p className="text-muted text-center">Software Engineer</p>
                  <ul className="list-group list-group-unbordered mb-3">
                    <li className="list-group-item">
                      <b>Followers</b>

                      <span className="float-right">1,322</span>
                    </li>
                    <li className="list-group-item">
                      <b>Following</b>
                      <span className="float-right">543</span>
                    </li>
                    <li className="list-group-item">
                      <b>Friends</b>
                      <span className="float-right">13,287</span>
                    </li>
                  </ul>
                  <Button block color="primary">
                    Follow
                  </Button>
                </div>
                {/* /.card-body */}
              </div>
              <div className="card card-primary">
                <div className="card-header">
                  <h3 className="card-title">About Me</h3>
                </div>
                <div className="card-body">
                  <strong>
                    <i className="fas fa-book mr-1" />
                    Education
                  </strong>
                  <p className="text-muted">
                    B.S. in Computer Science from the University of Tennessee at
                    Knoxville
                  </p>
                  <hr />
                  <strong>
                    <i className="fas fa-map-marker-alt mr-1" />
                    Location
                  </strong>
                  <p className="text-muted">Malibu, California</p>
                  <hr />
                  <strong>
                    <i className="fas fa-pencil-alt mr-1" />
                    Skills
                  </strong>
                  <p className="text-muted">
                    <span className="tag tag-danger">UI Design</span>
                    <span className="tag tag-success">Coding</span>
                    <span className="tag tag-info">Javascript</span>
                    <span className="tag tag-warning">PHP</span>
                    <span className="tag tag-primary">Node.js</span>
                  </p>
                  <hr />
                  <strong>
                    <i className="far fa-file-alt mr-1" />
                    Notes
                  </strong>
                  <p className="text-muted">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Etiam fermentum enim neque.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-9">
              <div className="card">
                <div className="card-header p-2">
                  <ul className="nav nav-pills">
                    <li className="nav-item">
                      <button
                        type="button"
                        className={`nav-link ${
                          activeTab === 'ACTIVITY' ? 'active' : ''
                        }`}
                        onClick={() => toggle('ACTIVITY')}
                      >
                        Activity
                      </button>
                    </li>
                    <li className="nav-item">
                      <button
                        type="button"
                        className={`nav-link ${
                          activeTab === 'TIMELINE' ? 'active' : ''
                        }`}
                        onClick={() => toggle('TIMELINE')}
                      >
                        Timeline
                      </button>
                    </li>
                    <li className="nav-item">
                      <button
                        type="button"
                        className={`nav-link ${
                          activeTab === 'SETTINGS' ? 'active' : ''
                        }`}
                        onClick={() => toggle('SETTINGS')}
                      >
                        Settings
                      </button>
                    </li>
                  </ul>
                </div>
                <div className="card-body">
                  <div className="tab-content">
                    <ActivityTab isActive={activeTab === 'ACTIVITY'} />
                    <TimelineTab isActive={activeTab === 'TIMELINE'} />
                    <SettingsTab isActive={activeTab === 'SETTINGS'} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Profile;

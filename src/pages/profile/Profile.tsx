import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';
import {ContentHeader} from '@components';
import {PfButton, PfImage} from '@profabric/react-components';
import styled from 'styled-components';

import ActivityTab from './ActivityTab';
import TimelineTab from './TimelineTab';
import SettingsTab from './SettingsTab';

const StyledUserImage = styled(PfImage)`
  --pf-border: 3px solid #adb5bd;
  --pf-padding: 3px;
`;

const Profile = () => {
  const [activeTab, setActiveTab] = useState('ACTIVITY');
  const [t] = useTranslation();

  const toggle = (tab: string) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <>
      <ContentHeader title="Profile" />
      <section className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-3">
              <div className="card card-primary card-outline">
                <div className="card-body box-profile">
                  <div className="text-center">
                    <StyledUserImage
                      width={100}
                      height={100}
                      rounded
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
                      <b>{t<string>('header.user.followers')}</b>

                      <span className="float-right">1,322</span>
                    </li>
                    <li className="list-group-item">
                      <b>{t<string>('views.user.following')}</b>
                      <span className="float-right">543</span>
                    </li>
                    <li className="list-group-item">
                      <b>{t<string>('header.user.friends')}</b>
                      <span className="float-right">13,287</span>
                    </li>
                  </ul>
                  <PfButton block>
                    {/* @ts-ignore */}
                    {t<string>('main.label.follow')}
                  </PfButton>
                </div>
                {/* /.card-body */}
              </div>
              <div className="card card-primary">
                <div className="card-header">
                  <h3 className="card-title">
                    {t<string>('main.label.aboutMe')}
                  </h3>
                </div>
                <div className="card-body">
                  <strong>
                    <i className="fas fa-book mr-1" />
                    {t<string>('main.label.education')}
                  </strong>
                  <p className="text-muted">
                    B.S. in Computer Science from the University of Tennessee at
                    Knoxville
                  </p>
                  <hr />
                  <strong>
                    <i className="fas fa-map-marker-alt mr-1" />
                    {t<string>('main.label.location')}
                  </strong>
                  <p className="text-muted">Malibu, California</p>
                  <hr />
                  <strong>
                    <i className="fas fa-pencil-alt mr-1" />
                    {t<string>('main.label.skills')}
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
                    {t<string>('main.label.notes')}
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
                        {t<string>('main.label.activity')}
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
                        {t<string>('main.label.timeline')}
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
                        {t<string>('main.label.settings')}
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

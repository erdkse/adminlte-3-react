import React from 'react';
import {Link} from 'react-router-dom';

const TimelineTab = ({isActive}: {isActive: boolean}) => {
  return (
    <div className={`tab-pane ${isActive ? 'active' : ''}`}>
      {/* The timeline */}
      <div className="timeline timeline-inverse">
        {/* timeline time label */}
        <div className="time-label">
          <span className="bg-danger">10 Feb. 2014</span>
        </div>
        {/* /.timeline-label */}
        {/* timeline item */}
        <div>
          <i className="fas fa-envelope bg-primary" />
          <div className="timeline-item">
            <span className="time">
              <i className="far fa-clock" />
              <span> 12:05</span>
            </span>
            <h3 className="timeline-header">
              <Link to="/">Support Team</Link>
              <span> sent you an email</span>
            </h3>
            <div className="timeline-body">
              Etsy doostang zoodles disqus groupon greplin oooj voxy zoodles,
              weebly ning heekya handango imeem plugg dopplr jibjab, movity
              jajah plickers sifteo edmodo ifttt zimbra. Babblely odeo kaboodle
              quora plaxo ideeli hulu weebly balihoo...
            </div>
            <div className="timeline-footer">
              <Link to="/" className="btn btn-primary btn-sm">
                Read more
              </Link>
              <Link to="/" className="btn btn-danger btn-sm">
                Delete
              </Link>
            </div>
          </div>
        </div>
        {/* END timeline item */}
        {/* timeline item */}
        <div>
          <i className="fas fa-user bg-info" />
          <div className="timeline-item">
            <span className="time">
              <i className="far fa-clock" />
              <span> 5 mins ago</span>
            </span>
            <h3 className="timeline-header border-0">
              <Link to="/">Sarah Young</Link>
              <span> accepted your friend request</span>
            </h3>
          </div>
        </div>
        {/* END timeline item */}
        {/* timeline item */}
        <div>
          <i className="fas fa-comments bg-warning" />
          <div className="timeline-item">
            <span className="time">
              <i className="far fa-clock" />
              <span> 27 mins ago</span>
            </span>
            <h3 className="timeline-header">
              <Link to="/">Jay White</Link>
              <span> commented on your post</span>
            </h3>
            <div className="timeline-body">
              Take me to your leader! Switzerland is small and neutral! We are
              more like Germany, ambitious and misunderstood!
            </div>
            <div className="timeline-footer">
              <Link to="/" className="btn btn-warning btn-flat btn-sm">
                View comment
              </Link>
            </div>
          </div>
        </div>
        {/* END timeline item */}
        {/* timeline time label */}
        <div className="time-label">
          <span className="bg-success">3 Jan. 2014</span>
        </div>
        {/* /.timeline-label */}
        {/* timeline item */}
        <div>
          <i className="fas fa-camera bg-purple" />
          <div className="timeline-item">
            <span className="time">
              <i className="far fa-clock" />
              <span> 2 days ago</span>
            </span>
            <h3 className="timeline-header">
              <Link to="/">Mina Lee</Link>
              <span> uploaded new photos</span>
            </h3>
            <div className="timeline-body">
              <img
                src="/img/default-profile.png"
                style={{width: '1.6rem', height: '1.6rem'}}
                alt="..."
              />
              <img
                src="/img/default-profile.png"
                style={{width: '1.6rem', height: '1.6rem'}}
                alt="..."
              />
              <img
                src="/img/default-profile.png"
                style={{width: '1.6rem', height: '1.6rem'}}
                alt="..."
              />
              <img
                src="/img/default-profile.png"
                style={{width: '1.6rem', height: '1.6rem'}}
                alt="..."
              />
            </div>
          </div>
        </div>
        {/* END timeline item */}
        <div>
          <i className="far fa-clock bg-gray" />
        </div>
      </div>
    </div>
  );
};

export default TimelineTab;

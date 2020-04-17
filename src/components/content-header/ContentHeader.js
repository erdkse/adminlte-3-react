import React from 'react';
import PropTypes from 'prop-types';

const ContentHeader = (props) => {
  const { title } = props;
  return (
    <section className="content-header">
      <div className="container-fluid">
        <div className="row mb-2">
          <div className="col-sm-6">
            <h1>{title}</h1>
          </div>
          <div className="col-sm-6">
            <ol className="breadcrumb float-sm-right">
              <li className="breadcrumb-item">
                <a href="/">Home</a>
              </li>
              <li className="breadcrumb-item active">Blank Page</li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};

ContentHeader.propTypes = {
  title: PropTypes.string.isRequired
};

export default ContentHeader;

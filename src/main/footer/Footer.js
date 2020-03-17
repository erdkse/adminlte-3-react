import React, { Component } from 'react';
import packageJson from './../../../package.json';

class Footer extends Component {
  render() {
    return (
      <footer className="main-footer">
        <strong>Copyright © 2018</strong>
        <div className="float-right d-none d-sm-inline-block">
          <b>Version</b> {packageJson.version}
        </div>
      </footer>
    );
  }
}

export default Footer;

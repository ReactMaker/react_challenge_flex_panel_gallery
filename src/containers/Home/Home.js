import React, { Component } from 'react';

import './Home.less';

export default class Home extends Component {
  render() {
    return (
      <div id="pageHome">
        <div className="panels">
          <div className="panel panel1">
            <p>Hey</p>
            <p>Lets</p>
            <p>Dance</p>
          </div>
          <div className="panel panel2">
            <p>Give</p>
            <p>Take</p>
            <p>Receive</p>
          </div>
          <div className="panel panel3">
            <p>Experience</p>
            <p>It</p>
            <p>Today</p>
          </div>
          <div className="panel panel4">
            <p>Give</p>
            <p>All</p>
            <p>You can</p>
          </div>
          <div className="panel panel5">
            <p>Life</p>
            <p>In</p>
            <p>Motion</p>
          </div>
        </div>
      </div>
    );
  }
}

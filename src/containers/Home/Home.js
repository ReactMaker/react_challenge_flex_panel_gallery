import React, { Component } from 'react';
import classNames from 'classnames';

import './Home.less';

export default class Home extends Component {

  state = {
    nowOpenPanel: '',
    openedPanel: '',
  }

  transitionTime = 0;

  classNameGenerate = mainClassName => classNames('panel', mainClassName, {
    open: this.state.nowOpenPanel === mainClassName,
    'open-active': this.state.openedPanel === mainClassName,
  })

  togglePanel = (clickedPanelClassName) => {
    let nextClassName = '';
    if (this.state.nowOpenPanel !== clickedPanelClassName) nextClassName = clickedPanelClassName;
    this.setState({ nowOpenPanel: nextClassName });
  }

  render() {
    return (
      <div id="pageHome">
        <div className="panels">
          <div
            className={this.classNameGenerate('panel1')}
            onClick={() => { this.togglePanel('panel1'); }}>
            <p>Hey</p>
            <p>Lets</p>
            <p>Dance</p>
          </div>
          <div
            className={this.classNameGenerate('panel2')}
            onClick={() => { this.togglePanel('panel2'); }}>
            <p>Give</p>
            <p>Take</p>
            <p>Receive</p>
          </div>
          <div
            className={this.classNameGenerate('panel3')}
            onClick={() => { this.togglePanel('panel3'); }}>
            <p>Experience</p>
            <p>It</p>
            <p>Today</p>
          </div>
          <div
            className={this.classNameGenerate('panel4')}
            onClick={() => { this.togglePanel('panel4'); }}>
            <p>Give</p>
            <p>All</p>
            <p>You can</p>
          </div>
          <div
            className={this.classNameGenerate('panel5')}
            onClick={() => { this.togglePanel('panel5'); }}>
            <p>Life</p>
            <p>In</p>
            <p>Motion</p>
          </div>
        </div>
      </div>
    );
  }
}

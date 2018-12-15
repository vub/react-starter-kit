import PropTypes from 'prop-types';
import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { toggleSideBarAction } from '../main/actions/common';

function mapStateToProps(state) {
  return _.merge({}, state.common);
}

function mapDispatchToProps(dispatch) {
  return {
    toggleSideBar: () => dispatch(toggleSideBarAction()),
  };
}

function SideBar(props) {
  const {
    isSidebarOpen, toggleSideBar, menus, logo,
  } = props;

  return (
    <div
      className="sidebar"
      data-color=""
      data-background-color="white"
      style={{ width: isSidebarOpen ? '260px' : '0' }}
    >
      <div className="fixed-plugin" role="presentation" onClick={toggleSideBar}>
        <i className="material-icons">
          menu
        </i>
      </div>
      <div className="logo">
        <div className="row">
          <div className="col-6 offset-3">
            <a href="" className="simple-text logo-normal">
              {/* <img src={`/public/image/${logo}.png`} className="logo-img" alt="" /> */}
              <h4>Dashboard</h4>
            </a>
          </div>
        </div>
      </div>
      <div
        className="sidebar-wrapper"
        style={{ width: isSidebarOpen ? '260px' : '0' }}
      >
        <ul className="nav">
          {menus}
        </ul>
      </div>
      <div className="sidebar-background" />
    </div>
  );
}

SideBar.defaultProps = {};

SideBar.propTypes = {
  logo: PropTypes.string.isRequired,
  isSidebarOpen: PropTypes.bool.isRequired,
  toggleSideBar: PropTypes.func.isRequired,
  menus: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

const CommonSideBar = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SideBar);

export default CommonSideBar;

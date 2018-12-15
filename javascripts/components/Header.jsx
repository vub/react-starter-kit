import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  closeConfirmationAction,
  setConfirmationAction,
} from '../main/actions/common';

function Header(props) {
  const {
    menuTitle, setConfirmation, closeConfirmation,
  } = props;

  function getDisplayName() {
    if (window.user.firstname && window.user.lastname) {
      return `${window.user.firstname} ${window.user.lastname}`;
    }
    return window.user.username;
  }

  function logout() {
    setConfirmation({
      isConfirmationOpen: true,
      confirmationMessage: 'Are you sure to log out?',
      confirmationCb(resultConfirmation) {
        if (resultConfirmation) {
          window.location.href = '/logout';
        }
        closeConfirmation();
      },
    });
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-transparent navbar-absolute fixed-top ">
      <div className="container-fluid">
        <div className="navbar-wrapper">
          <span className="navbar-brand">
            {menuTitle}
          </span>
        </div>
        <div className="collapse navbar-collapse justify-content-end">
          <ul className="navbar-nav">
            <li className="nav-item">
              {/* <Link to={`/profile/${window.user.id}`}>
                <strong className="text-secondary">
                  Hi,
                  {' '}
                  {getDisplayName()}
                </strong>
              </Link> */}
            </li>
            {
              window.serviceCode && (
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    <i className="material-icons">
                      arrow_upward
                    </i>
                  </a>
                </li>
              )
            }
            <li className="nav-item">
              <button type="button" className="btn btn-link nav-link" onClick={() => logout()}>
                <i className="material-icons">
                  exit_to_app
                </i>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

Header.propTypes = {
  menuTitle: PropTypes.string.isRequired,
  setConfirmation: PropTypes.func.isRequired,
  closeConfirmation: PropTypes.func.isRequired,
};

function mapState() {
  return {};
}

function mapDispatch(dispatch) {
  return {
    setConfirmation: confirmationState => dispatch(setConfirmationAction(confirmationState)),
    closeConfirmation: () => dispatch(closeConfirmationAction()),
  };
}

export default connect(mapState, mapDispatch)(Header);

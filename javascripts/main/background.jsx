import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

function mapStateToProps(state) {
  return {
  };
}

function mapDispatchToProps(dispatch) {
  return {
  };
}

function Background(props) {
  const {
  } = props;

  return (
    <div>Background</div>
  );
}

Background.defaultProps = {};
Background.propTypes = {
};

const BackgroundComponent = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(Background));

function initBackground() {
}

export { BackgroundComponent, initBackground };

import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import request from 'superagent';
import store from './store';

function mapStateToProps(state) {
  return {
  };
}

function mapDispatchToProps(dispatch) {
  return {
  };
}

function initPage(state) {
  return request
    .get('/api/background')
    .then((res) => {
      const result = res.body;
      if (result.status === 'successful') {
        console.log('I request api!');
      } else {
      }
    })
    .catch((err) => {
    });
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
  initPage();
}

export { BackgroundComponent, initBackground };

import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { connect } from 'react-redux';
import LoadingMask from './loading-mask';

function mapStateToProps(state) {
  return _.merge({}, state.common);
}

function mapDispatchToProps() {
  return {};
}

function Loading(props) {
  const {
    isLoading,
  } = props;

  if (!isLoading) {
    return null;
  }

  return (
    <LoadingMask isFullScene />
  );
}

Loading.defaultProps = {
  isLoading: false,
};

Loading.propTypes = {
  isLoading: PropTypes.bool,
};

const CommonLoading = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Loading);

export default CommonLoading;

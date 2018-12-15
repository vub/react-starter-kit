import PropTypes from 'prop-types';
import React from 'react';
import {
  Button,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from 'reactstrap';
import _ from 'lodash';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return _.merge({}, state.common);
}

function mapDispatchToProps() {
  return {};
}

function Alert(props) {
  const {
    isAlertOpen, alertCb, alertMessage,
  } = props;

  return (
    <Modal isOpen={isAlertOpen}>
      <ModalHeader>
        <b>
          Alert
        </b>
      </ModalHeader>
      <ModalBody>
        <p>
          {alertMessage}
        </p>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" size="sm" onClick={alertCb}>
          OK
        </Button>
        {' '}
      </ModalFooter>
    </Modal>
  );
}

Alert.defaultProps = {
  isAlertOpen: false,
  alertCb() {
  },
  alertMessage: '',
};

Alert.propTypes = {
  isAlertOpen: PropTypes.bool,
  alertCb: PropTypes.func,
  alertMessage: PropTypes.string,
};

const CommonAlert = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Alert);

export default CommonAlert;

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

function Confirmation(props) {
  const {
    isConfirmationOpen, confirmationCb, confirmationMessage,
  } = props;

  return (
    <Modal isOpen={isConfirmationOpen}>
      <ModalHeader>
        <b>
          Confirmation
        </b>
      </ModalHeader>
      <ModalBody>
        <p>
          {confirmationMessage}
        </p>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" size="sm" onClick={() => confirmationCb(true)}>
          OK
        </Button>
        {' '}
        <Button color="default" size="sm" onClick={() => confirmationCb(false)}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
}

Confirmation.defaultProps = {
  isConfirmationOpen: false,
  confirmationCb() {
  },
  confirmationMessage: '',
};

Confirmation.propTypes = {
  isConfirmationOpen: PropTypes.bool,
  confirmationCb: PropTypes.func,
  confirmationMessage: PropTypes.string,
};

const CommonConfirmation = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Confirmation);

export default CommonConfirmation;

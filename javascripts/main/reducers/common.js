import _ from 'lodash';

function common(state = {
  isSidebarOpen: true,
  isLoading: false,
  isAlertOpen: false,
  alertMessage: '',
  alertCb() {
  },
  isConfirmationOpen: false,
  confirmationMessage: '',
  confirmationCb() {
  },
}, action) {
  const newState = _.cloneDeep(state);
  switch (action.type) {
    case 'SET_ALERT_ACTION': {
      newState.isAlertOpen = action.isAlertOpen;
      newState.alertMessage = action.alertMessage;
      newState.alertCb = action.alertCb;
      return newState;
    }
    case 'CLOSE_ALERT_ACTION': {
      newState.isAlertOpen = false;
      return newState;
    }
    case 'SET_CONFIRMATION_ACTION': {
      newState.isConfirmationOpen = action.isConfirmationOpen;
      newState.confirmationMessage = action.confirmationMessage;
      newState.confirmationCb = action.confirmationCb;
      return newState;
    }
    case 'CLOSE_CONFIRMATION_ACTION': {
      newState.isConfirmationOpen = false;
      return newState;
    }
    case 'SET_LOADING':
      newState.isLoading = action.isLoading;
      return newState;
    case 'TOGGLE_SIDEBAR': {
      newState.isSidebarOpen = !newState.isSidebarOpen;
      return newState;
    }
    default:
      return state;
  }
}

export default common;

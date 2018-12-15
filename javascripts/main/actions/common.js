export function toggleSideBarAction() {
  return {
    type: 'TOGGLE_SIDEBAR',
  };
}

export function setLoadingAction({ isLoading }) {
  return {
    type: 'SET_LOADING',
    isLoading,
  };
}

export function setAlertAction({ isAlertOpen, alertCb, alertMessage }) {
  return {
    type: 'SET_ALERT_ACTION',
    isAlertOpen,
    alertMessage,
    alertCb,
  };
}

export function closeAlertAction() {
  return {
    type: 'CLOSE_ALERT_ACTION',
  };
}

export function setConfirmationAction({ isConfirmationOpen, confirmationCb, confirmationMessage }) {
  return {
    type: 'SET_CONFIRMATION_ACTION',
    isConfirmationOpen,
    confirmationMessage,
    confirmationCb,
  };
}

export function closeConfirmationAction() {
  return {
    type: 'CLOSE_CONFIRMATION_ACTION',
  };
}

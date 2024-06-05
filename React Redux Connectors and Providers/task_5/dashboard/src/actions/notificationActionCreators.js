import {
  SET_LOADING_STATE,
  FETCH_NOTIFICATIONS_SUCCESS
} from './notificationActionTypes';

export const setLoadingState = (isLoading) => {
  return {
    type: SET_LOADING_STATE,
    payload: isLoading
  };
};

export const setNotifications = (notifications) => {
  return {
    type: FETCH_NOTIFICATIONS_SUCCESS,
    payload: notifications
  };
};

export const fetchNotifications = () => {
  return (dispatch) => {
    // Set loading state to true
    dispatch(setLoadingState(true));

    // Fetch notifications
    fetch('/notifications.json')
      .then(response => response.json())
      .then(data => {
        // Dispatch setNotifications with the fetched data
        dispatch(setNotifications(data));

        // Set loading state to false
        dispatch(setLoadingState(false));
      })
      .catch(error => {
        console.error('Error fetching notifications:', error);

        // Set loading state to false in case of error
        dispatch(setLoadingState(false));
      });
  };
};

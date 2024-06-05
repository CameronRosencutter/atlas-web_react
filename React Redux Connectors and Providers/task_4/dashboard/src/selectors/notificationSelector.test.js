// src/selectors/notificationSelector.test.js
import { fromJS } from 'immutable';
import { filterTypeSelected, getNotifications, getUnreadNotifications } from './notificationSelector';
import { NotificationTypeFilters } from '../actions/notificationActionTypes';

describe('Notification Selectors', () => {
  const initialState = fromJS({
    filter: NotificationTypeFilters.DEFAULT,
    notifications: {
      1: { id: 1, type: 'default', value: 'New course available', isRead: false },
      2: { id: 2, type: 'urgent', value: 'New resume available', isRead: true },
      3: { id: 3, type: 'urgent', value: 'New data available', isRead: false }
    }
  });

  it('should select the filter type', () => {
    const selectedFilter = filterTypeSelected(initialState);
    expect(selectedFilter).toEqual(NotificationTypeFilters.DEFAULT);
  });

  it('should get all notifications', () => {
    const notifications = getNotifications(initialState);
    expect(notifications.toJS()).toEqual({
      1: { id: 1, type: 'default', value: 'New course available', isRead: false },
      2: { id: 2, type: 'urgent', value: 'New resume available', isRead: true },
      3: { id: 3, type: 'urgent', value: 'New data available', isRead: false }
    });
  });

  it('should get unread notifications', () => {
    const unreadNotifications = getUnreadNotifications(initialState);
    expect(unreadNotifications.toJS()).toEqual({
      1: { id: 1, type: 'default', value: 'New course available', isRead: false },
      3: { id: 3, type: 'urgent', value: 'New data available', isRead: false }
    });
  });
});

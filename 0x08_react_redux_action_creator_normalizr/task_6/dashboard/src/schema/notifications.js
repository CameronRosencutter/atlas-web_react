// src/schema/notifications.js
import { normalize, schema } from 'normalizr';
import * as notificationsData from '../../notifications.json';

// Define user entity
const user = new schema.Entity('users');

// Define message entity with guid as the idAttribute
const message = new schema.Entity('messages', {}, { idAttribute: 'guid' });

// Define notification entity
const notification = new schema.Entity('notifications', {
  author: user,
  context: message,
});

// Function to normalize notifications
const normalizedData = normalize(notificationsData.default, [notification]);

export const getAllNotificationsByUser = (userId) => {
  const notifications = normalizedData.entities.notifications;
  const result = [];

  for (const key in notifications) {
    if (notifications[key].author === userId) {
      result.push(notifications[key]);
    }
  }

  return result;
};

export { user, message, notification, normalizedData };

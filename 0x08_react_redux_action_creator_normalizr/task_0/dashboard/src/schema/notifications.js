// src/schema/notifications.js
import { schema, normalize } from 'normalizr';
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
export const normalizeNotifications = (data) => {
  return normalize(data, [notification]);
};

export { user, message, notification };

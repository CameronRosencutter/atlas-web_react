// src/schema/notifications.js
import { schema } from 'normalizr';

const notification = new schema.Entity('notifications');
const notificationListSchema = [notification];

export const notificationsNormalizer = (data) => {
  return normalize(data, notificationListSchema);
};

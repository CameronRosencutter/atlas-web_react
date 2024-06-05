// src/schema/courses.js
import { schema } from 'normalizr';

const course = new schema.Entity('courses');
const courseListSchema = [course];

export const coursesNormalizer = (data) => {
  return normalize(data, courseListSchema);
};

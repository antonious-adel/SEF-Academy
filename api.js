import axios from 'axios';

export const fetchCourses = async () => {
  const response = await axios.get('/api/courses');
  return response.data;
};
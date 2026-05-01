import api from './api';
const courseService = {
  getAllCourses: async () => { 
    try {
      const response = await api.get('/api/all_courses');
      return response.data.data;
    } catch (error) {
      throw error;
    }
    },
    enrollCourse: async (course_name, course_code) => { 
        try {
            const response = await api.post('/api/enroll_course', { course_name, course_code });
            return response.data.message;
        } catch (error) {
            throw error;
        }
    }
};
export default courseService;
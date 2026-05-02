import api from './api';
const adminService = {
    allUsers: async () => {
        try {
            const response = await api.get('/admin/all_users');
            return response.data.data;
        } catch (error) {
            throw error;
        }
    },
    deleteCourse: async (courseId) => {
        try {
            const response = await api.delete(`/admin/delete_course?course_code=${courseId}`);
            return response.data;
        } catch (error) {
            throw error;
        }
    },
    filterUser: async (courseCode) => {
        try {
            const response = await api.get(`/admin/filter_user?course_code=${courseCode}`);
            return response.data.data;
        } catch (error) {
            throw error;
        }
    },
    all_enrolled_courses: async () => {
        try {
            const response = await api.get(`/admin/all_enrolled_courses`)
            return response.data.data
        } catch (err) {
            throw err
        }
    }
};
export default adminService;

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
    }
}
export default adminService;

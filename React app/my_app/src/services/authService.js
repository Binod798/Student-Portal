import api from './api';
const authService = {
  login: async (username, password) => {
    // Simulate an API call for authentication 
    try {
      const response = await api.post('/auth/login', { email: username, password });
      const { token, name } = response.data.data;
      sessionStorage.setItem('token', token);
      sessionStorage.setItem('user', JSON.stringify(name));
      return { name, token };
    } catch (error) {
      throw error;
    }
  },
  Register: async (student_id, name, email, password) => {
    try {
      const response = await api.post('/auth/register', { student_id, name, email, password });
      return response.data;
    } catch (error) {
      throw error;
    }
  }
};
export default authService;
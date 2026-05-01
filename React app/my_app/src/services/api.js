import axios from 'axios';
import { toast } from 'react-toastify';

// ── 1. Create the axios instance ───────────────────────────────
const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// ── 2. Request interceptor ─────────────────────────────────────
api.interceptors.request.use(
  (config) => {
     const publicRoutes = ['/auth/login', '/auth/register', '/auth/forgot-password'];
    const isPublic = publicRoutes.some(route => config.url.includes(route));

    if (!isPublic) {
      const token = sessionStorage.getItem('token');
      
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }

    return config
  },
  (error) => {
    toast.error('Request failed. Please try again.');
    return Promise.reject(error);
  }
);

// ── 3. Response interceptor ────────────────────────────────────
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {

    // Get the error message from the server if available
    const message =
      error.response?.data?.message ||
      'Something went wrong. Please try again.';
      console.log(error.response)

    if (error.response?.status === 400) {
      toast.warning(message);             // bad request — show server message
    }

    else if (error.response?.status === 401) {
      toast.error('Session expired. Please log in again.');
      // setTimeout(() => {
      //   window.location.href = '/login';
      // }, 2000); // wait 2s so user can read the toast
    }

    else if (error.response?.status === 403) {
      toast.error('You are not allowed to do that.');
      window.location.href = '/';
    }

    else if (error.response?.status === 404) {
      toast.error('Resource not found.');
    }

    else if (error.response?.status === 409) {
      toast.warning(message);             // conflict — e.g. email already exists
    }

    else if (error.response?.status === 500) {
      toast.error('Server error. Please try again later.');
    }

    else if (!error.response) {
      toast.error('Cannot connect to server. Check your connection.');
    }

    return Promise.reject(error);
  }
);

export default api;
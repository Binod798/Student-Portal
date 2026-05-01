import {useEffect} from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
// import Home from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';

function App() {
  useEffect(() => {
    toast.info('Welcome to the Course Enrollment System!');
  }, []);
  return (
    <BrowserRouter>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
      />
      <Routes>
        <Route path="/" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

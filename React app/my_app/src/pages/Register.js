import {useState} from 'react'
import authService from '../services/authService';
import successHandler from '../utils/successHandler';
import errorHandler from '../utils/errorHandler';
import { useNavigate } from 'react-router-dom';
import {Link} from 'react-router-dom';

function Register() {
  const [student_id, setStudentId] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
    const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await authService.Register(student_id, name, email, password);
      successHandler('Registration successful!');
      navigate('/auth/login');
    } catch (error) {
        errorHandler.showError(error.response.data.message || 'Registration failed. Please try again.');
    }
  };

  return (
    <div className="register-page">
      <h2>Register</h2>
      {/* input fields student id,name,email,password */}
      <form className="register-form" onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Student ID" 
          className="student-id-input"
          value={student_id}
          onChange={(e) => setStudentId(e.target.value)}
        />
        <input 
          type="text" 
          placeholder="Name" 
          className="name-input"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input 
          type="email" 
          placeholder="Email" 
          className="email-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input 
          type="password" 
          placeholder="Password" 
          className="password-input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Register</button>
        <p>Already have an account? <Link to="/auth/login">Login here</Link></p>
      </form>
    </div>
  )
}

export default Register
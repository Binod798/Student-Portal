import {useState} from 'react';
import authService from '../services/authService';
import {useNavigate} from 'react-router-dom';
import { toast } from 'react-toastify';
import {Link} from 'react-router-dom';
function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  console.log(process.env.REACT_APP_API_URL);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      const user_info = await authService.login(email, password);
      if(user_info) {
      toast.success(`Welcome, ${user_info.name}!`);
        setEmail('');
        setPassword('');
        if(user_info.name === 'admin') {
          navigate('/admin/dashboard');
        } else
        navigate('/home');
      }
    } catch (error) {
      if(!error.response) {
        toast.error('Network error. Please try again later.');
      }
      return
    }
  };

  return (
    <div className="login-page">
        <form onSubmit={handleSubmit} className="login-form">
            <input 
                type="email" 
                placeholder="Email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="email-input"

            />
            <input 
                type="password" 
                placeholder="Password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="password-input"
            />
            <button type="submit">Login</button>
        <p>Don't have an account? <Link to="/auth/register">Register here</Link></p>
        </form>

    </div>
  )
}

export default LoginPage
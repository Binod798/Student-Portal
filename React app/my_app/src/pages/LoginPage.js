import {useState} from 'react';
import authService from '../services/authService';
import {useNavigate} from 'react-router-dom';
import { toast } from 'react-toastify';
function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  console.log(process.env.REACT_APP_API_URL);

  const handleSubmit = async (e) => {
    e.preventDefault();
      const user_info = await authService.login(email, password);
      if(user_info) {
      toast.success(`Welcome, ${user_info.name}!`);
        setEmail('');
        setPassword('');
        navigate('/home');
      }
  };

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input 
                type="email" 
                placeholder="Email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}

            />
            <input 
                type="password" 
                placeholder="Password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Login</button>
        </form>

    </div>
  )
}

export default LoginPage
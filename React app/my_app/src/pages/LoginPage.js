import {useState} from 'react';
import authService from '../services/authService';
function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  console.log(process.env.REACT_APP_API_URL);

  const handleSubmit = async (e) => {
    e.preventDefault();
        // authService.login(email, password)
        //   .then(user => {
        //     console.log('Logged in user:', user);
        //     // Redirect to home page or show success message
        //   })
        //   .catch(error => {
        //     console.error('Login failed:', error);
        //     // Show error message to user
        //   });

      const user_info = await authService.login(email, password);
      console.log('Logged details of user:', user_info);
  };

  return (
    <div>
        //Form with input field email and password and submit button
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
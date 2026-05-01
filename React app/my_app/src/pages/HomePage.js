import React from 'react'
import authService from '../services/authService';

function HomePage() {
  return (
    <div>HomePage

        <button onClick={() => authService.login('testuser', 'password123')}>
            Test Login
        </button>
    </div>
  )
}

export default HomePage
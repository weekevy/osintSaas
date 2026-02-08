import { useState, useEffect } from 'react';
import LoginForm from './components/LoginForm';
import Home from './components/Home';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await fetch('/api/check-auth');
        const data = await response.json();
        setIsLoggedIn(data.isAuthenticated);
      } catch (error) {
        console.error('Error checking auth status:', error);
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  if (loading) {
    return <div>Loading...</div>; // Or a spinner component
  }

  return (
    <div>
      {isLoggedIn ? <Home /> : <LoginForm onLoginSuccess={handleLoginSuccess} />}
    </div>
  );
}

export default App;

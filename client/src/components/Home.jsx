import React from 'react';

function Home() {
  const handleLogout = async () => {
    try {
      await fetch('/api/logout', { method: 'POST' });
      window.location.reload();
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return (
    <div>
      <div style={{ position: 'absolute', top: '10px', left: '10px' }}>
        <button onClick={handleLogout}>Logout</button>
      </div>
      <h1>Welcome to the Website!</h1>
      <p>Hello!</p>
    </div>
  );
}

export default Home;

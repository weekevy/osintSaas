
import { useEffect, useState } from 'react';


function App() {
  const [msg, setMsg] = useState('');

  useEffect(() => {
    fetch('/api/test')  // proxy handles it
        .then(res => res.json())
        .then(data => setMsg (data.message))
        .catch (err => console.error("Error fetching API", err))
  }, []);

  return (
    <div>
      <h1>React Frontend</h1>
      <p>the API say : {msg}</p>
    </div>


  );
}

export default App;


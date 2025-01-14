import './App.css'
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [statusMessage, setStatusMessage] = useState('');

  useEffect(() => {
    console.log('Backend URL:', import.meta.env.VITE_BACKEND_SERVER);
    // Use axios to call the backend API
    axios.get(`${import.meta.env.VITE_BACKEND_SERVER}api/status`)
      .then(response => {
        // Update state with the response message
        setStatusMessage(response.data.message);
      })
      .catch(error => {
        // Handle errors
        console.error('Error fetching data:', error);
      });
  }, []);



  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column'
    }}>
      <h1>Backend Status:</h1>
      <p>{statusMessage}</p>
    </div>
  )
}

export default App

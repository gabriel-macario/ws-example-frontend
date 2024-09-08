import { useState } from 'react';
import useWebSocket, { ReadyState } from 'react-use-websocket';
import './App.css';

const WS_URL = import.meta.env.VITE_WS_URL;

function App() {
  const [username, setUsername] = useState('');
  const { sendJsonMessage, readyState } = useWebSocket(WS_URL, {
    onOpen: () => {
      console.log(`WebSocket connection established.`);;
    },
    share: true,
    filter: () => false,
    retryOnError: true,
    shouldReconnect: () => true
  });

  return (
    <div>HELLO WORLD</div>
  )
}

export default App

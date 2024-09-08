import { useState } from 'react';
import useWebSocket, { ReadyState } from 'react-use-websocket';
import './App.css';

import { InputWithButton } from './components/ChatInput';

const WS_URL = import.meta.env.VITE_WS_URL;

function App() {
  const {} = useWebSocket(WS_URL, {
    onOpen: () => {
      console.log(`WebSocket connection established.`);;
    },
    share: true,
    filter: () => false,
    retryOnError: true,
    shouldReconnect: () => true
  });

  return (
    <div>
      <InputWithButton/>
    </div>
  )
}

export default App

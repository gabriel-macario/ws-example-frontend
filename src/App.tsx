
import { useEffect, useState } from 'react';

import './App.css';

import { socket } from "./socket";
import { InputWithButton } from './components/ChatInput';
import { ChatDisplay } from './components/ChatDisplay';

const WS_URL = import.meta.env.VITE_WS_URL;

function App() {
  const [isConnected, setIsConnected] = useState(socket.connected);

  useEffect(() => {
    function onConnect() {
      setIsConnected(true);
      console.log("CONNECTED");
    }

    function onDisconnect() {
      setIsConnected(false);
      
      console.log("DISCONNECTED");
    }

    socket.on('connect', onConnect);
    socket.on('disconnect', onDisconnect);

    return () => {
      socket.off('connect', onConnect);
      socket.off('disconnect', onDisconnect);
    };
  })

  return (
    <div id="chatroom" className="flex ">
      HELLO SOCKET IO
      {/* <ChatDisplay />
      <InputWithButton/> */}
    </div>
  )
}

export default App

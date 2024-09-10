
import { useEffect, useState } from 'react';

import '@/App.css';

import { socket } from "@/socket";
import { ChatInput } from '@/components/ChatInput';
import { ChatDisplay } from '@/components/ChatDisplay';

function ChatRoom() {
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
    socket.connect();

    return () => {
      socket.off('connect', onConnect);
      socket.off('disconnect', onDisconnect);
      socket.disconnect();
    };
  })

  return (
    <div id="chatroom" className="flex ">
      <ChatDisplay />
      <ChatInput />
    </div>
  )
}

export default ChatRoom

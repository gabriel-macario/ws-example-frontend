import useWebSocket from 'react-use-websocket';
import './App.css';

import { InputWithButton } from './components/ChatInput';
import { ChatDisplay  } from './components/ChatDisplay';

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
    <div id="chatroom" className="flex ">
      <ChatDisplay />
      <InputWithButton/>
    </div>
  )
}

export default App

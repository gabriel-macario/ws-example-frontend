import { useEffect, useState } from "react";
import useWebSocket from "react-use-websocket"

const WS_URL = import.meta.env.VITE_WS_URL;

export function ChatDisplay() {
    const [messageHistory, setMessageHistory] = useState<MessageEvent[]>([]);
    const { lastMessage } = useWebSocket(WS_URL, {
        share: true
    });

    useEffect(() => {
        if (lastMessage !== null) {
            setMessageHistory((prev) => prev.concat(lastMessage))
        }
    }, [lastMessage]);

    return (
        <>
            <h1 className="bg-primary text-primary-foreground text-3xl font-bold">CHAT</h1>
            <div>
                <ul>
                    {messageHistory.map((message, idx) => (
                        <li key={idx} className="text-left">
                            {message ? message.data : null}
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}


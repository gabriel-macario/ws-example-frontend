import { useEffect, useState } from "react";
import { socket } from "@/socket";
import EventTypes from "@/enums/EventTypes";

export function ChatDisplay() {
    const [messageHistory, setMessageHistory] = useState<string[]>([]);

    function onChatMessageEvent(message: string) {
        const newMessageHistory = [...messageHistory, message];
        setMessageHistory(newMessageHistory);
    }

    useEffect(() => {
        socket.on(EventTypes.ChatMessage, onChatMessageEvent)

        return () => {
            socket.off(EventTypes.ChatMessage, onChatMessageEvent);
        }
    }, [messageHistory]);

    return (
        <>
            <h1 className="bg-primary text-primary-foreground text-3xl font-bold">CHAT</h1>
            <div className="grow">
                <ul>
                    {messageHistory.map((message, idx) => (
                        <li key={idx} className="text-left">
                            {message ? message : null}
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}


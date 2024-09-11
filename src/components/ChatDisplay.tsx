import { useEffect, useState } from "react";
import { socket } from "@/socket";
import EventTypes from "@/enums/EventTypes";
import { ChatMessage } from "@/types/ChatMessage";
import { ChatMessageItem } from "@/components/ChatMessageItem";

export function ChatDisplay() {
    const [messageHistory, setMessageHistory] = useState<ChatMessage[]>([]);

    function onChatMessageEvent(message: ChatMessage) {
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
                        <ChatMessageItem chatMessage={message} key={idx} />
                    ))}
                </ul>
            </div>
        </>
    )
}


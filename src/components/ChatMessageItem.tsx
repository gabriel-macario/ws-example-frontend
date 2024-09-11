import { ChatMessage } from "@/types/ChatMessage";
import { FC } from "react";

export interface ChatMessageItemProps {
    chatMessage: ChatMessage,
    idx?: React.Key
}

export const ChatMessageItem: FC<ChatMessageItemProps> = ({ chatMessage, idx }) => {
    const {
        message,
        user: {
            username
        }
    } = chatMessage

    return (
        message ? 
        <li className="text-left">
            <span className="font-bold">{username}: </span>{message}
        </li>
        :
        null
    )
}
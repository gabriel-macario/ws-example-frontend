import { useCallback, useState} from 'react';

import { socket } from "@/socket";
import EventTypes from "@/enums/EventTypes";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function ChatInput() {
    const [message, setMessage] = useState('');

    function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
        setMessage(e.target.value);
    }

    function handleInputKeydown(e: React.KeyboardEvent) {
        if (e.key === "Enter") {
            handleButtonSubmit();
        }
    }

    const handleButtonSubmit = useCallback(() => {
        socket.emit(EventTypes.ChatMessage, message);
        setMessage("");
    }, [message])

    return (
        <div className="flex w-full max-w-sm items-center space-x-2 pt-6">
            <Input
                onChange={handleInputChange}
                onKeyDown={handleInputKeydown}
                placeholder="Chat Message"
                type="text"
                value={message}
            />
            <Button
                type="submit"
                onClick={handleButtonSubmit}>
                Send
            </Button>
        </div>
    )
}
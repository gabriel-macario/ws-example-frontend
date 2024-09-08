import { useCallback, useState} from 'react';

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import useWebSocket from 'react-use-websocket';

const WS_URL = import.meta.env.VITE_WS_URL;

export function InputWithButton() {
    const [message, setMessage] = useState('');
    const { sendMessage } = useWebSocket(WS_URL, {
      share: true,
    });

    function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
        setMessage(e.target.value);
    }

    function handleInputKeydown(e: React.KeyboardEvent) {
        if (e.key === "Enter") {
            handleButtonSubmit();
        }
    }

    const handleButtonSubmit = useCallback(() => {
        sendMessage(message);
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
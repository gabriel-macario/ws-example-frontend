import { useCallback, useContext, useState} from 'react';

import { socket } from "@/socket";
import EventTypes from "@/enums/EventTypes";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { CurrentUserContext } from '@/contexts/CurrentUser';
import { CurrentUserContextType } from '@/types/CurrentUser';

export function UserLogin() {
    const [usernameValue, setUsernameValue] = useState('');
    const { currentUser, setUsername} = useContext(CurrentUserContext) as CurrentUserContextType;

    function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
        setUsernameValue(e.target.value);
    }

    function handleInputKeydown(e: React.KeyboardEvent) {
        if (e.key === "Enter") {
            handleButtonSubmit();
        }
    }

    const handleButtonSubmit = useCallback(() => {
        setUsername(usernameValue);
    }, [usernameValue])

    return (
        <div className="flex w-full max-w-sm items-center space-x-2 pt-6">
            <Input
                onChange={handleInputChange}
                onKeyDown={handleInputKeydown}
                placeholder="Choose Username"
                type="text"
                value={usernameValue}
            />
            <Button
                type="submit"
                onClick={handleButtonSubmit}>
                Login
            </Button>
        </div>
    )
}
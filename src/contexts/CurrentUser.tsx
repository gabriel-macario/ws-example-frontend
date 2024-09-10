import { createContext, ReactNode, useState } from "react";

import { CurrentUserContextType, IUser } from "../types/CurrentUser";

export const CurrentUserContext = createContext<CurrentUserContextType | null>(null);

export type CurrentUserProviderProps = {
    children?: ReactNode
}

const CurrentUserProvider: React.FC<CurrentUserProviderProps> = ({ children }) => {
    const [currentUser, setCurrentUser] = useState<IUser>({
        username: ""
    })

    const setUsername = (username: string) => {
        setCurrentUser({
            ...currentUser,
            username
        })
    }

    return (
        <CurrentUserContext.Provider value={{ currentUser, setUsername }}>
            {children}
        </CurrentUserContext.Provider>
    )
}

export default CurrentUserProvider;
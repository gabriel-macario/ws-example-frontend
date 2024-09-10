export interface IUser {
    username: string
}
export type CurrentUserContextType = {
    currentUser: IUser;
    setUsername: (username: string) => void;
}

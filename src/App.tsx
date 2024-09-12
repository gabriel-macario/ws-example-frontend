import { useContext, useState } from "react";

import ChatRoom from "@/components/ChatRoom"
import { CurrentUserContext } from "./contexts/CurrentUser";
import { CurrentUserContextType } from "./types/CurrentUser";
import { UserLogin } from "@/components/UserLogin";

function App() {
  const { currentUser } = useContext(CurrentUserContext) as CurrentUserContextType

  return (
    <>
      {
        currentUser.username ?
          <ChatRoom /> :
          <UserLogin />}
    </>
  )
}

export default App

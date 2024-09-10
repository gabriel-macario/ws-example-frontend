import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import CurrentUserProvider from '@/contexts/CurrentUser.tsx'
import './index.css'

createRoot(document.getElementById('root') as Element).render(
  <StrictMode>
    <CurrentUserProvider>
      <App />
    </CurrentUserProvider>
  </StrictMode>,
)

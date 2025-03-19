import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ClerkProvider } from '@clerk/clerk-react'
import './index.css'
import App from './App.tsx'
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY
import { BrowserRouter } from 'react-router-dom'
import AuthProvider from './pages/providers/AuthProvider.tsx'
if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
      <AuthProvider>
      <BrowserRouter>
      <App />
      </BrowserRouter> 
      </AuthProvider>
    </ClerkProvider>
  </StrictMode>,
)

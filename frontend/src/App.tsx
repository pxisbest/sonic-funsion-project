import { Route, Routes } from "react-router-dom"
import Homepage from "./pages/home/Homepage"
import AuthCallbackPage from "./pages/home/auth-callback/AuthCallbackPage"
import { axiosInstance } from "./lib/axios"
import { AuthenticateWithRedirectCallback } from "@clerk/clerk-react"
function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Homepage />}/>
      <Route path='/auth-callback' element={<AuthCallbackPage />} />
      <Route
					path='/sso-callback'
					element={<AuthenticateWithRedirectCallback signUpForceRedirectUrl={"/auth-callback"} />}
				/>
    </Routes>
    
  </>
  )
}

export default App

import { Route, Routes } from "react-router-dom"
import Homepage from "./pages/home/Homepage"
import AuthCallbackPage from "./pages/home/auth-callback/AuthCallbackPage"
import { axiosInstance } from "./lib/axios"
import { AuthenticateWithRedirectCallback } from "@clerk/clerk-react"
import CreateMusicPage from "./pages/create-music/CreateMusicPage"
import MainLayout from "./layout/MainLayout"
import ChatPage from "./pages/chat/ChatPage"
import AlbumPage from "./pages/album/AlbumPage"
import NotFoundPage from "./pages/404/NotFoundPage"

import { Toaster } from "react-hot-toast";


function App() {
  return (
    <>
    <Routes>
      <Route path='/auth-callback' element={<AuthCallbackPage />} />
      <Route path='/auth-callback' element={<CreateMusicPage />} />
      <Route
					path='/sso-callback'
					element={<AuthenticateWithRedirectCallback signUpForceRedirectUrl={"/auth-callback"} />}
				/>
        <Route element={<MainLayout />}>
					<Route path='/' element={<Homepage />} />
          <Route path='/chat' element={<ChatPage />} />
					<Route path='/albums/:albumId' element={<AlbumPage />} />
					<Route path='*' element={<NotFoundPage />} />
				</Route>
    </Routes> 
  </>
  )
}

export default App

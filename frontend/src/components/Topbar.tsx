import { SignUp } from '@clerk/clerk-react'
import React from 'react'
import SignInOAuthButtons from "./SignInOAuthButtons";
import { SignedOut, UserButton } from "@clerk/clerk-react";
const Topbar = () => {
  return (
    <div className='flex items-center justify-between p-4 sticky top-0 bg-zinc-900/75 backdrop-blur-md z-10'>
        <div className='flex gap-2 items-center'>
	    <img src='/spotify.png' className='size-8' alt='Spotify logo' />
				SonicFusion
	</div>
    <div className='flex items-center gap-4'>
				<SignedOut>
					<SignInOAuthButtons />
				</SignedOut>

				<UserButton />
			</div>
    </div>
    
  )
}

export default Topbar
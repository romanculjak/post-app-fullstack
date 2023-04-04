import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { useAuth } from '../hooks/useAuth'

type Props = {}

function RootLayout({}: Props) {

    const {user, loading} = useAuth();

    const navigator = useNavigate();

    useEffect(()=>{
        
        // if(loading) return;

        if(!user && !loading){
            navigator("/sign-in")
        }

    },[user, loading])

  return (
    <>
        <header>
            <Navbar/>
        </header>
        <main>
            <Outlet/>
            {/* <LogInPage/> */}
            {/* <PostsPage/> */}
            {/* <CreatePostPage/> */}
        </main>
    </>
  )
}

export default RootLayout
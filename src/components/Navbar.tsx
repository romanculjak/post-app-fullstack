import React, { useState } from 'react'

import {FiType} from 'react-icons/fi'
import {BsCaretDownFill} from 'react-icons/bs'
import {RiHome5Fill} from 'react-icons/ri'

import userPlaceholder from './../assets/userImg.png'
import Button from './Button'
import Container from './Container'
import { useAuth } from '../hooks/useAuth'
import ProfileDropdown from './ProfileDropdown'
import { Link } from 'react-router-dom'

type Props = {}

function Navbar({}: Props) {

    const {user, GoogleLogin} = useAuth();

    const [dropdownOpen, setDropdownOpen] = useState(false);


  return (
    
    <nav className='fixed w-full border-b border-gray-200 bg-white'>
        <Container className=''>
            <div className='flex justify-between'>
                <div className='relative flex gap-4 items-center'>
                    {user && <Button onClick={()=>setDropdownOpen(!dropdownOpen)} variant={'dropdown'} size={'medium'}>
                        <BsCaretDownFill/>
                    </Button>}
                        
                    <img src={user?.photoURL ?  user.photoURL : userPlaceholder} className='w-[3.2rem] h-auto md:w-[4.8rem] rounded-full'/>

                    {user ? <span className='hidden md:block'>{user.displayName}</span> : <span>please sign-in</span>}
            
                    <ProfileDropdown open={dropdownOpen}/>

                </div>
                <div className='flex items-center gap-[2rem]'>
                    {user ? 
                    <>
                        <Link to={'/'}>
                            <Button onClick={()=>console.log("I have been clicked!")} variant={'secondary'} size={'medium'}>
                                Home
                                <RiHome5Fill/> 
                            </Button>
                        </Link>
                        
                        <Link to={'/create-post'}>
                            <Button onClick={()=>console.log("I have been clicked!")} variant={'secondary'} size={'medium'}>
                                Write
                                <FiType/>
                            </Button>
                        </Link>
                    </>:
                    <Button onClick={()=>GoogleLogin()} variant={'primary'} size={'medium'}>Sign In</Button> 
                    }

                </div>
            </div>
        </Container>
    </nav>
  )
}

export default Navbar
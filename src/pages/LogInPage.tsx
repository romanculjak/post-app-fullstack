import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../components/Button'
import Container from '../components/Container'
import { useAuth } from '../hooks/useAuth'


type Props = {}

function LogInPage({}: Props) {


  const {user, loading, GoogleLogin} = useAuth();

  const navigator = useNavigate();


  useEffect(()=>{
        
    // if(loading) return;

    if(user && !loading){
        navigator("/")
    }

},[user, loading])

  return (
    <div className='pt-[8rem] h-screen min-h-screen'>
        <Container className='h-full flex flex-col items-center justify-center gap-[2rem]'>
            <span className='text-2xl md:text-6xl font-semibold'>Please Sign In to Continue</span>
            <Button onClick={()=>GoogleLogin()} variant={'primary'} size={'medium'}>Sign In</Button>
        </Container>
    </div>
  )
}

export default LogInPage
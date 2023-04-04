import React from 'react'
import { Link } from 'react-router-dom'
import Container from '../components/Container'

type Props = {}

function NotFound({}: Props) {
  return (
    <div className='pt-[8rem] h-screen min-h-screen'>
        <Container className='h-full flex flex-col items-center justify-center gap-[2rem]'>
            <h1>Page Not Found</h1>
            <span>Go back to <Link to={'/'}>Home.</Link></span>
        </Container>
    </div>
  )
}

export default NotFound
import classNames from 'classnames'
import React from 'react'
import {TiUser} from 'react-icons/ti'
import {TbSettingsFilled} from 'react-icons/tb'
import { useAuth } from '../hooks/useAuth'

type Props = {
    open: boolean,
}

function ProfileDropdown({open}: Props) {

    const {user, Logout} = useAuth();

  return (
    <div className={classNames('absolute top-[calc(100%+1.65rem)] left-[-1.6rem] bg-white rounded-b-3xl text-md md:text-xl w-screen md:w-auto md:min-w-[30rem] text-my-gray-200 shadow-3xl',
                                (!open || !user) && 'hidden')}>
        <div className='flex flex-col gap-[2rem] py-[1.2rem]'>
            <button className='flex gap-[1rem] items-center justify-start bg-my px-[2rem] md:px-[4rem] hover:text-gray-800'>
                <TiUser size={26}/>
                <div className=''>Profile</div>
            </button>
            <button className='flex gap-[1rem] items-center justify-start bg-my px-[2rem] md:px-[4rem] hover:text-gray-800'>
                <TbSettingsFilled size={26}/>
                <div className=''>Settings</div>
            </button>
            <button className='flex flex-col gap-[.4rem] mt-[1rem] items-start justify-start text-my-gray-400 bg-my px-[2rem] md:px-[4rem] hover:text-gray-800 border-t py-[1rem]' onClick={Logout}>
                <span>Sign-out</span>
                <span className=''>{user?.email}</span>
            </button>

        </div>
    </div>
  )
}

export default ProfileDropdown
import React from 'react'
import {RiPencilFill} from 'react-icons/ri'
import {BsFillTrashFill} from 'react-icons/bs'
import { useAuth } from '../hooks/useAuth'
import { Link } from 'react-router-dom'
import { useData } from '../hooks/useData'

type Props = {
    author: string,
    title: string,
    date: string,
    post: Post,
}

function PostListItem({author,title,date, post}: Props) {

  const {user} = useAuth();

  const {deletePost} = useData();

  const handleDeleteButton = () => {
    
    if (post.id)
      deletePost(post.id).then(()=>window.location.reload());
  }

  return (
    <div className='flex flex-col gap-[2.8rem] md:flex-row w-full justify-between border rounded-xl p-[2rem]'>
        <div className='flex flex-col gap-[1.6rem]'>
            <span className='text-sm md:text-md text-my-gray-200'>Posted by: {author}</span>
            <h2 className='text-md md:text-xl'>{title}</h2>
            <span className='text-sm md:text-md text-my-gray-200'>{date}</span>
        </div>
        { 
          user?.uid === post.ownerId &&
          
        <div className='flex items-center gap-[2rem] text-xl md:text-2xl'>
            <Link to={'/create-post'} state={post}>
              <button><RiPencilFill/></button>
            </Link>
            <button onClick={handleDeleteButton}><BsFillTrashFill/></button>

        </div>}
    </div>
  )
}

export default PostListItem
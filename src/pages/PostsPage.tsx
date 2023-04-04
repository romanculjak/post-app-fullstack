import React, { useEffect, useState } from 'react'
import Container from '../components/Container'
import PostListItem from '../components/PostListItem'
import { useData } from '../hooks/useData'

type Props = {}

function PostsPage({}: Props) {

    const [allPosts, setAllPosts] = useState<Post[]>([])

    const {getAllPosts} = useData();

    useEffect(()=>{
        
        getAllPosts().then((res) => {console.log(res); setAllPosts(res)})



    },[])




  return (
    <div className='pt-[8rem] md:pt-[16rem] min-h-screen'>
        <Container className=''>
            <div>
                <h1 className='text-xl md:text-2xl font-semibold'>
                    Posts
                </h1>
            </div>
            <div className='mt-[1.6rem] flex flex-col gap-[1.6rem]'>

                {
                    (allPosts && allPosts.length > 0) &&
                    allPosts.map((item,i) => <PostListItem key={i} title={item.title} author={item.ownerName!} date={item.createdAt!} post={item}/>)
                }

                

            </div>
        </Container>
    </div>    
  )
}

export default PostsPage
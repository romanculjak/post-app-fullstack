import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import Button from '../components/Button'
import Container from '../components/Container'
import { useData } from '../hooks/useData';

type Props = {}

function CreatePostPage({}: Props) {

    const [title, setTitle] = useState<string>("");
    const [content, setContent] = useState<string>("");

    const [postAdded, setPostAdded] = useState<string>("");

    const {createPost, updatePost} = useData();


    const location = useLocation();
    const postData = location.state as Post;

    useEffect(()=>{

        if(postData){

            setTitle(postData.title);
            setContent(postData.content);

        }

    },[])




    const titleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();

        setTitle(e.target.value);

    }

    const contentChange = (e : React.ChangeEvent<HTMLTextAreaElement>) => {
        e.preventDefault();

        setContent(e.target.value);
    }

    const titleMessage = title.length < 3 ? "* title needs to be at least 3 character long." : ""


    const publishPost = () => {

        if(title.length < 3) return;

        
        
        if(postData) {
            
            const updatedPost = {...postData, title:title, content:content};
            
            updatePost(updatedPost).then((res)=>setPostAdded("updated"))
            
            return;
        }

        const post: Post = {
            title: title,
            content: content,
        }

        createPost(post).then(()=>{console.log("Post added!"); setPostAdded("added")});
        
    }


  return (
    <div className='pt-[8rem] md:pt-[16rem] min-h-screen'>
        <Container>
            {postAdded.length <= 0 ? <div className=''>
                <h1 className='text-xl md:text-2xl font-semibold'>Create Post</h1>
                <div className='mt-[2rem] border p-[2rem] rounded-lg flex flex-col gap-[4rem]'>
                    <div className='flex flex-col gap-[1rem] text-md md:text-xl'>
                        <label>Title</label>
                        <input type={'text'} value={title} onChange={(e)=>titleChange(e)} required minLength={3} maxLength={100} className='bg-my-gray-100 p-[1rem] rounded-lg'>

                        </input>
                        <span className='text-my-gray-200'>{title.length + "/" + 100}</span>
                        {titleMessage.length>0 ? <span className='text-red-400 text:md md:text-xl'>{titleMessage}</span> : <></>}
                    </div>

                    <div className='flex flex-col gap-[1rem] text-md md:text-xl'>
                        <label>Content</label>
                        <textarea value={content} onChange={(e)=>contentChange(e)} maxLength={300} required rows={6} className='bg-my-gray-100 p-[1rem] rounded-lg'>

                        </textarea>
                        <span className='text-my-gray-200'>{content.length + "/" + 300}</span>
                    </div>

                    <Button variant={'primary'} size={'medium'} align={'start'} onClick={()=>publishPost()}>Publish It</Button>
                </div>
            </div> : 
            <div>
                <span>Post {postAdded} Succesfully. Go to <Link to='/' className='text-blue underline'>Home</Link></span>
            </div>}
        </Container>
    </div>
  )
}

export default CreatePostPage
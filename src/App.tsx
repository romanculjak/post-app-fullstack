
import { createRoutesFromElements, Route, Routes } from 'react-router'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import RootLayout from './layouts/RootLayout'
import CreatePostPage from './pages/CreatePostPage'
import LogInPage from './pages/LogInPage'
import NotFound from './pages/NotFound'
import PostsPage from './pages/PostsPage'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout/>}>
        <Route index element={<PostsPage/>}/>
        <Route path='sign-in' element={<LogInPage/>}/>
        <Route path='create-post' element={<CreatePostPage/>}/>

        <Route path='*' element={<NotFound/>}/>
    </Route>
  )
)

function App() {

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App

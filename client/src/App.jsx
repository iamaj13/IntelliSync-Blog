import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Blog from './pages/Blog'
import Addblog from './pages/admin/Addblog'
import ListBlog from './pages/admin/ListBlog'
import Comments from './pages/admin/Comments'
import Layout from './pages/admin/Layout'
import Dashboard from './pages/admin/Dashboard'   
import Login from './components/admin/Login'
import 'quill/dist/quill.snow.css'

const App = () => {
  return (
    <div>
      <Routes>
        {/* Public Routes */}
        <Route path='/' element={<Home />} />
        <Route path='/blog/:id' element={<Blog />} />

        {/* Admin Routes */}
        <Route path='/admin' element={true ? <Layout/> : <Login/>}>
          <Route index element={<Dashboard />} />   {/* ✅ Capitalized */}
          <Route path='Addblog' element={<Addblog />} />
          <Route path='ListBlog' element={<ListBlog />} />
          <Route path='Comments' element={<Comments />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App

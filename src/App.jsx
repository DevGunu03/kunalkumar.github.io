import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Research from './pages/Research'
import Blog from './pages/Blog'
import Post from './pages/Post'
import CV from './pages/CV'
import Contact from './pages/Contact'

export default function App(){
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/research" element={<Research/>} />
          <Route path="/blog" element={<Blog/>} />
          <Route path="/blog/:slug" element={<Post/>} />
          <Route path="/cv" element={<CV/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Navbar(){
  const loc = useLocation()
  return (
    <nav className="bg-white shadow">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold">KK</div>
          <div>
            <Link to="/" className="text-lg font-semibold">Kunal Kumar</Link>
            <div className="text-sm text-gray-500">Materials Research for Computing Advancements</div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Link to="/" className={loc.pathname==='/'? 'text-primary font-medium' : 'text-gray-600'}>Home</Link>
          <Link to="/research" className={loc.pathname==='/research'? 'text-primary font-medium' : 'text-gray-600'}>Research</Link>
          <Link to="/blog" className={loc.pathname.startsWith('/blog')? 'text-primary font-medium' : 'text-gray-600'}>Blog</Link>
          <Link to="/cv" className={loc.pathname==='/cv'? 'text-primary font-medium' : 'text-gray-600'}>CV</Link>
          <Link to="/contact" className={loc.pathname==='/contact'? 'text-primary font-medium' : 'text-gray-600'}>Contact</Link>
        </div>
      </div>
    </nav>
  )
}

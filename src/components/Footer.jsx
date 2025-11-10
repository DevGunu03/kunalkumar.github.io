import React from 'react'

export default function Footer(){
  return (
    <footer className="bg-white border-t mt-12">
      <div className="container mx-auto px-4 py-6 text-sm text-gray-600 text-center">
        © {new Date().getFullYear()} Kunal Kumar • Built with React + Tailwind
      </div>
    </footer>
  )
}

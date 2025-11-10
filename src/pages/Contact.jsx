import React from 'react'

export default function Contact(){
  return (
    <section>
      <h2 className="text-2xl font-semibold">Contact</h2>
      <div className="mt-4 text-gray-700">
        <p>Email: <a href="mailto:kunal.kumar@ip-paris.fr" className="text-primary">kunal.kumar@ip-paris.fr</a></p>
        <p className="mt-2">Links: <a href="https://github.com/DevGunu03" className="text-primary">GitHub</a> • <a href="#" className="text-primary">LinkedIn</a></p>
      </div>
    </section>
  )
}

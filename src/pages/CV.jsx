import React from 'react'

export default function CV(){
  return (
    <section>
      <h2 className="text-2xl font-semibold">CV</h2>
      <div className="mt-6 bg-white rounded shadow p-4">
        <a href="/kunal_kumar_cv.pdf" download className="px-4 py-2 bg-primary text-white rounded">Download CV</a>
        <div className="mt-6">
          <iframe src="/kunal_kumar_cv.pdf" className="w-full h-[600px]" title="CV"></iframe>
        </div>
      </div>
    </section>
  )
}

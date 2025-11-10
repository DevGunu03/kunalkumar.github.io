import React from 'react'

export default function Home(){
  return (
    <section className="grid md:grid-cols-3 gap-8 items-center">
      <div className="md:col-span-2">
        <h1 className="text-4xl font-bold">Kunal Kumar</h1>
        <p className="text-gray-600 mt-2">Materials Research for Computing Advancements — optical simulations, thin-film characterization, and computational optics.</p>

        <div className="mt-6 flex gap-3">
          <a href="/cv" className="px-4 py-2 bg-primary text-white rounded-lg">Download CV</a>
          <a href="/contact" className="px-4 py-2 border rounded-lg">Contact</a>
        </div>

        <div className="mt-8">
          <h3 className="text-lg font-semibold">Selected projects</h3>
          <ul className="mt-3 list-disc ml-5 text-gray-700">
            <li>FDTD reflectance simulations of PS bead HCP monolayers on SiO2/Si substrates</li>
            <li>MATLAB pipeline for ΔE*ab-based thickness reconstruction</li>
            <li>Polarization-resolved transfer matrix method (TMM) simulations</li>
          </ul>
        </div>
      </div>
      <aside className="flex flex-col items-center">
        <img src="/profile.jpg" alt="profile" className="w-48 h-48 rounded-full object-cover shadow" />
        <div className="mt-4 text-center text-sm text-gray-600">Kunal Kumar<br/>Materials Science • Optical Simulations</div>
      </aside>
    </section>
  )
}

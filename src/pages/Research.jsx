import React from 'react'
import ProjectCard from '../components/ProjectCard'

export default function Research(){
  const projects = [
    {
      title: 'FDTD reflectance modeling',
      summary: 'Ansys Lumerical FDTD simulations of PS bead HCP arrangements on SiO2/Si to compute reflectance spectra and mode analysis.',
      tags: ['FDTD','Optics','Lumerical']
    },
    {
      title: 'ΔE*ab thickness prediction',
      summary: 'MATLAB pipeline mapping ΔE*ab color differences to thickness lookup table and segmentation for profile extraction.',
      tags: ['MATLAB','Image Analysis']
    },
    {
      title: 'Polarization-resolved TMM',
      summary: 'Transfer Matrix Method code for s/p polarization to model multilayer stacks and angle-dependent reflectance.',
      tags: ['TMM','Polarization']
    }
  ]
  return (
    <section>
      <h2 className="text-2xl font-semibold">Research & Projects</h2>
      <div className="mt-6 grid md:grid-cols-3 gap-4">
        {projects.map(p=> <ProjectCard key={p.title} {...p} />)}
      </div>
    </section>
  )
}

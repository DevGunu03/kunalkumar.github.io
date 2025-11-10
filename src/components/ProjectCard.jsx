import React from 'react'

export default function ProjectCard({title,summary,tags,link}){
  return (
    <article className="bg-white rounded-2xl shadow p-4 hover:shadow-lg transition">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-sm mt-2 text-gray-600">{summary}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {tags?.map(t=> <span key={t} className="text-xs px-2 py-1 bg-gray-100 rounded">{t}</span>)}
      </div>
      {link && <a href={link} className="inline-block mt-4 text-primary font-medium">Read more →</a>}
    </article>
  )
}

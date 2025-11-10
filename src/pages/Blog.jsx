import React from 'react'
import { Link } from 'react-router-dom'
import matter from 'gray-matter'

const posts = import.meta.glob('../posts/*.md', { as: 'raw' })

export default function Blog(){
  const [list, setList] = React.useState([])

  React.useEffect(()=>{
    async function load(){
      const entries = []
      for (const path in posts){
        const raw = await posts[path]()
        const fm = matter(raw)
        const slug = path.split('/').pop().replace('.md','')
        entries.push({ slug, ...fm.data })
      }
      entries.sort((a,b)=> new Date(b.date) - new Date(a.date))
      setList(entries)
    }
    load()
  },[])

  return (
    <section>
      <h2 className="text-2xl font-semibold">Blog</h2>
      <div className="mt-6 space-y-4">
        {list.map(p=> (
          <article key={p.slug} className="bg-white p-4 rounded shadow">
            <h3 className="text-lg font-semibold"><Link to={`/blog/${p.slug}`}>{p.title}</Link></h3>
            <div className="text-sm text-gray-500">{p.date}</div>
            <p className="mt-2 text-gray-700">{p.summary}</p>
            <Link to={`/blog/${p.slug}`} className="text-primary mt-2 inline-block">Read →</Link>
          </article>
        ))}
      </div>
    </section>
  )
}

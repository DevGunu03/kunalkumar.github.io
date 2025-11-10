import React from 'react'
import { useParams } from 'react-router-dom'
import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

const posts = import.meta.glob('../posts/*.md', { as: 'raw' })

export default function Post(){
  const { slug } = useParams()
  const [content, setContent] = React.useState(null)

  React.useEffect(()=>{
    async function load(){
      const path = `../posts/${slug}.md`
      if (!posts[path]){
        setContent('# Not found')
        return
      }
      const raw = await posts[path]()
      const fm = matter(raw)
      setContent(fm.content)
      document.title = `${fm.data.title} — Kunal Kumar`
    }
    load()
  },[slug])

  if (!content) return <div>Loading...</div>

  return (
    <article className="prose lg:prose-xl">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
    </article>
  )
}

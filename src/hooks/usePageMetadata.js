import { useEffect } from 'react'

export default function usePageMetadata(title, description) {
  useEffect(() => {
    if (!title || !description) return
    const previousTitle = document.title
    const meta = document.querySelector('meta[name="description"]')
    const previousDescription = meta?.getAttribute('content')
    document.title = title
    meta?.setAttribute('content', description)
    return () => {
      document.title = previousTitle
      if (previousDescription !== null && previousDescription !== undefined) {
        meta?.setAttribute('content', previousDescription)
      }
    }
  }, [title, description])
}

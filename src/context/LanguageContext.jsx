import { createContext, useContext, useEffect, useState } from 'react'

const LanguageContext = createContext()

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(() => {
    try {
      const saved = localStorage.getItem('hs_lang')
      if (saved === 'es' || saved === 'en') return saved
      // Detect browser language
      const navLang = navigator.language || navigator.userLanguage || ''
      return navLang.toLowerCase().startsWith('en') ? 'en' : 'es'
    } catch {
      return 'es'
    }
  })

  const setLang = (newLang) => {
    const valid = newLang === 'en' ? 'en' : 'es'
    setLangState(valid)
    try {
      localStorage.setItem('hs_lang', valid)
      document.documentElement.lang = valid
    } catch {
      // ignore localstorage errors
    }
  }

  const toggleLang = () => {
    setLang(lang === 'es' ? 'en' : 'es')
  }

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, isEn: lang === 'en' }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

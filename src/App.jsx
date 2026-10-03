import { HashRouter, Routes, Route, Navigate } from 'react-router-dom'
import { LanguageProvider } from './context/LanguageContext'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import ContextMenu from './components/ContextMenu'
import Home from './pages/Home'
import Services from './pages/Services'
import Blog from './pages/Blog'
import BlogArticle from './pages/BlogArticle'
import Industries from './pages/Industries'
import Process from './pages/Process'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

export function SiteRoutes() {
  // Keep one JS bundle for the existing self-contained HTML export.
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/servicios" element={<Services />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:slug" element={<BlogArticle />} />
      <Route path="/soluciones" element={<Navigate to="/blog" replace />} />
      <Route path="/industrias" element={<Industries />} />
      <Route path="/proceso" element={<Process />} />
      <Route path="/contacto" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default function App() {
  return (
    <LanguageProvider>
      <HashRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <ScrollToTop />
        <ContextMenu />
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1">
            <SiteRoutes />
          </main>
          <Footer />
        </div>
      </HashRouter>
    </LanguageProvider>
  )
}

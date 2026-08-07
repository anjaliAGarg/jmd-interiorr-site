import { AnimatePresence, motion } from 'framer-motion'
import { Route, Routes, useLocation } from 'react-router-dom'
import { useCallback, useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import WhatsappButton from './components/WhatsappButton'
import Footer from './components/Footer'
import BookConsultationModal from './components/BookConsultationModal'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Services from './components/Services'

const pageTransition = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
}

function App() {
  const location = useLocation()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [hasAutoOpened, setHasAutoOpened] = useState(false)

  const handleOpenConsultation = useCallback(() => setIsModalOpen(true), [])
  const handleCloseConsultation = useCallback(() => setIsModalOpen(false), [])

  useEffect(() => {
    if (location.pathname === '/' && !hasAutoOpened) {
      setIsModalOpen(true)
      setHasAutoOpened(true)
    }
  }, [location.pathname, hasAutoOpened])

  return (
    <div className="min-h-screen bg-bg">
      <Navbar onOpenConsultation={handleOpenConsultation} />
      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={pageTransition}
          transition={{ duration: 0.45, ease: 'easeOut' }}
          className="overflow-x-hidden"
        >
          <Routes location={location}>
            <Route path="/" element={<Home onOpenConsultation={handleOpenConsultation} />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Services />} />
          </Routes>
        </motion.main>
      </AnimatePresence>
      <Footer />
      <WhatsappButton />
      <BookConsultationModal isOpen={isModalOpen} onClose={handleCloseConsultation} />
    </div>
  )
}

export default App

import { motion } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'

const WhatsappUrl = 'https://wa.me/919999999999'

function WhatsappButton() {
  return (
    <motion.a
      href={WhatsappUrl}
      target="_blank"
      rel="noreferrer"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
      className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-3 rounded-full bg-primary px-5 py-4 text-sm font-medium text-white shadow-soft shadow-primary/20 transition hover:bg-[#24463D]"
    >
      <FaWhatsapp className="h-4 w-4" />
      Chat on WhatsApp
    </motion.a>
  )
}

export default WhatsappButton

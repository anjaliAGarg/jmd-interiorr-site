import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { FaTimes } from 'react-icons/fa'
import labels from '../labels.json'

const whatsappBase = labels.contact.whatsappUrl

function BookConsultationModal({ isOpen, onClose }) {
  const [form, setForm] = useState({ name: '', phone: '', apartment: '', message: '' })

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const whatsappUrl = () => {
    const text = `Hello JMD Interiors\n\nName: ${form.name}\nPhone: ${form.phone}\nApartment: ${form.apartment}\n\nMessage: ${form.message}`
    return `${whatsappBase}?text=${encodeURIComponent(text)}`
  }

  return (
    <AnimatePresence>
      {isOpen ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4 py-8 sm:px-6"
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="w-full max-w-2xl rounded-[2rem] border border-border bg-white p-8 shadow-soft"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-primary">{labels.modal.eyebrow}</p>
                <h2 className="mt-3 text-3xl font-semibold text-text sm:text-4xl">
                  {labels.modal.heading}
                </h2>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border text-muted transition hover:bg-sand/60"
                aria-label="Close consultation form"
              >
                <FaTimes />
              </button>
            </div>
            <form className="mt-8 space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="space-y-2 text-sm font-medium text-text">
                  {labels.modal.fields.name}
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    className="w-full rounded-3xl border border-border bg-bg px-4 py-3 text-sm text-text outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                  />
                </label>
                <label className="space-y-2 text-sm font-medium text-text">
                  {labels.modal.fields.phone}
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    className="w-full rounded-3xl border border-border bg-bg px-4 py-3 text-sm text-text outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                  />
                </label>
              </div>
              <label className="space-y-2 text-sm font-medium text-text">
                {labels.modal.fields.apartment}
                <input
                  type="text"
                  name="apartment"
                  value={form.apartment}
                  onChange={handleChange}
                  className="w-full rounded-3xl border border-border bg-bg px-4 py-3 text-sm text-text outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </label>
              <label className="space-y-2 text-sm font-medium text-text">
                {labels.modal.fields.message}
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full rounded-3xl border border-border bg-bg px-4 py-3 text-sm text-text outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </label>
              <div className="flex flex-col gap-4 sm:flex-row sm:justify-end">
                <button
                  type="button"
                  onClick={onClose}
                  className="inline-flex items-center justify-center rounded-full border border-border bg-white px-6 py-3 text-sm font-semibold text-text transition hover:bg-sand/60"
                >
                  {labels.modal.cancel}
                </button>
                <a
                  href={whatsappUrl()}
                  target="_blank"
                  rel="noreferrer"
                  onClick={onClose}
                  className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#24463D]"
                >
                  {labels.modal.submit}
                </a>
              </div>
            </form>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}

export default BookConsultationModal

import { useState } from 'react'
import labels from '../labels.json'

function Contact() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    apartment: '',
    propertyType: '',
    bhk: '',
    budget: '',
    message: ''
  })
  const [errors, setErrors] = useState({})

  const whatsappUrl = () => {
    const text = `Hello JMD Interiors\n\nName: ${form.name}\nPhone: ${form.phone}\nApartment Location: ${form.apartment}\nProperty Type: ${form.propertyType}\nBHK: ${form.bhk}\nBudget: ${form.budget}\n\nMessage: ${form.message}`
    return `https://wa.me/919821859634?text=${encodeURIComponent(text)}`
  }

  const validateForm = () => {
    const newErrors = {}

    if (!form.phone.trim()) newErrors.phone = 'Phone is required.'
    if (!form.bhk.trim()) newErrors.bhk = 'Please select 2BHK or 3BHK.'
    if (!form.message.trim()) newErrors.message = 'Message is required.'

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = () => {
    if (!validateForm()) return
    window.open(whatsappUrl(), '_blank')
  }

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const inputClassName = (field) =>
    `w-full rounded-3xl border ${errors[field] ? 'border-red-400' : 'border-border'} bg-bg px-4 py-3 text-sm text-text outline-none transition focus:border-primary focus:ring-2 ${errors[field] ? 'focus:ring-red-200' : 'focus:ring-primary/20'}`

  return (
    <section className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
      <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        <div className="space-y-8 rounded-[2rem] border border-border bg-white p-10 shadow-soft">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-primary">{labels.contactPage.eyebrow}</p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-text sm:text-5xl">
              {labels.contactPage.heading}
            </h1>
          </div>
          <div className="space-y-4 text-sm leading-7 text-muted">
            <p>
              Email: <a href={`mailto:${labels.contact.email}`} className="text-text underline">{labels.contact.email}</a>
            </p>
            <p>
              WhatsApp: <a href={labels.contact.whatsappUrl} target="_blank" rel="noreferrer" className="text-text underline">{labels.contact.phone}</a>
            </p>
            <p>{labels.contactPage.description}</p>
          </div>
        </div>

        <form className="space-y-6 rounded-[2rem] border border-border bg-white p-10 shadow-soft">
          <div className="grid gap-6 sm:grid-cols-2">
            <label className="space-y-2 text-sm font-medium text-text">
              {labels.contactPage.form.name}
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                className={inputClassName('name')}
              />
            </label>
            <label className="space-y-2 text-sm font-medium text-text">
              {labels.contactPage.form.phone}
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                required
                className={inputClassName('phone')}
              />
              {errors.phone && <p className="text-sm text-red-600">{errors.phone}</p>}
            </label>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            <label className="space-y-2 text-sm font-medium text-text">
              {labels.contactPage.form.apartment}
              <input
                type="text"
                name="apartment"
                value={form.apartment}
                onChange={handleChange}
                className={inputClassName('apartment')}
              />
            </label>
            <label className="space-y-2 text-sm font-medium text-text">
              {labels.contactPage.form.propertyType}
              <input
                type="text"
                name="propertyType"
                value={form.propertyType}
                onChange={handleChange}
                className={inputClassName('propertyType')}
              />
            </label>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            <label className="space-y-2 text-sm font-medium text-text">
              {labels.contactPage.form.bhk}
              <select
                name="bhk"
                value={form.bhk}
                onChange={handleChange}
                required
                className={inputClassName('bhk')}
              >
                <option value="">Select BHK</option>
                <option value="2BHK">2BHK</option>
                <option value="3BHK">3BHK</option>
              </select>
              {errors.bhk && <p className="text-sm text-red-600">{errors.bhk}</p>}
            </label>
            <label className="space-y-2 text-sm font-medium text-text">
              {labels.contactPage.form.budget}
              <input
                type="text"
                name="budget"
                value={form.budget}
                onChange={handleChange}
                className={inputClassName('budget')}
              />
            </label>
          </div>
          <label className="space-y-2 text-sm font-medium text-text">
            {labels.contactPage.form.message}
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows="5"
              required
              className={inputClassName('message')}
            />
            {errors.message && <p className="text-sm text-red-600">{errors.message}</p>}
          </label>
          <button
            type="button"
            onClick={handleSubmit}
            className="inline-flex w-full items-center justify-center rounded-full bg-primary px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#24463D]"
          >
            {labels.contactPage.form.submit}
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact

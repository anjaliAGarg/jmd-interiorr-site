import { useState } from 'react'
import labels from '../labels.json'

function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', apartment: '', message: '' })

  const whatsappUrl = () => {
    const text = `Hello JMD Interiors\n\nName: ${form.name}\nPhone: ${form.phone}\nApartment: ${form.apartment}\n\nMessage: ${form.message}`
    return `https://wa.me/919999999999?text=${encodeURIComponent(text)}`
  }

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

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
                className="w-full rounded-3xl border border-border bg-bg px-4 py-3 text-sm text-text outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
            </label>
            <label className="space-y-2 text-sm font-medium text-text">
              {labels.contactPage.form.phone}
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
            {labels.contactPage.form.apartment}
            <input
              type="text"
              name="apartment"
              value={form.apartment}
              onChange={handleChange}
              className="w-full rounded-3xl border border-border bg-bg px-4 py-3 text-sm text-text outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
            />
          </label>
          <label className="space-y-2 text-sm font-medium text-text">
            {labels.contactPage.form.message}
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows="5"
              className="w-full rounded-3xl border border-border bg-bg px-4 py-3 text-sm text-text outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
            />
          </label>
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noreferrer"
            className="inline-flex w-full items-center justify-center rounded-full bg-primary px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#24463D]"
          >
            {labels.contactPage.form.submit}
          </a>
        </form>
      </div>
    </section>
  )
}

export default Contact

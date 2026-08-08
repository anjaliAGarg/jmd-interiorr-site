import { useState } from 'react'
import labels from '../labels.json'

const whatsappNumber = '+919821859634'

function Contact() {
  const needOptions = [
    'Complete Home Interiors',
    'Modular Kitchen',
    'Wardrobes',
    'Living Room',
    'Bedroom',
    'Renovation / Other'
  ]

  const [form, setForm] = useState({
    name: '',
    phone: '',
    apartment: '',
    propertyType: '',
    propertySize: '',
    needs: [],
    budget: '',
    timeline: '',
    requirements: ''
  })
  const [errors, setErrors] = useState({})

  const whatsappUrl = () => {
    const needsText = form.needs.join(', ') || 'Not specified'
    const text = [
      'Hello JMD Interiors',
      '',
      `Name: ${form.name}`,
      `WhatsApp Number: ${form.phone}`,
      `Apartment Location: ${form.apartment}`,
      `Property Type: ${form.propertyType}`,
      `Property Size: ${form.propertySize}`,
      `What do you need?: ${needsText}`,
      `Approximate Interior Budget: ${form.budget || 'Not specified'}`,
      `When are you planning to start?: ${form.timeline || 'Not specified'}`,
      `Tell us about your requirements: ${form.requirements || 'Not specified'}`
    ].join('\n')

    return `https://wa.me/${whatsappNumber.replace('+', '')}?text=${encodeURIComponent(text)}`
  }

  const validateForm = () => {
    const newErrors = {}

    if (!form.name.trim()) newErrors.name = 'Name is required.'
    if (!form.phone.trim()) newErrors.phone = 'WhatsApp number is required.'
    else if (!/^(?:(?:\+|0{0,2})91[\s-]?)?(?:[6789]\d{9})$/.test(form.phone.trim())) newErrors.phone = 'Please enter a valid Indian mobile number.'
    if (!form.apartment.trim()) newErrors.apartment = 'Apartment location is required.'
    if (!form.propertyType.trim()) newErrors.propertyType = 'Please select a property type.'
    if (!form.propertySize.trim()) newErrors.propertySize = 'Please select a property size.'
    if (!form.needs.length) newErrors.needs = 'Please select at least one requirement.'
    if (!form.timeline.trim()) newErrors.timeline = 'Please select a timeline.'

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

  const handleMultiSelectChange = (value) => {
    setForm((prev) => ({
      ...prev,
      needs: prev.needs.includes(value)
        ? prev.needs.filter((item) => item !== value)
        : [...prev.needs, value]
    }))

    if (errors.needs) {
      setErrors((prev) => ({ ...prev, needs: undefined }))
    }
  }

  const inputClassName = (field) =>
    `w-full rounded-3xl border ${errors[field] ? 'border-red-400' : 'border-border'} bg-bg px-4 py-3 text-sm text-text outline-none transition focus:border-primary focus:ring-2 ${errors[field] ? 'focus:ring-red-200' : 'focus:ring-primary/20'}`

  return (
    <section className="container mx-auto px-4 py-20 sm:px-6 lg:px-8">
      <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        <div className="space-y-8 rounded-[2rem] border border-border bg-white p-10 shadow-soft">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-primary">{labels.contactPage.eyebrow}</p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-text sm:text-5xl">
              Tell us about your home
            </h1>
            <p className="mt-4 text-sm leading-7 text-muted">
              Share a few details about your apartment, requirements and timeline. We&apos;ll get in touch to understand your needs and plan the next step.
            </p>
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
              Your Name
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className={inputClassName('name')}
              />
              {errors.name && <p className="text-sm text-red-600">{errors.name}</p>}
            </label>
            <label className="space-y-2 text-sm font-medium text-text">
              WhatsApp Number
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
              Apartment Location
              <input
                type="text"
                name="apartment"
                value={form.apartment}
                onChange={handleChange}
                placeholder="e.g. Sector 57, Gurgaon"
                required
                className={inputClassName('apartment')}
              />
              {errors.apartment && <p className="text-sm text-red-600">{errors.apartment}</p>}
            </label>
            <label className="space-y-2 text-sm font-medium text-text">
              Property Type
              <select
                name="propertyType"
                value={form.propertyType}
                onChange={handleChange}
                required
                className={inputClassName('propertyType')}
              >
                <option value="">Select property type</option>
                <option value="Apartment">Apartment</option>
                <option value="Builder Floor">Builder Floor</option>
                <option value="Independent House">Independent House</option>
                <option value="Other">Other</option>
              </select>
              {errors.propertyType && <p className="text-sm text-red-600">{errors.propertyType}</p>}
            </label>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            <label className="space-y-2 text-sm font-medium text-text">
              Property Size
              <select
                name="propertySize"
                value={form.propertySize}
                onChange={handleChange}
                required
                className={inputClassName('propertySize')}
              >
                <option value="">Select property size</option>
                <option value="2BHK">2BHK</option>
                <option value="3BHK">3BHK</option>
                <option value="Other">Other</option>
              </select>
              {errors.propertySize && <p className="text-sm text-red-600">{errors.propertySize}</p>}
            </label>
            <label className="space-y-2 text-sm font-medium text-text">
              Approximate Interior Budget
              <select
                name="budget"
                value={form.budget}
                onChange={handleChange}
                className={inputClassName('budget')}
              >
                <option value="">Select budget</option>
                <option value="Under ₹5 Lakh">Under ₹5 Lakh</option>
                <option value="₹5–8 Lakh">₹5–8 Lakh</option>
                <option value="₹8–12 Lakh">₹8–12 Lakh</option>
                <option value="₹12–15 Lakh">₹12–15 Lakh</option>
                <option value="₹15 Lakh+">₹15 Lakh+</option>
                <option value="Not Sure Yet">Not Sure Yet</option>
              </select>
            </label>
          </div>
          <label className="space-y-3 text-sm font-medium text-text">
            What do you need?
            <div className={`rounded-[1.5rem] border bg-bg p-3 sm:p-4 ${errors.needs ? 'border-red-400' : 'border-border'}`}>
              <div className="grid gap-3 sm:grid-cols-2">
                {needOptions.map((option) => {
                  const checked = form.needs.includes(option)
                  return (
                    <label
                      key={option}
                      className={`flex cursor-pointer items-center gap-3 rounded-2xl border px-4 py-3 text-sm transition ${checked ? 'border-primary bg-sand/60 text-text' : 'border-border bg-white text-muted hover:border-primary/40'}`}
                    >
                      <input
                        type="checkbox"
                        checked={checked}
                        onChange={() => handleMultiSelectChange(option)}
                        className="h-4 w-4 rounded border-border text-primary focus:ring-primary/20"
                      />
                      <span>{option}</span>
                    </label>
                  )
                })}
              </div>
            </div>
            {errors.needs && <p className="text-sm text-red-600">{errors.needs}</p>}
          </label>
          <label className="space-y-2 text-sm font-medium text-text">
            When are you planning to start?
            <select
              name="timeline"
              value={form.timeline}
              onChange={handleChange}
              required
              className={inputClassName('timeline')}
            >
              <option value="">Select timeline</option>
              <option value="Immediately">Immediately</option>
              <option value="Within 1–3 Months">Within 1–3 Months</option>
              <option value="Within 3–6 Months">Within 3–6 Months</option>
              <option value="More than 6 Months">More than 6 Months</option>
              <option value="Just Exploring">Just Exploring</option>
            </select>
            {errors.timeline && <p className="text-sm text-red-600">{errors.timeline}</p>}
          </label>
          <label className="space-y-2 text-sm font-medium text-text">
            Tell us about your requirements
            <textarea
              name="requirements"
              value={form.requirements}
              onChange={handleChange}
              rows="5"
              className={inputClassName('requirements')}
            />
          </label>
          <button
            type="button"
            onClick={handleSubmit}
            className="inline-flex w-full items-center justify-center rounded-full bg-primary px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#24463D]"
          >
            Continue on WhatsApp
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact

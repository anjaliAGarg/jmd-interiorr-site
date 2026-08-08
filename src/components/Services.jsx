import { motion } from 'framer-motion'
import labels from '../labels.json'

const services = [
  {
    title: 'Living Room',
    description: 'Minimal lounges shaped for comfort, light, and spatial clarity.',
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Bedroom',
    description: 'Soothing bedroom concepts for calm evenings and restful mornings.',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Kitchen',
    description: 'Elegant kitchens with clean lines, durable finishes, and intuitive flow.',
    image: 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Complete Home',
    description: 'Full home design that balances premium styling with practicality.',
    image: 'https://images.unsplash.com/photo-1549187774-b4e9b0445b4b?auto=format&fit=crop&w=1200&q=80',
  },
]

function Services() {
  return (
    <section id="services" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <div className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-primary">Our services</p>
        <h2 className="mt-4 text-4xl font-semibold tracking-tight text-text sm:text-5xl">
          {labels.servicesSection.heading}
        </h2>
      </div>
      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        {labels.servicesSection.services.map((service, index) => (
          <motion.article
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
            className="group overflow-hidden rounded-[1.5rem] border border-border bg-white shadow-soft"
          >
            <div className="h-72 overflow-hidden">
              <img
                src={service.image}
                alt={`${service.title} design concept`}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="space-y-3 px-6 py-6">
              <h3 className="text-xl font-semibold text-text">{service.title}</h3>
              <p className="text-sm leading-7 text-muted">{service.description}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}

export default Services

import { motion } from 'framer-motion'

const benefits = [
  {
    label: 'Premium Materials',
    description: 'Selected finishes and fittings for refined interiors.',
  },
  {
    label: 'Transparent Pricing',
    description: 'Clear estimates with no hidden costs for every project.',
  },
  {
    label: 'Personalized Design',
    description: 'Custom layouts created around your lifestyle and space.',
  },
  {
    label: 'Project Management',
    description: 'Reliable delivery with careful coordination from start to finish.',
  },
]

function TrustSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <div className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-primary">Why homeowners choose us</p>
        <h2 className="mt-4 text-4xl font-semibold tracking-tight text-text sm:text-5xl">
          A premium experience without the premium noise.
        </h2>
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {benefits.map((item, index) => (
          <motion.article
            key={item.label}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45, delay: index * 0.06 }}
            className="rounded-[1.5rem] border border-border bg-white p-8 shadow-soft"
          >
            <h3 className="text-xl font-semibold text-text">{item.label}</h3>
            <p className="mt-3 text-sm leading-7 text-muted">{item.description}</p>
          </motion.article>
        ))}
      </div>
    </section>
  )
}

export default TrustSection

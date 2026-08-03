import { motion } from 'framer-motion'

const steps = [
  'Book Consultation',
  'Site Visit',
  'Design Proposal',
  'Execution',
  'Handover',
]

function Process() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <div className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-primary">Our process</p>
        <h2 className="mt-4 text-4xl font-semibold tracking-tight text-text sm:text-5xl">
          A clear process for every home.
        </h2>
      </div>
      <div className="mt-12 overflow-hidden rounded-[1.5rem] border border-border bg-white p-6 shadow-soft">
        <div className="grid gap-6 sm:grid-cols-5">
          {steps.map((label, index) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="flex flex-col items-start gap-4 rounded-3xl border border-border bg-bg p-6 text-sm"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white">
                {index + 1}
              </div>
              <p className="font-semibold text-text">{label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Process

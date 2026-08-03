import { motion } from 'framer-motion'

function About() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
      <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, x: -18 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.55 }}
          className="space-y-6"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-primary">About JMD Interiors</p>
          <h1 className="text-4xl font-semibold tracking-tight text-text sm:text-5xl">
            Minimal premium interiors designed for homes in Gurgaon.
          </h1>
          <p className="max-w-xl text-lg leading-8 text-muted">
            JMD Interiors is a new Gurgaon-based studio focused on calm, functional, and refined interiors for 2BHK and 3BHK apartments. We deliver design-led spaces with premium finishes, transparent pricing, and a smooth process from first consultation to handover.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 18 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.55 }}
          className="overflow-hidden rounded-[2rem] border border-border bg-white shadow-soft"
        >
          <img
            src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80"
            alt="Modern interior concept visualization"
            className="h-[520px] w-full object-cover"
            loading="lazy"
          />
        </motion.div>
      </div>
    </section>
  )
}

export default About

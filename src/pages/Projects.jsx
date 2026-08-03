import { motion } from 'framer-motion'

const concepts = [
  {
    title: 'Soft Scandinavian Living',
    subtitle: 'Airy tones with thoughtful furniture placement.',
    image: 'https://images.unsplash.com/photo-1549187774-b4e9b0445b4b?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Textured Kitchen Concept',
    subtitle: 'Warm materials and seamless flow for daily use.',
    image: 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Calm Bedroom Scheme',
    subtitle: 'Quiet, balanced composition for better rest.',
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80',
  },
]

function Projects() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <div className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-primary">Design Concepts</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-text sm:text-5xl">
          Concept visualizations for premium apartment interiors.
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-8 text-muted">
          These concept visuals reflect the minimalist aesthetic and material approach that will be used in Gurgaon homes, demonstrating our focus on timeless details and spatial clarity.
        </p>
      </div>
      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {concepts.map((item, index) => (
          <motion.article
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
            className="overflow-hidden rounded-[1.5rem] border border-border bg-white shadow-soft"
          >
            <div className="h-72 overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="h-full w-full object-cover transition duration-500 hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="space-y-3 px-6 py-6">
              <h2 className="text-xl font-semibold text-text">{item.title}</h2>
              <p className="text-sm leading-7 text-muted">{item.subtitle}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}

export default Projects

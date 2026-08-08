import { motion } from 'framer-motion'
import labels from '../labels.json'

const concepts = [
  {
    label: 'Concept Visualization',
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80',
  },
  {
    label: 'Concept Visualization',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
  },
  {
    label: 'Concept Visualization',
    image: 'https://images.unsplash.com/photo-1549187774-b4e9b0445b4b?auto=format&fit=crop&w=1200&q=80',
  },
]

function Gallery() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <div className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-primary">{labels.projectsPage.heading}</p>
        <h2 className="mt-4 text-4xl font-semibold tracking-tight text-text sm:text-5xl">
          
          
        </h2>
      </div>
      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {labels.projectsPage.cards.map((item, index) => (
          <motion.article
            key={`${item.label}-${index}`}
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45, delay: index * 0.06 }}
            className="overflow-hidden rounded-[1.5rem] border border-border bg-white shadow-soft"
          >
            <div className="h-72 overflow-hidden">
              <img
                src={item.image}
                alt={item.label}
                className="h-full w-full object-cover transition duration-500 hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="px-6 py-6">
              <div className="text-sm font-semibold uppercase tracking-[0.28em] text-muted">{item.label}</div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}

export default Gallery

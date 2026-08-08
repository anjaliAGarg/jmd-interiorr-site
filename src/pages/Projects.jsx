import { motion } from 'framer-motion'
import labels from '../labels.json'

function Projects() {
  return (
    <section className="container mx-auto px-4 py-20 sm:px-6 lg:px-8">
      <div className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-primary">Design Concepts</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-text sm:text-5xl">
          {labels.projectsPage.heading}
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-8 text-muted">
           {labels.projectsPage.description}
          
        </p>
      </div>
      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {labels.projectsPage.cards.map((item, index) => (
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

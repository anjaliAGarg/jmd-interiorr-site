import { motion } from 'framer-motion'
import Services from '../components/Services'
import Process from '../components/Process'
import Gallery from '../components/Gallery'
import TrustSection from '../components/TrustSection'
import labels from '../labels.json'

const heroImage = 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=1200&q=80'

function Home({ onOpenConsultation }) {
  const whatsappLink = 'https://wa.me/919821859634'

  return (
    <div className="overflow-hidden">
      <section className="relative mx-auto max-w-7xl px-6 pt-20 pb-16 lg:px-8 lg:pt-28">
        <div className="absolute right-0 top-12 hidden h-80 w-80 rounded-full bg-sand/60 blur-3xl lg:block" />
        <div className="grid gap-12 lg:grid-cols-[1fr_0.95fr] lg:items-center">
          <div className="max-w-2xl space-y-8">
            <div className="inline-flex items-center gap-3 rounded-full border border-border bg-white/80 px-4 py-2 text-xs uppercase tracking-[0.32em] text-muted shadow-sm">
              {labels.hero.badge}
            </div>
            <div className="space-y-6">
              <div className="space-y-4">
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-primary">{labels.hero.eyebrow}</p>
                <h1 className="max-w-xl text-5xl font-semibold tracking-tight text-text sm:text-6xl">
                  {labels.hero.heading}
                </h1>
              </div>
              <p className="max-w-xl text-lg leading-8 text-muted">
                {labels.hero.subheading}
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                  <button
                type="button"
                onClick={onOpenConsultation}
                className="inline-flex items-center justify-center rounded-full bg-primary px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#24463D]"
              >
                {labels.hero.consultButton}
              </button>
          
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="overflow-hidden rounded-[2rem] border border-border bg-white shadow-soft"
          >
            <img
              src={heroImage}
              alt="Premium interior living room"
              className="h-[520px] w-full object-cover"
              loading="lazy"
            />
          </motion.div>
        </div>
      </section>

      <TrustSection />
      <Services />
      <Process />
      <Gallery />

      <section className="mx-auto max-w-7xl px-6 py-20 text-center lg:px-8">
        <div className="mx-auto max-w-2xl rounded-[2rem] border border-border bg-white p-12 shadow-soft">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-primary">{labels.homeCta.eyebrow}</p>
          <h2 className="mt-6 text-4xl font-semibold tracking-tight text-text sm:text-5xl">
            {labels.homeCta.heading}
          </h2>
          <a
            href={whatsappLink}
            className="mt-10 inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 text-sm font-semibold text-white transition hover:bg-[#24463D]"
          >
            {labels.homeCta.button}
          </a>
        </div>
      </section>
    </div>
  )
}

export default Home

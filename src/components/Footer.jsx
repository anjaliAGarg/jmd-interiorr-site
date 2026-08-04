import { Link } from 'react-router-dom'
import labels from '../labels.json'

function Footer() {
  return (
    <footer className="border-t border-border bg-white/80 px-6 py-12 text-sm text-muted shadow-sm shadow-slate-100 sm:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-3">
        <div className="space-y-4">
          <div className="text-lg font-semibold text-text">{labels.companyName}</div>
          <p className="max-w-md leading-7">{labels.footer.description}</p>
        </div>
        <div className="space-y-4">
          <div className="font-medium text-text">{labels.footer.quickLinks}</div>
          <div className="grid gap-2 text-sm">
            <Link to="/about" className="transition hover:text-text">
              About
            </Link>
            <Link to="/projects" className="transition hover:text-text">
              Projects
            </Link>
            <Link to="/contact" className="transition hover:text-text">
              Contact
            </Link>
          </div>
        </div>
        <div className="space-y-4">
          <div className="font-medium text-text">Contact</div>
          <div className="space-y-2">
            <a href="mailto:jmdconstructions2018@gmail.com" className="block transition hover:text-text">
              jmdconstructions2018@gmail.com
            </a>
            <a href="https://wa.me/919821859634" target="_blank" rel="noreferrer" className="block transition hover:text-text">
              +91 98218 59634
            </a>
          </div>
        </div>
      </div>
      <div className="mt-10 border-t border-border pt-6 text-center text-[13px] text-muted">
        © {new Date().getFullYear()} JMD Interiors. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer

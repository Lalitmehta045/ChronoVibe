import { Link } from 'react-router-dom';
import { ArrowLeft, Phone, Instagram, BadgeCheck } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <nav className="fixed w-full z-50 bg-black/90 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link to="/" className="flex items-center justify-start ml-2 md:ml-8">
              <img src="/colored-logo.png" alt="ChronoVibe Logo" className="w-[5.5rem] h-[5.5rem] brightness-150 contrast-110" />
            </Link>
            <Link
              to="/"
              className="text-sm tracking-wider hover:text-amber-400 transition-colors flex items-center"
            >
              <ArrowLeft className="mr-2 w-4 h-4" /> BACK TO HOME
            </Link>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-24 px-6 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <div className="h-px w-12 bg-amber-400 mx-auto mb-6"></div>
          <h1 className="text-4xl md:text-5xl font-light tracking-wider mb-6">CONTACT DETAILS</h1>
          <p className="text-gray-300 text-lg mb-12 max-w-2xl mx-auto">
            Reach out to ChronoVibe for orders, availability, and private consultations.
          </p>

          <div className="grid gap-6">
            <div className="border border-amber-400 bg-black/50 p-6 text-left">
              <div className="flex items-start gap-4">
                <div className="mt-1">
                  <BadgeCheck className="w-6 h-6 text-amber-400" />
                </div>
                <div>
                  <h2 className="text-xl font-light tracking-wider text-amber-400 mb-1">Brand</h2>
                  <p className="text-lg">ChronoVibeWatches</p>
                </div>
              </div>
            </div>

            <div className="border border-amber-400 bg-black/50 p-6 text-left">
              <div className="flex items-start gap-4">
                <div className="mt-1">
                  <Phone className="w-6 h-6 text-amber-400" />
                </div>
                <div>
                  <h2 className="text-xl font-light tracking-wider text-amber-400 mb-1">Contact Number</h2>
                  <a className="text-lg hover:underline" href="tel:9399797225">9399797225</a>
                </div>
              </div>
            </div>

            <div className="border border-amber-400 bg-black/50 p-6 text-left">
              <div className="flex items-start gap-4">
                <div className="mt-1">
                  <Instagram className="w-6 h-6 text-amber-400" />
                </div>
                <div>
                  <h2 className="text-xl font-light tracking-wider text-amber-400 mb-1">Instagram</h2>
                  <a
                    href="https://www.instagram.com/chronovibe_watches?igsh=MWJ2Z2o0a3l0NGgzZQ=="
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg text-amber-400 hover:text-amber-300 transition-colors underline"
                  >
                    @chronovibe_watches
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <Link
              to="/"
              className="inline-flex items-center space-x-2 border border-white px-8 py-4 text-sm tracking-widest hover:bg-white hover:text-black transition-all"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>BACK TO HOME</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

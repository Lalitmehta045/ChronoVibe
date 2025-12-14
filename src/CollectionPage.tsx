import { Link } from 'react-router-dom';
import { watchesData } from './watchesData';

function slugify(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

export default function CollectionPage() {
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
              className="text-sm tracking-wider hover:text-amber-400 transition-colors"
            >
              BACK TO HOME
            </Link>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-24 px-6 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="h-px w-12 bg-amber-400 mx-auto mb-6"></div>
            <h1 className="text-4xl md:text-5xl font-light tracking-wider mb-4">FULL COLLECTION</h1>
            <p className="text-gray-400 text-lg font-light max-w-2xl mx-auto">
              Explore the complete ChronoVibe lineup
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {watchesData.map((watch, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative overflow-hidden bg-gray-900 mb-4 aspect-square">
                  <img
                    src={watch.image}
                    alt={watch.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Link
                      to={`/watch/${slugify(watch.name)}`}
                      className="border border-white px-6 py-2 text-sm tracking-wider hover:bg-white hover:text-black transition-all"
                    >
                      VIEW DETAILS
                    </Link>
                  </div>
                </div>
                <h3 className="text-xl font-light tracking-wide mb-2">{watch.name}</h3>
                <p className="text-gray-400 text-sm mb-2">{watch.description}</p>
                <p className="text-amber-400 text-lg">{watch.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

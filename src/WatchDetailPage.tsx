import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { watchesData, getRelatedWatches } from './watchesData';

export default function WatchDetailPage() {
  const { watchName } = useParams<{ watchName: string }>();
  
  // Find the selected watch
  const watch = watchesData.find(w => 
    w.name.toLowerCase().replace(/\s+/g, '-') === watchName
  );

  if (!watch) {
    return (
      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6">
        <h1 className="text-2xl mb-4">Watch not found</h1>
        <Link to="/" className="text-amber-400 hover:underline flex items-center">
          <ArrowLeft className="mr-2" /> Back to Home
        </Link>
      </div>
    );
  }

  // Get related watches (excluding the current watch)
  const relatedWatches = getRelatedWatches(watch.name);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-black/90 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link to="/" className="flex items-center justify-start ml-2 md:ml-8">
              <img src="/watch-logo.png" alt="ChronoVibe Logo" className="w-24 h-24 brightness-150 contrast-110" />
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

      {/* Watch Detail Section */}
      <section className="pt-32 pb-24 px-6 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-start mb-24">
            <div className="relative">
              <div className="relative overflow-hidden bg-gray-900 aspect-square">
                <img
                  src={watch.image}
                  alt={watch.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div>
              <div className="h-px w-12 bg-amber-400 mb-6"></div>
              <h1 className="text-4xl md:text-5xl font-light tracking-wider mb-6">{watch.name}</h1>
              <p className="text-3xl md:text-4xl text-amber-400 mb-8">{watch.price}</p>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">{watch.description}</p>
              {watch.details && (
                <div className="mb-8">
                  <h3 className="text-xl font-light tracking-wide mb-4">DETAILS</h3>
                  <p className="text-gray-300 leading-relaxed">{watch.details}</p>
                </div>
              )}
              <button className="bg-amber-400 text-black px-8 py-4 text-sm tracking-widest hover:bg-amber-500 transition-all">
                ADD TO CART
              </button>
            </div>
          </div>

          {/* Related Watches Section */}
          <div className="mt-24">
            <div className="text-center mb-16">
              <div className="h-px w-12 bg-amber-400 mx-auto mb-6"></div>
              <h2 className="text-4xl md:text-5xl font-light tracking-wider mb-4">RELATED WATCHES</h2>
              <p className="text-gray-400 text-lg font-light max-w-2xl mx-auto">
                Explore more timepieces from our collection
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {relatedWatches.map((relatedWatch, index) => (
                <Link
                  key={index}
                  to={`/watch/${relatedWatch.name.toLowerCase().replace(/\s+/g, '-')}`}
                  className="group cursor-pointer"
                >
                  <div className="relative overflow-hidden bg-gray-900 mb-4 aspect-square">
                    <img
                      src={relatedWatch.image}
                      alt={relatedWatch.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="border border-white px-6 py-2 text-sm tracking-wider hover:bg-white hover:text-black transition-all">
                        VIEW DETAILS
                      </div>
                    </div>
                  </div>
                  <h3 className="text-xl font-light tracking-wide mb-2">{relatedWatch.name}</h3>
                  <p className="text-gray-400 text-sm mb-2">{relatedWatch.description}</p>
                  <p className="text-amber-400 text-lg">{relatedWatch.price}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}



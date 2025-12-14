import { Shield, Award, Clock, Menu, X, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { watchesData } from './watchesData';

function slugify(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const watches = watchesData.slice(0, 8);

  const features = [
    {
      icon: Shield,
      title: 'Lifetime Warranty',
      description: 'Every ChronoVibe timepiece is covered by our lifetime warranty'
    },
    {
      icon: Award,
      title: 'Swiss Movement',
      description: 'Precision-engineered Swiss automatic movements in every watch'
    },
    {
      icon: Clock,
      title: 'Handcrafted',
      description: 'Each piece is meticulously assembled by master watchmakers'
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <nav className="fixed w-full z-50 bg-black/90 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link to="/" className="flex items-center justify-start ml-2 md:ml-8">
              <img src="/colored-logo.png" alt="ChronoVibe Logo" className="w-[5.5rem] h-[5.5rem] brightness-150 contrast-110" />
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              <a href="#collection" className="text-sm tracking-wider hover:text-amber-400 transition-colors">COLLECTION</a>
              <a href="#heritage" className="text-sm tracking-wider hover:text-amber-400 transition-colors">HERITAGE</a>
              <a href="#craftsmanship" className="text-sm tracking-wider hover:text-amber-400 transition-colors">CRAFTSMANSHIP</a>
              <a href="#contact" className="text-sm tracking-wider hover:text-amber-400 transition-colors">CONTACT</a>
            </div>

            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-black border-t border-white/10">
            <div className="px-6 py-4 space-y-4">
              <a href="#collection" className="block text-sm tracking-wider hover:text-amber-400 transition-colors">COLLECTION</a>
              <a href="#heritage" className="block text-sm tracking-wider hover:text-amber-400 transition-colors">HERITAGE</a>
              <a href="#craftsmanship" className="block text-sm tracking-wider hover:text-amber-400 transition-colors">CRAFTSMANSHIP</a>
              <a href="#contact" className="block text-sm tracking-wider hover:text-amber-400 transition-colors">CONTACT</a>
            </div>
          </div>
        )}
      </nav>

      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=1920)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        ></div>

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <div className="mb-6 inline-block">
            <div className="h-px w-12 bg-amber-400 mx-auto mb-6"></div>
          </div>
          <h1 className="text-6xl md:text-8xl font-light tracking-wider mb-6">
            CHRONOVIBE
          </h1>
          <p className="text-xl md:text-2xl font-light text-gray-300 mb-12 max-w-2xl mx-auto">
            Where Time Meets Artistry. Discover timepieces that transcend generations.
          </p>
          <a
            href="#collection"
            className="inline-flex items-center space-x-2 bg-amber-400 text-black px-8 py-4 text-sm tracking-widest hover:bg-amber-500 transition-all duration-300 group"
          >
            <span>EXPLORE COLLECTION</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </section>

      <section id="collection" className="py-24 px-6 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="h-px w-12 bg-amber-400 mx-auto mb-6"></div>
            <h2 className="text-4xl md:text-5xl font-light tracking-wider mb-4">SIGNATURE COLLECTION</h2>
            <p className="text-gray-400 text-lg font-light max-w-2xl mx-auto">
              Each timepiece is a masterpiece, crafted with uncompromising attention to detail
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {watches.map((watch, index) => (
              <div
                key={index}
                className="group cursor-pointer"
              >
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

          <div className="mt-12 flex justify-center">
            <Link
              to="/collection"
              className="inline-flex items-center space-x-2 border border-amber-400 text-amber-400 px-8 py-4 text-sm tracking-widest hover:bg-amber-400 hover:text-black transition-all"
            >
              <span>VIEW MORE</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>

      <section id="heritage" className="py-24 px-6 bg-gray-900">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="h-px w-12 bg-amber-400 mb-6"></div>
            <h2 className="text-4xl md:text-5xl font-light tracking-wider mb-6">HERITAGE OF EXCELLENCE</h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              For over a century, ChronoVibe has been at the forefront of horological innovation.
              Our legacy is built on a foundation of Swiss precision, timeless design, and an
              unwavering commitment to excellence.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              Each ChronoVibe timepiece represents the culmination of generations of expertise,
              blending traditional craftsmanship with cutting-edge technology to create watches
              that are both beautiful and precise.
            </p>
            <button className="border border-amber-400 text-amber-400 px-8 py-3 text-sm tracking-widest hover:bg-amber-400 hover:text-black transition-all">
              DISCOVER OUR STORY
            </button>
          </div>
          <div className="relative h-[500px]">
            <img
              src="https://images.pexels.com/photos/271695/pexels-photo-271695.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
              alt="Watchmaking"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      <section id="craftsmanship" className="py-24 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="h-px w-12 bg-amber-400 mx-auto mb-6"></div>
            <h2 className="text-4xl md:text-5xl font-light tracking-wider mb-4">UNCOMPROMISING QUALITY</h2>
            <p className="text-gray-400 text-lg font-light max-w-2xl mx-auto">
              Every detail matters in the pursuit of perfection
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-20 h-20 border-2 border-amber-400 rounded-full mb-6 group-hover:bg-amber-400 transition-all duration-300">
                  <feature.icon className="w-10 h-10 text-amber-400 group-hover:text-black transition-colors" />
                </div>
                <h3 className="text-2xl font-light tracking-wide mb-4">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 px-6 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-4xl mx-auto text-center">
          <div className="h-px w-12 bg-amber-400 mx-auto mb-6"></div>
          <h2 className="text-4xl md:text-5xl font-light tracking-wider mb-6">EXPERIENCE CHRONOVIBE</h2>
          <p className="text-gray-300 text-lg mb-12 max-w-2xl mx-auto">
            Visit our boutique or schedule a private consultation to discover the perfect timepiece
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-amber-400 text-black px-8 py-4 text-sm tracking-widest hover:bg-amber-500 transition-all">
              BOOK APPOINTMENT
            </button>
            <Link
              to="/contact"
              className="border border-white px-8 py-4 text-sm tracking-widest hover:bg-white hover:text-black transition-all"
            >
              CONTACT US
            </Link>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start mb-4">
                <img src="/colored-logo.png" alt="ChronoVibe Logo" className="w-20 h-20 brightness-150 contrast-110" />
              </div>
              <p className="text-gray-400 text-sm">
                Crafting exceptional timepieces
              </p>
            </div>
            <div>
              <h4 className="text-sm tracking-wider mb-4">COLLECTION</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-amber-400 transition-colors">Men's Watches</a></li>
                <li><a href="#" className="hover:text-amber-400 transition-colors">Women's Watches</a></li>
                <li><a href="#" className="hover:text-amber-400 transition-colors">Limited Editions</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm tracking-wider mb-4">COMPANY</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-amber-400 transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-amber-400 transition-colors">Boutiques</a></li>
                <li><a href="#" className="hover:text-amber-400 transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm tracking-wider mb-4">CONNECT</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-amber-400 transition-colors">Instagram</a></li>
                <li><a href="#" className="hover:text-amber-400 transition-colors">Facebook</a></li>
                <li><a href="#" className="hover:text-amber-400 transition-colors">Twitter</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2024 ChronoVibe. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

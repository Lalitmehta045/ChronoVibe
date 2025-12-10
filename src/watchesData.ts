export interface Watch {
  name: string;
  price: string;
  priceValue: number; // For filtering (in rupees)
  image: string;
  description: string;
  details?: string;
  category?: string;
}

const watchImages = ['/1.avif', '/2.avif', '/3.avif', '/4.jpg', '/5.jpg', '/6.jpg'];

const baseWatches: Array<Omit<Watch, 'image'>> = [
  { name: 'Stellar Chronograph', price: '₹15,000', priceValue: 15000, description: 'Precision meets elegance', details: 'Swiss automatic movement with chronograph function. Stainless steel case with sapphire crystal. Water resistant up to 100m.', category: 'Chronograph' },
  { name: 'Royal Heritage', price: '₹18,900', priceValue: 18900, description: 'Timeless sophistication', details: 'Classic design with Swiss movement. Premium leather strap with deployment clasp. Elegant dial with Roman numerals.', category: 'Classic' },
  { name: 'Noir Collection', price: '₹15,200', priceValue: 15200, description: 'Bold and contemporary', details: 'Modern minimalist design with black dial. Stainless steel bracelet. Date display function.', category: 'Modern' },
  { name: 'Diamond Elite', price: '₹24,800', priceValue: 24800, description: 'Unparalleled luxury', details: 'Premium timepiece with diamond hour markers. Swiss automatic movement. Rose gold plated case.', category: 'Luxury' },
  { name: 'Ocean Master', price: '₹22,500', priceValue: 22500, description: 'Dive into excellence', details: 'Professional dive watch with 300m water resistance. Rotating bezel and luminescent markers.', category: 'Sports' },
  { name: 'Vintage Classic', price: '₹19,500', priceValue: 19500, description: 'Retro elegance redefined', details: 'Vintage-inspired design with leather strap. Hand-wound mechanical movement.', category: 'Classic' },
  { name: 'Solar Power', price: '₹16,800', priceValue: 16800, description: 'Eco-friendly precision', details: 'Solar-powered movement with 6-month power reserve. Titanium case for lightweight comfort.', category: 'Modern' },
  { name: 'Platinum Series', price: '₹45,000', priceValue: 45000, description: 'Ultimate refinement', details: 'Platinum case with mother-of-pearl dial. Swiss chronometer certified movement.', category: 'Luxury' },
  { name: 'Racing Chrono', price: '₹28,900', priceValue: 28900, description: 'Speed and style', details: 'Racing-inspired chronograph with tachymeter scale. Carbon fiber dial accents.', category: 'Sports' },
  { name: 'Moon Phase', price: '₹35,000', priceValue: 35000, description: 'Celestial beauty', details: 'Complications include moon phase and date display. Handcrafted dial with guilloché pattern.', category: 'Classic' },
  { name: 'Steel Pro', price: '₹17,500', priceValue: 17500, description: 'Professional reliability', details: 'Stainless steel construction with scratch-resistant coating. Day-date function.', category: 'Modern' },
  { name: 'Golden Hour', price: '₹38,500', priceValue: 38500, description: 'Luxurious timekeeping', details: '18K gold plated case with alligator leather strap. Swiss automatic movement with power reserve indicator.', category: 'Luxury' },
  { name: 'Adventure Sport', price: '₹21,200', priceValue: 21200, description: 'Built for adventure', details: 'Shock-resistant design with compass function. Nylon strap with quick-release mechanism.', category: 'Sports' },
  { name: 'Artisan Edition', price: '₹32,000', priceValue: 32000, description: 'Handcrafted perfection', details: 'Limited edition with hand-engraved case back. Blue sunburst dial with applied markers.', category: 'Classic' },
  { name: 'Tech Smart', price: '₹26,500', priceValue: 26500, description: 'Modern innovation', details: 'Hybrid smartwatch with fitness tracking. Traditional analog display with smart features.', category: 'Modern' },
  { name: 'Executive Elite', price: '₹42,000', priceValue: 42000, description: 'Boardroom elegance', details: 'Sleek design with skeleton dial. Crocodile leather strap with butterfly clasp.', category: 'Luxury' },
  { name: 'Field Watch', price: '₹18,000', priceValue: 18000, description: 'Military-inspired durability', details: 'NATO strap with field watch design. Luminous hands and markers for low-light visibility.', category: 'Sports' },
  { name: 'Heritage Collection', price: '₹29,500', priceValue: 29500, description: 'Timeless tradition', details: 'Reissue of classic design from 1960s. Hand-wound movement with exhibition case back.', category: 'Classic' },
  { name: 'Minimalist Pro', price: '₹16,500', priceValue: 16500, description: 'Less is more', details: 'Ultra-thin case design. Single-hand time display for minimalist aesthetic.', category: 'Modern' },
  { name: 'Diamond Collection', price: '₹85,000', priceValue: 85000, description: 'Ultimate luxury', details: 'Diamond-set bezel with 18K white gold case. Swiss tourbillon movement.', category: 'Luxury' },
  { name: 'Pilot Classic', price: '₹23,800', priceValue: 23800, description: 'Aviation heritage', details: 'Pilot watch with large numerals and GMT function. Leather strap with rivet details.', category: 'Sports' },
  { name: 'Grand Master', price: '₹95,000', priceValue: 95000, description: 'Masterpiece of horology', details: 'Perpetual calendar with moon phase. Hand-engraved movement visible through sapphire case back.', category: 'Luxury' },
  { name: 'Urban Explorer', price: '₹20,000', priceValue: 20000, description: 'City sophistication', details: 'Modern design with integrated bracelet. Quick-change strap system.', category: 'Modern' },
  { name: 'Regal Collection', price: '₹55,000', priceValue: 55000, description: 'Royal elegance', details: '18K rose gold case with enamel dial. Hand-wound movement with 80-hour power reserve.', category: 'Luxury' },
  { name: 'Chrono Sport', price: '₹27,500', priceValue: 27500, description: 'Active lifestyle', details: 'Sports chronograph with flyback function. Rubber strap with deployment clasp.', category: 'Sports' },
  { name: 'Classic Heritage', price: '₹31,500', priceValue: 31500, description: 'Traditional excellence', details: 'Vintage design with blued steel hands. Alligator leather strap with tang buckle.', category: 'Classic' },
  { name: 'Futura Edition', price: '₹24,000', priceValue: 24000, description: 'Forward-thinking design', details: 'Contemporary case design with ceramic bezel. Open-heart dial showing balance wheel.', category: 'Modern' },
  { name: 'Supreme Luxury', price: '₹1,00,000', priceValue: 100000, description: 'The pinnacle of watchmaking', details: 'Platinum case with baguette diamond hour markers. Swiss minute repeater movement. Limited to 10 pieces worldwide.', category: 'Luxury' }
];

export const watchesData: Watch[] = baseWatches.map((watch, index) => ({
  ...watch,
  image: watchImages[index % watchImages.length]
}));

export function getRelatedWatches(currentWatchName: string): Watch[] {
  const currentWatch = watchesData.find(w => w.name === currentWatchName);
  if (!currentWatch) {
    return watchesData.slice(0, 8);
  }

  const related = watchesData
    .filter(w => w.name !== currentWatchName)
    .sort((a, b) => {
      const sameCatA = a.category === currentWatch.category ? 0 : 1;
      const sameCatB = b.category === currentWatch.category ? 0 : 1;
      if (sameCatA !== sameCatB) return sameCatA - sameCatB;
      const diffA = Math.abs(a.priceValue - currentWatch.priceValue);
      const diffB = Math.abs(b.priceValue - currentWatch.priceValue);
      return diffA - diffB;
    })
    .slice(0, 8);

  return related.length ? related : watchesData.slice(0, 8);
}

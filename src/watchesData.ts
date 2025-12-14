export interface Watch {
  name: string;
  price: string;
  priceValue: number; // For filtering (in rupees)
  image: string;
  description: string;
  details?: string;
  category?: string;
}

type CollectionName = 'Stellar Chronograph' | 'Royal Heritage' | 'Noir Collection' | 'Diamond Elite';

type PriceRange = {
  min: number;
  max: number;
};

const collectionPriceRanges: Record<CollectionName, PriceRange> = {
  'Stellar Chronograph': { min: 15000, max: 15000 },
  'Royal Heritage': { min: 25000, max: 35000 },
  'Noir Collection': { min: 50000, max: 65000 },
  'Diamond Elite': { min: 70000, max: 100000 }
};

const collectionImages: Record<CollectionName, string[]> = {
  'Stellar Chronograph': [
    '/watches/Stellar Chronograph/1.png',
    '/watches/Stellar Chronograph/2.jpeg',
    '/watches/Stellar Chronograph/3.jpeg',
    '/watches/Stellar Chronograph/4.jpeg'
  ],
  'Royal Heritage': [
    '/watches/Royal Heritage/7.jpeg',
    '/watches/Royal Heritage/8.jpeg',
    '/watches/Royal Heritage/9.jpeg',
    '/watches/Royal Heritage/10.jpeg'
  ],
  'Noir Collection': [
    '/watches/Noir Collection/13.jpeg',
    '/watches/Noir Collection/14.jpeg',
    '/watches/Noir Collection/15.jpeg',
    '/watches/Noir Collection/16.jpeg'
  ],
  'Diamond Elite': [
    '/watches/Diamond Elite/18.jpeg',
    '/watches/Diamond Elite/19.jpeg',
    '/watches/Diamond Elite/A1.jpeg',
    '/watches/Diamond Elite/A2.jpeg'
  ]
};

function hashString(input: string): number {
  let hash = 5381;
  for (let i = 0; i < input.length; i += 1) {
    hash = (hash * 33) ^ input.charCodeAt(i);
  }
  return hash >>> 0;
}

function stableRandomInt(min: number, max: number, seed: string): number {
  if (min === max) return min;
  const range = max - min + 1;
  const h = hashString(seed);
  return min + (h % range);
}

function formatINR(value: number): string {
  return `₹${value.toLocaleString('en-IN')}`;
}

type BaseWatch = Omit<Watch, 'image' | 'price' | 'priceValue'> & {
  collection: CollectionName;
};

const baseWatches: BaseWatch[] = [
  { name: 'Stellar Chronograph', collection: 'Stellar Chronograph', description: 'Precision meets elegance', details: 'Swiss automatic movement with chronograph function. Stainless steel case with sapphire crystal. Water resistant up to 100m.', category: 'Stellar Chronograph' },
  { name: 'Stellar Chronograph — Midnight Steel', collection: 'Stellar Chronograph', description: 'Sporty precision in steel', details: 'Chronograph with tachymeter scale. Brushed steel case. Luminous hands and markers. Water resistant up to 100m.', category: 'Stellar Chronograph' },
  { name: 'Stellar Chronograph — Ocean Blue', collection: 'Stellar Chronograph', description: 'A bold blue dial chronograph', details: 'Blue sunburst dial with chronograph subdials. Sapphire crystal. Stainless steel bracelet.', category: 'Stellar Chronograph' },
  { name: 'Stellar Chronograph — Carbon Edge', collection: 'Stellar Chronograph', description: 'Modern accents, classic build', details: 'Carbon-texture dial accents. Chronograph pushers with premium feel. 100m water resistance.', category: 'Stellar Chronograph' },

  { name: 'Royal Heritage', collection: 'Royal Heritage', description: 'Timeless sophistication', details: 'Classic design with Swiss movement. Premium leather strap with deployment clasp. Elegant dial with Roman numerals.', category: 'Royal Heritage' },
  { name: 'Royal Heritage — Roman Ivory', collection: 'Royal Heritage', description: 'Classic Roman dial aesthetic', details: 'Ivory dial with Roman numerals. Polished case. Slim profile for formal wear.', category: 'Royal Heritage' },
  { name: 'Royal Heritage — Heritage Gold', collection: 'Royal Heritage', description: 'Warm vintage-inspired tone', details: 'Gold-tone bezel. Fine leather strap. Date window with subtle frame.', category: 'Royal Heritage' },
  { name: 'Royal Heritage — Regal Leather', collection: 'Royal Heritage', description: 'Elegant leather craftsmanship', details: 'Premium stitched leather. Classic hands. Balanced proportions for everyday elegance.', category: 'Royal Heritage' },

  { name: 'Noir Collection', collection: 'Noir Collection', description: 'Bold and contemporary', details: 'Modern minimalist design with black dial. Stainless steel bracelet. Date display function.', category: 'Noir Collection' },
  { name: 'Noir Collection — Shadow Black', collection: 'Noir Collection', description: 'Minimalist black-on-black', details: 'Matte black dial. Sleek indices. Scratch-resistant crystal. Clean and modern silhouette.', category: 'Noir Collection' },
  { name: 'Noir Collection — Obsidian Mesh', collection: 'Noir Collection', description: 'Contemporary mesh bracelet', details: 'Black mesh bracelet. Subtle texture dial. Refined modern feel.', category: 'Noir Collection' },
  { name: 'Noir Collection — Night Runner', collection: 'Noir Collection', description: 'Sport-luxe noir design', details: 'Bold hour markers. High-contrast hands. Durable bracelet for daily wear.', category: 'Noir Collection' },

  { name: 'Diamond Elite', collection: 'Diamond Elite', description: 'Unparalleled luxury', details: 'Premium timepiece with diamond hour markers. Swiss automatic movement. Rose gold plated case.', category: 'Diamond Elite' },
  { name: 'Diamond Elite — Aurora Set', collection: 'Diamond Elite', description: 'Diamond markers with glow', details: 'Diamond hour markers. Premium finishing. A statement piece for formal occasions.', category: 'Diamond Elite' },
  { name: 'Diamond Elite — Rose Prestige', collection: 'Diamond Elite', description: 'Rose-tone luxury profile', details: 'Rose-tone case. Refined dial finishing. High-grade strap and clasp system.', category: 'Diamond Elite' },
  { name: 'Diamond Elite — Crystal Crown', collection: 'Diamond Elite', description: 'Crown jewel styling', details: 'Luxury silhouette with elevated dial depth. Diamond accents for premium presence.', category: 'Diamond Elite' }
];

const collectionImageIndex: Record<CollectionName, number> = {
  'Stellar Chronograph': 0,
  'Royal Heritage': 0,
  'Noir Collection': 0,
  'Diamond Elite': 0
};

export const watchesData: Watch[] = baseWatches.map((watch) => {
  const range = collectionPriceRanges[watch.collection];
  const priceValue = stableRandomInt(range.min, range.max, watch.name);
  const imageList = collectionImages[watch.collection];
  const idx = collectionImageIndex[watch.collection] % imageList.length;
  collectionImageIndex[watch.collection] += 1;

  return {
    name: watch.name,
    description: watch.description,
    details: watch.details,
    category: watch.category,
    image: imageList[idx],
    priceValue,
    price: formatINR(priceValue)
  };
});

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

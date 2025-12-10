import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

interface Watch {
  name: string;
  price: string;
  image: string;
  description: string;
}

interface CategoryData {
  name: string;
  watches: Watch[];
}

interface CategoryPageProps {
  categories: CategoryData[];
}

export default function CategoryPage({ categories }: CategoryPageProps) {
  const { categoryName } = useParams<{ categoryName: string }>();
  
  // Find the selected category
  const category = categories.find(cat => 
    cat.name.toLowerCase().replace(/\s+/g, '-') === categoryName
  );

  if (!category) {
    return (
      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6">
        <h1 className="text-2xl mb-4">Category not found</h1>
        <Link to="/" className="text-amber-400 hover:underline flex items-center">
          <ArrowLeft className="mr-2" /> Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <div className="max-w-7xl mx-auto">
        <Link to="/" className="inline-flex items-center text-amber-400 mb-8 hover:underline">
          <ArrowLeft className="mr-2" /> Back to Home
        </Link>
        
        <h1 className="text-4xl font-light mb-8">{category.name}</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {category.watches.map((watch, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative overflow-hidden bg-gray-900 mb-4 aspect-square">
                <img
                  src={watch.image}
                  alt={watch.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <h3 className="text-xl font-light tracking-wide mb-2">{watch.name}</h3>
              <p className="text-gray-400 text-sm mb-2">{watch.description}</p>
              <p className="text-amber-400 text-lg">{watch.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

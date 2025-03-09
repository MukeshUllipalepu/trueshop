import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="relative h-[500px] rounded-2xl overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&q=80&w=2000"
          alt="Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30 flex items-center">
          <div className="container mx-auto px-4">
            <h1 className="text-5xl font-bold text-white mb-4">
              Welcome to TrueShop
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-xl">
              Discover amazing products at unbeatable prices. Shop the latest trends in fashion, electronics, and more.
            </p>
            <Link
              to="/products"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Shop Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section>
        <h2 className="text-3xl font-bold mb-6">Shop by Category</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link
              key={category.name}
              to={`/products?category=${category.name.toLowerCase()}`}
              className="group relative h-64 rounded-lg overflow-hidden"
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <h3 className="text-2xl font-bold text-white">{category.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

const categories = [
  {
    name: 'Electronics',
    image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?auto=format&fit=crop&q=80&w=500',
  },
  {
    name: 'Fashion',
    image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&q=80&w=500',
  },
  {
    name: 'Home & Living',
    image: 'https://images.unsplash.com/photo-1484101403633-562f891dc89a?auto=format&fit=crop&q=80&w=500',
  },
  {
    name: 'Sports',
    image: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&q=80&w=500',
  },
];

export default Home;
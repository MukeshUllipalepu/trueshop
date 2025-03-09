import React, { useState } from 'react';
import { Star, Filter } from 'lucide-react';

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState([0, 1000]);

  return (
    <div className="flex gap-6">
      {/* Filters Sidebar */}
      <div className="w-64 flex-shrink-0">
        <div className="bg-white p-4 rounded-lg shadow">
          <div className="flex items-center gap-2 mb-4">
            <Filter className="w-5 h-5" />
            <h2 className="text-lg font-semibold">Filters</h2>
          </div>

          <div className="space-y-6">
            {/* Categories */}
            <div>
              <h3 className="font-medium mb-2">Categories</h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <label key={category} className="flex items-center">
                    <input
                      type="radio"
                      name="category"
                      value={category}
                      checked={selectedCategory === category}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="mr-2"
                    />
                    {category}
                  </label>
                ))}
              </div>
            </div>

            {/* Price Range */}
            <div>
              <h3 className="font-medium mb-2">Price Range</h3>
              <div className="space-y-2">
                <input
                  type="range"
                  min="0"
                  max="1000"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                  className="w-full"
                />
                <div className="flex justify-between text-sm text-gray-600">
                  <span>${priceRange[0]}</span>
                  <span>${priceRange[1]}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="flex-1">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
                <div className="flex items-center mb-2">
                  <div className="flex items-center text-yellow-400">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < product.rating ? 'fill-current' : 'fill-none'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600 ml-2">
                    ({product.reviews} reviews)
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold">${product.price}</span>
                  <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const categories = ['All', 'Electronics', 'Fashion', 'Home & Living', 'Sports'];

const products = [
  {
    id: 1,
    name: 'Wireless Headphones',
    price: 99.99,
    rating: 4,
    reviews: 128,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=500',
  },
  {
    id: 2,
    name: 'Smart Watch',
    price: 199.99,
    rating: 5,
    reviews: 256,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=500',
  },
  {
    id: 3,
    name: 'Running Shoes',
    price: 79.99,
    rating: 4,
    reviews: 89,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=500',
  },
];

export default Products;
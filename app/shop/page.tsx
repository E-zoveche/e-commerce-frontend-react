'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Search, SlidersHorizontal, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';

interface Product {
  id: number;
  name: string;
  collection: string;
  price: number;
  color: string;
  image: string;
}

const products: Product[] = [
  { id: 1, name: 'Cashmere Crew Neck', collection: 'Essential Knits', price: 485, color: 'Cream', image: '/c1.jpg' },
  { id: 2, name: 'Silk Blend Tank', collection: 'Essential Knits', price: 350, color: 'Charcoal', image: '/c2.jpg' },
  { id: 3, name: 'Oversized Blazer', collection: 'Essential Knits', price: 890, color: 'Cream', image: '/c3.jpg' },
  { id: 4, name: 'Evening Gown', collection: 'The Evening Suite', price: 2400, color: 'Black', image: '/c4.jpg' },
  { id: 5, name: 'Silk Camisole', collection: 'Architectural Silk', price: 650, color: 'Ivory', image: '/c5.jpg' },
  { id: 6, name: 'Architectural Jacket', collection: 'Architectural Silk', price: 1200, color: 'Taupe', image: '/c6.jpg' },
  { id: 7, name: 'Evening Gown', collection: 'The Evening Suite', price: 2400, color: 'Black', image: '/c7.png' },
  { id: 8, name: 'Silk Camisole', collection: 'Architectural Silk', price: 650, color: 'Ivory', image: '/c8.jpg' },
  { id: 9, name: 'Architectural Jacket', collection: 'Architectural Silk', price: 1200, color: 'Taupe', image: '/c9.jpg' },
  { id: 10, name: 'Evening Gown', collection: 'The Evening Suite', price: 2400, color: 'Black', image: '/c10.jpg' },
  { id: 11, name: 'Silk Camisole', collection: 'Architectural Silk', price: 650, color: 'Ivory', image: '/c11.jpg' },
  { id: 12, name: 'Architectural Jacket', collection: 'Architectural Silk', price: 1200, color: 'Taupe', image: '/c12.jpg' },
  { id: 13, name: 'Evening Gown', collection: 'The Evening Suite', price: 2400, color: 'Black', image: '/c13.jpg' },
  { id: 14, name: 'Silk Camisole', collection: 'Architectural Silk', price: 650, color: 'Ivory', image: '/c14.jpg' },
  { id: 15, name: 'Architectural Jacket', collection: 'Architectural Silk', price: 1200, color: 'Taupe', image: '/c15.jpg' },
];

export default function ShopPage() {
  const [selectedFilter, setSelectedFilter] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const { addToCart, cartItems } = useCart();

  const filteredProducts = products.filter(product => {
    const matchesCollection = !selectedFilter || product.collection === selectedFilter;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCollection && matchesSearch;
  });

  const handleAddToCart = (product: Product) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      color: product.color,
      image: product.image,
      collection: product.collection,
      quantity: 1,
    });
  };

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-muted/20">
        <div className="max-w-7xl mx-auto px-4 py-16 text-center">
          <h1 className="font-serif text-6xl text-foreground mb-4 text-balance">
            Shop All
          </h1>
          <p className="text-muted text-lg">Curated collections of timeless pieces</p>
        </div>
      </header>

      {/* Filters Section */}
      <div className="max-w-7xl mx-auto px-4 py-8 border-b border-muted/20">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          {/* Search */}
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted" />
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-secondary/30 border border-muted/20 rounded-none focus:outline-none focus:border-accent"
            />
          </div>

          {/* Filters */}
          <div className="flex items-center gap-2">
            <SlidersHorizontal className="w-5 h-5 text-muted" />
            <button
              onClick={() => setSelectedFilter(null)}
              className={`px-4 py-2 text-sm transition-colors ${
                selectedFilter === null ? 'text-accent font-medium' : 'text-muted hover:text-foreground'
              }`}
            >
              All
            </button>
            <button
              onClick={() => setSelectedFilter('Essential Knits')}
              className={`px-4 py-2 text-sm transition-colors ${
                selectedFilter === 'Essential Knits' ? 'text-accent font-medium' : 'text-muted hover:text-foreground'
              }`}
            >
              Knits
            </button>
            <button
              onClick={() => setSelectedFilter('The Evening Suite')}
              className={`px-4 py-2 text-sm transition-colors ${
                selectedFilter === 'The Evening Suite' ? 'text-accent font-medium' : 'text-muted hover:text-foreground'
              }`}
            >
              Evening
            </button>
            <button
              onClick={() => setSelectedFilter('Architectural Silk')}
              className={`px-4 py-2 text-sm transition-colors ${
                selectedFilter === 'Architectural Silk' ? 'text-accent font-medium' : 'text-muted hover:text-foreground'
              }`}
            >
              Silk
            </button>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div key={product.id} className="group cursor-pointer">
              <div className="relative overflow-hidden mb-4 bg-secondary/20 aspect-[3/4]">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                />
              </div>
              <div className="space-y-2">
                <p className="text-xs text-accent uppercase tracking-widest">{product.collection}</p>
                <h3 className="font-serif text-xl text-foreground text-pretty">{product.name}</h3>
                <div className="flex items-center justify-between pt-2">
                  <div className="space-y-1">
                    <p className="text-muted text-sm">{product.color}</p>
                    <p className="font-medium text-foreground">${product.price}</p>
                  </div>
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="bg-accent text-background p-3 hover:bg-accent/90 transition-colors"
                  >
                    <ShoppingBag className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <p className="text-muted text-lg">No products found matching your search.</p>
          </div>
        )}
      </section>

      {/* Cart Indicator */}
      {cartItems.length > 0 && (
        <Link href="/cart" className="fixed bottom-6 right-6 bg-accent text-background px-6 py-3 rounded-full shadow-lg hover:bg-accent/90 transition-colors flex items-center gap-2">
          <ShoppingBag className="w-5 h-5" />
          <span className="font-medium">{cartItems.length} items in cart</span>
        </Link>
      )}
    </main>
  );
}

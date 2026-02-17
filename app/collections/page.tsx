'use client';

import Link from 'next/link';

interface Collection {
  id: number;
  title: string;
  description: string;
  itemCount: number;
  image: string;
  link: string;
}

const collections: Collection[] = [
  {
    id: 1,
    title: 'Essential Knits',
    description: 'Fundamental pieces in premium cashmere and silk blends. Versatile foundations for any wardrobe.',
    itemCount: 12,
    image: '/c6.jpg',
    link: '/shop?collection=Essential+Knits',
  },
  {
    id: 2,
    title: 'The Evening Suite',
    description: 'Architectural silhouettes and luxurious fabrics designed for memorable moments.',
    itemCount: 8,
    image: '/c4.jpg',
    link: '/shop?collection=The+Evening+Suite',
  },
  {
    id: 3,
    title: 'Architectural Silk',
    description: 'Innovative cuts and premium silk construction. Where fashion meets architecture.',
    itemCount: 15,
    image: '/c12.jpg',
    link: '/shop?collection=Architectural+Silk',
  },
];

export default function CollectionsPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-muted/20">
        <div className="max-w-7xl mx-auto px-4 py-16 text-center">
          <h1 className="font-serif text-6xl text-foreground mb-4 text-balance">
            Collections
          </h1>
          <p className="text-muted text-lg">Explore our carefully curated selections</p>
        </div>
      </header>

      {/* Collections Grid */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="space-y-16">
          {collections.map((collection, index) => (
            <div
              key={collection.id}
              className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Image */}
              <div
                className={`relative overflow-hidden bg-secondary/20 aspect-[3/4] group ${
                  index % 2 === 1 ? 'md:order-2' : ''
                }`}
              >
                <img
                  src={collection.image || "/placeholder.svg"}
                  alt={collection.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                />
              </div>

              {/* Content */}
              <div className={`space-y-6 ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                <div>
                  <p className="text-xs text-accent uppercase tracking-widest mb-3">Collection</p>
                  <h2 className="font-serif text-5xl text-foreground text-pretty mb-4">
                    {collection.title}
                  </h2>
                  <p className="text-foreground/70 text-lg leading-relaxed">
                    {collection.description}
                  </p>
                </div>

                <div className="flex items-center gap-8 pt-4">
                  <div>
                    <p className="text-accent text-sm uppercase tracking-widest mb-1">Products</p>
                    <p className="font-serif text-3xl text-foreground">{collection.itemCount}</p>
                  </div>
                  <Link
                    href={collection.link}
                    className="group/btn flex items-center gap-2 text-accent hover:gap-4 transition-all"
                  >
                    <span className="font-medium uppercase tracking-widest text-sm">Explore</span>
                    <span className="text-xl">→</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 py-20 border-t border-muted/20">
        <div className="text-center space-y-6">
          <h2 className="font-serif text-4xl text-foreground">Discover Your Style</h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Each collection represents our commitment to quality, design excellence, and timeless sophistication.
          </p>
          <Link
            href="/shop"
            className="inline-block bg-accent text-background px-8 py-4 hover:bg-accent/90 transition-colors uppercase tracking-widest font-medium text-sm"
          >
            Browse All Products
          </Link>
        </div>
      </section>
    </main>
  );
}

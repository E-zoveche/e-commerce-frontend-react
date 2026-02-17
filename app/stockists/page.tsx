'use client';

interface Stockist {
  id: number;
  name: string;
  city: string;
  country: string;
  address: string;
  phone: string;
  hours: string;
}

const stockists: Stockist[] = [
  {
    id: 1,
    name: 'Charlotte Paris Flagship',
    city: 'Paris',
    country: 'France',
    address: '42 Rue de Rivoli, 75004 Paris',
    phone: '+33 1 42 61 53 80',
    hours: 'Mon-Sat 10am-7pm, Sun 12pm-6pm',
  },
  {
    id: 2,
    name: 'New York Atelier',
    city: 'New York',
    country: 'United States',
    address: '123 Madison Avenue, New York, NY 10016',
    phone: '+1 212 555 0123',
    hours: 'Mon-Sat 11am-8pm, Sun 12pm-7pm',
  },
  {
    id: 3,
    name: 'London Boutique',
    city: 'London',
    country: 'United Kingdom',
    address: '67 Bond Street, London W1S 1AE',
    phone: '+44 20 7409 2451',
    hours: 'Mon-Sat 10am-7pm, Sun 12pm-6pm',
  },
  {
    id: 4,
    name: 'Tokyo Studio',
    city: 'Tokyo',
    country: 'Japan',
    address: '3-chōme Minato, Minato Ward, Tokyo 106-0032',
    phone: '+81 3 5775 5151',
    hours: 'Mon-Sat 11am-8pm, Sun 12pm-7pm',
  },
  {
    id: 5,
    name: 'Dubai Emporium',
    city: 'Dubai',
    country: 'United Arab Emirates',
    address: 'The Dubai Mall, Level 2, Downtown Dubai',
    phone: '+971 4 325 5555',
    hours: 'Daily 10am-10pm',
  },
  {
    id: 6,
    name: 'Sydney Haven',
    city: 'Sydney',
    country: 'Australia',
    address: '245 Pitt Street, Sydney NSW 2000',
    phone: '+61 2 9231 5555',
    hours: 'Mon-Sat 10am-7pm, Sun 11am-6pm',
  },
];

export default function StockistsPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-muted/20">
        <div className="max-w-7xl mx-auto px-4 py-16 text-center">
          <h1 className="font-serif text-6xl text-foreground mb-4 text-balance">
            Where to Shop
          </h1>
          <p className="text-muted text-lg">Visit our boutiques worldwide</p>
        </div>
      </header>

      {/* Stockists Grid */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stockists.map((stockist) => (
            <div key={stockist.id} className="border border-muted/20 p-8 hover:border-accent/50 transition-colors">
              <div className="space-y-4">
                <div>
                  <h3 className="font-serif text-xl text-foreground mb-1">{stockist.name}</h3>
                  <p className="text-accent text-sm uppercase tracking-widest">
                    {stockist.city}, {stockist.country}
                  </p>
                </div>

                <div className="space-y-3 text-sm text-foreground/70">
                  <div>
                    <p className="text-xs text-muted uppercase tracking-widest mb-1">Address</p>
                    <p>{stockist.address}</p>
                  </div>

                  <div>
                    <p className="text-xs text-muted uppercase tracking-widest mb-1">Phone</p>
                    <a href={`tel:${stockist.phone}`} className="hover:text-accent transition-colors">
                      {stockist.phone}
                    </a>
                  </div>

                  <div>
                    <p className="text-xs text-muted uppercase tracking-widest mb-1">Hours</p>
                    <p>{stockist.hours}</p>
                  </div>
                </div>

                <button className="w-full mt-6 border border-foreground text-foreground py-3 hover:bg-foreground hover:text-background transition-colors uppercase tracking-widest font-medium text-sm">
                  Get Directions
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Online Shop CTA */}
      <section className="max-w-2xl mx-auto px-4 py-20 text-center border-t border-muted/20">
        <h2 className="font-serif text-3xl text-foreground mb-4">Shop Online</h2>
        <p className="text-muted mb-6">Can't visit in person? Explore our full collection and enjoy free shipping worldwide.</p>
        <a
          href="/shop"
          className="inline-block bg-accent text-background px-8 py-4 hover:bg-accent/90 transition-colors uppercase tracking-widest font-medium text-sm"
        >
          Browse Collection
        </a>
      </section>
    </main>
  );
}

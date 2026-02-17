'use client';

export default function ShippingPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-muted/20">
        <div className="max-w-7xl mx-auto px-4 py-16 text-center">
          <h1 className="font-serif text-6xl text-foreground mb-4 text-balance">
            Shipping Information
          </h1>
          <p className="text-muted text-lg">Fast, secure delivery worldwide</p>
        </div>
      </header>

      <section className="max-w-4xl mx-auto px-4 py-16 space-y-12">
        {/* Shipping Methods */}
        <div className="space-y-6">
          <h2 className="font-serif text-3xl text-foreground">Shipping Methods</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Standard Shipping',
                delivery: '5-7 business days',
                price: 'Free on orders over $300',
                description: 'Reliable delivery with full tracking included.',
              },
              {
                title: 'Express Shipping',
                delivery: '2-3 business days',
                price: '$25 worldwide',
                description: 'Priority handling and expedited delivery.',
              },
              {
                title: 'Overnight Shipping',
                delivery: 'Next business day',
                price: '$75 (available in select regions)',
                description: 'Maximum urgency. Available for major cities.',
              },
              {
                title: 'Click & Collect',
                delivery: 'Ready same day',
                price: 'Free',
                description: 'Pick up at your nearest Charlotte boutique.',
              },
            ].map((method, index) => (
              <div key={index} className="border border-muted/20 p-6 space-y-3">
                <h3 className="font-serif text-xl text-foreground">{method.title}</h3>
                <div>
                  <p className="text-xs text-muted uppercase tracking-widest mb-1">Delivery</p>
                  <p className="text-foreground font-medium">{method.delivery}</p>
                </div>
                <div>
                  <p className="text-xs text-muted uppercase tracking-widest mb-1">Price</p>
                  <p className="text-accent font-medium">{method.price}</p>
                </div>
                <p className="text-foreground/60 text-sm">{method.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* International Shipping */}
        <div className="space-y-4 border-t border-muted/20 pt-12">
          <h2 className="font-serif text-3xl text-foreground">International Shipping</h2>
          <p className="text-foreground/70 text-lg leading-relaxed">
            We ship to over 180 countries worldwide. International orders typically arrive within 10-14 business days, though times may vary by destination. All international shipments include customs documentation and tracking.
          </p>
          <div className="bg-secondary/20 p-6 space-y-2">
            <p className="text-sm text-foreground/70">
              <strong>Note:</strong> Customers are responsible for any applicable customs duties, taxes, and tariffs upon delivery in their country.
            </p>
          </div>
        </div>

        {/* Shipping Rates */}
        <div className="space-y-6 border-t border-muted/20 pt-12">
          <h2 className="font-serif text-3xl text-foreground">Shipping Rates by Region</h2>
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-muted/20">
                <th className="pb-4 text-foreground font-serif">Region</th>
                <th className="pb-4 text-foreground font-serif">Standard</th>
                <th className="pb-4 text-foreground font-serif">Express</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-muted/20">
              {[
                { region: 'Europe', standard: 'FREE', express: '$15' },
                { region: 'North America', standard: 'FREE', express: '$25' },
                { region: 'Asia', standard: '$20', express: '$35' },
                { region: 'Australia & Oceania', standard: '$30', express: '$50' },
                { region: 'Rest of World', standard: '$35', express: '$60' },
              ].map((rate, index) => (
                <tr key={index}>
                  <td className="py-4 text-foreground">{rate.region}</td>
                  <td className="py-4 text-foreground/70">{rate.standard}</td>
                  <td className="py-4 text-foreground/70">{rate.express}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Tracking & Updates */}
        <div className="space-y-4 border-t border-muted/20 pt-12">
          <h2 className="font-serif text-3xl text-foreground">Tracking & Updates</h2>
          <p className="text-foreground/70 text-lg leading-relaxed">
            Once your order ships, you'll receive a tracking number via email. You can use this number to monitor your package in real-time through our carrier's tracking system. We provide real-time updates at each stage of delivery.
          </p>
        </div>

        {/* Lost or Damaged */}
        <div className="space-y-4 border-t border-muted/20 pt-12 bg-secondary/20 p-8">
          <h2 className="font-serif text-3xl text-foreground">Lost or Damaged Items</h2>
          <p className="text-foreground/70 text-lg leading-relaxed">
            If your package arrives damaged or goes missing, please contact our customer service team within 7 days of delivery. We'll work quickly to resolve the issue with a replacement or refund.
          </p>
          <a href="/contact" className="inline-block text-accent hover:underline font-medium">
            Contact Support →
          </a>
        </div>
      </section>
    </main>
  );
}

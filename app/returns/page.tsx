'use client';

export default function ReturnsPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-muted/20">
        <div className="max-w-7xl mx-auto px-4 py-16 text-center">
          <h1 className="font-serif text-6xl text-foreground mb-4 text-balance">
            Returns & Exchanges
          </h1>
          <p className="text-muted text-lg">Hassle-free returns within 60 days</p>
        </div>
      </header>

      <section className="max-w-4xl mx-auto px-4 py-16 space-y-12">
        {/* Return Policy */}
        <div className="space-y-4">
          <h2 className="font-serif text-3xl text-foreground">Our Return Policy</h2>
          <p className="text-foreground/70 text-lg leading-relaxed">
            We want you to love every piece in your collection. If you're not completely satisfied, we offer hassle-free returns and exchanges within 60 days of purchase—no questions asked.
          </p>
        </div>

        {/* Eligibility */}
        <div className="space-y-6 border-t border-muted/20 pt-12">
          <h2 className="font-serif text-3xl text-foreground">Return Eligibility</h2>
          <p className="text-foreground/70 text-lg leading-relaxed">
            Items must meet the following conditions to be eligible for return:
          </p>
          <ul className="space-y-3">
            {[
              'Unworn and unwashed with all original tags attached',
              'Not customized or altered in any way',
              'Complete with all original packaging and inserts',
              'Returned within 60 days of order date',
              'Purchased from Charlotte Fashion House directly',
            ].map((item, index) => (
              <li key={index} className="flex gap-3 text-foreground/70">
                <span className="text-accent flex-shrink-0 mt-1">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* How to Return */}
        <div className="space-y-6 border-t border-muted/20 pt-12">
          <h2 className="font-serif text-3xl text-foreground">How to Return Your Items</h2>
          
          {[
            {
              step: '1',
              title: 'Initiate Return',
              description: 'Go to your account, select the order, and choose "Request Return." Print your prepaid shipping label.',
            },
            {
              step: '2',
              title: 'Pack Securely',
              description: 'Place items in original packaging. Include the return slip from your order.',
            },
            {
              step: '3',
              title: 'Ship Back',
              description: 'Use the provided prepaid label. Drop off at any authorized carrier location.',
            },
            {
              step: '4',
              title: 'Receive Refund',
              description: 'Once received and inspected, refunds process within 5-7 business days.',
            },
          ].map((step, index) => (
            <div key={index} className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-accent text-background font-serif text-lg font-bold">
                  {step.step}
                </div>
              </div>
              <div>
                <h3 className="font-serif text-xl text-foreground mb-2">{step.title}</h3>
                <p className="text-foreground/70">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Exchanges */}
        <div className="space-y-4 border-t border-muted/20 pt-12">
          <h2 className="font-serif text-3xl text-foreground">Exchanges</h2>
          <p className="text-foreground/70 text-lg leading-relaxed">
            If you need a different size or color, we make exchanges simple. Use the same return process and let us know which item you'd like to exchange for. We'll prioritize your new item for shipping once we receive your return.
          </p>
        </div>

        {/* Final Sale */}
        <div className="space-y-4 bg-secondary/20 p-8 border-t border-muted/20">
          <h2 className="font-serif text-3xl text-foreground">Final Sale Items</h2>
          <p className="text-foreground/70 text-lg leading-relaxed">
            Some items are marked as "Final Sale" and cannot be returned or exchanged. These are typically marked at checkout and in product descriptions.
          </p>
        </div>

        {/* Damaged Items */}
        <div className="space-y-4 border-t border-muted/20 pt-12">
          <h2 className="font-serif text-3xl text-foreground">Damaged Items</h2>
          <p className="text-foreground/70 text-lg leading-relaxed">
            If your item arrives damaged, please contact us immediately with photos. We'll arrange a replacement or full refund at no cost to you, including return shipping.
          </p>
        </div>

        {/* Refund Methods */}
        <div className="space-y-6 border-t border-muted/20 pt-12">
          <h2 className="font-serif text-3xl text-foreground">Refund Methods</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-muted/20 p-6">
              <h3 className="font-serif text-lg text-foreground mb-2">Credit Card / Debit Card</h3>
              <p className="text-foreground/70">5-7 business days</p>
            </div>
            <div className="border border-muted/20 p-6">
              <h3 className="font-serif text-lg text-foreground mb-2">Digital Wallet</h3>
              <p className="text-foreground/70">3-5 business days</p>
            </div>
            <div className="border border-muted/20 p-6">
              <h3 className="font-serif text-lg text-foreground mb-2">Bank Transfer</h3>
              <p className="text-foreground/70">7-10 business days</p>
            </div>
            <div className="border border-muted/20 p-6">
              <h3 className="font-serif text-lg text-foreground mb-2">Store Credit</h3>
              <p className="text-foreground/70">Immediate</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="border-t border-muted/20 pt-12 text-center">
          <h3 className="font-serif text-2xl text-foreground mb-4">Questions?</h3>
          <p className="text-foreground/70 mb-6">Our customer service team is here to help.</p>
          <a
            href="/contact"
            className="inline-block bg-accent text-background px-8 py-4 hover:bg-accent/90 transition-colors uppercase tracking-widest font-medium text-sm"
          >
            Contact Us
          </a>
        </div>
      </section>
    </main>
  );
}

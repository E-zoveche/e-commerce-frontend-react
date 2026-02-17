'use client';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-muted/20">
        <div className="max-w-7xl mx-auto px-4 py-16 text-center">
          <h1 className="font-serif text-6xl text-foreground mb-4 text-balance">
            Our Story
          </h1>
          <p className="text-muted text-lg">Crafting timeless elegance since 2015</p>
        </div>
      </header>

      {/* Main Content */}
      <section className="max-w-4xl mx-auto px-4 py-16 space-y-12">
        {/* Vision */}
        <div className="space-y-4">
          <h2 className="font-serif text-3xl text-foreground">Our Vision</h2>
          <p className="text-foreground/70 text-lg leading-relaxed">
            At Charlotte Fashion House, we believe that true luxury is found in the intersection of exceptional craftsmanship, sustainable practices, and timeless design. Every piece in our collection is thoughtfully curated to transcend fleeting trends and become a cherished part of your personal narrative.
          </p>
        </div>

        {/* Mission */}
        <div className="space-y-4">
          <h2 className="font-serif text-3xl text-foreground">Our Mission</h2>
          <p className="text-foreground/70 text-lg leading-relaxed">
            We are dedicated to creating clothing that celebrates the individual, empowers confidence, and stands the test of time. Our commitment extends beyond beautiful garments—we believe in ethical production, sustainable sourcing, and transparent relationships with our artisans and suppliers worldwide.
          </p>
        </div>

        {/* Values */}
        <div className="space-y-6 py-8 border-y border-muted/20">
          <h2 className="font-serif text-3xl text-foreground">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Quality First',
                description: 'Every stitch, every seam, every detail matters. We invest in premium materials and meticulous craftsmanship.',
              },
              {
                title: 'Sustainability',
                description: 'Responsible production practices and eco-conscious sourcing guide every decision we make.',
              },
              {
                title: 'Timelessness',
                description: 'We create pieces designed to be worn for decades, not seasons. Investment over trends.',
              },
              {
                title: 'Inclusivity',
                description: 'Fashion should celebrate all bodies and identities. We design for everyone.',
              },
            ].map((value, index) => (
              <div key={index} className="space-y-2">
                <h3 className="font-serif text-xl text-foreground">{value.title}</h3>
                <p className="text-foreground/60 text-base leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Artisanship */}
        <div className="space-y-4 bg-secondary/20 p-8">
          <h2 className="font-serif text-3xl text-foreground">Artisanship & Heritage</h2>
          <p className="text-foreground/70 text-lg leading-relaxed">
            Our garments are produced in small batches by skilled artisans across Europe and Asia. We maintain long-standing relationships with our production partners, ensuring fair wages, safe working conditions, and a deep respect for traditional techniques alongside modern innovation.
          </p>
        </div>

        {/* Founder Message */}
        <div className="space-y-4 border-l-4 border-accent pl-8">
          <p className="text-foreground/70 text-lg leading-relaxed italic">
            "Charlotte Fashion House was born from a simple belief: that fashion should make you feel like the best version of yourself. Not for a moment, but for a lifetime. Every piece carries our promise of quality, sustainability, and timeless beauty."
          </p>
          <p className="font-serif text-xl text-foreground">— Charlotte Dubois, Founder</p>
        </div>
      </section>

      {/* Newsletter */}
      <section className="max-w-2xl mx-auto px-4 py-20 text-center border-t border-muted/20">
        <h2 className="font-serif text-3xl text-foreground mb-4">Join Our Community</h2>
        <p className="text-muted mb-6">Receive exclusive updates on new collections and behind-the-scenes stories.</p>
        <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
          <input
            type="email"
            placeholder="your@email.com"
            className="flex-1 px-4 py-3 bg-secondary/30 border-b border-foreground focus:outline-none"
          />
          <button className="bg-accent text-background px-8 py-3 hover:bg-accent/90 transition-colors uppercase tracking-widest font-medium text-sm">
            Subscribe
          </button>
        </form>
      </section>
    </main>
  );
}

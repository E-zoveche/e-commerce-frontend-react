export function Hero() {
  return (
    <section className="relative min-h-screen pt-20 flex flex-col items-center justify-center text-center px-6 overflow-hidden">
      <div className="max-w-4xl mx-auto space-y-12 animate-in fade-in slide-in-from-bottom-8 duration-1000">
        <h2 className="text-6xl md:text-8xl lg:text-[120px] font-serif leading-[0.9] tracking-tight text-balance">
          Optimal organization meets exquisite design
        </h2>

        <p className="max-w-xl mx-auto text-muted-foreground text-lg md:text-xl font-light leading-relaxed text-pretty">
          Transform your space into a functional work of art with Charlotte's bespoke fashion and lifestyle solutions.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-12 pt-8">
          <div className="group cursor-pointer flex flex-col items-center gap-4">
            <span className="text-[10px] uppercase tracking-[0.3em] font-medium group-hover:text-accent transition-colors">
              Our untold story
            </span>
            <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center group-hover:border-accent group-hover:bg-accent group-hover:text-white transition-all duration-500">
              <span className="text-xl">→</span>
            </div>
          </div>

          <div className="relative w-full md:w-[400px] aspect-[4/5] overflow-hidden">
            <img
              src="/minimalist-luxury-walnut-closet-interior.jpg"
              alt="Luxury Interior"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
          </div>

          <div className="group cursor-pointer flex flex-col items-center gap-4">
            <span className="text-[10px] uppercase tracking-[0.3em] font-medium group-hover:text-accent transition-colors">
              Purchase stellar products
            </span>
            <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center group-hover:border-accent group-hover:bg-accent group-hover:text-white transition-all duration-500">
              <span className="text-xl">→</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

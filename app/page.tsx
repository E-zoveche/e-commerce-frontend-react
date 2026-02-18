import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { FeaturedCollections } from "@/components/featured-collections"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />

      {/* Editorial Quote Section */}
      <section className="py-40 bg-secondary/50 text-center px-6">
        <div className="max-w-3xl mx-auto space-y-8">
          <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-accent">Recognition</span>
          <blockquote className="text-3xl md:text-5xl font-serif italic leading-tight">
            "An unparalleled blend of architectural form and wearable poetry. Charlotte redefines the modern wardrobe."
          </blockquote>
          <p className="text-sm uppercase tracking-widest font-medium">— The Editorialist</p>
        </div>
      </section>

      <FeaturedCollections />

      {/* Visual Campaign Section */}
      <section className="relative h-screen overflow-hidden group">
        <img
          src="/c11.jpg"
          alt="Campaign"
          className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
          <div className="text-center text-white space-y-6">
            <h2 className="text-5xl md:text-7xl font-serif italic">Escape reality without leaving your bedroom</h2>
            <button className="px-10 py-4 bg-white text-black text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-accent hover:text-white transition-all">
              Explore Now
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

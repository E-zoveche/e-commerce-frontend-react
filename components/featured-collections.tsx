const collections = [
  {
    title: "Essential Knits",
    items: "12 Products",
    image: "/c6.jpg",
  },
  {
    title: "The Evening Suite",
    items: "8 Products",
    image: "/c2.jpg",
  },
  {
    title: "Architectural Silk",
    items: "15 Products",
    image: "/c4.jpg",
  },
]

export function FeaturedCollections() {
  return (
    <section className="py-32 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {collections.map((collection, i) => (
          <div key={i} className="group cursor-pointer space-y-6">
            <div className="aspect-[3/4] overflow-hidden bg-muted">
              <img
                src={collection.image || "/placeholder.svg"}
                alt={collection.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="text-center space-y-1">
              <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{collection.items}</p>
              <h3 className="text-2xl font-serif italic">{collection.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

import Link from "next/link"
export function Footer() {
  return (
    <footer className="bg-background pt-32 pb-12 px-6 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-16 mb-32">
          <div className="lg:col-span-2 space-y-8">
            <h2 className="text-4xl font-serif leading-tight">Ready to experience our curated services?</h2>
            <div className="flex flex-col gap-4">
              <p className="text-sm text-muted-foreground max-w-sm uppercase tracking-widest leading-loose">
                Subscribe to our newsletter for exclusive updates and inspiration.
              </p>
              <form className="flex gap-4">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="bg-transparent border-b border-border py-2 flex-grow focus:outline-none focus:border-accent transition-colors text-sm"
                />
                <button className="uppercase text-[10px] tracking-[0.2em] font-bold hover:text-accent transition-colors">
                  Submit
                </button>
              </form>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 lg:col-span-2">
            <div className="space-y-6">
              <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-accent">Menu</h4>
              <ul className="space-y-3 text-sm font-light">
                <li>
                  <Link href="/shop" className="hover:underline">
                    Shop All
                  </Link>
                </li>
                <li>
                  <Link href="/collections" className="hover:underline">
                    Collections
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:underline">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/stockists" className="hover:underline">
                    Stockists
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-6">
              <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-accent">Support</h4>
              <ul className="space-y-3 text-sm font-light">
                <li>
                  <Link href="/contact" className="hover:underline">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/shipping" className="hover:underline">
                    Shipping
                  </Link>
                </li>
                <li>
                  <Link href="/returns" className="hover:underline">
                    Returns
                  </Link>
                </li>
                <li>
                  <Link href="/faqs" className="hover:underline">
                    FAQs
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="relative pt-12">
          <h1 className="text-[15vw] md:text-[20vw] font-serif leading-none tracking-tighter text-muted/20 select-none text-center">
            Charlotte
          </h1>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-[0.2em] text-muted-foreground pt-12">
            <p>© 2026 Charlotte Fashion House. All Rights Reserved.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-foreground transition-colors">
                Instagram
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                LinkedIn
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                Pinterest
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

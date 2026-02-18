"use client"

import Link from "next/link"
import { ShoppingBag, Search, Menu, X } from "lucide-react"
import { useState } from "react"
import { useCart } from "@/context/CartContext"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { cartItems } = useCart()

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/40">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 -ml-2 hover:bg-muted transition-colors"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

          <div className="hidden lg:flex items-center gap-8 text-xs font-medium uppercase tracking-[0.2em]">
            <Link href="/shop" className="hover:text-accent transition-colors">
              Shop
            </Link>
            <Link href="/collections" className="hover:text-accent transition-colors">
              Collections
            </Link>
            <Link href="/about" className="hover:text-accent transition-colors">
              About
            </Link>
          </div>
        </div>

        <Link href="/" className="absolute left-1/2 -translate-x-1/2 group">
          <h1 className="text-2xl font-serif tracking-tighter transition-all group-hover:tracking-normal">Charlotte</h1>
        </Link>

        <div className="flex items-center gap-6">
          <button className="p-2 hover:bg-muted transition-colors">
            <Search size={20} strokeWidth={1.5} />
          </button>
          <Link href="/cart" className="p-2 hover:bg-muted transition-colors relative">
            <ShoppingBag size={20} strokeWidth={1.5} />
            {cartItems.length > 0 && (
              <span className="absolute top-1 right-1 bg-accent text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full leading-none">
                {cartItems.length}
              </span>
            )}
          </Link>
          <Link
            href="/appointment"
            className="hidden md:block px-6 py-2 border border-primary text-[10px] uppercase tracking-[0.2em] hover:bg-primary hover:text-white transition-all duration-300"
          >
            Book Appointment
          </Link>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 top-20 bg-background z-40 lg:hidden transition-transform duration-500 ease-in-out ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="p-8 flex flex-col gap-8 text-2xl font-serif">
          <Link href="/shop" onClick={() => setIsMenuOpen(false)}>
            Shop
          </Link>
          <Link href="/collections" onClick={() => setIsMenuOpen(false)}>
            Collections
          </Link>
          <Link href="/about" onClick={() => setIsMenuOpen(false)}>
            About
          </Link>
          <Link href="/appointment" onClick={() => setIsMenuOpen(false)}>
            Appointments
          </Link>
        </div>
      </div>
    </nav>
  )
}

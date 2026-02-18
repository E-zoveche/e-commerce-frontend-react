'use client';

import { useCart } from '@/context/CartContext';
import Link from 'next/link';
import { Trash2, Plus, Minus } from 'lucide-react';

export default function CartPage() {
  const { cartItems, removeFromCart, updateQuantity, getTotalPrice } = useCart();

  if (cartItems.length === 0) {
    return (
      <main className="min-h-screen bg-background">
        <header className="border-b border-muted/20">
          <div className="max-w-7xl mx-auto px-4 py-16 text-center">
            <h1 className="font-serif text-6xl text-foreground mb-4 text-balance">
              Your Cart
            </h1>
          </div>
        </header>

        <section className="max-w-7xl mx-auto px-4 py-24 text-center">
          <p className="text-muted text-lg mb-8">Your cart is empty</p>
          <Link href="/shop" className="inline-block px-8 py-3 bg-accent text-background hover:bg-accent/90 transition-colors">
            Continue Shopping
          </Link>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background">
      <header className="border-b border-muted/20">
        <div className="max-w-7xl mx-auto px-4 py-16 text-center">
          <h1 className="font-serif text-6xl text-foreground mb-4 text-balance">
            Your Cart
          </h1>
        </div>
      </header>

      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-6">
            {cartItems.map((item) => (
              <div key={item.id} className="flex gap-6 pb-6 border-b border-muted/20">
                {/* Image */}
                <div className="w-24 h-32 flex-shrink-0 bg-secondary/20 overflow-hidden">
                  <img
                    src={item.image || '/placeholder.svg'}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Item Details */}
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <p className="text-xs text-accent uppercase tracking-widest mb-1">{item.collection}</p>
                    <h3 className="font-serif text-lg text-foreground mb-2">{item.name}</h3>
                    <p className="text-sm text-muted">{item.color}</p>
                  </div>

                  {/* Quantity Control */}
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2 border border-muted/20">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="p-2 hover:bg-muted/10 transition-colors"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="px-4 text-sm font-medium">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="p-2 hover:bg-muted/10 transition-colors"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="p-2 hover:text-red-500 transition-colors ml-auto"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                {/* Price */}
                <div className="text-right flex flex-col justify-between">
                  <p className="font-serif text-lg text-foreground">${item.price}</p>
                  <p className="text-muted text-sm">Total: ${(item.price * item.quantity).toFixed(2)}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-secondary/20 p-8 sticky top-24">
              <h2 className="font-serif text-2xl text-foreground mb-6">Order Summary</h2>

              <div className="space-y-4 mb-6 pb-6 border-b border-muted/20">
                <div className="flex justify-between text-sm">
                  <span className="text-muted">Subtotal</span>
                  <span className="text-foreground">${getTotalPrice().toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted">Shipping</span>
                  <span className="text-foreground">Calculated at checkout</span>
                </div>
              </div>

              <div className="flex justify-between mb-8">
                <span className="font-serif text-lg text-foreground">Total</span>
                <span className="font-serif text-xl text-foreground">${getTotalPrice().toFixed(2)}</span>
              </div>

              <Link
                href="/checkout"
                className="block w-full py-3 bg-accent text-background text-center font-medium hover:bg-accent/90 transition-colors mb-4"
              >
                Proceed to Checkout
              </Link>

              <Link
                href="/shop"
                className="block w-full py-3 border border-muted/20 text-center text-foreground hover:bg-secondary/20 transition-colors"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

'use client';

import { useCart } from '@/context/CartContext';
import { useState } from 'react';
import Link from 'next/link';
import { MessageCircle, ArrowRight } from 'lucide-react';

const WHATSAPP_NUMBER = '237690000000'; // CMR WhatsApp number - replace with actual number

export default function CheckoutPage() {
  const { cartItems, getTotalPrice, clearCart } = useCart();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    country: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (cartItems.length === 0) {
    return (
      <main className="min-h-screen bg-background">
        <header className="border-b border-muted/20">
          <div className="max-w-7xl mx-auto px-4 py-16 text-center">
            <h1 className="font-serif text-6xl text-foreground mb-4 text-balance">
              Checkout
            </h1>
          </div>
        </header>

        <section className="max-w-7xl mx-auto px-4 py-24 text-center">
          <p className="text-muted text-lg mb-8">Your cart is empty</p>
          <Link href="/shop" className="inline-block px-8 py-3 bg-accent text-background hover:bg-accent/90 transition-colors">
            Return to Shop
          </Link>
        </section>
      </main>
    );
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Create order summary message for WhatsApp
    const orderSummary = cartItems
      .map((item) => `${item.name} (${item.color}) x${item.quantity} - $${(item.price * item.quantity).toFixed(2)}`)
      .join('%0A');

    const customerInfo = `Name: ${formData.firstName} ${formData.lastName}%0AEmail: ${formData.email}%0APhone: ${formData.phone}%0AAddress: ${formData.address}, ${formData.city}, ${formData.country}`;

    const totalPrice = getTotalPrice().toFixed(2);

    const message = `Hello Charlotte Fashion House!%0A%0AI would like to complete my order:%0A%0A${orderSummary}%0A%0ATotal: $${totalPrice}%0A%0ACustomer Information:%0A${customerInfo}%0A%0APlease confirm availability and proceed with payment details.`;

    // WhatsApp Business API format
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;

    // Open WhatsApp
    window.open(whatsappUrl, '_blank');

    // Clear cart after redirecting
    setTimeout(() => {
      clearCart();
    }, 500);
  };

  return (
    <main className="min-h-screen bg-background">
      <header className="border-b border-muted/20">
        <div className="max-w-7xl mx-auto px-4 py-16 text-center">
          <h1 className="font-serif text-6xl text-foreground mb-4 text-balance">
            Checkout
          </h1>
          <p className="text-muted text-lg">Complete your order</p>
        </div>
      </header>

      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Checkout Form */}
          <div>
            <form onSubmit={handleCheckout} className="space-y-6">
              <div className="space-y-4">
                <h2 className="font-serif text-2xl text-foreground mb-6">Shipping Information</h2>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-muted mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-muted/20 bg-secondary/10 focus:outline-none focus:border-accent"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-muted mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-muted/20 bg-secondary/10 focus:outline-none focus:border-accent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-widest text-muted mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-muted/20 bg-secondary/10 focus:outline-none focus:border-accent"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-widest text-muted mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-muted/20 bg-secondary/10 focus:outline-none focus:border-accent"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-widest text-muted mb-2">
                    Street Address
                  </label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-muted/20 bg-secondary/10 focus:outline-none focus:border-accent"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-muted mb-2">
                      City
                    </label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-muted/20 bg-secondary/10 focus:outline-none focus:border-accent"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-muted mb-2">
                      Country
                    </label>
                    <input
                      type="text"
                      name="country"
                      value={formData.country}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-muted/20 bg-secondary/10 focus:outline-none focus:border-accent"
                    />
                  </div>
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 bg-accent text-background font-medium hover:bg-accent/90 transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                {isSubmitting ? 'Redirecting to WhatsApp...' : 'Complete Order via WhatsApp'}
                <ArrowRight className="w-4 h-4" />
              </button>

              <p className="text-xs text-muted text-center mt-4">
                By clicking the button above, you'll be directed to WhatsApp to finalize your order with our team.
              </p>
            </form>
          </div>

          {/* Order Summary */}
          <div>
            <div className="bg-secondary/20 p-8 sticky top-24">
              <h2 className="font-serif text-2xl text-foreground mb-6">Order Summary</h2>

              <div className="space-y-4 mb-6 pb-6 border-b border-muted/20">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex justify-between text-sm">
                    <div>
                      <p className="text-foreground">{item.name}</p>
                      <p className="text-xs text-muted">{item.color} x {item.quantity}</p>
                    </div>
                    <p className="text-foreground font-medium">${(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                ))}
              </div>

              <div className="space-y-3 mb-6 pb-6 border-b border-muted/20">
                <div className="flex justify-between text-sm">
                  <span className="text-muted">Subtotal</span>
                  <span className="text-foreground">${getTotalPrice().toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted">Shipping</span>
                  <span className="text-foreground">To be confirmed</span>
                </div>
              </div>

              <div className="flex justify-between mb-6">
                <span className="font-serif text-lg text-foreground">Total</span>
                <span className="font-serif text-xl text-foreground">${getTotalPrice().toFixed(2)}</span>
              </div>

              <Link
                href="/cart"
                className="block w-full py-2 border border-muted/20 text-center text-foreground hover:bg-secondary/20 transition-colors text-sm"
              >
                Return to Cart
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

'use client';

import React from "react"

import { useState } from 'react';
import { Mail, Phone, MapPin, Instagram, Linkedin, Paintbrush as Pinterest } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message. We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-muted/20">
        <div className="max-w-7xl mx-auto px-4 py-16 text-center">
          <h1 className="font-serif text-6xl text-foreground mb-4 text-balance">
            Get in Touch
          </h1>
          <p className="text-muted text-lg">We'd love to hear from you</p>
        </div>
      </header>

      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="space-y-12">
            <div>
              <h2 className="font-serif text-3xl text-foreground mb-8">Contact Information</h2>
              <div className="space-y-8">
                <div className="flex gap-4">
                  <Mail className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-xs text-muted uppercase tracking-widest mb-2">Email</p>
                    <a href="mailto:hello@charlottefashion.com" className="text-foreground hover:text-accent transition-colors">
                      hello@charlottefashion.com
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Phone className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-xs text-muted uppercase tracking-widest mb-2">Phone</p>
                    <a href="tel:+33142615380" className="text-foreground hover:text-accent transition-colors">
                      +33 (1) 4261 5380
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <MapPin className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-xs text-muted uppercase tracking-widest mb-2">Address</p>
                    <p className="text-foreground">
                      42 Rue de Rivoli<br />
                      75004 Paris, France
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="font-serif text-xl text-foreground mb-6">Follow Us</h3>
              <div className="flex gap-4">
                <a
                  href="https://instagram.com/charlottefashion_house"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 border border-foreground flex items-center justify-center hover:bg-accent hover:border-accent hover:text-background transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 border border-foreground flex items-center justify-center hover:bg-accent hover:border-accent hover:text-background transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://pinterest.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 border border-foreground flex items-center justify-center hover:bg-accent hover:border-accent hover:text-background transition-colors"
                >
                  <Pinterest className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="text-sm text-foreground uppercase tracking-widest block mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-0 py-3 bg-transparent border-b border-muted focus:border-accent outline-none transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="text-sm text-foreground uppercase tracking-widest block mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-0 py-3 bg-transparent border-b border-muted focus:border-accent outline-none transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="text-sm text-foreground uppercase tracking-widest block mb-2">
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-0 py-3 bg-transparent border-b border-muted focus:border-accent outline-none transition-colors"
                >
                  <option value="">Select a subject</option>
                  <option value="inquiry">General Inquiry</option>
                  <option value="orders">Orders & Shipping</option>
                  <option value="returns">Returns & Exchanges</option>
                  <option value="wholesale">Wholesale</option>
                  <option value="collaboration">Collaboration</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="text-sm text-foreground uppercase tracking-widest block mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-0 py-3 bg-transparent border-b border-muted focus:border-accent outline-none transition-colors resize-none"
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-accent text-background py-4 hover:bg-accent/90 transition-colors uppercase tracking-widest font-medium text-sm mt-8"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}

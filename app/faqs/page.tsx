'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQ {
  id: number;
  question: string;
  answer: string;
  category: string;
}

const faqs: FAQ[] = [
  {
    id: 1,
    category: 'Orders',
    question: 'How do I place an order?',
    answer: 'Browse our collections, add items to your cart, and proceed to checkout. You can pay with credit card, debit card, or digital wallets. After confirming your order, you\'ll receive a confirmation email with your order number.',
  },
  {
    id: 2,
    category: 'Orders',
    question: 'Can I modify my order after placing it?',
    answer: 'Once your order is placed, it typically processes within 2-4 hours. If you need to make changes, contact our support team immediately. We\'ll do our best to help if your order hasn\'t shipped yet.',
  },
  {
    id: 3,
    category: 'Shipping',
    question: 'How long does shipping take?',
    answer: 'Standard shipping typically takes 5-7 business days. Express shipping is 2-3 business days, and overnight shipping is available for next-day delivery. International orders usually arrive within 10-14 business days.',
  },
  {
    id: 4,
    category: 'Shipping',
    question: 'Do you offer free shipping?',
    answer: 'Yes! We offer free standard shipping on all orders over $300. Express and overnight shipping have additional fees. Check our shipping page for complete rate information.',
  },
  {
    id: 5,
    category: 'Returns',
    question: 'What is your return policy?',
    answer: 'We offer hassle-free returns within 60 days of purchase. Items must be unworn, unwashed, with original tags, and in original packaging. Return shipping is prepaid—no costs to you.',
  },
  {
    id: 6,
    category: 'Returns',
    question: 'How long does a refund take?',
    answer: 'Once we receive and inspect your return, refunds typically process within 5-7 business days. Refund times vary by payment method (3-10 business days for the funds to appear in your account).',
  },
  {
    id: 7,
    category: 'Products',
    question: 'What materials are your products made from?',
    answer: 'Our collections feature premium materials including pure cashmere, silk, linen, and luxury blends. All materials are sourced sustainably and ethically. Check individual product pages for specific fabric composition.',
  },
  {
    id: 8,
    category: 'Products',
    question: 'Do you offer size customization?',
    answer: 'We offer tailoring services for most pieces. Contact our customer service team to discuss customization options. Custom orders have extended lead times (4-6 weeks).',
  },
  {
    id: 9,
    category: 'Account',
    question: 'How do I create an account?',
    answer: 'Click "Sign In" in the top navigation and select "Create Account." Enter your email and create a password. You\'re all set! Your account will save your preferences and order history.',
  },
  {
    id: 10,
    category: 'Account',
    question: 'How do I reset my password?',
    answer: 'Go to the login page and click "Forgot Password." Enter your email address, and we\'ll send you a reset link. Check your spam folder if you don\'t see it within 5 minutes.',
  },
];

export default function FAQsPage() {
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = Array.from(new Set(faqs.map(faq => faq.category)));
  const filteredFAQs = selectedCategory ? faqs.filter(faq => faq.category === selectedCategory) : faqs;

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-muted/20">
        <div className="max-w-7xl mx-auto px-4 py-16 text-center">
          <h1 className="font-serif text-6xl text-foreground mb-4 text-balance">
            Frequently Asked Questions
          </h1>
          <p className="text-muted text-lg">Find answers to common questions</p>
        </div>
      </header>

      <section className="max-w-4xl mx-auto px-4 py-16">
        {/* Category Filter */}
        <div className="mb-12 pb-8 border-b border-muted/20">
          <p className="text-sm text-muted uppercase tracking-widest mb-4">Filter by Category</p>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-4 py-2 text-sm transition-colors ${
                selectedCategory === null ? 'text-accent font-medium' : 'text-muted hover:text-foreground'
              }`}
            >
              All
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 text-sm transition-colors ${
                  selectedCategory === category ? 'text-accent font-medium' : 'text-muted hover:text-foreground'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* FAQs */}
        <div className="space-y-2">
          {filteredFAQs.map((faq) => (
            <div
              key={faq.id}
              className="border border-muted/20 hover:border-accent/50 transition-colors"
            >
              <button
                onClick={() => setExpandedId(expandedId === faq.id ? null : faq.id)}
                className="w-full px-6 py-6 flex items-start justify-between text-left hover:bg-secondary/5 transition-colors"
              >
                <div className="flex-1">
                  <p className="text-xs text-accent uppercase tracking-widest mb-2">{faq.category}</p>
                  <h3 className="font-serif text-lg text-foreground text-pretty">{faq.question}</h3>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-accent flex-shrink-0 ml-4 transition-transform ${
                    expandedId === faq.id ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {expandedId === faq.id && (
                <div className="px-6 pb-6 border-t border-muted/20">
                  <p className="text-foreground/70 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Still Need Help */}
        <div className="mt-16 border-t border-muted/20 pt-12 text-center space-y-4">
          <h2 className="font-serif text-2xl text-foreground">Still need help?</h2>
          <p className="text-foreground/70">Contact our customer service team for assistance.</p>
          <a
            href="/contact"
            className="inline-block text-accent hover:underline font-medium"
          >
            Get in Touch →
          </a>
        </div>
      </section>
    </main>
  );
}

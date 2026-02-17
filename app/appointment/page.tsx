'use client'

import React from "react"

import { useState } from 'react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Calendar, Clock, MapPin, User, Mail, Phone } from 'lucide-react'

export default function AppointmentPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    service: 'personal-styling',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Appointment booked:', formData)
    alert('Thank you for booking an appointment. We will confirm shortly.')
    setFormData({
      name: '',
      email: '',
      phone: '',
      date: '',
      time: '',
      service: 'personal-styling',
      message: '',
    })
  }

  return (
    <main className="bg-background">
      <Navbar />
      <div className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6">
          {/* Header */}
          <div className="mb-16">
            <h1 className="text-5xl md:text-6xl font-serif mb-4">Book Your Appointment</h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Schedule a personalized styling session with our expert consultants. We offer tailored fashion consultations, wardrobe audits, and exclusive private shopping experiences.
            </p>
          </div>

          {/* Services Overview */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="border border-border p-6">
              <div className="flex items-center gap-3 mb-4">
                <User size={24} className="text-accent" />
                <h3 className="font-serif text-lg">Personal Styling</h3>
              </div>
              <p className="text-sm text-muted-foreground">One-on-one consultation to curate your perfect wardrobe tailored to your lifestyle and preferences.</p>
            </div>

            <div className="border border-border p-6">
              <div className="flex items-center gap-3 mb-4">
                <Calendar size={24} className="text-accent" />
                <h3 className="font-serif text-lg">Wardrobe Audit</h3>
              </div>
              <p className="text-sm text-muted-foreground">Let us assess your existing pieces and create a strategic plan to maximize your wardrobe potential.</p>
            </div>

            <div className="border border-border p-6">
              <div className="flex items-center gap-3 mb-4">
                <MapPin size={24} className="text-accent" />
                <h3 className="font-serif text-lg">Private Shopping</h3>
              </div>
              <p className="text-sm text-muted-foreground">Exclusive shopping experience with priority access to new collections and personalized recommendations.</p>
            </div>
          </div>

          {/* Booking Form */}
          <div className="border border-border p-8 md:p-12">
            <h2 className="text-3xl font-serif mb-8">Schedule Your Session</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Name */}
                <div>
                  <label className="block text-sm font-medium mb-2">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    required
                    className="w-full bg-transparent border border-border rounded px-4 py-3 text-sm focus:outline-none focus:border-accent transition-colors"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium mb-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                    className="w-full bg-transparent border border-border rounded px-4 py-3 text-sm focus:outline-none focus:border-accent transition-colors"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-medium mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 (555) 000-0000"
                    required
                    className="w-full bg-transparent border border-border rounded px-4 py-3 text-sm focus:outline-none focus:border-accent transition-colors"
                  />
                </div>

                {/* Service */}
                <div>
                  <label className="block text-sm font-medium mb-2">Service Type</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full bg-background border border-border rounded px-4 py-3 text-sm focus:outline-none focus:border-accent transition-colors cursor-pointer"
                  >
                    <option value="personal-styling">Personal Styling</option>
                    <option value="wardrobe-audit">Wardrobe Audit</option>
                    <option value="private-shopping">Private Shopping</option>
                  </select>
                </div>

                {/* Date */}
                <div>
                  <label className="block text-sm font-medium mb-2">Preferred Date</label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    className="w-full bg-background border border-border rounded px-4 py-3 text-sm focus:outline-none focus:border-accent transition-colors cursor-pointer"
                  />
                </div>

                {/* Time */}
                <div>
                  <label className="block text-sm font-medium mb-2">Preferred Time</label>
                  <input
                    type="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    required
                    className="w-full bg-background border border-border rounded px-4 py-3 text-sm focus:outline-none focus:border-accent transition-colors cursor-pointer"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium mb-2">Additional Message (Optional)</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your style preferences, budget, or any special requests..."
                  rows={4}
                  className="w-full bg-transparent border border-border rounded px-4 py-3 text-sm focus:outline-none focus:border-accent transition-colors resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-foreground text-background py-3 text-sm uppercase tracking-[0.2em] font-medium hover:bg-muted-foreground transition-colors"
              >
                Book Appointment
              </button>
            </form>

            {/* Info */}
            <div className="mt-12 pt-8 border-t border-border">
              <p className="text-xs text-muted-foreground mb-6">
                Appointments are typically confirmed within 24 hours. You will receive an email confirmation with details about your session location and any preparation needed.
              </p>

              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Clock size={16} className="text-accent" />
                    <p className="text-xs uppercase tracking-widest font-medium">Session Duration</p>
                  </div>
                  <p className="text-sm text-muted-foreground">60-90 minutes</p>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin size={16} className="text-accent" />
                    <p className="text-xs uppercase tracking-widest font-medium">Location</p>
                  </div>
                  <p className="text-sm text-muted-foreground">New York, London, Paris</p>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar size={16} className="text-accent" />
                    <p className="text-xs uppercase tracking-widest font-medium">Availability</p>
                  </div>
                  <p className="text-sm text-muted-foreground">Tuesday - Saturday</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}

'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, Search, ChevronDown, Linkedin, Twitter, Facebook } from 'lucide-react'

export function HomePageComponent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-transparent z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold">
            DAT
          </Link>
          <div className="hidden md:flex items-center space-x-6">
            <NavItem href="/" label="Home" />
            <NavItem href="/about" label="About Us" />
            <NavDropdown label="Services">
              <DropdownItem href="/services/isr" label="ISR Platforms" />
              <DropdownItem href="/services/launch" label="Near-Space Launch" />
            </NavDropdown>
            <NavItem href="/solutions" label="Solutions" />
            <NavItem href="/alliance" label="Alliance" />
            <NavItem href="/news" label="News & Events" />
            <NavItem href="/team" label="Team" />
            <NavItem href="/contact" label="Contact Us" />
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="text-white hover:text-[#FFCC00] transition-colors"
            >
              <Search className="w-5 h-5" />
            </button>
            {isSearchOpen && (
              <input
                type="text"
                placeholder="Search..."
                className="bg-transparent border-b border-white focus:outline-none focus:border-[#FFCC00] transition-colors"
              />
            )}
          </div>
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <Menu className="w-6 h-6 text-white" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-40">
          <div className="container mx-auto px-4 py-20">
            <MobileNavItem href="/" label="Home" />
            <MobileNavItem href="/about" label="About Us" />
            <MobileNavItem href="/services" label="Services" />
            <MobileNavItem href="/solutions" label="Solutions" />
            <MobileNavItem href="/alliance" label="Alliance" />
            <MobileNavItem href="/news" label="News & Events" />
            <MobileNavItem href="/team" label="Team" />
            <MobileNavItem href="/contact" label="Contact Us" />
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <Image
          src="/hero-image.jpg"
          alt="High-altitude platform in the stratosphere"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative z-10 text-center space-y-6 max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight animate-fade-in-up">
            Building India's First Stratospheric AI-Based Autonomous Blimp
          </h1>
          <p className="text-xl md:text-2xl animate-fade-in-up animation-delay-300">
            We are pioneering the development of high-altitude, autonomous airships designed for Intelligence
            Surveillance and Reconnaissance (ISR) and near-space applications. Our solutions provide sustainable,
            cost-effective alternatives for defense, research, and commercial enterprises.
          </p>
          <p className="text-lg md:text-xl font-light animate-fade-in-up animation-delay-600">
            Redefining Surveillance and Near Space Access with HAPS Technology.
          </p>
          <button className="bg-[#FFCC00] text-black px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all animate-fade-in-up animation-delay-900">
            Explore Our Solutions
          </button>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-[#0A0A0A]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 space-y-6">
              <h2 className="text-3xl font-bold">Dashagriv Aerospace Technology</h2>
              <p className="text-lg text-gray-300">
                At DAT, we specialize in developing cutting-edge high-altitude platforms and near-space technologies.
                Our focus is on creating sustainable, AI-driven solutions for surveillance, research, and commercial
                applications in the stratosphere.
              </p>
            </div>
            <div className="md:w-1/2">
              <Image
                src="/stratosense-image.jpg"
                alt="StratoSense Platform"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Offerings Section */}
      <section className="py-20 bg-[#0F0F0F]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Key Offerings</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <OfferingCard
              title="ISR Platforms"
              description="Advanced high-altitude surveillance solutions for defense and security applications."
              icon="🛰️"
            />
            <OfferingCard
              title="Near-Space Launch Services"
              description="Cost-effective satellite deployment and testing services in near-space environments."
              icon="🚀"
            />
            <OfferingCard
              title="Platform-as-a-Service (PaaS)"
              description="Flexible, on-demand access to our high-altitude platforms for various applications."
              icon="☁️"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0A0A0A] border-t border-gray-800 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Quick Links</h3>
              <ul className="space-y-2">
                <FooterLink href="/" label="Home" />
                <FooterLink href="/about" label="About Us" />
                <FooterLink href="/services" label="Services" />
                <FooterLink href="/solutions" label="Solutions" />
                <FooterLink href="/alliance" label="Alliance" />
                <FooterLink href="/news" label="News & Events" />
                <FooterLink href="/team" label="Team" />
                <FooterLink href="/contact" label="Contact Us" />
                <FooterLink href="/privacy" label="Privacy Policy" />
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Contact Us</h3>
              <p>123 Aerospace Avenue</p>
              <p>Bangalore, Karnataka 560001</p>
              <p>India</p>
              <p>contact@dashagriv.com</p>
              <p>+91 123 456 7890</p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-[#FFCC00] hover:text-white transition-colors">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="#" className="text-[#FFCC00] hover:text-white transition-colors">
                  <Twitter className="w-6 h-6" />
                </a>
                <a href="#" className="text-[#FFCC00] hover:text-white transition-colors">
                  <Facebook className="w-6 h-6" />
                </a>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Newsletter</h3>
              <p>Stay updated with our latest news and developments.</p>
              <form className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="bg-gray-800 text-white px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-[#FFCC00]"
                />
                <button
                  type="submit"
                  className="bg-[#FFCC00] text-black px-4 py-2 rounded-r-md hover:bg-opacity-90 transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
          <div className="mt-12 text-center text-sm text-gray-500">
            © 2024 Dashagriv Aerospace Technology Private Limited. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}

function NavItem({ href, label }: { href: string, label: string }) {
  return (
    <Link href={href} className="text-white hover:text-[#FFCC00] transition-colors">
      {label}
    </Link>
  )
}

function NavDropdown({ label, children }: { label: string, children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-white hover:text-[#FFCC00] transition-colors"
      >
        {label} <ChevronDown className="w-4 h-4 inline-block" />
      </button>
      {isOpen && (
        <div className="absolute top-full left-0 bg-black bg-opacity-90 p-4 rounded-lg shadow-lg">
          {children}
        </div>
      )}
    </div>
  )
}

function DropdownItem({ href, label }: { href: string, label: string }) {
  return (
    <Link
      href={href}
      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
      role="menuitem"
    >
      {label}
    </Link>
  )
}

function MobileNavItem({ href, label }: { href: string, label: string }) {
  return (
    <Link href={href} className="block py-4 text-xl text-white hover:text-[#FFCC00] transition-colors">
      {label}
    </Link>
  )
}

function OfferingCard({ title, description, icon }: { title: string, description: string, icon: string }) {
  return (
    <div className="bg-[#1A1A1A] p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  )
}

function FooterLink({ href, label }: { href: string, label: string }) {
  return (
    <li>
      <Link
        href={href}
        className="text-gray-300 hover:text-white transition-colors"
      >
        {label}
      </Link>
    </li>
  )
}

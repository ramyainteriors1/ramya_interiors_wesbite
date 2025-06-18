"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Check, ChevronRight, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const galleryImages = [
  {
    src: "/images/homeinterior5.jpg",
    alt: "Luxurious living room with marble floors and crystal chandelier",
  },
  {
    src: "/images/homeinterior2.jpg",
    alt: "Elegant living room with marble TV wall and classical design",
  },
  {
    src: "/images/homeinterior.jpg",
    alt: "Contemporary living room with marble accent wall",
  },
  {
    src: "/images/homeinterior3.jpg",
    alt: "Modern living space with neutral tones and contemporary lighting",
  },
  {
    src: "/images/homeinterior1.jpg",
    alt: "Luxurious living room with ornate chandelier and decorative panels",
  },
  {
    src: "/images/homeinterior4.jpg",
    alt: "Grand living room with classical architecture and coffered ceiling",
  },
]

const features = [
  {
    title: "Landscape Design",
    description: "Beautiful garden and landscape designs that complement your home's architecture",
    icon: <Check className="h-5 w-5 text-blue-500" />,
  },
  {
    title: "Architectural Elements",
    description: "Stunning architectural features that enhance your home's curb appeal",
    icon: <Check className="h-5 w-5 text-blue-500" />,
  },
  {
    title: "Outdoor Lighting",
    description: "Strategic lighting solutions that highlight your home's best features",
    icon: <Check className="h-5 w-5 text-blue-500" />,
  },
  {
    title: "Garden Planning",
    description: "Thoughtful garden layouts that create beautiful outdoor living spaces",
    icon: <Check className="h-5 w-5 text-blue-500" />,
  },
  {
    title: "Material Selection",
    description: "Premium materials that ensure durability and timeless appeal",
    icon: <Check className="h-5 w-5 text-blue-500" />,
  },
  {
    title: "Maintenance Planning",
    description: "Low-maintenance designs that stay beautiful year-round",
    icon: <Check className="h-5 w-5 text-blue-500" />,
  },
  {
    title: "Space Planning",
    description: "Optimized layouts for maximum functionality and aesthetic appeal.",
    icon: <Check className="h-5 w-5 text-blue-500" />,
  },
  {
    title: "Color Palette Selection",
    description: "Harmonious color schemes that reflect your personal style.",
    icon: <Check className="h-5 w-5 text-blue-500" />,
  },
  {
    title: "Furniture Selection",
    description: "Curated furniture pieces that blend comfort and sophistication.",
    icon: <Check className="h-5 w-5 text-blue-500" />,
  },
  {
    title: "Custom Millwork",
    description: "Bespoke cabinetry and woodwork for a unique touch.",
    icon: <Check className="h-5 w-5 text-blue-500" />,
  },
  {
    title: "Lighting Design",
    description: "Ambient, task, and accent lighting to create the perfect mood.",
    icon: <Check className="h-5 w-5 text-blue-500" />,
  },
  {
    title: "Material Sourcing",
    description: "High-quality materials that ensure durability and style.",
    icon: <Check className="h-5 w-5 text-blue-500" />,
  },
]

export default function HomeExteriorDesigning() {
  const [activeImage, setActiveImage] = useState(0)

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="flex-shrink-0">
                <Image src="/logo.png" alt="Ramya Interior Logo" width={120} height={40} className="h-10 w-auto" />
              </Link>
            </div>

            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <Link
                  href="/"
                  className="text-slate-700 hover:text-blue-600 px-3 py-2 text-sm font-semibold tracking-wide transition-colors duration-300"
                >
                  HOME
                </Link>
                <Link
                  href="/#services"
                  className="text-slate-700 hover:text-blue-600 px-3 py-2 text-sm font-semibold tracking-wide transition-colors duration-300"
                >
                  SERVICES
                </Link>
                <Link
                  href="/#reviews"
                  className="text-slate-700 hover:text-blue-600 px-3 py-2 text-sm font-semibold tracking-wide transition-colors duration-300"
                >
                  REVIEWS
                </Link>
                <Link
                  href="/#contact"
                  className="text-slate-700 hover:text-blue-600 px-3 py-2 text-sm font-semibold tracking-wide transition-colors duration-300"
                >
                  CONTACT US
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 px-4 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 md:pr-12">
              <Link
                href="/#services"
                className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6 transition-colors"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                <span>Back to Services</span>
              </Link>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
                Home Interior and Exterior Design
              </h1>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Enhance your home's curb appeal with our comprehensive interior and exterior design services. From
                landscaping to architectural elements, we create stunning outdoor spaces that make a lasting impression.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                  <span className="text-slate-700">Landscape Design</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                  <span className="text-slate-700">Architectural Elements</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                  <span className="text-slate-700">Outdoor Lighting</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                  <span className="text-slate-700">Garden Planning</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-slate-800 hover:bg-slate-900 text-white font-semibold px-8 py-3 shadow-xl hover:shadow-2xl transition-all duration-300"
                  onClick={() => (window.location.href = "/#contact")}
                >
                  Get a Quote
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-slate-800 text-slate-800 hover:bg-slate-800 hover:text-white px-8 py-3 transition-all duration-300"
                  onClick={() => document.getElementById("gallery")?.scrollIntoView({ behavior: "smooth" })}
                >
                  View Portfolio
                </Button>
              </div>
            </div>
            <div className="md:w-1/2 mt-12 md:mt-0">
              <div className="relative rounded-lg overflow-hidden shadow-2xl">
                <img
                  src={galleryImages[0].src || "/placeholder.svg"}
                  alt={galleryImages[0].alt}
                  className="w-full h-[400px] md:h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-slate-800 text-white px-4 py-2 text-sm font-bold tracking-wider w-fit">
                    PREMIUM EXTERIORS
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
              Our Interior and Exterior Design Features
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We create stunning exterior designs that enhance your home's beauty and increase its value
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="border border-slate-200 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <CardContent className="p-6">
                  <div className="bg-slate-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-2">{feature.title}</h3>
                  <p className="text-slate-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
              Our Interior and Exterior Design Gallery
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Explore our collection of beautiful exterior designs we've created for our clients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
              <img
                src={galleryImages[activeImage].src || "/placeholder.svg"}
                alt={galleryImages[activeImage].alt}
                className="w-full h-full object-cover transition-opacity duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
              <Button
                variant="outline"
                size="icon"
                className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/90 backdrop-blur-sm border-2 border-slate-300 hover:bg-slate-800 hover:text-white shadow-xl"
                onClick={() => setActiveImage((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)}
              >
                <ArrowLeft className="h-6 w-6" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/90 backdrop-blur-sm border-2 border-slate-300 hover:bg-slate-800 hover:text-white shadow-xl"
                onClick={() => setActiveImage((prev) => (prev + 1) % galleryImages.length)}
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-slate-800">Design Process</h3>
              <p className="text-slate-600 leading-relaxed">
                Our exterior design process focuses on creating cohesive outdoor spaces that complement your home's
                architecture while enhancing its natural beauty and functionality.
              </p>

              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-blue-100 rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <span className="text-blue-600 font-semibold">1</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-slate-800">Site Analysis</h4>
                    <p className="text-slate-600">
                      We assess your property's unique characteristics, climate, and architectural style.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-100 rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <span className="text-blue-600 font-semibold">2</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-slate-800">Concept Development</h4>
                    <p className="text-slate-600">
                      We create detailed design concepts that enhance your home's curb appeal.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-100 rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <span className="text-blue-600 font-semibold">3</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-slate-800">Implementation</h4>
                    <p className="text-slate-600">
                      We execute the design with skilled craftsmen and premium materials.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-100 rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <span className="text-blue-600 font-semibold">4</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-slate-800">Final Touches</h4>
                    <p className="text-slate-600">
                      We add finishing touches and ensure every element works harmoniously together.
                    </p>
                  </div>
                </div>
              </div>

              <Button
                className="bg-slate-800 hover:bg-slate-900 text-white font-semibold w-full mt-6 py-3 transition-all duration-300"
                onClick={() => (window.location.href = "/#contact")}
              >
                Schedule a Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-slate-900 text-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Home with Complete Interior and Exterior Design?
          </h2>
          <p className="text-xl text-slate-300 mb-10 max-w-3xl mx-auto">
            Contact us today to schedule a consultation and get started on your exterior design project.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-10 py-4 shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
              onClick={() => (window.location.href = "/#contact")}
            >
              Get a Free Quote
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-10 py-4 transition-all duration-300 bg-white/10 backdrop-blur-sm font-bold"
              onClick={() => window.open("tel:+918130294300", "_self")}
            >
              <Phone className="mr-2 h-5 w-5" /> Call Us Now
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 border-t border-slate-700 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <Image src="/logo.png" alt="Ramya Interior Logo" width={150} height={60} className="h-12 w-auto mb-4" />
              <p className="text-slate-400 mb-4">
                Luxury Interior Design Studio specializing in home exterior design solutions.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Services</h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/services/modular-kitchen"
                    className="text-slate-400 hover:text-blue-400 transition-colors"
                  >
                    Premium Modular Kitchen
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/room-renovation"
                    className="text-slate-400 hover:text-blue-400 transition-colors"
                  >
                    Room's Design
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/wardrobe-designing"
                    className="text-slate-400 hover:text-blue-400 transition-colors"
                  >
                    Designer Wardrobe
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/living-room-design"
                    className="text-slate-400 hover:text-blue-400 transition-colors"
                  >
                    Living Room Design
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/bathroom-renovation"
                    className="text-slate-400 hover:text-blue-400 transition-colors"
                  >
                    Modern Bathroom Design
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/home-exterior-designing"
                    className="text-slate-400 hover:text-blue-400 transition-colors"
                  >
                    Home Interior and Exterior Design
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-slate-400 hover:text-blue-400 transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/#services" className="text-slate-400 hover:text-blue-400 transition-colors">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/#reviews" className="text-slate-400 hover:text-blue-400 transition-colors">
                    Reviews
                  </Link>
                </li>
                <li>
                  <Link href="/#contact" className="text-slate-400 hover:text-blue-400 transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Contact</h4>
              <address className="not-italic text-slate-400">
                <p className="mb-2">123 Design Street</p>
                <p className="mb-2">Interior City, IC 12345</p>
                <p className="mb-2">Phone: +91 98765 43210</p>
                <p>Email: info@ramyainterior.com</p>
              </address>
            </div>
          </div>
          <div className="border-t border-slate-700 mt-8 pt-8 text-center">
            <p className="text-slate-500">© 2024 Ramya Interior. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

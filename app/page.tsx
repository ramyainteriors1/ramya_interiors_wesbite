"use client"

import type React from "react"

import { useState, useEffect, useCallback } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Star, ArrowRight, Instagram, Facebook, Mail, Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const services = [
  {
    title: "Premium Modular Kitchen",
    description:
      "Transform your kitchen into a modern, functional space with our premium modular kitchen designs. We create efficient layouts that maximize storage and style with the finest materials.",
    image: "/images/kitchen3.jpg",
    features: ["Premium Cabinets", "Smart Storage", "Luxury Finishes", "Modern Appliances"],
    link: "/services/modular-kitchen",
  },
  {
    title: "Room's Design",
    description:
      "Complete room design solutions that breathe new life into your living spaces. From concept to completion, we handle every detail of your room design with precision and creativity.",
    image: "/images/bedroom1.jpg",
    features: ["Complete Design", "Space Planning", "Quality Materials", "Timely Delivery"],
    link: "/services/room-renovation",
  },
  {
    title: "Designer Wardrobe",
    description:
      "Maximize your storage with our designer wardrobe solutions. Designed to fit your space perfectly while keeping your belongings organized with premium craftsmanship.",
    image: "/images/wardrobe3.jpg",
    features: ["Custom Fit", "Organized Storage", "Premium Hardware", "Elegant Design"],
    link: "/services/wardrobe-designing",
  },
  {
    title: "Living Room Design",
    description:
      "Create the perfect gathering space for your family with our comprehensive living room design services. Comfort meets style in every detail of our thoughtfully crafted designs.",
    image: "/images/livingroom1.jpg",
    features: ["Furniture Selection", "Color Coordination", "Lighting Design", "Space Optimization"],
    link: "/services/living-room-design",
  },
  {
    title: "Modern Bathroom Design",
    description:
      "Transform your bathroom into a luxurious modern retreat with contemporary fixtures, elegant tiles, and smart storage solutions that create a spa-like experience.",
    image: "/images/bathroom3.jpg",
    features: ["Modern Fixtures", "Waterproofing", "Elegant Tiles", "Smart Storage"],
    link: "/services/bathroom-renovation",
  },
  {
    title: "Home Interior and Exterior Design",
    description:
      "Complete home transformation services covering both interior and exterior design. From landscaping to architectural elements, we create cohesive designs that enhance your entire property.",
    image: "/images/homeinterior5.jpg",
    features: ["Interior Design", "Exterior Design", "Landscape Planning", "Complete Solutions"],
    link: "/services/home-exterior-designing",
  },
]

const googleReviews = [
  {
    name: "Rahul Singh Pundhir",
    rating: 5,
    comment:
      "I had an amazing experience with Ramya Interiors for my home interior project. Their team was professional, creative, and attentive to every detail. They understood my vision and delivered innovative designs within my budget. The materials were top-quality, the craftsmanship was excellent, and the project was completed on time without any hassle. Their commitment to customer satisfaction was truly impressive. I'm thrilled with the results and highly recommend for anyone seeking reliable and elegant home interiors!",
    date: "4 months ago",
    verified: true,
  },
  {
    name: "Monu Singh",
    rating: 5,
    comment: "Wonderful work, great experience, best materials provided by Ramya interior",
    date: "1 month ago",
    verified: true,
  },
  {
    name: "Ranjeet Verma",
    rating: 5,
    comment: "Great work ramya interiors making my kitchen effortlessly.",
    date: "1 month ago",
    verified: true,
  },
  {
    name: "Samrat Kumar",
    rating: 5,
    comment: "Nice services and product.",
    date: "4 months ago",
    verified: true,
  },
]

export default function RamyaInterior() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [currentReview, setCurrentReview] = useState(0)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    let ticking = false

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 150)
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Auto-advance reviews carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % googleReviews.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const nextReview = useCallback(() => {
    setCurrentReview((prev) => (prev + 1) % googleReviews.length)
  }, [])

  const prevReview = useCallback(() => {
    setCurrentReview((prev) => (prev - 1 + googleReviews.length) % googleReviews.length)
  }, [])

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Create WhatsApp message
      const whatsappMessage = `New Contact Form Submission:
      
Name: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}
Phone: ${formData.phone}
Service: ${formData.service}
Message: ${formData.message}`

      const encodedMessage = encodeURIComponent(whatsappMessage)
      const whatsappUrl = `https://wa.me/918130294300?text=${encodedMessage}`

      // Open WhatsApp
      window.open(whatsappUrl, "_blank")

      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      })

      alert("Thank you! Your message has been sent via WhatsApp.")
    } catch (error) {
      alert("There was an error sending your message. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-gray-100">
      {/* Professional Navigation Bar - Only visible on scroll */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "translate-y-0 bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200"
            : "-translate-y-full"
        }`}
      >
        <div
          className={`transition-all duration-500 ${isScrolled ? "max-w-none mx-0 px-0" : "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"}`}
        >
          <div className={`flex justify-between items-center h-16 ${isScrolled ? "px-4 sm:px-6 lg:px-8" : ""}`}>
            {/* Logo - appears in nav on scroll */}
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center">
                <Image src="/logo.png" alt="Ramya Interior Logo" width={150} height={50} className="h-12 w-auto" />
              </Link>
            </div>

            {/* Navigation Links */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <button
                  onClick={() => scrollToSection("home")}
                  className="text-slate-700 hover:text-blue-600 px-3 py-2 text-sm font-semibold tracking-wide transition-colors duration-300"
                >
                  HOME
                </button>
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-slate-700 hover:text-blue-600 px-3 py-2 text-sm font-semibold tracking-wide transition-colors duration-300"
                >
                  SERVICES
                </button>
                <button
                  onClick={() => scrollToSection("reviews")}
                  className="text-slate-700 hover:text-blue-600 px-3 py-2 text-sm font-semibold tracking-wide transition-colors duration-300"
                >
                  REVIEWS
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-slate-700 hover:text-blue-600 px-3 py-2 text-sm font-semibold tracking-wide transition-colors duration-300"
                >
                  CONTACT US
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Company Name in Top-Left - Only visible when not scrolled */}
      <div
        className={`fixed top-4 left-4 z-40 transition-all duration-500 ${isScrolled ? "opacity-0 pointer-events-none" : "opacity-100"}`}
      >
        <h1 className="text-2xl font-bold bg-gradient-to-r from-amber-200 to-yellow-100 bg-clip-text text-transparent drop-shadow-lg">
          Ramya Interior
        </h1>
      </div>

      {/* Hero Section with Prominent Background Image */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Prominent Background Image */}
        <div className="absolute inset-0">
          <img
            src="/images/livingroom5.jpg"
            alt="Luxury Interior Design - Classical Living Room"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/70 via-slate-800/50 to-slate-900/70"></div>
        </div>

        <div className="text-center z-10 px-4 max-w-5xl mx-auto text-white">
          <h1 className="text-7xl md:text-9xl font-bold mb-8 text-white tracking-tight drop-shadow-2xl">
            Ramya Interior
          </h1>
          <h2 className="text-3xl md:text-5xl font-light mb-6 text-white/90 tracking-wide drop-shadow-lg">
            Luxury Interior Design
          </h2>
          <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed font-light drop-shadow-lg">
            We pride ourselves on being master builders, creating architectural and creative solutions to help people
            realize their vision and make them a reality.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              size="lg"
              className="bg-white text-slate-800 hover:bg-slate-100 font-semibold px-10 py-4 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              onClick={() => scrollToSection("services")}
            >
              EXPLORE PORTFOLIO <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-3 border-white text-white hover:bg-white hover:text-slate-800 px-10 py-4 transition-all duration-300 transform hover:scale-105 font-bold text-lg shadow-2xl backdrop-blur-sm bg-white/10 animate-pulse hover:animate-none"
              onClick={() => scrollToSection("contact")}
            >
              GET CONSULTATION
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section - List Format */}
      <section id="services" className="py-24 px-4 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
              Our Expertise
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light">
              From concept to completion, we deliver exceptional interior design solutions that transform spaces into
              extraordinary experiences
            </p>
          </div>

          {/* Services List */}
          <div className="space-y-16">
            {services.map((service, index) => (
              <Card key={index} className="bg-white shadow-2xl border border-slate-200 overflow-hidden">
                <CardContent className="p-0">
                  <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}>
                    <div
                      className={`relative h-96 lg:h-[500px] overflow-hidden ${index % 2 === 1 ? "lg:col-start-2" : ""}`}
                    >
                      <img
                        src={service.image || "/placeholder.svg"}
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
                      <div className="absolute bottom-6 left-6 right-6">
                        <div className="bg-slate-800 text-white px-4 py-2 text-sm font-bold tracking-wider w-fit">
                          PREMIUM SERVICE
                        </div>
                      </div>
                    </div>
                    <div
                      className={`p-12 lg:p-16 flex flex-col justify-center bg-slate-50/50 ${index % 2 === 1 ? "lg:col-start-1" : ""}`}
                    >
                      <h3 className="text-4xl font-bold mb-6 text-slate-800 tracking-tight">{service.title}</h3>
                      <p className="text-slate-600 mb-8 leading-relaxed text-lg font-light">{service.description}</p>
                      <ul className="space-y-3 mb-8">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-slate-700">
                            <div className="w-2 h-2 bg-blue-600 rounded-full mr-4"></div>
                            <span className="font-medium">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Link href={service.link}>
                        <Button className="bg-slate-800 hover:bg-slate-900 text-white font-semibold w-fit px-8 py-3 transition-all duration-300 transform hover:scale-105">
                          VIEW DETAILS
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Google Reviews Section */}
      <section id="reviews" className="py-24 px-4 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
              Google Reviews
            </h2>
            <p className="text-xl text-slate-600 font-light">What our clients say about our work</p>
            <div className="flex items-center justify-center mt-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 fill-yellow-400 text-yellow-400" />
                ))}
                <span className="ml-2 text-lg font-semibold text-slate-700">4.9 out of 5</span>
                <span className="ml-2 text-slate-600">({googleReviews.length} reviews)</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <a
              href="https://www.google.com/search?sca_esv=0c6b261fdab4471f&rlz=1C1RXQR_enIN1122IN1122&sxsrf=AE3TifP8Z7B8domdQ26AJ_cmqNsBxy6t0A:1749199856095&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-E_PbrXM0dRcD3_hslxgPN0ArQGpDj5hLIMwimbzPVwOPoiK_Gcq20RH6nOAqNLmpKsHcHgyCgO3VmbKlR1aoBZTbfTJo&q=Ramya+Interiors+Reviews&sa=X&ved=2ahUKEwjuiMGgtdyNAxUhxTgGHf1YAFsQ0bkNegQILxAE&biw=1536&bih=730&dpr=1.25"
              target="_blank"
              rel="noopener noreferrer"
              className="block cursor-pointer"
            >
              <div className="overflow-hidden">
                <div
                  className="flex transition-transform duration-700 ease-in-out"
                  style={{ transform: `translateX(-${currentReview * 100}%)` }}
                >
                  {googleReviews.map((review, index) => (
                    <div key={index} className="w-full flex-shrink-0 px-4">
                      <Card className="bg-white border border-slate-200 shadow-xl hover:shadow-2xl transition-all duration-500 max-w-4xl mx-auto hover:border-blue-300">
                        <CardContent className="p-8">
                          <div className="flex items-center mb-6">
                            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                              {review.name.charAt(0)}
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center justify-between">
                                <h3 className="font-semibold text-slate-800 text-lg">{review.name}</h3>
                                {review.verified && (
                                  <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full font-medium">
                                    Verified
                                  </span>
                                )}
                              </div>
                              <div className="flex items-center mt-1">
                                <div className="flex mr-2">
                                  {[...Array(review.rating)].map((_, i) => (
                                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                  ))}
                                </div>
                                <span className="text-slate-500 text-sm">{review.date}</span>
                              </div>
                            </div>
                          </div>
                          <p className="text-slate-600 text-lg leading-relaxed italic">"{review.comment}"</p>
                        </CardContent>
                      </Card>
                    </div>
                  ))}
                </div>
              </div>
            </a>

            {/* Navigation Buttons */}
            <Button
              variant="outline"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm border-2 border-slate-300 hover:bg-slate-800 hover:text-white shadow-xl"
              onClick={prevReview}
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm border-2 border-slate-300 hover:bg-slate-800 hover:text-white shadow-xl"
              onClick={nextReview}
            >
              <ChevronRight className="h-6 w-6" />
            </Button>

            {/* Progress Indicators */}
            <div className="flex justify-center mt-8 space-x-2">
              {googleReviews.map((_, index) => (
                <button
                  key={index}
                  className={`h-2 w-2 rounded-full transition-all duration-300 ${
                    index === currentReview ? "bg-slate-800 scale-125" : "bg-slate-300 hover:bg-slate-400"
                  }`}
                  onClick={() => setCurrentReview(index)}
                />
              ))}
            </div>
            <div className="text-center mt-8">
              <a
                href="https://www.google.com/search?sca_esv=0c6b261fdab4471f&rlz=1C1RXQR_enIN1122IN1122&sxsrf=AE3TifP8Z7B8domdQ26AJ_cmqNsBxy6t0A:1749199856095&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-E_PbrXM0dRcD3_hslxgPN0ArQGpDj5hLIMwimbzPVwOPoiK_Gcq20RH6nOAqNLmpKsHcHgyCgO3VmbKlR1aoBZTbfTJo&q=Ramya+Interiors+Reviews&sa=X&ved=2ahUKEwjuiMGgtdyNAxUhxTgGHf1YAFsQ0bkNegQILxAE&biw=1536&bih=730&dpr=1.25"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  View All Google Reviews
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-4 bg-gradient-to-b from-white to-slate-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
              Start Your Project
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto font-light">
              Ready to transform your space? Let's discuss your vision and bring it to life with our expertise
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Interactive Contact Form */}
            <Card className="bg-white border border-slate-200 shadow-2xl">
              <CardContent className="p-10">
                <h3 className="text-3xl font-bold mb-8 text-slate-800">Get In Touch</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-3">First Name</label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        placeholder="Your first name"
                        required
                        className="w-full p-3 border border-slate-300 rounded-lg focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 h-12"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-3">Last Name</label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        placeholder="Your last name"
                        required
                        className="w-full p-3 border border-slate-300 rounded-lg focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 h-12"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-3">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      required
                      className="w-full p-3 border border-slate-300 rounded-lg focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 h-12"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-3">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+91 98765 43210"
                      required
                      className="w-full p-3 border border-slate-300 rounded-lg focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 h-12"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-3">Service Required</label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      required
                      className="w-full p-4 border border-slate-300 rounded-lg focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 h-12"
                    >
                      <option value="">Select a service</option>
                      <option value="Premium Modular Kitchen">Premium Modular Kitchen</option>
                      <option value="Room's Design">Room's Design</option>
                      <option value="Designer Wardrobe">Designer Wardrobe</option>
                      <option value="Living Room Design">Living Room Design</option>
                      <option value="Modern Bathroom Design">Modern Bathroom Design</option>
                      <option value="Home Interior and Exterior Design">Home Interior and Exterior Design</option>
                      <option value="Complete Home Interior">Complete Home Interior</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-3">Project Details</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us about your project requirements, budget, and timeline..."
                      rows={5}
                      required
                      className="w-full p-3 border border-slate-300 rounded-lg focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                  </div>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-slate-800 hover:bg-slate-900 text-white font-bold py-4 text-lg tracking-wider transition-all duration-300 transform hover:scale-105 disabled:opacity-50"
                  >
                    {isSubmitting ? "SENDING..." : "SEND MESSAGE"}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="bg-slate-800 text-white border-0 shadow-2xl">
                <CardContent className="p-10">
                  <h3 className="text-3xl font-bold mb-8">Contact Information</h3>
                  <div className="space-y-8">
                    <div className="flex items-center">
                      <Phone className="h-8 w-8 mr-6 text-blue-400" />
                      <div>
                        <p className="font-bold text-lg">Phone</p>
                        <p className="text-lg text-slate-300">+91-8130294300</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Mail className="h-8 w-8 mr-6 text-blue-400" />
                      <div>
                        <p className="font-bold text-lg">Email</p>
                        <p className="text-lg text-slate-300">ramyainteriors1@gmail.com</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-8 w-8 mr-6 text-blue-400" />
                      <div>
                        <p className="font-bold text-lg">Studio Address</p>
                        <p className="text-lg text-slate-300">7/21, Block G, Kirti Nagar, Delhi, 110015</p>
                      </div>
                    </div>
                  </div>

                  {/* Social Media Links */}
                  <div className="mt-8 pt-8 border-t border-slate-700">
                    <h4 className="text-lg font-bold mb-4">Follow Us</h4>
                    <div className="flex space-x-4">
                      <a
                        href="https://www.instagram.com/ramyainteriors1"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 bg-slate-700 hover:bg-slate-600 px-4 py-2 rounded-lg transition-colors"
                      >
                        <Instagram className="h-5 w-5" />
                        <span>Instagram</span>
                      </a>
                      <a
                        href="https://www.facebook.com/DesignVilla0211"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 bg-slate-700 hover:bg-slate-600 px-4 py-2 rounded-lg transition-colors"
                      >
                        <Facebook className="h-5 w-5" />
                        <span>Facebook</span>
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white border border-slate-200 shadow-2xl">
                <CardContent className="p-10">
                  <h3 className="text-3xl font-bold mb-8 text-slate-800">Why Choose Ramya Interior?</h3>
                  <ul className="space-y-6">
                    <li className="flex items-start">
                      <div className="w-3 h-3 bg-blue-600 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                      <div>
                        <p className="font-bold text-slate-800 text-lg">Award-Winning Design</p>
                        <p className="text-slate-600">Recognized excellence in luxury interior design</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="w-3 h-3 bg-blue-600 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                      <div>
                        <p className="font-bold text-slate-800 text-lg">Premium Materials</p>
                        <p className="text-slate-600">Only the finest materials and finishes</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="w-3 h-3 bg-blue-600 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                      <div>
                        <p className="font-bold text-slate-800 text-lg">Personalized Service</p>
                        <p className="text-slate-600">Tailored solutions for every client</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="w-3 h-3 bg-blue-600 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                      <div>
                        <p className="font-bold text-slate-800 text-lg">Guaranteed Satisfaction</p>
                        <p className="text-slate-600">Your vision, perfectly executed</p>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Footer */}
      <footer className="bg-slate-900 border-t border-slate-800 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <Image src="/logo.png" alt="Ramya Interior Logo" width={150} height={60} className="h-12 w-auto mb-4" />
              <p className="text-slate-400 mb-4">
                Luxury Interior Design Studio creating exceptional spaces that transform lives.
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
                <p className="mb-2">7/21, Block G, Kirti Nagar</p>
                <p className="mb-2">Delhi, 110015</p>
                <p className="mb-2">Phone: +91-8130294300</p>
                <p>Email: ramyainteriors1@gmail.com</p>
              </address>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-8 pt-8 text-center">
            <p className="text-slate-500">© 2024 Ramya Interior. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/918130294300"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
      >
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
        </svg>
      </a>
    </div>
  )
}

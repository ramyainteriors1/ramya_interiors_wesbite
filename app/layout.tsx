import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Ramya Interior - Luxury Interior Design Studio",
  description:
    "Transform your space with Ramya Interior's premium design services. Specializing in modular kitchens, living rooms, wardrobes, and complete home interiors.",
  keywords:
    "interior design, modular kitchen, wardrobe design, living room design, bathroom renovation, home interior, Delhi interior designer",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

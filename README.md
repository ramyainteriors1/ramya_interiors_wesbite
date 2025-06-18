# Ramya Interior Website

A luxury interior design website built with Next.js 14, React, and Tailwind CSS.

## Getting Started

### Prerequisites

Make sure you have Node.js installed on your computer. You can download it from [nodejs.org](https://nodejs.org/)

### Installation

1. **Clone or download the project files**
   
2. **Open terminal/command prompt in the project folder**

3. **Install dependencies:**
   \`\`\`bash
   npm install
   \`\`\`

4. **Run the development server:**
   \`\`\`bash
   npm run dev
   \`\`\`

5. **Open your browser and go to:**
   \`\`\`
   http://localhost:3000
   \`\`\`

### Build for Production

To create a production build:

\`\`\`bash
npm run build
npm start
\`\`\`

## Project Structure

\`\`\`
ramya-interior/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   └── services/
│       ├── modular-kitchen/
│       ├── room-renovation/
│       ├── wardrobe-designing/
│       ├── living-room-design/
│       ├── bathroom-renovation/
│       └── home-exterior-designing/
├── components/
│   └── ui/
├── lib/
├── public/
│   ├── logo.png
│   └── images/
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── next.config.js
\`\`\`

## Features

- Responsive design
- Modern UI with Tailwind CSS
- Image gallery with navigation
- Contact form with WhatsApp integration
- Google Reviews section
- Service pages for each offering
- SEO optimized

## Technologies Used

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Radix UI components
- Lucide React icons

## Troubleshooting

If you encounter issues:

1. **Delete node_modules and reinstall:**
   \`\`\`bash
   rm -rf node_modules
   npm install
   \`\`\`

2. **Clear Next.js cache:**
   \`\`\`bash
   rm -rf .next
   npm run dev
   \`\`\`

3. **Check Node.js version:**
   \`\`\`bash
   node --version
   \`\`\`
   (Should be 18.0.0 or higher)

## Support

For any issues, please check the console for error messages and ensure all dependencies are properly installed.

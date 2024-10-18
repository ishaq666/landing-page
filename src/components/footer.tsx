'use client'

import Image from 'next/image'
import { Facebook, Instagram, Mail, Phone } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="bg-black text-white py-8 border-t-4 border-[#00ff00]">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-start mb-8">
          {/* Left Section - Logo */}
          <div className="w-full sm:w-1/4 mb-6 sm:mb-0">
            <motion.div whileHover={{ scale: 1.05 }}>
              <Image src="/bringing-2.png?height=60&width=200" alt="Techformia Logo" width={200} height={60} />
            </motion.div>
          </div>

          {/* Center Section - Heading, Title, Paragraph, Images */}
          <div className="w-full sm:w-2/4 mb-6 sm:mb-0 py-4">
            <h2 className="text-2xl font-bold mb-2">
              <span className="text-[#00ff00]">TECHFORMIA</span>
            </h2>
            <p className="text-lg mb-2">TOP RATED DESIGN AGENCY</p>
            <p className="text-sm text-gray-400 mb-4">
              Keeping a keen eye on the evolving digital landscape in communication, with a steadily expanding team of skilled professionals.
            </p>
            <div className="flex space-x-5 py-3 ">
              <motion.img whileHover={{ scale: 1.1 }} src="/creativity-logo-1.png?height=30&width=60" alt="Bark" className="h-8" />
              <motion.img whileHover={{ scale: 1.1 }} src="/creativity-logo-3.png?height=30&width=60" alt="Clutch" className="h-8" />
              <motion.img whileHover={{ scale: 1.1 }} src="https://cdn.trustpilot.net/brand-assets/4.3.0/logo-white.svg?height=30&width=60" alt="Trustpilot" className="h-8" />
            </div>
          </div>

          {/* Right Section - Contact */}
          <div className="w-full sm:w-1/4 py-4">
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <motion.span 
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-4 h-4 bg-[#00ff00] rounded-full mr-2"
              ></motion.span>
              Contact
            </h3>
            <motion.a
              href="tel:+12819752147"
              whileHover={{ scale: 1.05, x: 5 }}
              className="flex items-center text-gray-400 hover:text-white mb-2"
            >
              <Phone size={18} className="mr-2" />
              +1-281-975-2147
            </motion.a>
            <motion.a
              href="mailto:info@techformia.com"
              whileHover={{ scale: 1.05, x: 5 }}
              className="flex items-center text-gray-400 hover:text-white mb-2"
            >
              <Mail size={18} className="mr-2" />
              info@techformia.com
            </motion.a>
            <motion.a
              href="mailto:support@techformia.com"
              whileHover={{ scale: 1.05, x: 5 }}
              className="flex items-center text-gray-400 hover:text-white"
            >
              <Mail size={18} className="mr-2" />
              support@techformia.com
            </motion.a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-wrap justify-between items-center pt-4 border-t border-gray-800">
          {/* Left Bottom - Copyright */}
          <div className="w-full sm:w-auto mb-4 sm:mb-0">
            <p className="text-sm text-gray-400">
              COPYRIGHT © ALL RIGHTS RESERVED 2024 - TECHFORMIA LLC
            </p>
          </div>

          {/* Right Bottom - Social Media Icons */}
          <div className="w-full sm:w-auto">
            <div className="flex justify-center sm:justify-end space-x-4">
              {[Facebook, Instagram].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{ scale: 1.2, color: '#00ff00' }}
                  className="text-gray-400 hover:text-[#00ff00] transition-colors duration-200"
                >
                  <Icon size={24} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
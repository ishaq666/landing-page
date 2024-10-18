'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { MessageCircle, Menu as MenuIcon, X, Phone } from 'lucide-react'

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center pl-4 sm:pl-6 lg:pl-8">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.png"
                alt="FutureLand Logo"
                width={55}
                height={55}
                className="mr-3"
              />
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-4">
          <Button variant="ghost" size="lg" className="text-white hover:bg-white/20">
              <MessageCircle className="mr-2 h-5 w-5" />
              Chat
            </Button>
            <a href="tel:+12819752147">
              <Button variant="default" size="lg" className="bg-green-600 hover:bg-green-700 text-white">
                <Phone className="mr-2 h-5 w-5" />
                +1-281-975-2147
              </Button>
            </a>

          </div>
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:bg-white/20"
            >
              <span className="sr-only">Open menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <MenuIcon className="block h-6 w-6" aria-hidden="true" />
              )}
            </Button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/80 backdrop-blur-md">
            <div className="flex flex-col space-y-2 mt-4">
              <Button variant="ghost" size="sm" className="text-white hover:bg-white/20 justify-start">
                <MessageCircle className="mr-2 h-4 w-4" />
                Chat
              </Button>
              <Button variant="default" size="lg" className="bg-green-600 hover:bg-green-700 text-white justify-start">
                <Phone className="mr-2 h-5 w-5" />
                +1-281-975-2147
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
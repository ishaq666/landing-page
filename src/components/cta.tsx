'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { ReusablePopup } from '../components/reusable-popup'
import { FormData } from "@/types/formData"; // Import the shared type

export default function Component() {
  const handleSubmit = async (formData: FormData) => {
    console.log('Form submitted:', formData)
    try {
      const response = await fetch('/api/submit-quote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        console.log("Quote request submitted successfully")
      } else {
        console.error("Failed to submit quote request")
      }
    } catch (error) {
      console.error("Error submitting quote request:", error)
    }
  }

  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="w-full max-w-1xl mx-auto p-4">
      <div className="bg-black text-white rounded-xl shadow-2xl p-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-900 to-green-700 opacity-20 animate-pulse"></div>
        <div className="relative z-10 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="space-y-4 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
              Get A Free <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600 animate-gradient">Quote & Consultation</span>
            </h2>
            <p className="text-xl md:text-2xl font-light">Let&apos;s Discuss Your Project!</p>
            <p className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-green-500">
              866-423-2771
            </p>
          </div>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <ReusablePopup
              triggerButton={
                <Button className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-full transform transition duration-200 hover:scale-105 shadow-lg hover:shadow-xl">
                  ORDER NOW
                </Button>
              }
              onSubmit={handleSubmit}
            />
            <Button className="bg-white text-black hover:bg-gray-100 font-bold py-3 px-6 rounded-full transform transition duration-200 hover:scale-105 shadow-lg hover:shadow-xl border-2 border-green-600">
              CHAT NOW
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

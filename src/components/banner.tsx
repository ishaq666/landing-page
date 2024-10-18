'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { MessageCircle } from "lucide-react"

export default function Banner() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectDetails: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState<string | null>(null)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prevState => ({ ...prevState, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage(null)
  
    try {
      const response = await fetch('/api/submit-quote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
  
      if (response.ok) {
        setSubmitMessage("Your quote request has been submitted successfully!")
        setFormData({ name: '', email: '', projectDetails: '' })
      } else {
        throw new Error('Failed to submit the form')
      }
    } catch {
      setSubmitMessage("An error occurred. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }
  

  return (
    <div className="relative min-h-screen flex items-center overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        className="absolute w-full h-full object-cover"
      >
        <source src="/about-us-banner.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60" />

      {/* Content */}
      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Left side: Heading, Text, and Buttons */}
          <div className="w-full lg:w-1/2 text-white mb-8 lg:mb-0">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              LAUNCHING INNOVATION INTO ORBIT
            </h1>
            <p className="text-lg mb-6">
              Embark on a cosmic journey with us, where we navigate the digital universe,
              merging creativity and expertise to propel your projects beyond the stars.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Button
              variant="default"
              size="lg"
              className="text-white hover:bg-white/20"
              onClick={() => {
                const portfolioSection = document.getElementById('portfolio');
                if (portfolioSection) {
                  portfolioSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Explore Now
            </Button>
              <Button variant="default" size="lg" className="bg-green-600 hover:bg-green-700 text-white">
                <MessageCircle className="mr-2 h-5 w-5" />
                Chat With Us!
              </Button>
            </div>
          </div>

          {/* Right side: Sign-up Form */}
          <div className="w-full lg:w-5/12">
            <form onSubmit={handleSubmit} className="bg-white bg-opacity-10 backdrop-blur-md p-6 rounded-lg">
              <h2 className="text-2xl font-bold text-white mb-4">Request a Quote</h2>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="name" className="text-white">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="bg-white bg-opacity-20 text-white placeholder-gray-300"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-white">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="bg-white bg-opacity-20 text-white placeholder-gray-300"
                    placeholder="your@email.com"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="projectDetails" className="text-white">Project Details</Label>
                  <Textarea
                    id="projectDetails"
                    name="projectDetails"
                    value={formData.projectDetails}
                    onChange={handleInputChange}
                    className="bg-white bg-opacity-20 text-white placeholder-gray-300"
                    placeholder="Tell us about your project"
                    rows={4}
                    required
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-green-600 hover:bg-green-700 text-white"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Request'}
                </Button>
                {submitMessage && (
                  <p className={`text-center ${submitMessage.includes("error") ? "text-red-500" : "text-green-500"}`}>
                    {submitMessage}
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
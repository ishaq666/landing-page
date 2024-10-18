'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { useToast } from "@/hooks/use-toast"
import { Label } from '@/components/ui/label'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false) // New state for submission status
  const { toast } = useToast()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prevState => ({ ...prevState, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)

    try {
      const response = await fetch('/api/submit-quote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error('Network response was not ok')
      }

      toast({
        title: "Message Sent!",
        description: "Your form has been submitted successfully. We'll get back to you as soon as possible.",
      })

      setFormData({ name: '', email: '', message: '' })
      setSubmitted(true) // Set submitted to true on successful submission
    } catch {
      toast({
        title: "Error!",
        description: "There was a problem sending your message. Please try again later.",
      })
      setSubmitted(false) // Ensure submitted is false if there's an error
    }
  }

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-green-900 to-green-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Get FREE Consultation From A Certified Web Developer!</h2>
          <p className="text-xl text-gray-400">Get in touch with our team</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <Card className="bg-black border-green-600">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-white">Send us a message</CardTitle>
              <CardDescription className="text-gray-400">
                We&apos;d love to hear from you. Fill out the form below and we&apos;ll get back to you as soon as possible.
              </CardDescription>
            </CardHeader>
            <CardContent>
              {submitted && (
                <div className="mb-4 p-4 bg-green-700 text-white rounded">
                  Your message has been submitted successfully!
                </div>
              )}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-white">Name</Label>
                  <Input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-gray-200 text-black border-green-600"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-white">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-gray-200 text-black border-green-600"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-white">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="bg-gray-200 text-black border-green-600"
                    rows={5}
                  />
                </div>
                <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
          <div className="relative h-full min-h-[400px] rounded-lg overflow-hidden">
            <Image
              src="/mobile-app-bg.png?height=600&width=800"
              alt="Contact us"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-2">Feel free to reach us!</h3>
                <p className="text-gray-200">info@techformia.com</p>
                <p className="text-gray-200">support@techformia.com</p>
                <p className="text-gray-200">+1-281-975-2147</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

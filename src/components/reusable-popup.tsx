'use client'

import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { X } from "lucide-react"

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface ReusablePopupProps {
  triggerButton: React.ReactNode;
  onSubmit: (formData: FormData) => Promise<void>; // Added onSubmit prop
}

export const ReusablePopup: React.FC<ReusablePopupProps> = ({ triggerButton, onSubmit }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [showConfirmation, setShowConfirmation] = useState(false)
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState<string | null>(null)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prevData => ({ ...prevData, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage(null)

    try {
      await onSubmit(formData); // Use the onSubmit prop
      setShowConfirmation(true)
      setFormData({ name: '', email: '', phone: '', message: '' }) // Clear form
    } catch (error) {
      console.error(error) // Log the error to the console
      setSubmitMessage("An error occurred. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleClose = () => {
    setIsOpen(false)
    setShowConfirmation(false)
  }

  return (
    <>
      {React.cloneElement(triggerButton as React.ReactElement, {
        onClick: () => setIsOpen(true)
      })}

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white text-black p-8 rounded-xl max-w-md w-full relative">
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              aria-label="Close"
            >
              <X size={24} />
            </button>
            {!showConfirmation ? (
              <>
                <h3 className="text-2xl font-bold mb-4">Request a Quote</h3>
                {submitMessage && (
                  <p className="text-red-500">{submitMessage}</p>
                )}
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white" disabled={isSubmitting}>
                    {isSubmitting ? 'Submitting...' : 'Submit'}
                  </Button>
                </form>
              </>
            ) : (
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4">Thank You!</h3>
                <p>Your form has been submitted successfully.</p>
                <Button
                  onClick={handleClose}
                  className="mt-4 bg-green-600 hover:bg-green-700 text-white"
                >
                  Close
                </Button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  )
}

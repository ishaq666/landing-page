"use client"

import { ShoppingBag, Palette, FileText, Gift, MessageCircle } from "lucide-react"
import { motion } from "framer-motion"
import { ReusablePopup } from '../components/reusable-popup'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

// Define the type of formData based on what you expect
interface FormData {
  // Define properties as per your form structure
  name: string;
  email: string;
  phone: string;
  message: string;
  // Add other properties as needed
}

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
      console.log("Order request submitted successfully")
    } else {
      console.error("Failed to submit order request")
    }
  } catch (error) {
    console.error("Error submitting order request:", error)
  }
}

const services = [
  {
    name: "Logo Design",
    description: "Custom logo creation to represent your brand",
    icon: Palette,
    features: [
      "3 unique concepts",
      "Unlimited revisions",
      "Final files in various formats",
      "Brand guidelines document",
    ],
  },
  {
    name: "E-commerce Store",
    description: "Fully functional online store setup",
    icon: ShoppingBag,
    features: [
      "Responsive design",
      "Product catalog setup",
      "Secure payment gateway integration",
      "Order management system",
      "Customer account creation",
    ],
  },
  {
    name: "Stationary Design",
    description: "Professional business stationary package",
    icon: FileText,
    features: [
      "Business card design",
      "Letterhead design",
      "Envelope design",
      "Email signature design",
    ],
  },
  {
    name: "Value Added Services",
    description: "Extra perks to boost your online presence",
    icon: Gift,
    features: [
      "Basic SEO optimization",
      "Social media profile setup",
      "Google My Business listing",
      "1 month of post-launch support",
    ],
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
    },
  },
}

export default function ComboPlans() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-black">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      <div className="relative z-10 container mx-auto py-10">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
          className="text-5xl font-bold text-center mb-6 text-white bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-green-600"
        >
          All-In-One Web Agency Combo Plan
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, type: "spring", stiffness: 100 }}
          className="text-center text-green-400 mb-10 text-xl"
        >
          Everything you need to establish a strong online presence for your business
        </motion.p>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-6"
        >
          <Card className="w-full backdrop-blur-sm bg-black/50 border-green-500 border-2">
            <CardHeader>
              <CardTitle className="text-3xl text-white">Complete Business Package</CardTitle>
              <CardDescription className="text-green-400 text-lg">Logo, E-commerce, Stationary, and More</CardDescription>
            </CardHeader>
            <CardContent>
              <motion.p 
                className="text-4xl font-bold mb-6 text-white"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
              >
                $2,999
              </motion.p>
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-white"
                variants={containerVariants}
              >
                {services.map((service) => (
                  <motion.div
                    key={service.name}
                    className="space-y-2 bg-green-900/20 p-4 rounded-lg border border-green-500/50 hover:border-green-400 transition-colors duration-300"
                    variants={itemVariants}
                  >
                    <div className="flex items-center space-x-2">
                      <service.icon className="h-6 w-6 text-green-400" />
                      <h3 className="font-semibold text-lg">{service.name}</h3>
                    </div>
                    <p className="text-sm text-green-300">{service.description}</p>
                    <ul className="space-y-1 mt-2">
                      {service.features.map((feature, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                          className="flex items-center text-sm text-green-200"
                        >
                          <svg className="w-4 h-4 mr-2 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </motion.div>
            </CardContent>
          </Card>
          <div className="flex flex-col sm:flex-row gap-4">
            <ReusablePopup
              triggerButton={
                <Button className="flex-1 bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-full transform transition duration-200 hover:scale-105 shadow-lg hover:shadow-xl hover:shadow-green-500/50">
                  Order Now
                </Button>
              }
              onSubmit={handleSubmit}
            />
            <Button variant="outline" className="flex-1 border-green-600 text-green-400 hover:bg-green-600 hover:text-white font-bold py-3 px-6 rounded-full transform transition duration-200 hover:scale-105 shadow-lg hover:shadow-xl hover:shadow-green-500/50">
              <MessageCircle className="mr-2 h-4 w-4" />
              Chat
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

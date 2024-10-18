'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ReusablePopup } from '../components/reusable-popup'
import { FormData } from "@/types/formData";


const handleSubmit = async (formData: FormData) => {
  console.log('Form submitted:', formData)
  try {
    const response = await fetch('/api/submit-order', {
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


const projects = [
  { name: 'Project 1', image: '/web agency portfolio1.jpg?height=300&width=400', category: 'Web', description: 'A responsive web application built with React and Next.js' },
  { name: 'Project 2', image: '/web agency portfolio2.jpg?height=300&width=400', category: 'Mobile', description: 'Cross-platform mobile app developed using React Native' },
  { name: 'Project 3', image: '/web agency portfolio3.jpg?height=300&width=400', category: 'AI', description: 'Machine learning model for image recognition built with latest technology' },
  
]

const categories = ['All', 'Web', 'Mobile', 'AI']

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [visibleProjects, setVisibleProjects] = useState(projects)

  useEffect(() => {
    if (selectedCategory === 'All') {
      setVisibleProjects(projects)
    } else {
      setVisibleProjects(projects.filter(project => project.category === selectedCategory))
    }
  }, [selectedCategory])

  return (
    <section id="portfolio" className="relative py-20 bg-gray-900">
      {/* Video Background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src="/looped-green-neon-background.mp4"
        autoPlay
        loop
        muted
      />
      {/* Dark overlay to enhance text visibility */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-60 z-10"></div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Portfolio</h2>
          <p className="text-xl text-gray-300">Showcasing our latest and greatest projects</p>
        </motion.div>

        <div className="flex justify-center space-x-4 mb-8">
          {categories.map((category, index) => (
            <Button
              key={index}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className="bg-green-600 hover:bg-green-700 text-black"
            >
              {category}
            </Button>
          ))}
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          animate="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.1 } }
          }}
        >
          {visibleProjects.map((project, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
              }}
            >
              <Card className="overflow-hidden bg-gray-800 border-green-950">
                <CardHeader className="p-0">
                  <div className="relative group overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.name}
                      width={400}
                      height={300}
                      className="w-full h-auto transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Button variant="secondary">View Project</Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-4 bg-green-700">
                  <CardTitle className="text-xl font-semibold text-black mb-2">{project.name}</CardTitle>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <Badge variant="secondary">{project.category}</Badge>
                </CardContent>
                <CardFooter className="p-4 bg-black flex justify-between items-center">
                  
                <ReusablePopup
                    triggerButton={          
                  <Button variant="default" size="lg" className="text-white hover:bg-white/20">
                    Get Started
                  </Button>
                    }
                    onSubmit={handleSubmit}
                  />
                  
                  
                  
                  <Button variant="default" size="lg" className="bg-green-600 hover:bg-green-700 text-white">
                    Demo
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-center mt-12"
        >
          
        </motion.div>
      </div>
    </section>
  )
}

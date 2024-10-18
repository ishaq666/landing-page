"use client"

import { useState } from "react"
import Image from 'next/image';
import ReactPlayer from "react-player"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { PlayCircle, X } from "lucide-react"

const testimonials = [
  {
    name: "Lisa Santos",
    role: "CEO of Relentless",
    avatar: "/user-02.png?height=40&width=40",
    content: "I found Geeksroot while searching for a company to develop a website for my new business, and was impressed by the clarity the team communicated to me before I chose them. I'm not tech savvy and they really made me understand clearly what would be included in our deal. Sid and Khalid worked on my site mainly, and they did a fabulous job. I highly recommend.",
    video: "https://youtu.be/5kO7I4OlAPY",
    thumbnail: "/Image1.png?height=180&width=320"
  },
  {
    name: "Kay Victoria Hindmarsh",
    role: "VP - Insydora",
    avatar: "/user-01.png?height=40&width=40",
    content: "I found Geeksroot while searching for a company to develop a website for my new business, and was impressed by the clarity the team communicated to me before I chose them. I'm not tech savvy and they really made me understand clearly what would be included in our deal. Sid and Khalid worked on my site mainly, and they did a fabulous job. I highly recommend.",
    video: "https://youtu.be/5kO7I4OlAPY",
    thumbnail: "/testi-thumbnail-2.jpg?height=180&width=320"
  },
  {
    name: "Joanna Maroussis",
    role: "Real Estate Agent",
    avatar: "/user-01.png?height=40&width=40",
    content: "What an awesome experience! Working with Geeks Root was an awesome and simple experience. We worked through few revisions and Tyler was always calm and encouraging- even if I had negative feedback to some of the design concepts. I was made comfortable and did not feel rushed through the process. I would happily recommend them for logo design. In the end- I have a perfect logo for my business.",
    video: "https://youtu.be/5kO7I4OlAPY",
    thumbnail: "/Image2.png?height=180&width=320"
  }
]

export default function Component() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null)

  const playVideo = (videoUrl: string) => {
    setActiveVideo(videoUrl)
  }

  const closeVideo = () => {
    setActiveVideo(null)
  }

  return (
    <div className="bg-black min-h-screen text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center mb-4">Testimonials</h2>
        <p className="text-xl text-center text-gray-300 mb-12">
          Hear what our clients have to say about their experience working with us.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-green-800 border-green-700 overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Avatar className="h-12 w-12 border-2 border-blue-500">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div className="ml-4">
                    <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                    <p className="text-sm text-green-200">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-300 mb-4">{testimonial.content}</p>
                <div 
                  className="relative group cursor-pointer" 
                  onClick={() => playVideo(testimonial.video)}
                >
                  <Image 
                    src={testimonial.thumbnail} 
                    alt={`${testimonial.name}'s video thumbnail`} 
                    className="w-full h-auto rounded-lg" 
                    width={500} // Set your desired width
                    height={300} // Set your desired height
                    layout="responsive" // Optional: use layout for responsive images
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <PlayCircle className="w-16 h-16 text-white" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      {activeVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="relative w-full max-w-4xl">
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 text-white"
              onClick={closeVideo}
            >
              <X className="h-6 w-6" />
            </Button>
            <ReactPlayer
              url={activeVideo}
              controls
              playing
              width="100%"
              height="auto"
              style={{ aspectRatio: "16 / 9" }}
            />
          </div>
        </div>
      )}
    </div>
  )
}
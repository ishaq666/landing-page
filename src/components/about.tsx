import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Cpu, Globe, Zap } from 'lucide-react'

const features = [
  {
    icon: Cpu,
    title: 'Advanced AI',
    description: 'Cutting-edge artificial intelligence powering our solutions',
  },
  {
    icon: Globe,
    title: 'Global Reach',
    description: 'Connecting businesses and individuals across the world',
  },
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Unparalleled speed and efficiency in all our services',
  },
]

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">About Us</h2>
          <p className="text-xl text-gray-400">Pioneering the future of technology</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-black border-green-600">
              <CardHeader>
                <feature.icon className="h-12 w-12 text-green-600 mb-4" />
                <CardTitle className="text-2xl font-bold text-white">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
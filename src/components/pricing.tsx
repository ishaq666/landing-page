"use client"

import { Button } from "@/components/ui/button"
import { CheckIcon } from "lucide-react"
import { ReusablePopup } from '../components/reusable-popup'
import { FormData } from "@/types/formData";

const handleSubmit = async (formData: FormData): Promise<void> => {
  console.log('Form submitted:', formData);
  // Example: Send data to the server
  try {
    const response = await fetch('/api/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    // Handle success (e.g., show a success message)
  } catch (error) {
    console.error('Error submitting form:', error);
    // Handle error (e.g., show an error message)
  }
};

const tiers = [
  {
    name: "Hobby",
    id: "tier-hobby",
    price: "$29",
    description: "The perfect plan if you're just getting started with our product.",
    features: [
      "25 products",
      "Up to 10,000 subscribers",
      "Advanced analytics",
      "24-hour support response time"
    ],
    cta: "Get started today",
    mostPopular: false,
  },
  {
    name: "Agency",
    id: "tier-agency",
    price: "$59",
    description: "Ideal for growing agencies and small businesses.",
    features: [
      "100 products",
      "Up to 50,000 subscribers",
      "Advanced analytics",
      "12-hour support response time",
      "Marketing automations"
    ],
    cta: "Start your trial",
    mostPopular: true,
  },
  {
    name: "Enterprise",
    id: "tier-enterprise",
    price: "$99",
    description: "Dedicated support and infrastructure for your company.",
    features: [
      "Unlimited products",
      "Unlimited subscribers",
      "Advanced analytics",
      "Dedicated support representative",
      "Marketing automations",
      "Custom integrations"
    ],
    cta: "Get started today",
    mostPopular: false,
  },
]

export default function Pricing() {
  return (
    <div className="relative isolate overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 -z-10 h-full w-full object-cover"
        poster="/logo-design-bg?height=1080&width=1920"
      >
        <source src="/looped-green-neon-background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 -z-10 bg-black/70 backdrop-blur-sm" aria-hidden="true" />
      <div className="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl" aria-hidden="true">
        <div
          className="mx-auto aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div className="px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center lg:max-w-4xl">
          <h2 className="text-base font-semibold leading-7 text-green-600">Pricing</h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-gray-100 sm:text-5xl">
            The right price for you, whoever you are
          </p>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-green-700">
          Qui iusto aut est earum eos quae. Eligendi est at nam aliquid ad quo reprehenderit in aliquid fugiat dolorum voluptatibus.
        </p>
        <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 items-center gap-y-6 sm:mt-20 sm:gap-y-0 lg:max-w-5xl lg:grid-cols-3">
          {tiers.map((tier, tierIdx) => (
            <div
              key={tier.id}
              className={`${
                tier.mostPopular
                  ? "relative bg-green-950 shadow-2xl"
                  : "bg-white/30 sm:mx-8 lg:mx-0"
              } rounded-3xl p-8 ring-1 ring-gray-900/10 sm:p-10 ${
                tierIdx === 0 ? "lg:rounded-r-none" : tierIdx === tiers.length - 1 ? "lg:rounded-l-none" : "lg:rounded-none"
              }`}
            >
              <h3
                id={tier.id}
                className={`text-base font-semibold leading-7 ${
                  tier.mostPopular ? "text-green-400" : "text-green-500"
                }`}
              >
                {tier.name}
              </h3>
              <p className="mt-4 flex items-baseline gap-x-2">
                <span
                  className={`text-5xl font-bold tracking-tight ${
                    tier.mostPopular ? "text-white" : "text-black"
                  }`}
                >
                  {tier.price}
                </span>
                <span className={`text-base ${tier.mostPopular ? "text-green-400" : "text-green-400"}`}>
                  /month
                </span>
              </p>
              <p
                className={`mt-6 text-base leading-7 ${
                  tier.mostPopular ? "text-gray-300" : "text-black"
                }`}
              >
                {tier.description}
              </p>
              <ul
                role="list"
                className={`mt-8 space-y-3 text-sm leading-6 ${
                  tier.mostPopular ? "text-gray-300" : "text-black"
                } sm:mt-10`}
              >
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <CheckIcon
                      className={`h-6 w-5 flex-none ${
                        tier.mostPopular ? "text-green-400" : "text-green-400"
                      }`}
                      aria-hidden="true"
                    />
                    {feature}
                  </li>
                ))}
              </ul>
              
              <ReusablePopup
                triggerButton={
              <Button
                aria-describedby={tier.id}
                className={`mt-8 block w-full ${
                  tier.mostPopular
                  ? "bg-green-500 text-black hover:bg-green-400 focus-visible:outline-indigo-500"
                  : "text-black ring-1 ring-inset ring-green-200 hover:ring-green-300 focus-visible:outline-green-600"
                  } rounded-md px-3.5 py-2.5 text-center text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 sm:mt-10`}
                  variant={tier.mostPopular ? "default" : "outline"}
                  >
                {tier.cta}
              </Button>
                }
                onSubmit={handleSubmit}
              />






            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
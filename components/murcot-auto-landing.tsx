"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function Component() {
  const [formData, setFormData] = useState({
    vin: "",
    year: "",
    make: "",
    model: "",
    mileage: "",
    name: "",
    phone: "",
    email: "",
    promoCode: "",
  })

  const [isVisible, setIsVisible] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    setIsVisible(true)
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  const scrollToVehicleDetails = () => {
    const element = document.getElementById('vehicle-details')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  // Don't render anything until mounted to prevent hydration mismatch
  if (!isMounted) {
    return (
      <div
        className="relative min-h-screen text-white bg-cover bg-center"
        style={{ backgroundImage: "url('/ea54560d-140f-4b1c-8c8f-f60ade8324e5.jpeg')" }}
      >
        <div className="absolute inset-0 bg-transparent" />
        <div className="relative max-w-7xl mx-auto p-3 sm:p-5">
          {/* Loading state that matches the final layout */}
          <div className="h-[65vh] p-4 sm:p-8 flex flex-col items-center justify-center">
            <div className="w-full flex flex-col sm:flex-row justify-between items-start mb-8 space-y-4 sm:space-y-0">
              <div>
                <h1 className="text-lg sm:text-2xl font-bold tracking-[-0.02em] uppercase sans-serif">MURCOTAUTO INC.</h1>
              </div>
              <div className="text-left sm:text-right space-y-1 text-xs sm:text-sm">
                <div>Licensed Dealer</div>
                <div>Secure Data</div>
                <div>Trusted Service</div>
              </div>
            </div>
            <div className="h-[50vh] flex items-center justify-center">
              <div className="text-center space-y-6">
                <p className="text-2xl sm:text-4xl font-bold tracking-tight px-4">
                  Done With Your Car? We Handle the Rest.
                  <br />
                  <span className="text-sm font-normal tracking-normal">No listings. No weird DMs. Just cash, convenience, and a quick goodbye.</span>
                </p>
                <div>
                  <Button
                    className="mt-10 bg-white text-black hover:bg-neutral-200 rounded-none py-3 sm:py-4 px-6 sm:px-8 text-sm sm:text-base font-bold tracking-tight sans-serif transition-all duration-300 transform hover:border-1 border-black hover:shadow-lg"
                  >
                    Get Your Free Quote
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div
      className="relative min-h-screen text-white bg-cover bg-center"
      style={{ backgroundImage: "url('/06c6a6fe-7ec9-454d-9edf-758ed0d0dd2b.jpeg')" }}
    >
      <div className="absolute inset-0 bg-transparent" />
      <div className="relative max-w-7xl mx-auto p-3 sm:p-5">
        {/* Single Column Layout */}
        <div className="space-y-0">
          {/* Header Section */}
          <div className="h-[70vh] p-4 sm:p-8 flex flex-col items-center justify-center">
            <div 
              className={`w-full flex flex-col sm:flex-row justify-between items-start mb-8 space-y-4 sm:space-y-0 transition-all duration-1000 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="animate-pulse">
                <h1 className="text-lg sm:text-2xl font-bold tracking-[-0.02em] uppercase sans-serif">MURCOTAUTO INC.</h1>
              </div>
              <div className="text-left sm:text-right space-y-1 text-xs sm:text-sm">
                <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>Licensed Dealer</div>
                <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>Secure Data</div>
                <div className="animate-fade-in-up" style={{ animationDelay: '0.6s' }}>Trusted Service</div>
              </div>
            </div>
            <div className="h-[50vh] flex items-center justify-center">
              <div className="text-center space-y-6 px-4">
                <p 
                  className={`text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight transition-all duration-1000 ease-out text-stone-200 ${
                    isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                  }`}
                  style={{ animationDelay: '0.8s' }}
                >
                  Done With Your Car? We Handle the Rest.
                  <br />
                  <span className="text-sm sm:text-lg font-normal tracking-normal">No listings. No weird DMs. Just cash, convenience, and a quick goodbye.</span>
                </p>
                <div 
                  className={`transition-all duration-1000 ease-out ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                  style={{ animationDelay: '1.2s' }}
                >
                  <Button
                    onClick={scrollToVehicleDetails}
                    className="mt-10 bg-stone-200/70 border-2 border-black text-black hover:bg-neutral-500 hover:text-white rounded-none py-4 sm:py-6 px-6 sm:px-8 text-sm sm:text-base font-bold tracking-tight font-mono uppercase transition-all duration-300 transform hover:border-2 border-black hover:shadow-lg"
                  >
                    Get Your Free Quote
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Why Choose / How It Works Section */}
          <div 
            className={`border border-white p-4 sm:p-8 grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-0 transition-all duration-1000 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
            style={{ animationDelay: '1s' }}
          >
            <div className="animate-slide-in-left">
              <h2 className="text-lg sm:text-xl font-bold tracking-[-0.02em] uppercase mb-4 sans-serif">WHY CHOOSE MURCOT</h2>
              <div className="space-y-1">
                <div className="flex items-start gap-3 text-xs sm:text-sm animate-fade-in-up" style={{ animationDelay: '1.2s' }}>
                  <span className="font-mono">01</span>
                  <span>Fast quote, same-day pickup</span>
                </div>
                <div className="flex items-start gap-3 text-xs sm:text-sm animate-fade-in-up" style={{ animationDelay: '1.4s' }}>
                  <span className="font-mono">02</span>
                  <span>No hidden fees</span>
                </div>
                <div className="flex items-start gap-3 text-xs sm:text-sm animate-fade-in-up" style={{ animationDelay: '1.6s' }}>
                  <span className="font-mono">03</span>
                  <span>Trusted by thousands</span>
                </div>
                <div className="flex items-start gap-3 text-xs sm:text-sm animate-fade-in-up" style={{ animationDelay: '1.8s' }}>
                  <span className="font-mono">04</span>
                  <span>We come to you</span>
                </div>
              </div>
            </div>

            <div className="animate-slide-in-right">
              <h2 className="text-lg sm:text-xl font-bold tracking-[-0.02em] uppercase mb-4 sans-serif">HOW IT WORKS</h2>
              <div className="space-y-1">
                <div className="flex items-start gap-3 text-xs sm:text-sm animate-fade-in-up" style={{ animationDelay: '1.3s' }}>
                  <span className="font-mono">01</span>
                  <span>Enter car details</span>
                </div>
                <div className="flex items-start gap-3 text-xs sm:text-sm animate-fade-in-up" style={{ animationDelay: '1.5s' }}>
                  <span className="font-mono">02</span>
                  <span>Get instant offer</span>
                </div>
                <div className="flex items-start gap-3 text-xs sm:text-sm animate-fade-in-up" style={{ animationDelay: '1.7s' }}>
                  <span className="font-mono">03</span>
                  <span>We pick it up & pay you</span>
                </div>
              </div>
            </div>
          </div>

          {/* Main Form Section */}
          <div 
            id="vehicle-details"
            className={`p-4 sm:p-30 bg-transparent text-white pt-10 sm:pt-20 pb-10 sm:pb-20 transition-all duration-1000 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
            style={{ animationDelay: '1.5s' }}
          >
            <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
              {/* Vehicle Details Grid */}
              <div className="grid grid-cols-1 gap-6 sm:gap-8">
                <h2 
                  className={`text-lg sm:text-xl font-bold tracking-[-0.02em] uppercase mb-4 sm:mb-6 sans-serif border-b border-white pb-2 sm:pb-3 transition-all duration-700 ease-out ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                  style={{ animationDelay: '1.7s' }}
                >
                  ENTER VEHICLE DETAILS
                </h2>

                <div className="grid grid-cols-1 gap-4 sm:gap-6">
                  <div 
                    className={`grid grid-cols-1 transition-all duration-700 ease-out ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}
                    style={{ animationDelay: '1.9s' }}
                  >
                    <Label htmlFor="vin" className="text-xs sm:text-sm font-medium uppercase tracking-[0.1em] mb-2 sans-serif text-green-500">
                      VIN NUMBER
                    </Label>
                    <Input
                      id="vin"
                      name="vin"
                      value={formData.vin}
                      onChange={handleInputChange}
                      className="border-0 border-white rounded-none bg-transparent focus:ring-0 font-mono text-xs sm:text-sm p-2 transition-all duration-300 hover:bg-white/10 focus:bg-white/10"
                      placeholder="Enter VIN number"
                    />
                  </div>

                  <div 
                    className={`grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 transition-all duration-700 ease-out ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}
                    style={{ animationDelay: '2.1s' }}
                  >
                    <div>
                      <Label htmlFor="year" className="text-xs sm:text-sm font-medium uppercase tracking-[0.1em] mb-2 sans-serif text-green-500">
                        YEAR
                      </Label>
                      <Input
                        id="year"
                        name="year"
                        value={formData.year} 
                        onChange={handleInputChange}
                        className="border-0 border-white rounded-none bg-transparent focus:ring-0 font-mono text-xs sm:text-sm p-2 transition-all duration-300 hover:bg-white/10 focus:bg-white/10"
                        placeholder="2020"
                      />
                    </div>
                    <div>
                      <Label htmlFor="make" className="text-xs sm:text-sm font-medium uppercase tracking-[0.1em] mb-2 sans-serif text-green-500">
                        MAKE
                      </Label>
                      <Input
                        id="make"
                        name="make"
                        value={formData.make}
                        onChange={handleInputChange}
                        className="border-0 border-white rounded-none bg-transparent focus:ring-0 font-mono text-xs sm:text-sm p-2 transition-all duration-300 hover:bg-white/10 focus:bg-white/10"
                        placeholder="Toyota"
                      />
                    </div>
                    <div>
                      <Label htmlFor="model" className="text-xs sm:text-sm font-medium uppercase tracking-[0.1em] mb-2 sans-serif text-green-500">
                        MODEL
                      </Label>
                      <Input
                        id="model"
                        name="model"
                        value={formData.model}
                        onChange={handleInputChange}
                        className="border-0 border-white rounded-none bg-transparent focus:ring-0 font-mono text-xs sm:text-sm p-2 transition-all duration-300 hover:bg-white/10 focus:bg-white/10"
                        placeholder="Camry"
                      />
                    </div>
                  </div>

                  <div 
                    className={`grid grid-cols-1 transition-all duration-700 ease-out ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}
                    style={{ animationDelay: '2.3s' }}
                  >
                    <Label htmlFor="mileage" className="text-xs sm:text-sm font-medium uppercase tracking-[0.1em] mb-2 sans-serif text-green-500">
                      MILEAGE (KM)
                    </Label>
                    <Input
                      id="mileage"
                      name="mileage"
                      value={formData.mileage}
                      onChange={handleInputChange}
                      className="border-0 border-white rounded-none bg-transparent focus:ring-0 font-mono text-xs sm:text-sm p-2 transition-all duration-300 hover:bg-white/10 focus:bg-white/10"
                      placeholder="50,000"
                    />
                  </div>
                </div>

                {/* Contact Information Grid */}
                <h2 
                  className={`text-lg sm:text-xl font-bold tracking-[-0.02em] uppercase mb-4 sm:mb-6 sans-serif border-b border-white pb-2 sm:pb-3 text-white transition-all duration-700 ease-out ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                  style={{ animationDelay: '2.5s' }}
                >
                  CONTACT INFORMATION
                </h2>

                <div className="grid grid-cols-1 gap-4 sm:gap-6">
                  <div 
                    className={`grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 transition-all duration-700 ease-out ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}
                    style={{ animationDelay: '2.7s' }}
                  >
                    <div>
                      <Label htmlFor="name" className="text-xs sm:text-sm font-medium uppercase tracking-[0.1em] mb-2 sans-serif text-green-500">
                        FULL NAME
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="border-0 border-white rounded-none bg-transparent focus:ring-0 font-mono text-xs sm:text-sm p-2 transition-all duration-300 hover:bg-white/10 focus:bg-white/10"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone" className="text-xs sm:text-sm font-medium uppercase tracking-[0.1em] mb-2 sans-serif text-green-500">
                        PHONE
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="border-0 border-white rounded-none bg-transparent focus:ring-0 font-mono text-xs sm:text-sm p-2 transition-all duration-300 hover:bg-white/10 focus:bg-white/10"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                  </div>

                  <div 
                    className={`grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 transition-all duration-700 ease-out ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}
                    style={{ animationDelay: '2.9s' }}
                  >
                    <div>
                      <Label htmlFor="email" className="text-xs sm:text-sm font-medium uppercase tracking-[0.1em] mb-2 sans-serif text-green-500">
                        EMAIL ADDRESS
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="border-0 border-white rounded-none bg-transparent focus:ring-0 font-mono text-xs sm:text-sm p-2 transition-all duration-300 hover:bg-white/10 focus:bg-white/10"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <Label
                        htmlFor="promoCode"
                        className="text-xs sm:text-sm font-medium uppercase tracking-[0.1em] mb-2 sans-serif text-green-500"
                      >
                        PROMO CODE
                      </Label>
                      <Input
                        id="promoCode"
                        name="promoCode"
                        value={formData.promoCode}
                        onChange={handleInputChange}
                        className="border-0 border-white rounded-none bg-transparent focus:ring-0 font-mono text-xs sm:text-sm p-2 transition-all duration-300 hover:bg-white/10 focus:bg-white/10"
                        placeholder="Optional"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div 
                className={`pt-6 sm:pt-10 transition-all duration-700 ease-out ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{ animationDelay: '3.1s' }}
              >
                <Button
                  type="submit"
                  className="mt-6 sm:mt-10 bg-stone-200 text-black hover:bg-stone-500 hover:text-white rounded-none py-4 sm:py-6 px-6 sm:px-8 text-sm sm:text-base font-bold tracking-tight font-mono uppercase transition-all duration-300 transform hover:border-2 border-black hover:shadow-lg w-full sm:w-auto"
                >
                  What's My Car Worth?
                </Button>
              </div>
            </form>
          </div>

          {/* Testimonials & FAQ Section */}
          <div 
            className={`border border-white p-4 sm:p-8 grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12 transition-all duration-1000 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
            style={{ animationDelay: '3.3s' }}
          >
            <div className="animate-slide-in-left">
              <h2 className="text-lg sm:text-xl font-bold tracking-[-0.02em] uppercase mb-4 sm:mb-6 sans-serif">TESTIMONIALS</h2>
              <div className="space-y-3 sm:space-y-4">
                <div 
                  className="border-l-2 border-white pl-3 sm:pl-4 transition-all duration-500 hover:border-l-4 hover:pl-4 sm:hover:pl-6"
                  style={{ animationDelay: '3.5s' }}
                >
                  <p className="text-xs sm:text-sm italic">{'"Sold in under 24h. Easiest sale ever."'}</p>
                  <p className="text-xs mt-1 font-mono">— SARAH M.</p>
                </div>
                <div 
                  className="border-l-2 border-white pl-3 sm:pl-4 transition-all duration-500 hover:border-l-4 hover:pl-4 sm:hover:pl-6"
                  style={{ animationDelay: '3.7s' }}
                >
                  <p className="text-xs sm:text-sm italic">{'"I didn\'t even leave my house."'}</p>
                  <p className="text-xs mt-1 font-mono">— MIKE R.</p>
                </div>
              </div>
            </div>

            <div className="animate-slide-in-right">
              <h2 className="text-lg sm:text-xl font-bold tracking-[-0.02em] uppercase mb-4 sm:mb-6 sans-serif">FREQUENTLY ASKED</h2>
              <div className="space-y-3 sm:space-y-4">
                <div 
                  className="text-xs sm:text-sm transition-all duration-300 hover:translate-x-2"
                  style={{ animationDelay: '3.6s' }}
                >
                  <p className="font-medium sans-serif">Do I need to visit a dealership?</p>
                  <p className="font-mono">→ Nope.</p>
                </div>
                <div 
                  className="text-xs sm:text-sm transition-all duration-300 hover:translate-x-2"
                  style={{ animationDelay: '3.8s' }}
                >
                  <p className="font-medium sans-serif">How fast do I get paid?</p>
                  <p className="font-mono">→ Within 24 hours.</p>
                </div>
                <div 
                  className="text-xs sm:text-sm transition-all duration-300 hover:translate-x-2"
                  style={{ animationDelay: '4s' }}
                >
                  <p className="font-medium sans-serif">Can I reject the quote?</p>
                  <p className="font-mono">→ Yes, no pressure.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-in-left {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slide-in-right {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-slide-in-left {
          animation: slide-in-left 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-slide-in-right {
          animation: slide-in-right 0.8s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  )
}

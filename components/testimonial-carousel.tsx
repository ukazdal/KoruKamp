"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import TestimonialCard from "@/components/testimonial-card"

const testimonials = [
  {
    name: "Ahmet Yılmaz",
    date: "Ağustos 2024",
    rating: 5,
    comment:
      "Harika bir kamp deneyimiydi. Özellikle duş alanları çok temiz ve bakımlıydı. Deniz muhteşemdi ve personel çok yardımcıydı. Kesinlikle tekrar geleceğiz!",
  },
  {
    name: "Ayşe Demir",
    date: "Temmuz 2024",
    rating: 4,
    comment:
      "Deniz manzarası muhteşem, çadır alanları geniş ve ferah. Yemek pişirme alanı çok kullanışlı. Çocuklarımız doğada güvenle oynayabildi.",
  },
  {
    name: "Mehmet Kaya",
    date: "Haziran 2024",
    rating: 5,
    comment:
      "Ailece gittiğimiz en güzel kamp alanlarından biri. Özel plajı sayesinde çocuklarımız güvenle denize girebildi. Akşam kamp ateşi etkinliği unutulmazdı.",
  },
  {
    name: "Zeynep Şahin",
    date: "Ağustos 2024",
    rating: 5,
    comment:
      "Doğayla iç içe huzurlu bir tatil geçirdik. Tesisler temiz ve bakımlıydı. Özellikle gece gökyüzündeki yıldızlar inanılmazdı. Kesinlikle tavsiye ediyorum.",
  },
  {
    name: "Can Özkan",
    date: "Temmuz 2024",
    rating: 4,
    comment:
      "Arkadaşlarımla gittiğimiz Korukamp'ta harika vakit geçirdik. Deniz temiz, kamp alanı düzenli ve güvenli. Çevredeki yürüyüş rotaları da çok güzeldi.",
  },
  {
    name: "Elif Yıldız",
    date: "Haziran 2024",
    rating: 5,
    comment:
      "Şehrin stresinden uzaklaşmak için ideal bir yer. Kuş sesleri ve deniz manzarası eşliğinde kahvaltı yapmak paha biçilemezdi. Mutlaka tekrar geleceğim.",
  },
]

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [visibleCount, setVisibleCount] = useState(3)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVisibleCount(1)
      } else if (window.innerWidth < 1024) {
        setVisibleCount(2)
      } else {
        setVisibleCount(3)
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % (testimonials.length - visibleCount + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - visibleCount : prevIndex - 1))
  }

  return (
    <div className="relative max-w-5xl mx-auto">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * (100 / visibleCount)}%)` }}
        >
          {testimonials.map((testimonial, index) => (
            <div key={index} className="flex-shrink-0" style={{ width: `${100 / visibleCount}%` }}>
              <div className="p-2">
                <TestimonialCard
                  name={testimonial.name}
                  date={testimonial.date}
                  rating={testimonial.rating}
                  comment={testimonial.comment}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <Button
        variant="outline"
        size="icon"
        className="absolute -left-4 top-1/2 transform -translate-y-1/2 bg-white shadow-md hover:bg-gray-100 z-10"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-5 w-5" />
        <span className="sr-only">Önceki</span>
      </Button>

      <Button
        variant="outline"
        size="icon"
        className="absolute -right-4 top-1/2 transform -translate-y-1/2 bg-white shadow-md hover:bg-gray-100 z-10"
        onClick={nextSlide}
      >
        <ChevronRight className="h-5 w-5" />
        <span className="sr-only">Sonraki</span>
      </Button>
    </div>
  )
}

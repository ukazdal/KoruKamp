import { Star, StarHalf, Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

interface TestimonialCardProps {
  name: string
  date: string
  rating: number
  comment: string
}

export default function TestimonialCard({ name, date, rating, comment }: TestimonialCardProps) {
  return (
    <Card className="h-full group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
      <div className="absolute -right-6 -top-6 opacity-5 group-hover:opacity-10 transition-opacity duration-300">
        <Quote className="h-24 w-24 rotate-12" />
      </div>
      <CardContent className="p-6 relative z-10">
        <div className="flex items-center mb-4">
          {[...Array(5)].map((_, i) => {
            if (i < Math.floor(rating)) {
              return (
                <Star
                  key={i}
                  className="h-5 w-5 fill-yellow-400 text-yellow-400 group-hover:scale-110 transition-transform duration-300"
                />
              )
            } else if (i === Math.floor(rating) && rating % 1 !== 0) {
              return (
                <StarHalf
                  key={i}
                  className="h-5 w-5 fill-yellow-400 text-yellow-400 group-hover:scale-110 transition-transform duration-300"
                />
              )
            } else {
              return (
                <Star
                  key={i}
                  className="h-5 w-5 text-gray-300 group-hover:scale-110 transition-transform duration-300"
                />
              )
            }
          })}
        </div>
        <p className="text-gray-700 mb-4 italic group-hover:text-gray-900 transition-colors duration-300">
          "{comment}"
        </p>
        <div className="flex justify-between items-center">
          <p className="font-semibold">{name}</p>
          <p className="text-sm text-gray-500">{date}</p>
        </div>
      </CardContent>
    </Card>
  )
}

import { Waves, Mountain, Flame, Bike, SpaceIcon as Yoga, Fish } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

interface ActivityCardProps {
  title: string
  description: string
  icon: string
}

export default function ActivityCard({ title, description, icon }: ActivityCardProps) {
  const getIcon = () => {
    switch (icon) {
      case "waves":
        return <Waves className="h-10 w-10 text-blue-500" />
      case "hiking":
        return <Mountain className="h-10 w-10 text-emerald-600" />
      case "fire":
        return <Flame className="h-10 w-10 text-orange-500" />
      case "bike":
        return <Bike className="h-10 w-10 text-red-500" />
      case "yoga":
        return <Yoga className="h-10 w-10 text-purple-500" />
      case "fishing":
        return <Fish className="h-10 w-10 text-cyan-500" />
      default:
        return <Mountain className="h-10 w-10 text-emerald-600" />
    }
  }

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full">
      <CardContent className="p-6 flex flex-col items-center text-center">
        <div className="mb-4 p-3 rounded-full bg-gray-100">{getIcon()}</div>
        <h3 className="font-bold text-lg mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </CardContent>
    </Card>
  )
}

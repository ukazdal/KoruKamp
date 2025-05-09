import type { LucideIcon } from "lucide-react"

interface FeatureCardProps {
  icon: LucideIcon
  title: string
  description: string
}

export default function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <div className="flex flex-col items-center text-center p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white hover:bg-emerald-50 border border-transparent hover:border-emerald-100">
      <div className="bg-emerald-100 p-4 rounded-full mb-4 transition-all duration-300 group-hover:bg-emerald-200 group-hover:scale-110">
        <Icon className="h-8 w-8 text-emerald-600" />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

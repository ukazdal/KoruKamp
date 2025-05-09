import { Card, CardContent } from "@/components/ui/card"

interface InstagramCardProps {
  imageUrl: string
  caption: string
}

export default function InstagramCard({ imageUrl, caption }: InstagramCardProps) {
  return (
    <Card className="overflow-hidden group cursor-pointer hover:shadow-lg transition-all duration-300">
      <div className="relative aspect-square overflow-hidden">
        <img
          src={imageUrl || "/placeholder.svg"}
          alt={caption}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
          <p className="text-white text-sm line-clamp-2">{caption}</p>
        </div>
      </div>
      <CardContent className="p-3 bg-white group-hover:bg-emerald-50 transition-colors duration-300">
        <p className="text-sm text-gray-600 line-clamp-1">{caption}</p>
      </CardContent>
    </Card>
  )
}

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Camera } from "lucide-react"

export default function GalleryPreview() {
  const galleryImages = [
    { src: "/images/tent1.png", alt: "Çadır alanı" },
    { src: "/images/beach1.png", alt: "Plaj alanı" },
    { src: "/images/cooking-area.png", alt: "Yemek pişirme alanı" },
    { src: "/images/shower.png", alt: "Duş alanı" },
    { src: "/images/insta1.png", alt: "Kamp ateşi" },
    { src: "/images/insta2.png", alt: "Gün batımı" },
  ]

  return (
    <section className="py-16 bg-emerald-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Korukamp'tan Kareler</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Kamp alanımızdan ve misafirlerimizin unutulmaz anlarından kareler
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative aspect-square overflow-hidden rounded-lg group cursor-pointer hover:shadow-xl transition-all duration-300"
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                <span className="text-white font-medium">{image.alt}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button asChild className="bg-emerald-600 hover:bg-emerald-700">
            <Link href="/galeri" className="flex items-center">
              <Camera className="mr-2 h-5 w-5" />
              Tüm Galeriyi Gör
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Camera, Download, Instagram, Share2 } from "lucide-react"

export default function GalleryPage() {
  // Galeri kategorileri ve resimleri
  const galleryCategories = [
    {
      id: "tum",
      name: "Tümü",
      images: [
        { src: "/images/tent1.png", alt: "Çadır alanı", caption: "Geniş ve ferah çadır alanlarımız" },
        { src: "/images/beach1.png", alt: "Plaj alanı", caption: "Masmavi denizimiz ve özel plajımız" },
        { src: "/images/cooking-area.png", alt: "Yemek pişirme alanı", caption: "Ortak yemek pişirme alanı" },
        { src: "/images/shower.png", alt: "Duş alanı", caption: "Temiz ve modern duş alanlarımız" },
        { src: "/images/insta1.png", alt: "Kamp ateşi", caption: "Akşam kamp ateşi etkinliğimiz" },
        { src: "/images/insta2.png", alt: "Gün batımı", caption: "Korukamp'tan muhteşem gün batımı" },
        { src: "/images/insta3.png", alt: "Deniz manzarası", caption: "Eşsiz deniz manzarası" },
        { src: "/images/insta4.png", alt: "Kamp alanı", caption: "Doğayla iç içe kamp alanımız" },
        { src: "/images/hero-bg.png", alt: "Genel görünüm", caption: "Korukamp genel görünüm" },
      ],
    },
    {
      id: "tesis",
      name: "Tesisler",
      images: [
        { src: "/images/tent1.png", alt: "Çadır alanı", caption: "Geniş ve ferah çadır alanlarımız" },
        { src: "/images/cooking-area.png", alt: "Yemek pişirme alanı", caption: "Ortak yemek pişirme alanı" },
        { src: "/images/shower.png", alt: "Duş alanı", caption: "Temiz ve modern duş alanlarımız" },
      ],
    },
    {
      id: "deniz",
      name: "Deniz & Plaj",
      images: [
        { src: "/images/beach1.png", alt: "Plaj alanı", caption: "Masmavi denizimiz ve özel plajımız" },
        { src: "/images/insta3.png", alt: "Deniz manzarası", caption: "Eşsiz deniz manzarası" },
      ],
    },
    {
      id: "etkinlik",
      name: "Etkinlikler",
      images: [
        { src: "/images/insta1.png", alt: "Kamp ateşi", caption: "Akşam kamp ateşi etkinliğimiz" },
        { src: "/images/insta4.png", alt: "Kamp alanı", caption: "Doğayla iç içe kamp alanımız" },
      ],
    },
    {
      id: "manzara",
      name: "Manzaralar",
      images: [
        { src: "/images/insta2.png", alt: "Gün batımı", caption: "Korukamp'tan muhteşem gün batımı" },
        { src: "/images/hero-bg.png", alt: "Genel görünüm", caption: "Korukamp genel görünüm" },
      ],
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[40vh] md:h-[50vh] w-full">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: "url('/images/beach1.png')" }}
        />
        <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Galeri</h1>
          <p className="text-xl text-white/90 max-w-2xl">Korukamp'ın eşsiz doğası ve unutulmaz anlarından kareler</p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="tum" className="max-w-6xl mx-auto">
            <div className="flex justify-center mb-8">
              <TabsList className="grid grid-cols-2 md:grid-cols-5">
                {galleryCategories.map((category) => (
                  <TabsTrigger key={category.id} value={category.id}>
                    {category.name}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {galleryCategories.map((category) => (
              <TabsContent key={category.id} value={category.id} className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.images.map((image, index) => (
                    <div
                      key={index}
                      className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
                    >
                      <div className="aspect-square relative">
                        <Image
                          src={image.src || "/placeholder.svg"}
                          alt={image.alt}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                        <h3 className="text-white font-medium">{image.alt}</h3>
                        <p className="text-white/80 text-sm">{image.caption}</p>
                        <div className="flex gap-2 mt-3">
                          <Button
                            size="sm"
                            variant="outline"
                            className="bg-white/20 text-white border-white/30 hover:bg-white/30"
                          >
                            <Share2 className="h-4 w-4 mr-1" />
                            <span className="text-xs">Paylaş</span>
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            className="bg-white/20 text-white border-white/30 hover:bg-white/30"
                          >
                            <Download className="h-4 w-4 mr-1" />
                            <span className="text-xs">İndir</span>
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Instagram Section */}
      <section className="py-16 bg-emerald-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <Instagram className="h-6 w-6 mr-2 text-emerald-600" />
              <h2 className="text-3xl font-bold">Instagram'da Biz</h2>
            </div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Daha fazla fotoğraf ve güncel etkinliklerimiz için Instagram hesabımızı takip edin
            </p>
          </div>

          <div className="flex justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
              asChild
            >
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="flex items-center">
                <Instagram className="h-5 w-5 mr-2" />
                Instagram'da Takip Et
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Photo Submission Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-emerald-50 rounded-xl p-8 md:p-12 shadow-sm">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-2/3">
                <div className="flex items-center mb-4">
                  <Camera className="h-6 w-6 text-emerald-600 mr-2" />
                  <h2 className="text-2xl font-bold">Fotoğraflarınızı Paylaşın</h2>
                </div>
                <p className="text-gray-600 mb-6">
                  Korukamp'ta çektiğiniz fotoğrafları bizimle paylaşın. En güzel kareler galerimizde ve sosyal medya
                  hesaplarımızda yer alabilir.
                </p>

                <div className="flex gap-4">
                  <Button className="bg-emerald-600 hover:bg-emerald-700">Fotoğraf Gönder</Button>
                  <Button variant="outline" className="border-emerald-600 text-emerald-600 hover:bg-emerald-50">
                    Detaylı Bilgi
                  </Button>
                </div>
              </div>

              <div className="md:w-1/3 flex justify-center">
                <div className="w-32 h-32 bg-emerald-100 rounded-full flex items-center justify-center">
                  <Camera className="h-16 w-16 text-emerald-600" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

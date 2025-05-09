import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Star, StarHalf, Quote } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function TestimonialsPage() {
  // Örnek yorumlar
  const testimonials = [
    {
      id: 1,
      name: "Ahmet Yılmaz",
      date: "Ağustos 2024",
      rating: 5,
      comment:
        "Harika bir kamp deneyimiydi. Özellikle duş alanları çok temiz ve bakımlıydı. Deniz muhteşemdi ve personel çok yardımcıydı. Çocuklarımızla gittiğimiz en güzel tatillerden biriydi. Kesinlikle tekrar geleceğiz!",
      likes: 24,
      replies: 2,
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 2,
      name: "Ayşe Demir",
      date: "Temmuz 2024",
      rating: 4,
      comment:
        "Deniz manzarası muhteşem, çadır alanları geniş ve ferah. Yemek pişirme alanı çok kullanışlı. Çocuklarımız doğada güvenle oynayabildi. Tek eksik akşamları biraz daha fazla aktivite olabilirdi. Yine de çok memnun kaldık ve arkadaşlarımıza tavsiye edeceğiz.",
      likes: 18,
      replies: 1,
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 3,
      name: "Mehmet Kaya",
      date: "Haziran 2024",
      rating: 5,
      comment:
        "Ailece gittiğimiz en güzel kamp alanlarından biri. Özel plajı sayesinde çocuklarımız güvenle denize girebildi. Akşam kamp ateşi etkinliği unutulmazdı. Tesisler temiz ve bakımlıydı. Personel her konuda yardımcı oldu. Kesinlikle tavsiye ediyorum.",
      likes: 32,
      replies: 3,
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 4,
      name: "Zeynep Şahin",
      date: "Ağustos 2024",
      rating: 5,
      comment:
        "Doğayla iç içe huzurlu bir tatil geçirdik. Tesisler temiz ve bakımlıydı. Özellikle gece gökyüzündeki yıldızlar inanılmazdı. Kamp alanının sessizliği ve huzuru tam aradığımız şeydi. Kesinlikle tavsiye ediyorum ve tekrar geleceğim.",
      likes: 27,
      replies: 0,
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 5,
      name: "Can Özkan",
      date: "Temmuz 2024",
      rating: 4,
      comment:
        "Arkadaşlarımla gittiğimiz Korukamp'ta harika vakit geçirdik. Deniz temiz, kamp alanı düzenli ve güvenli. Çevredeki yürüyüş rotaları da çok güzeldi. Duş ve tuvalet alanları temizdi. Tek eksik Wi-Fi bağlantısının bazı alanlarda zayıf olmasıydı. Yine de genel olarak çok memnun kaldık.",
      likes: 15,
      replies: 1,
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 6,
      name: "Elif Yıldız",
      date: "Haziran 2024",
      rating: 5,
      comment:
        "Şehrin stresinden uzaklaşmak için ideal bir yer. Kuş sesleri ve deniz manzarası eşliğinde kahvaltı yapmak paha biçilemezdi. Çadır alanları geniş ve düzenliydi. Personel çok ilgili ve yardımseverdi. Mutlaka tekrar geleceğim.",
      likes: 29,
      replies: 2,
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 7,
      name: "Burak Demir",
      date: "Ağustos 2024",
      rating: 4.5,
      comment:
        "Doğa ile iç içe olmak isteyenler için mükemmel bir yer. Deniz temiz ve berrak, plaj bakımlı. Duş ve tuvalet alanları düzenli olarak temizleniyor. Yemek pişirme alanları kullanışlı. Akşam etkinlikleri daha çeşitli olabilirdi ama genel olarak çok memnun kaldık.",
      likes: 21,
      replies: 0,
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 8,
      name: "Selin Yılmaz",
      date: "Temmuz 2024",
      rating: 5,
      comment:
        "Korukamp'ta geçirdiğimiz hafta sonu tatili beklentilerimizin ötesindeydi. Çadır alanları temiz ve düzenliydi. Plaj harika, deniz tertemiz. Akşam kamp ateşi başında diğer kampçılarla sohbet etmek çok keyifliydi. Kesinlikle tekrar geleceğiz.",
      likes: 33,
      replies: 4,
      image: "/placeholder.svg?height=100&width=100",
    },
  ]

  // Yıldız derecelendirmesi için yardımcı fonksiyon
  const renderStars = (rating: number) => {
    const stars = []
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 !== 0

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={`full-${i}`} className="h-5 w-5 fill-yellow-400 text-yellow-400" />)
    }

    if (hasHalfStar) {
      stars.push(<StarHalf key="half" className="h-5 w-5 fill-yellow-400 text-yellow-400" />)
    }

    const emptyStars = 5 - stars.length
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<Star key={`empty-${i}`} className="h-5 w-5 text-gray-300" />)
    }

    return stars
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[40vh] md:h-[50vh] w-full">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: "url('/images/insta2.png')" }}
        />
        <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Misafir Yorumları</h1>
          <p className="text-xl text-white/90 max-w-2xl">
            Korukamp'ta unutulmaz anlar yaşayan misafirlerimizin deneyimleri
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-600 mb-1">4.8/5</div>
              <p className="text-gray-600">Ortalama Puan</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-600 mb-1">500+</div>
              <p className="text-gray-600">Toplam Yorum</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-600 mb-1">%96</div>
              <p className="text-gray-600">Tavsiye Oranı</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-600 mb-1">%92</div>
              <p className="text-gray-600">Tekrar Gelen Misafir</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 gap-8">
              {testimonials.map((testimonial) => (
                <Card key={testimonial.id} className="overflow-hidden hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                        <Image
                          src={testimonial.image || "/placeholder.svg"}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center mb-1">
                          <h3 className="font-bold text-lg mr-2">{testimonial.name}</h3>
                          <span className="text-sm text-gray-500">{testimonial.date}</span>
                        </div>
                        <div className="flex mb-3">{renderStars(testimonial.rating)}</div>
                        <div className="relative">
                          <Quote className="absolute -left-1 -top-1 h-6 w-6 text-emerald-100 rotate-180" />
                          <p className="text-gray-700 mb-4 pl-5">{testimonial.comment}</p>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-gray-600">
                          <span className="text-gray-500 text-sm">{testimonial.date}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-12">
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" disabled>
                  Önceki
                </Button>
                <Button variant="outline" size="sm" className="bg-emerald-50 text-emerald-600">
                  1
                </Button>
                <Button variant="outline" size="sm">
                  2
                </Button>
                <Button variant="outline" size="sm">
                  3
                </Button>
                <Button variant="outline" size="sm">
                  Sonraki
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leave a Review Section */}
      <section className="py-16 bg-emerald-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold mb-4">Siz de Yorumunuzu Paylaşın</h2>
              <p className="text-gray-600">
                Korukamp deneyiminizi diğer misafirlerle paylaşın ve gelecekteki ziyaretçilere yardımcı olun
              </p>
            </div>

            <Card>
              <CardContent className="p-6">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Adınız Soyadınız
                      </label>
                      <Input id="name" placeholder="Adınız Soyadınız" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        E-posta Adresiniz
                      </label>
                      <Input id="email" type="email" placeholder="E-posta adresiniz" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Puanınız</label>
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className="h-8 w-8 cursor-pointer text-gray-300 hover:text-yellow-400 hover:fill-yellow-400 transition-colors"
                        />
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="comment" className="text-sm font-medium">
                      Yorumunuz
                    </label>
                    <Textarea id="comment" placeholder="Korukamp deneyiminizi paylaşın..." rows={5} />
                  </div>

                  <div className="flex justify-end">
                    <Button className="bg-emerald-600 hover:bg-emerald-700">Yorumu Gönder</Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Siz de Unutulmaz Bir Deneyim Yaşamak İster misiniz?</h2>
            <p className="text-gray-700 mb-8">
              Misafirlerimizin yorumlarından da görebileceğiniz gibi, Korukamp'ta sizi doğayla iç içe, huzur dolu bir
              tatil bekliyor. Hemen rezervasyon yapın ve bu deneyimin bir parçası olun.
            </p>
            <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700" asChild>
              <Link href="/#rezervasyon">Rezervasyon Yap</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

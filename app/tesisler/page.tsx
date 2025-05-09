"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tent, Waves, Utensils, Droplets, Coffee, ArrowRight } from "lucide-react"

export default function FacilitiesPage() {
  const facilities = [
    {
      id: "konaklama",
      name: "Konaklama",
      icon: <Tent className="h-8 w-8 text-emerald-600" />,
      title: "Konaklama Alanları",
      description: "Korukamp'ta konforlu ve doğayla iç içe konaklama seçenekleri",
      features: [
        {
          title: "Çadır Alanları",
          description:
            "Kendi çadırınızı kurabileceğiniz geniş ve düz alanlar. Elektrik bağlantısı bulunan noktalar mevcuttur.",
          image: "/images/tent1.png",
          details: [
            "Düz ve temiz zemin",
            "Ağaçlık gölgelik alanlar",
            "Elektrik bağlantı noktaları",
            "Çadır başına maksimum 4 kişi",
          ],
        },
        // {
        //   title: "Hazır Çadırlar",
        //   description:
        //     "Kendi çadırınızı getirmek istemeyenler için tam donanımlı hazır çadırlar. Konforlu yataklar ve temel kamp ekipmanları dahildir.",
        //   image: "/images/insta4.png",
        //   details: [
        //     "2, 4 ve 6 kişilik çadır seçenekleri",
        //     "Şişme yatak veya kamp yatağı",
        //     "LED kamp feneri",
        //     "Küçük masa ve sandalyeler",
        //     "Çadır önü oturma alanı",
        //   ],
        // },
      ],
    },
    {
      id: "plaj",
      name: "Plaj & Deniz",
      icon: <Waves className="h-8 w-8 text-blue-500" />,
      title: "Plaj ve Deniz Alanları",
      description: "Masmavi denizin ve altın sarısı kumun keyfini çıkarabileceğiniz özel plaj alanlarımız",
      features: [
        {
          title: "Özel Plaj",
          description:
            "Sadece kamp misafirlerimize özel plaj alanı. Temiz ve bakımlı kumsalda güneşlenebilir, masmavi denizde yüzebilirsiniz.",
          image: "/images/beach1.png",
          details: [
            "200 metre uzunluğunda özel plaj",
            "Şezlong ve şemsiyeler",
            "Duş ve soyunma kabinleri",
            "Çocuklar için güvenli yüzme alanı",
          ],
        },
        // {
        //   title: "Su Sporları",
        //   description:
        //     "Deniz keyfinizi artıracak çeşitli su sporları aktiviteleri. Kano, SUP ve şnorkel ekipmanları kiralayabilirsiniz.",
        //   image: "/images/insta3.png",
        //   details: ["Kano ve SUP kiralama", "Şnorkel ekipmanı", "Deniz yatağı", "Plaj voleybolu", "Deniz bisikleti"],
        // },
      ],
    },
    {
      id: "yemek",
      name: "Yemek Alanları",
      icon: <Utensils className="h-8 w-8 text-orange-500" />,
      title: "Yemek ve Mutfak Alanları",
      description: "Kendi yemeğinizi pişirebileceğiniz ortak alanlar ve kafeterya hizmetlerimiz",
      features: [
        {
          title: "Ortak Mutfak",
          description:
            "Kendi yemeğinizi pişirebileceğiniz tam donanımlı ortak mutfak alanı. Ocak, buzdolabı ve temel mutfak gereçleri mevcuttur.",
          image: "/images/cooking-area.png",
          details: [
            "Temel mutfak gereçleri",
            "Tezgah ve lavabo",
          ],
        },
        {
          title: "Mangal Alanı",
          description: "Doğanın içinde mangal keyfi yapabileceğiniz özel alanlar. Odun ve kömür temin edilebilir.",
          image: "/images/insta1.png",
          details: [
            "Oturma alanları",
            "Odun ve kömür satışı",
            "Yangın güvenlik ekipmanları",
            "Aydınlatmalı gece kullanımı",
          ],
        },
        {
          title: "Kafe & Restoran",
          description:
            "Yemek hazırlamak istemediğiniz günler için kafemizde yerel lezzetler ve temel yiyecekler sunuyoruz.",
          image: "/images/insta2.png",
          details: [
            "Sandviç ve atıştırmalıklar",
            "Sıcak ve soğuk içecekler",
          ],
        },
      ],
    },
    {
      id: "temizlik",
      name: "Duş & Tuvalet",
      icon: <Droplets className="h-8 w-8 text-cyan-500" />,
      title: "Temizlik Alanları",
      description: "Konforunuz için temiz ve modern duş ve tuvalet alanları",
      features: [
        {
          title: "Duş Alanları",
          description: "Temiz ve bakımlı duş kabinleri. Sıcak su 24 saat mevcuttur.",
          image: "/images/shower.png",
          details: [
            "6 adet kadın duş kabini",
            "6 adet erkek duş kabini",
          ],
        },
        {
          title: "Tuvalet Alanları",
          description: "Modern ve temiz tuvalet alanları. Düzenli olarak temizlenmektedir.",
          image: "/images/insta4.png",
          details: [
            "2 adet kadın tuvaleti",
            "2 adet erkek tuvaleti",
          ],
        },
        // {
        //   title: "Çamaşırhane",
        //   description: "Uzun konaklamalarda çamaşırlarınızı yıkayabileceğiniz çamaşırhane hizmeti.",
        //   image: "/images/insta1.png",
        //   details: [
        //     "Deterjan satışı",
        //     "Ütü hizmeti",
        //   ],
        // },
      ],
    },
    {
      id: "diger",
      name: "Diğer Hizmetler",
      icon: <Coffee className="h-8 w-8 text-amber-600" />,
      title: "Diğer Hizmetler ve Olanaklar",
      description: "Kamp deneyiminizi daha konforlu hale getirecek ek hizmetlerimiz",
      features: [
        {
          title: "Wi-Fi ve Şarj İstasyonları",
          description: "Ortak alanlarda ücretsiz Wi-Fi ve elektronik cihazlarınızı şarj edebileceğiniz istasyonlar.",
          image: "/images/insta2.png",
          details: [
            "Ortak alanlarda ücretsiz Wi-Fi",
            "10 adet şarj istasyonu",
            "Laptop kullanım alanı",
           
          ],
        },
        {
          title: "Market",
          description:
            "Temel ihtiyaçlarınızı karşılayabileceğiniz mini market. Gıda, içecek ve kamp malzemeleri bulunmaktadır.",
          image: "/images/insta3.png",
          details: [
            "Temel gıda maddeleri",
            "Soğuk içecekler",
            "Kamp malzemeleri",
            "Hijyen ürünleri",
          ],
        },
        {
          title: "Güvenlik",
          description: "7/24 güvenlik hizmeti ile güvenli bir kamp deneyimi sunuyoruz.",
          image: "/images/insta4.png",
          details: [
            "Giriş kontrol sistemi",
            "Aydınlatmalı yollar",
            "İlk yardım istasyonu",
            "Acil durum protokolleri",
          ],
        },
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
          style={{ backgroundImage: "url('/images/cooking-area.png')" }}
        />
        <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Tesislerimiz</h1>
          <p className="text-xl text-white/90 max-w-2xl">
            Korukamp'ta konforunuz için sunduğumuz tüm hizmet ve olanaklarımız
          </p>
        </div>
      </section>

      {/* Facilities Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Tesis ve Hizmetlerimiz</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Korukamp'ta doğayla iç içe bir tatil yaparken tüm konfor ihtiyaçlarınızı karşılayacak tesislerimiz
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-4xl mx-auto mb-12">
            {facilities.map((facility) => (
              <Card
                key={facility.id}
                className="hover:shadow-md transition-all duration-300 cursor-pointer group"
                onClick={() => document.getElementById(facility.id)?.scrollIntoView({ behavior: "smooth" })}
              >
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="mb-3 transform group-hover:scale-110 transition-transform duration-300">
                    {facility.icon}
                  </div>
                  <h3 className="font-medium text-sm md:text-base">{facility.name}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Facilities Sections */}
      {facilities.map((facility) => (
        <section key={facility.id} id={facility.id} className="py-16 bg-emerald-50 even:bg-white">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-center mb-8">
              <div className="bg-white p-3 rounded-full shadow-sm mr-4">{facility.icon}</div>
              <h2 className="text-3xl font-bold">{facility.title}</h2>
            </div>
            <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">{facility.description}</p>

            <div className="space-y-16 max-w-5xl mx-auto">
              {facility.features.map((feature, index) => (
                <div
                  key={index}
                  className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} items-center gap-8 lg:gap-12`}
                >
                  <div className="lg:w-1/2">
                    <div className="relative h-64 md:h-80 w-full rounded-lg overflow-hidden shadow-xl">
                      <Image
                        src={feature.image || "/placeholder.svg"}
                        alt={feature.title}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>
                  <div className="lg:w-1/2">
                    <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                    <p className="text-gray-700 mb-6">{feature.description}</p>
                    <ul className="space-y-2">
                      {feature.details.map((detail, i) => (
                        <li key={i} className="flex items-start">
                          <ArrowRight className="h-5 w-5 text-emerald-500 mr-2 flex-shrink-0" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Site Map Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Kamp Alanı Haritası</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Korukamp'ta tüm tesislerimizin yerleşimini gösteren harita
            </p>
          </div>

          <div className="max-w-4xl mx-auto bg-emerald-50 p-8 rounded-lg shadow-sm">
            <div className="aspect-video relative rounded-lg overflow-hidden shadow-md">
              <Image
                src="/placeholder.svg?height=600&width=1200"
                alt="Korukamp Alanı Haritası"
                fill
                className="object-cover"
              />
            </div>

            <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="flex items-center">
                <div className="w-4 h-4 bg-emerald-500 rounded-full mr-2"></div>
                <span className="text-sm">Çadır Alanları</span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 bg-blue-500 rounded-full mr-2"></div>
                <span className="text-sm">Plaj ve Deniz</span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 bg-orange-500 rounded-full mr-2"></div>
                <span className="text-sm">Yemek Alanları</span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 bg-cyan-500 rounded-full mr-2"></div>
                <span className="text-sm">Duş ve Tuvaletler</span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 bg-purple-500 rounded-full mr-2"></div>
                <span className="text-sm">Ortak Alanlar</span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 bg-red-500 rounded-full mr-2"></div>
                <span className="text-sm">Resepsiyon</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-emerald-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Tesislerimizi Keşfetmeye Hazır mısınız?</h2>
            <p className="text-gray-700 mb-8">
              Doğanın kalbinde, tüm konfor ihtiyaçlarınızı karşılayacak tesislerimizle unutulmaz bir kamp deneyimi için
              hemen rezervasyon yapın.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700" asChild>
                <Link href="/#rezervasyon">Rezervasyon Yap</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-emerald-600 text-emerald-600 hover:bg-emerald-50"
                asChild
              >
                <Link href="/galeri">Galeriyi Görüntüle</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

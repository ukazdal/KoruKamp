"use client"

import Link from "next/link"
import Image from "next/image"
import {
  Instagram,
  MapPin,
  Utensils,
  Droplets,
  Waves,
  Tent,
  Wind,
  Mountain,
  Sun,
  Users,
  Heart,
  Coffee,
  TreePine,
  Leaf,
  ShieldCheck,
  Star,
  ArrowRight,
  Calendar,
  Camera,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import InstagramFeed from "@/components/instagram-feed"
import ReservationForm from "@/components/reservation-form"
import FeatureCard from "@/components/feature-card"
import AnimatedTent from "@/components/animated-tent"
import ActivityCard from "@/components/activity-card"
import SeasonalSection from "@/components/seasonal-section"
import TestimonialCarousel from "@/components/testimonial-carousel"
import FaqSection from "@/components/faq-section"
import GalleryPreview from "@/components/gallery-preview"
import NewsletterSignup from "@/components/newsletter-signup"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] w-full">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div
          className="absolute inset-0 bg-cover bg-center z-0 scale-100 hover:scale-105 transition-transform duration-10000 ease-out"
          style={{ backgroundImage: "url('/images/hero-bg.png')" }}
        />
        <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center items-start">
          <div className="max-w-2xl bg-black/30 backdrop-blur-sm p-6 rounded-lg border border-white/10 transform transition-all duration-500 hover:bg-black/40 hover:backdrop-blur-md">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Doğanın Kalbinde <span className="text-emerald-400">Huzur</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mb-8">
              Çanakkale Gelibolu Koruköy'de deniz, doğa ve huzurun buluştuğu eşsiz bir kamp deneyimi
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-emerald-600 hover:bg-emerald-700 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-600/20"
                onClick={() => document.getElementById("rezervasyon")?.scrollIntoView({ behavior: "smooth" })}
              >
                Rezervasyon Yap
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-green-500 border-white hover:bg-white/20 transition-all duration-300"
              >
                <Link href="/hakkimizda">Keşfet</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-10 left-10 z-20 text-white/70 hidden md:block">
          <Mountain className="h-12 w-12 animate-pulse" />
        </div>
        <div className="absolute top-10 right-10 z-20 text-white/70 hidden md:block">
          <Sun className="h-12 w-12 animate-spin-slow" />
        </div>

        {/* Scroll Down Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 text-white animate-bounce">
          <div className="flex flex-col items-center">
            <span className="text-sm mb-2">Keşfet</span>
            <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white rounded-full mt-2 animate-scroll-down"></div>
            </div>
          </div>
        </div>
      </section>

      {/* USP Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center space-x-4 p-6 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="bg-emerald-100 p-3 rounded-full">
                <Heart className="h-6 w-6 text-emerald-600" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Doğa ile İç İçe</h3>
                <p className="text-gray-600 text-sm">Stresten uzak, doğanın kalbinde huzurlu bir tatil</p>
              </div>
            </div>

            <div className="flex items-center space-x-4 p-6 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="bg-emerald-100 p-3 rounded-full">
                <Users className="h-6 w-6 text-emerald-600" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Aile Dostu</h3>
                <p className="text-gray-600 text-sm">Tüm aile için güvenli ve eğlenceli aktiviteler</p>
              </div>
            </div>

            <div className="flex items-center space-x-4 p-6 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="bg-emerald-100 p-3 rounded-full">
                <Waves className="h-6 w-6 text-emerald-600" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Denize Sıfır</h3>
                <p className="text-gray-600 text-sm">Masmavi denizin keyfini çıkarabileceğiniz özel plaj</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white relative overflow-hidden">
        <div className="absolute -left-20 top-10 text-emerald-100 opacity-20 rotate-12">
          <Tent className="h-40 w-40" />
        </div>
        <div className="absolute -right-20 bottom-10 text-emerald-100 opacity-20 -rotate-12">
          <Wind className="h-40 w-40" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Neden Korukamp?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Doğanın kalbinde, konforlu ve unutulmaz bir kamp deneyimi için tüm ihtiyaçlarınızı düşündük
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              icon={MapPin}
              title="Eşsiz Konum"
              description="Koruköy'de, doğayla iç içe muhteşem bir kamp alanı"
            />

            <FeatureCard icon={Droplets} title="Özel Duşlar" description="Temiz ve bakımlı özel duş alanları" />

            <FeatureCard
              icon={Utensils}
              title="Yemek Alanı"
              description="Kendi yemeğinizi pişirebileceğiniz özel alanlar"
            />

            <FeatureCard icon={ShieldCheck} title="Güvenli Ortam" description="7/24 güvenlik ve aile dostu bir ortam" />

            <FeatureCard icon={Coffee} title="Kafe Alanı" description="Deniz manzaralı kafemizde keyifli anlar" />

            <FeatureCard icon={Waves} title="Özel Plaj" description="Özel plaj ve halk plajına kolay erişim" />

            <FeatureCard
              icon={TreePine}
              title="Gölgelik Alanlar"
              description="Ağaçlar altında serin dinlenme alanları"
            />

            <FeatureCard icon={Leaf} title="Doğa Dostu" description="Sürdürülebilir ve çevre dostu tesisler" />
          </div>
        </div>
      </section>

      {/* About Section with Tabs */}
      <section className="py-16 bg-emerald-50 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Korukamp'ı Keşfedin</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Gelibolu Koruköy'ün eşsiz doğasında, deniz ve ormanın buluştuğu noktada sizi bekleyen huzur dolu bir kamp
              deneyimi
            </p>
          </div>

          <Tabs defaultValue="genel" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="genel">Genel Bilgi</TabsTrigger>
              <TabsTrigger value="konaklama">Konaklama</TabsTrigger>
              <TabsTrigger value="aktiviteler">Aktiviteler</TabsTrigger>
              <TabsTrigger value="cevre">Çevre</TabsTrigger>
            </TabsList>

            <TabsContent value="genel" className="mt-6">
              <div className="flex flex-col lg:flex-row items-center gap-12">
                <div className="lg:w-1/2">
                  <h3 className="text-2xl font-bold mb-4">Doğanın Kalbinde Bir Vaha</h3>
                  <p className="text-gray-700 mb-4">
                    Korukamp, Gelibolu Yarımadası'nın eşsiz doğal güzelliği içinde, deniz ve ormanın buluştuğu noktada
                    yer alan özel bir kamp alanıdır. Masmavi denizi, yemyeşil ormanları ve temiz havasıyla şehrin
                    stresinden uzaklaşıp doğayla baş başa kalabileceğiniz bir cennet köşesi.
                  </p>
                  <p className="text-gray-700 mb-6">
                    2015 yılından beri hizmet veren tesisimiz, doğaya saygılı, sürdürülebilir turizm anlayışıyla
                    misafirlerine unutulmaz bir deneyim sunmayı amaçlıyor. Ailenizle, arkadaşlarınızla veya yalnız,
                    doğanın tadını çıkarabileceğiniz bu özel mekânda sizleri ağırlamaktan mutluluk duyuyoruz.
                  </p>
                  <Button
                    asChild
                    className="bg-emerald-600 hover:bg-emerald-700 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-600/20"
                  >
                    <Link href="/hakkimizda">Daha Fazla Bilgi</Link>
                  </Button>
                </div>
                <div className="lg:w-1/2">
                  <div className="relative rounded-lg overflow-hidden shadow-xl">
                    <Image
                      src="/images/tent1.png"
                      alt="Korukamp genel görünüm"
                      width={600}
                      height={400}
                      className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                      <p className="text-white text-sm">Koruköy'ün eşsiz doğasında huzur dolu bir kamp deneyimi</p>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="konaklama" className="mt-6">
              <div className="flex flex-col lg:flex-row items-center gap-12">
                <div className="lg:w-1/2 order-2 lg:order-1">
                  <div className="grid grid-cols-2 gap-4">
                    <AnimatedTent imageUrl="/images/tent1.png" altText="Çadır alanı" className="h-48" />
                    <AnimatedTent imageUrl="/images/beach1.png" altText="Deniz manzarası" className="h-48" />
                    <AnimatedTent imageUrl="/images/cooking-area.png" altText="Yemek alanı" className="h-48" />
                    <AnimatedTent imageUrl="/images/shower.png" altText="Duş alanı" className="h-48" />
                  </div>
                </div>
                <div className="lg:w-1/2 order-1 lg:order-2">
                  <h3 className="text-2xl font-bold mb-4">Konforlu Konaklama Seçenekleri</h3>
                  <p className="text-gray-700 mb-4">
                    Korukamp'ta kendi çadırınızla kamp yapabilir veya hazır çadır kiralama hizmetimizden
                    yararlanabilirsiniz. Geniş ve düzenli çadır alanlarımız, her kampçının ihtiyacına uygun şekilde
                    tasarlanmıştır.
                  </p>
                  <p className="text-gray-700 mb-6">
                    Özel duşlarımız, yemek pişirme alanlarımız ve diğer tesislerimizle kamp yaparken tüm konfor
                    ihtiyaçlarınızı karşılıyoruz. Özel plajımızda denizin tadını çıkarabilir veya hemen yanımızdaki halk
                    plajını tercih edebilirsiniz.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center">
                      <Star className="h-5 w-5 text-yellow-500 mr-2" />
                      <span>Kendi çadırınızla kamp yapma imkanı</span>
                    </li>
                    <li className="flex items-center">
                      <Star className="h-5 w-5 text-yellow-500 mr-2" />
                      <span>Hazır kurulu çadır kiralama seçeneği</span>
                    </li>
                    <li className="flex items-center">
                      <Star className="h-5 w-5 text-yellow-500 mr-2" />
                      <span>Elektrik bağlantısı bulunan alanlar</span>
                    </li>
                    <li className="flex items-center">
                      <Star className="h-5 w-5 text-yellow-500 mr-2" />
                      <span>Temiz ve modern duş ve tuvalet alanları</span>
                    </li>
                  </ul>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="aktiviteler" className="mt-6">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold mb-4">Eğlenceli Aktiviteler</h3>
                <p className="text-gray-700 mb-6">
                  Korukamp'ta sadece kamp yapmakla kalmayıp, doğanın içinde birçok farklı aktiviteye katılabilirsiniz.
                  Hem dinlenip hem de eğlenebileceğiniz aktivitelerimiz tüm yaş gruplarına hitap ediyor.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <ActivityCard
                    title="Deniz Keyfi"
                    description="Masmavi sularda yüzme, snorkel ve su oyunları"
                    icon="waves"
                  />
                  <ActivityCard
                    title="Doğa Yürüyüşü"
                    description="Rehberli doğa yürüyüşleri ve kuş gözlemciliği"
                    icon="hiking"
                  />
                  <ActivityCard
                    title="Kamp Ateşi"
                    description="Akşamları kamp ateşi etrafında sohbet ve müzik"
                    icon="fire"
                  />
                  <ActivityCard
                    title="Bisiklet Turu"
                    description="Çevredeki köylere ve tarihi alanlara bisiklet turları"
                    icon="bike"
                  />
                  <ActivityCard
                    title="Yoga & Meditasyon"
                    description="Deniz manzaralı alanda sabah yoga seansları"
                    icon="yoga"
                  />
                  <ActivityCard
                    title="Balık Tutma"
                    description="Sahilde veya teknede balık tutma deneyimi"
                    icon="fishing"
                  />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="cevre" className="mt-6">
              <div className="flex flex-col lg:flex-row items-center gap-12">
                <div className="lg:w-1/2">
                  <h3 className="text-2xl font-bold mb-4">Çevre Gezileri</h3>
                  <p className="text-gray-700 mb-4">
                    Korukamp, Gelibolu Yarımadası'nın tarihi ve doğal güzellikleriyle dolu bölgesinde yer alıyor.
                    Kampınız sırasında çevredeki birçok tarihi ve turistik yeri ziyaret edebilirsiniz.
                  </p>
                  <ul className="space-y-4 mb-6">
                    <li className="flex items-start">
                      <div className="bg-emerald-100 p-2 rounded-full mt-1 mr-3">
                        <MapPin className="h-4 w-4 text-emerald-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold">Gelibolu Tarihi Yarımadası</h4>
                        <p className="text-sm text-gray-600">
                          Çanakkale Savaşları'nın yaşandığı tarihi yarımadayı keşfedin (25 km)
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-emerald-100 p-2 rounded-full mt-1 mr-3">
                        <MapPin className="h-4 w-4 text-emerald-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold">Saros Körfezi</h4>
                        <p className="text-sm text-gray-600">
                          Türkiye'nin en temiz denizlerinden birine sahip körfez (15 km)
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-emerald-100 p-2 rounded-full mt-1 mr-3">
                        <MapPin className="h-4 w-4 text-emerald-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold">Gökçeada ve Bozcaada</h4>
                        <p className="text-sm text-gray-600">
                          Feribot ile ulaşabileceğiniz eşsiz adalara günübirlik turlar (50 km)
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="lg:w-1/2">
                  <div className="relative h-80 rounded-lg overflow-hidden shadow-xl">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12158.10565141037!2d26.5!3d40.4!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b1a9c8d5a68f93%3A0x9c5694c06b2b96ab!2zS29ydWvDtnksIDE3NTAyIEtvcsO8a8O2eS9HZWxpYm9sdS_Dh2FuYWtrYWxl!5e0!3m2!1str!2str!4v1715!5m2!1str!2str"
                      width="600"
                      height="450"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="absolute inset-0 w-full h-full"
                      title="Korukamp Konum Haritası"
                    ></iframe>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Seasonal Section */}
      <SeasonalSection />

      {/* Instagram Feed Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-6">
            <Instagram className="h-6 w-6 mr-2 text-emerald-600" />
            <h2 className="text-3xl font-bold">Instagram'da Biz</h2>
          </div>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
            Kamp alanımızdan en güzel anlar ve misafirlerimizin deneyimleri
          </p>

          <InstagramFeed />

          <div className="text-center mt-8">
            <Button
              variant="outline"
              asChild
              className="hover:bg-emerald-50 hover:text-emerald-600 hover:border-emerald-200 transition-all duration-300"
            >
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="flex items-center">
                <Instagram className="h-5 w-5 mr-2" />
                Bizi Instagram'da Takip Edin
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Gallery Preview Section */}
      <GalleryPreview />

      {/* Testimonials Carousel Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Misafirlerimizin Yorumları</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Korukamp'ta unutulmaz anlar yaşayan misafirlerimizin deneyimleri
            </p>
          </div>

          <TestimonialCarousel />

          <div className="text-center mt-10">
            <Button
              variant="outline"
              asChild
              className="hover:bg-emerald-50 hover:text-emerald-600 hover:border-emerald-200 transition-all duration-300"
            >
              <Link href="/yorumlar" className="flex items-center">
                <Star className="h-5 w-5 mr-2" />
                Tüm Yorumları Gör
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FaqSection />

      {/* CTA Section */}
      <section className="py-16 bg-emerald-600 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold mb-4">Doğayla İç İçe Bir Tatil İçin Hemen Rezervasyon Yapın</h2>
              <p className="text-white/90 mb-6">
                Gelibolu Koruköy'ün eşsiz doğasında, deniz ve ormanın buluştuğu noktada unutulmaz bir kamp deneyimi sizi
                bekliyor. Ailenizle, arkadaşlarınızla veya yalnız, doğanın tadını çıkarabileceğiniz bu özel mekânda
                yerinizi şimdiden ayırtın.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" variant="secondary" asChild className="bg-white text-emerald-600 hover:bg-gray-100">
                  <a
                    href="#rezervasyon"
                    onClick={(e) => {
                      e.preventDefault()
                      document.getElementById("rezervasyon")?.scrollIntoView({ behavior: "smooth" })
                    }}
                    className="flex items-center"
                  >
                    <Calendar className="mr-2 h-5 w-5" />
                    Rezervasyon Yap
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild className="border-white text-white hover:bg-white/20">
                  <Link href="/galeri" className="flex items-center">
                    <Camera className="mr-2 h-5 w-5" />
                    Galeriyi Gör
                  </Link>
                </Button>
              </div>
            </div>
            <div className="lg:w-1/2 flex justify-center">
              <div className="relative w-full max-w-md">
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-yellow-400 rounded-full opacity-50 animate-pulse"></div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-emerald-400 rounded-full opacity-50 animate-pulse delay-700"></div>
                <div className="relative z-10 bg-white p-8 rounded-lg shadow-xl">
                  <div className="flex items-center mb-6">
                    <div className="bg-emerald-100 p-3 rounded-full mr-4">
                      <TreePine className="h-8 w-8 text-emerald-600" />
                    </div>
                    <div>
                      <h3 className="text-gray-800 font-bold text-xl">Özel Fırsatlar</h3>
                      <p className="text-gray-600">Erken rezervasyon indirimleri</p>
                    </div>
                  </div>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center text-gray-700">
                      <ArrowRight className="h-4 w-4 text-emerald-500 mr-2 flex-shrink-0" />
                      <span>Hafta içi konaklamalarda %15 indirim</span>
                    </li>
                    <li className="flex items-center text-gray-700">
                      <ArrowRight className="h-4 w-4 text-emerald-500 mr-2 flex-shrink-0" />
                      <span>5+ gece konaklamalarda %20 indirim</span>
                    </li>
                    <li className="flex items-center text-gray-700">
                      <ArrowRight className="h-4 w-4 text-emerald-500 mr-2 flex-shrink-0" />
                      <span>Grup rezervasyonlarında özel fiyatlar</span>
                    </li>
                  </ul>
                  <Button className="w-full bg-emerald-600 hover:bg-emerald-700" asChild>
                    <a
                      href="#rezervasyon"
                      onClick={(e) => {
                        e.preventDefault()
                        document.getElementById("rezervasyon")?.scrollIntoView({ behavior: "smooth" })
                      }}
                    >
                      Hemen Rezervasyon Yap
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <NewsletterSignup />

      {/* Reservation Form Section */}
      <section id="rezervasyon" className="py-16 bg-emerald-50 relative overflow-hidden">
        <div className="absolute -left-20 bottom-10 text-emerald-200 opacity-20 rotate-12">
          <Tent className="h-40 w-40" />
        </div>
        <div className="absolute -right-20 top-10 text-emerald-200 opacity-20 -rotate-12">
          <Mountain className="h-40 w-40" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">Rezervasyon Yapın</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Koruköy'ün eşsiz doğasında unutulmaz bir kamp deneyimi için hemen rezervasyon yapın.
            </p>
          </div>
          <ReservationForm />
        </div>
      </section>
    </div>
  )
}

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MapPin, Users, Calendar, Award, Heart, Clock, Leaf } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[40vh] md:h-[50vh] w-full">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: "url('/images/tent1.png')" }}
        />
        <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Hakkımızda</h1>
          <p className="text-xl text-white/90 max-w-2xl">Korukamp'ın hikayesi ve doğayla uyumlu felsefemiz</p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Hikayemiz</h2>
              <p className="text-gray-700 mb-4">
              Korukamp, Çanakkale Gelibolu Koruköy’de, denizle doğanın kesiştiği eşsiz bir noktada kurulan bir kamp alanıdır. Kampçılık kültürünü ve doğaya olan sevgimizi bir araya getirerek oluşturduğumuz bu alan, doğayla yeniden bağlantı kurmak isteyen herkes için özel bir kaçış noktasıdır.
              </p>
              <p className="text-gray-700 mb-4">
               Yola çıkış amacımız basitti: Şehir hayatının karmaşasından uzaklaşıp, doğanın sadeliğinde huzur bulabileceğimiz bir alan yaratmak. Edindiğimiz yılların kamp tecrübesi ve doğaya duyduğumuz tutku sayesinde, Korukamp’ı sadece bir kamp alanı değil; aynı zamanda bir yaşam tarzının buluşma noktası haline getirdik. Burada doğanın döngüsüne saygılı bir şekilde, sürdürülebilir ve sade bir yaşamı benimseyerek her detayı titizlikle planladık.
              </p>
              <p className="text-gray-700 mb-4">
               Başlangıçta daha küçük bir topluluğa hitap eden kampımız, zamanla doğa severlerin ve kampçıların ortak noktası haline geldi. Misafirlerimizin deneyimlerinden ve önerilerinden aldığımız ilhamla, alanımızı sürekli geliştiriyor, onların beklentilerini aşan bir deneyim sunmak için çalışıyoruz.
              </p>
              <p className="text-gray-700 mb-4">
                Korukamp’ta sabahları denizin hafif dalga sesiyle uyanır, gün boyu doğanın sunduğu huzurun tadını çıkarırsınız. İster sahilde yürüyüş yapın, ister yıldızların altında uyuyun; burada her an, doğanın sunduğu bir armağan gibidir. Ortak yaşam alanlarımız, temiz ve düzenli tesislerimizle konforu doğallıkla buluşturuyoruz.
              </p>
              <p className="text-gray-700 mb-4">
                Bizim için Korukamp, sadece bir işletme değil; doğayı seven insanların bir araya geldiği, anılar biriktirdiği bir topluluk. Amacımız, her misafirimizin buradan ayrılırken doğaya dair yeni bir bakış açısı kazanması ve şehir hayatının stresinden uzak, yenilenmiş hissetmesi.
              </p>
              <p className="text-gray-700">Korukamp’a hoş geldiniz. Doğanın kalbinde, huzuru keşfetmenin zamanı geldi.</p>
            </div>
            <div className="lg:w-1/2">
              <div className="relative h-80 rounded-lg overflow-hidden shadow-xl">
                <Image src="/images/beach1.png" alt="Korukamp'ın hikayesi" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                  <p className="text-white">Koruköy'ün eşsiz doğasında kurulmuş kamp alanımız</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 bg-emerald-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Misyonumuz & Vizyonumuz</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Doğaya saygılı, sürdürülebilir ve kaliteli bir kamp deneyimi sunma hedefimiz
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <Heart className="h-8 w-8 text-emerald-600 mr-3" />
                <h3 className="text-2xl font-bold">Misyonumuz</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Misyonumuz, doğanın güzelliklerini koruyarak, insanlara konforlu ve güvenli bir kamp deneyimi sunmaktır.
                Misafirlerimizin doğayla bağ kurmasını, şehir hayatının stresinden uzaklaşmasını ve unutulmaz anılar
                biriktirmesini sağlamak için çalışıyoruz.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <div className="h-2 w-2 bg-emerald-500 rounded-full mt-2 mr-2"></div>
                  <span>Doğaya saygılı ve sürdürülebilir turizm</span>
                </li>
                <li className="flex items-start">
                  <div className="h-2 w-2 bg-emerald-500 rounded-full mt-2 mr-2"></div>
                  <span>Konforlu ve güvenli bir kamp deneyimi</span>
                </li>
                <li className="flex items-start">
                  <div className="h-2 w-2 bg-emerald-500 rounded-full mt-2 mr-2"></div>
                  <span>Doğa bilincini artırmak</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <Leaf className="h-8 w-8 text-emerald-600 mr-3" />
                <h3 className="text-2xl font-bold">Vizyonumuz</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Vizyonumuz, Türkiye'nin en çevre dostu ve kaliteli kamp alanlarından biri olmaktır. Doğal güzellikleri
                koruyarak, sürdürülebilir turizm anlayışıyla, her yaştan insanın doğayla buluşabileceği bir merkez
                olmayı hedefliyoruz.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <div className="h-2 w-2 bg-emerald-500 rounded-full mt-2 mr-2"></div>
                  <span>Türkiye'nin önde gelen eko-kamp alanı olmak</span>
                </li>
                <li className="flex items-start">
                  <div className="h-2 w-2 bg-emerald-500 rounded-full mt-2 mr-2"></div>
                  <span>Doğa turizmine yeni standartlar getirmek</span>
                </li>
                <li className="flex items-start">
                  <div className="h-2 w-2 bg-emerald-500 rounded-full mt-2 mr-2"></div>
                  <span>Yerel ekonomiye katkı sağlamak</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      {/* <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Ekibimiz</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Korukamp'ı özel kılan, doğa ve kamp tutkunu ekip üyelerimiz
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
              <div className="relative h-64 rounded-lg overflow-hidden mb-4">
                <Image
                  src="/placeholder.svg?height=300&width=300"
                  alt="Ahmet Yılmaz - Kurucu"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-1">Ahmet Yılmaz</h3>
              <p className="text-emerald-600 mb-3">Kurucu & Genel Müdür</p>
              <p className="text-gray-600 text-sm">
                20 yıllık kamp deneyimiyle Korukamp'ın kurucusu ve vizyonerin arkasındaki isim. Doğa koruma projelerinde
                aktif rol alıyor.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
              <div className="relative h-64 rounded-lg overflow-hidden mb-4">
                <Image
                  src="/placeholder.svg?height=300&width=300"
                  alt="Zeynep Kaya - Operasyon Müdürü"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-1">Zeynep Kaya</h3>
              <p className="text-emerald-600 mb-3">Operasyon Müdürü</p>
              <p className="text-gray-600 text-sm">
                Turizm sektöründe 15 yıllık deneyime sahip. Kamp alanının günlük operasyonlarını yönetiyor ve misafir
                memnuniyetini en üst düzeyde tutuyor.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
              <div className="relative h-64 rounded-lg overflow-hidden mb-4">
                <Image
                  src="/placeholder.svg?height=300&width=300"
                  alt="Mehmet Demir - Aktivite Koordinatörü"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-1">Mehmet Demir</h3>
              <p className="text-emerald-600 mb-3">Aktivite Koordinatörü</p>
              <p className="text-gray-600 text-sm">
                Profesyonel doğa rehberi ve macera sporu eğitmeni. Kamp alanındaki tüm aktiviteleri planlıyor ve
                yönetiyor.
              </p>
            </div>
          </div>
        </div>
      </section> */}

      {/* Stats Section */}
      {/* <section className="py-16 bg-emerald-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">2015</div>
              <p className="text-white/80">Kuruluş Yılı</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">10,000+</div>
              <p className="text-white/80">Mutlu Misafir</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">15,000 m²</div>
              <p className="text-white/80">Kamp Alanı</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">4.8/5</div>
              <p className="text-white/80">Misafir Memnuniyeti</p>
            </div>
          </div>
        </div>
      </section> */}

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Değerlerimiz</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Korukamp'ın temelini oluşturan ve her kararımızda bizi yönlendiren değerlerimiz
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="p-6 rounded-lg border border-gray-100 hover:border-emerald-100 hover:bg-emerald-50 transition-all duration-300">
              <div className="bg-emerald-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <Leaf className="h-6 w-6 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Doğaya Saygı</h3>
              <p className="text-gray-600">
                Tüm faaliyetlerimizde doğaya saygı gösteriyor, çevresel etkimizi en aza indirmeye çalışıyoruz.
                Sürdürülebilir uygulamalarla doğal kaynakları koruyoruz.
              </p>
            </div>

            <div className="p-6 rounded-lg border border-gray-100 hover:border-emerald-100 hover:bg-emerald-50 transition-all duration-300">
              <div className="bg-emerald-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Misafir Odaklılık</h3>
              <p className="text-gray-600">
                Misafirlerimizin memnuniyeti bizim için en önemli öncelik. Her misafirimizin ihtiyaçlarını karşılamak ve
                beklentilerini aşmak için çalışıyoruz.
              </p>
            </div>

            <div className="p-6 rounded-lg border border-gray-100 hover:border-emerald-100 hover:bg-emerald-50 transition-all duration-300">
              <div className="bg-emerald-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <Award className="h-6 w-6 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Kalite</h3>
              <p className="text-gray-600">
                Her detayda kaliteyi gözetiyoruz. Tesislerimizin bakımından sunduğumuz hizmetlere kadar her alanda en
                yüksek standartları sağlamaya özen gösteriyoruz.
              </p>
            </div>

            <div className="p-6 rounded-lg border border-gray-100 hover:border-emerald-100 hover:bg-emerald-50 transition-all duration-300">
              <div className="bg-emerald-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <MapPin className="h-6 w-6 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Yerel Kalkınma</h3>
              <p className="text-gray-600">
                Yerel ekonomiye katkı sağlamayı önemsiyoruz. Mümkün olduğunca yerel tedarikçilerle çalışıyor ve bölge
                halkına istihdam sağlıyoruz.
              </p>
            </div>

            <div className="p-6 rounded-lg border border-gray-100 hover:border-emerald-100 hover:bg-emerald-50 transition-all duration-300">
              <div className="bg-emerald-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <Calendar className="h-6 w-6 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Sürdürülebilirlik</h3>
              <p className="text-gray-600">
                Gelecek nesillere daha iyi bir dünya bırakmak için sürdürülebilir uygulamaları benimsiyoruz. Enerji
                tasarrufu, atık yönetimi ve doğal kaynakların korunması önceliklerimiz arasında.
              </p>
            </div>

            <div className="p-6 rounded-lg border border-gray-100 hover:border-emerald-100 hover:bg-emerald-50 transition-all duration-300">
              <div className="bg-emerald-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <Clock className="h-6 w-6 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Sürekli İyileştirme</h3>
              <p className="text-gray-600">
                Her zaman daha iyisini yapabileceğimize inanıyoruz. Misafirlerimizin geri bildirimlerini dikkate alarak
                hizmetlerimizi sürekli geliştiriyoruz.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-emerald-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Siz de Korukamp Ailesine Katılın</h2>
            <p className="text-gray-700 mb-8">
              Doğanın kalbinde, deniz ve ormanın buluştuğu noktada unutulmaz bir kamp deneyimi için hemen rezervasyon
              yapın. Korukamp'ta sizi ağırlamaktan mutluluk duyacağız.
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
                <Link href="/iletisim">Bize Ulaşın</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

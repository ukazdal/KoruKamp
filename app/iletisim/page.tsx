import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Send } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[40vh] md:h-[50vh] w-full">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: "url('/images/insta1.png')" }}
        />
        <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">İletişim</h1>
          <p className="text-xl text-white/90 max-w-2xl">
            Sorularınız ve rezervasyonlarınız için bizimle iletişime geçin
          </p>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <Card className="hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="bg-emerald-100 p-3 rounded-full mb-4">
                    <MapPin className="h-6 w-6 text-emerald-600" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">Adres</h3>
                  <p className="text-gray-600">Büyük Mithatlar, 17502 Koruköy/Gelibolu/Çanakkale</p>
                  <Button variant="link" className="mt-2 text-emerald-600" asChild>
                    <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer">
                      Haritada Göster
                    </a>
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="bg-emerald-100 p-3 rounded-full mb-4">
                    <Phone className="h-6 w-6 text-emerald-600" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">Telefon</h3>
                  <p className="text-gray-600">+90 5XX XXX XX XX</p>
                  <p className="text-gray-600 text-sm mt-1">(Hafta içi 09:00 - 18:00)</p>
                  <Button variant="link" className="mt-2 text-emerald-600" asChild>
                    <a href="tel:+905XXXXXXXXX">Hemen Ara</a>
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="bg-emerald-100 p-3 rounded-full mb-4">
                    <Mail className="h-6 w-6 text-emerald-600" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">E-posta</h3>
                  <p className="text-gray-600">info@korukamp.com</p>
                  <p className="text-gray-600 text-sm mt-1">(24 saat içinde yanıt)</p>
                  <Button variant="link" className="mt-2 text-emerald-600" asChild>
                    <a href="mailto:info@korukamp.com">E-posta Gönder</a>
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold mb-6">Bize Ulaşın</h2>
                <p className="text-gray-700 mb-8">
                  Sorularınız, önerileriniz veya rezervasyon talepleriniz için aşağıdaki formu doldurabilir veya
                  doğrudan telefon ve e-posta ile bizimle iletişime geçebilirsiniz.
                </p>

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
                    <label htmlFor="subject" className="text-sm font-medium">
                      Konu
                    </label>
                    <Input id="subject" placeholder="Mesajınızın konusu" />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Mesajınız
                    </label>
                    <Textarea id="message" placeholder="Mesajınızı buraya yazın..." rows={5} />
                  </div>

                  <Button className="bg-emerald-600 hover:bg-emerald-700">
                    <Send className="h-4 w-4 mr-2" />
                    Mesajı Gönder
                  </Button>
                </form>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-6">Bizi Ziyaret Edin</h2>
                <div className="rounded-lg overflow-hidden shadow-lg h-80 mb-6">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12158.10565141037!2d26.5!3d40.4!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b1a9c8d5a68f93%3A0x9c5694c06b2b96ab!2zS29ydWvDtnksIDE3NTAyIEtvcsO8a8O2eS9HZWxpYm9sdS_Dh2FuYWtrYWxl!5e0!3m2!1str!2str!4v1715!5m2!1str!2str"
                    width="600"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full"
                    title="Korukamp Konum Haritası"
                  ></iframe>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start">
                    <Clock className="h-5 w-5 text-emerald-600 mt-0.5 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1">Çalışma Saatleri</h3>
                      <p className="text-gray-600 text-sm">Resepsiyon: Her gün 08:00 - 22:00</p>
                      <p className="text-gray-600 text-sm">Kamp Alanı: 24 saat açık</p>
                      <p className="text-gray-600 text-sm">Kafe: 08:00 - 23:00</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-emerald-600 mt-0.5 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1">Ulaşım</h3>
                      <p className="text-gray-600 text-sm">İstanbul'dan araçla yaklaşık 3,5 saat</p>
                      <p className="text-gray-600 text-sm">Çanakkale merkezden araçla 1 saat</p>
                      <p className="text-gray-600 text-sm">Gelibolu ilçe merkezinden 20 dakika</p>
                    </div>
                  </div>

                  <div className="pt-4">
                    <h3 className="font-semibold mb-3">Sosyal Medyada Biz</h3>
                    <div className="flex gap-4">
                      <Button variant="outline" size="icon" asChild>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                          <Facebook className="h-5 w-5 text-blue-600" />
                          <span className="sr-only">Facebook</span>
                        </a>
                      </Button>
                      <Button variant="outline" size="icon" asChild>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                          <Instagram className="h-5 w-5 text-pink-600" />
                          <span className="sr-only">Instagram</span>
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-emerald-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Sık Sorulan Sorular</h2>
            <p className="text-gray-700 mb-8">
              Aşağıda en sık sorulan soruların cevaplarını bulabilirsiniz. Başka sorularınız varsa, lütfen bizimle
              iletişime geçmekten çekinmeyin.
            </p>
            <Button className="bg-emerald-600 hover:bg-emerald-700" asChild>
              <Link href="/#faq">Tüm SSS'leri Görüntüle</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

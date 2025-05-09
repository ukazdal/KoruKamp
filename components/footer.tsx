import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="relative w-10 h-10">
                <Image src="/images/korukamp-logo.png" alt="Korukamp Logo" fill className="object-contain" />
              </div>
              <h3 className="text-xl font-bold">Korukamp</h3>
            </div>
            <p className="mb-4">
              Çanakkale Gelibolu Koruköy'de doğayla iç içe eşsiz bir kamp deneyimi sunan tesisimize hoş geldiniz.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-emerald-400 transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="hover:text-emerald-400 transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="mailto:info@korukamp.com" className="hover:text-emerald-400 transition-colors">
                <Mail className="h-5 w-5" />
                <span className="sr-only">E-posta</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Hızlı Bağlantılar</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-emerald-400 transition-colors">
                  Ana Sayfa
                </Link>
              </li>
              <li>
                <Link href="/hakkimizda" className="hover:text-emerald-400 transition-colors">
                  Hakkımızda
                </Link>
              </li>
              <li>
                <Link href="/tesisler" className="hover:text-emerald-400 transition-colors">
                  Tesislerimiz
                </Link>
              </li>
              <li>
                <Link href="/galeri" className="hover:text-emerald-400 transition-colors">
                  Galeri
                </Link>
              </li>
              <li>
                <Link href="/yorumlar" className="hover:text-emerald-400 transition-colors">
                  Yorumlar
                </Link>
              </li>
              <li>
                <Link href="/iletisim" className="hover:text-emerald-400 transition-colors">
                  İletişim
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">İletişim</h3>
            <address className="not-italic">
              <div className="flex items-start mb-2">
                <MapPin className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                <span>Büyük Mithatlar, 17502 Koruköy/Gelibolu/Çanakkale</span>
              </div>
              <div className="flex items-center mb-2">
                <Phone className="h-5 w-5 mr-2 flex-shrink-0" />
                <a href="tel:+905XXXXXXXXX" className="hover:text-emerald-400 transition-colors">
                  +90 5XX XXX XX XX
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-2 flex-shrink-0" />
                <a href="mailto:info@korukamp.com" className="hover:text-emerald-400 transition-colors">
                  info@korukamp.com
                </a>
              </div>
            </address>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Korukamp. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  )
}

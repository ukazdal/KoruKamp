import Link from "next/link"
import { CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ReservationSuccessPage() {
  return (
    <div className="container mx-auto px-4 py-16 flex flex-col items-center justify-center min-h-[70vh]">
      <div className="text-center max-w-md">
        <CheckCircle className="h-16 w-16 text-emerald-500 mx-auto mb-4" />
        <h1 className="text-3xl font-bold mb-4">Rezervasyon Talebiniz Alındı!</h1>
        <p className="text-gray-600 mb-8">
          Rezervasyon talebiniz başarıyla alındı. Talebiniz onaylandığında e-posta adresinize bilgilendirme mesajı
          gönderilecektir.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild>
            <Link href="/">Ana Sayfaya Dön</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/hakkimizda">Tesisimiz Hakkında</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

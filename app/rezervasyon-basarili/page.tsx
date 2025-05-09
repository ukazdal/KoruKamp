import Link from "next/link"
import { CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function ReservationSuccessPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <Card className="max-w-md mx-auto text-center">
        <CardHeader>
          <div className="flex justify-center mb-4">
            <CheckCircle className="h-16 w-16 text-green-500" />
          </div>
          <CardTitle className="text-2xl">Rezervasyon Talebiniz Alındı!</CardTitle>
          <CardDescription>Rezervasyon talebiniz başarıyla oluşturuldu.</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            Rezervasyon detaylarınızı içeren bir e-posta <strong>info@korukamp.com</strong> adresinden gönderilmiştir.
            Lütfen e-posta kutunuzu kontrol ediniz.
          </p>
          <p>Rezervasyonunuz incelendikten sonra onay durumu hakkında size bilgi vereceğiz.</p>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button asChild>
            <Link href="/">Ana Sayfaya Dön</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

"use client"

import { Button } from "@/components/ui/button"

import { useState } from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "Korukamp'a nasıl ulaşabilirim?",
    answer:
      "Korukamp, Çanakkale Gelibolu ilçesine bağlı Koruköy'de bulunmaktadır. İstanbul'dan yaklaşık 3,5 saat, Çanakkale merkezden ise 1 saat mesafededir. Özel aracınızla gelirken navigasyona 'Korukamp, Koruköy/Gelibolu/Çanakkale' yazarak kolayca ulaşabilirsiniz. Toplu taşıma ile gelmek isteyenler için Gelibolu'ya kadar otobüs ile gelip, oradan taksi ile kampımıza ulaşabilirsiniz.",
  },
  {
    question: "Kendi çadırımı getirebilir miyim?",
    answer:
      "Evet, kendi çadırınızı getirebilirsiniz. Kamp alanımızda çadırınızı kurmanız için geniş ve düz alanlar mevcuttur. Ayrıca hazır kurulu çadır kiralama hizmetimiz de bulunmaktadır. Rezervasyon sırasında tercihlerinizi belirtmeniz yeterlidir.",
  },
  {
    question: "Tesiste elektrik ve internet var mı?",
    answer:
      "Evet, kamp alanımızda belirli noktalarda elektrik bağlantısı bulunmaktadır. Telefonunuzu şarj edebilir ve elektronik cihazlarınızı kullanabilirsiniz. Ayrıca ortak alanlarda ücretsiz Wi-Fi hizmeti sunuyoruz. Ancak doğa ile iç içe bir deneyim için elektronik cihazlardan uzak durmanızı öneririz.",
  },
  {
    question: "Yemek pişirme imkanı var mı?",
    answer:
      "Evet, kamp alanımızda ortak kullanıma açık yemek pişirme alanları bulunmaktadır. Bu alanlarda mangal ve ocak kullanabilirsiniz. Ayrıca kamp alanımızda küçük bir market de bulunmakta olup, temel gıda maddelerini buradan temin edebilirsiniz. Çevrede ayrıca yerel restoranlar da mevcuttur.",
  },
  {
    question: "Çocuklar için uygun mu?",
    answer:
      "Kesinlikle! Korukamp, aileler ve çocuklar için çok uygun bir kamp alanıdır. Güvenli ve geniş alanlarımızda çocuklar özgürce oynayabilir. Sığ ve temiz denizimiz çocukların güvenle yüzebilmesi için idealdir. Ayrıca çocuk parkımız bulunmaktadır.",
  },
  {
    question: "Evcil hayvanlar kabul ediliyor mu?",
    answer:
      "Evet, evcil hayvanlarınızı getirebilirsiniz. Ancak diğer misafirlerimizin rahatsız olmaması için evcil hayvanlarınızı tasma ile gezdirilmesi ve ortak alanlarda kontrol altında tutulması gerekmektedir. Lütfen plaj alanında evcil hayvanlarınızı kontrol altında tutunuz.",
  },
  {
    question: "Rezervasyon için ne kadar önceden başvurmalıyım?",
    answer:
      "Özellikle yaz aylarında ve hafta sonları kamp alanımız çok talep görmektedir. Bu nedenle en az 2-3 hafta öncesinden rezervasyon yaptırmanızı öneririz. Sezon dışı dönemlerde daha kısa sürede rezervasyon yapabilirsiniz. Erken rezervasyon yaptıran misafirlerimize özel indirimler sunuyoruz.",
  },
]

export default function FaqSection() {
  const [openItems, setOpenItems] = useState<string[]>([])

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Sıkça Sorulan Sorular</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Korukamp hakkında merak ettiğiniz soruların cevaplarını burada bulabilirsiniz
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-medium">{faq.question}</AccordionTrigger>
                <AccordionContent>
                  <p className="text-gray-600">{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center mt-10">
          <p className="text-gray-600 mb-4">Başka sorularınız mı var?</p>
          <Button asChild>
            <a href="mailto:info@korukamp.com">Bize Ulaşın</a>
          </Button>
        </div>
      </div>
    </section>
  )
}

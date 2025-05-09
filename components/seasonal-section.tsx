"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Sun, Cloud, Leaf, Snowflake } from "lucide-react"

export default function SeasonalSection() {
  const [activeTab, setActiveTab] = useState("yaz")

  const seasons = [
    {
      id: "yaz",
      name: "Yaz",
      icon: <Sun className="h-5 w-5" />,
      title: "Yaz Mevsiminde Korukamp",
      description:
        "Yaz aylarında Korukamp, masmavi denizi ve serin ormanlarıyla ideal bir tatil mekanı. Denizin ve güneşin tadını çıkarabilir, akşamları kamp ateşi etrafında unutulmaz anlar yaşayabilirsiniz.",
      activities: ["Deniz keyfi", "Su sporları", "Kamp ateşi", "Yıldız gözlemi", "Doğa yürüyüşleri"],
      image: "/images/beach1.png",
    },
    {
      id: "sonbahar",
      name: "Sonbahar",
      icon: <Leaf className="h-5 w-5" />,
      title: "Sonbaharda Korukamp",
      description:
        "Sonbahar, Korukamp'ın en huzurlu zamanlarından biri. Ağaçların rengarenk yaprakları, ılıman hava ve sakin ortam, doğayla baş başa kalmak isteyenler için mükemmel bir fırsat.",
      activities: ["Doğa fotoğrafçılığı", "Mantar toplama", "Bisiklet turları", "Yoga ve meditasyon", "Kitap okuma"],
      image: "/images/tent1.png",
    },
    {
      id: "kis",
      name: "Kış",
      icon: <Snowflake className="h-5 w-5" />,
      title: "Kışın Korukamp",
      description:
        "Kış aylarında Korukamp, şömine başında sıcak içecekler eşliğinde huzur bulabileceğiniz sakin bir sığınak. Doğanın kış uykusuna tanıklık edebilir, yağmur sesini dinleyebilirsiniz.",
      activities: ["Şömine başında sohbet", "Kuş gözlemciliği", "Fotoğrafçılık", "Doğa yürüyüşleri", "Kitap okuma"],
      image: "/images/cooking-area.png",
    },
    {
      id: "ilkbahar",
      name: "İlkbahar",
      icon: <Cloud className="h-5 w-5" />,
      title: "İlkbaharda Korukamp",
      description:
        "İlkbahar, Korukamp'ın canlandığı, doğanın uyanışına tanık olabileceğiniz muhteşem bir dönem. Çiçeklenen ağaçlar, kuş sesleri ve taze hava ile yenilenme zamanı.",
      activities: ["Çiçek gözlemi", "Kuş gözlemciliği", "Bisiklet turları", "Doğa yürüyüşleri", "Piknik"],
      image: "/images/shower.png",
    },
  ]

  const activeSeason = seasons.find((season) => season.id === activeTab) || seasons[0]

  return (
    <section className="py-16 bg-gray-50 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Her Mevsim Korukamp</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Korukamp, dört mevsim boyunca farklı güzellikleriyle misafirlerini ağırlıyor. Her mevsimin kendine özgü
            aktiviteleri ve manzaralarıyla unutulmaz anlar yaşayın.
          </p>
        </div>

        <Tabs defaultValue="yaz" value={activeTab} onValueChange={setActiveTab} className="max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-4">
            {seasons.map((season) => (
              <TabsTrigger key={season.id} value={season.id} className="flex items-center gap-2">
                {season.icon}
                <span className="hidden sm:inline">{season.name}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {seasons.map((season) => (
            <TabsContent key={season.id} value={season.id} className="mt-8">
              <div className="flex flex-col lg:flex-row items-center gap-12">
                <div className="lg:w-1/2">
                  <h3 className="text-2xl font-bold mb-4">{season.title}</h3>
                  <p className="text-gray-700 mb-6">{season.description}</p>

                  <div className="mb-6">
                    <h4 className="font-semibold mb-3">Öne Çıkan Aktiviteler:</h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {season.activities.map((activity, index) => (
                        <li key={index} className="flex items-center">
                          <div className="h-2 w-2 bg-emerald-500 rounded-full mr-2"></div>
                          <span>{activity}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button className="bg-emerald-600 hover:bg-emerald-700">Rezervasyon Yap</Button>
                </div>
                <div className="lg:w-1/2">
                  <div className="relative rounded-lg overflow-hidden shadow-xl h-80">
                    <Image
                      src={season.image || "/placeholder.svg"}
                      alt={`${season.name} mevsiminde Korukamp`}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}

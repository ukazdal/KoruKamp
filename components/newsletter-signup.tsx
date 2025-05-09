"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Bell, CheckCircle } from "lucide-react"

export default function NewsletterSignup() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simüle edilmiş form gönderimi
    setTimeout(() => {
      setIsLoading(false)
      setIsSubmitted(true)
      setEmail("")
    }, 1500)
  }

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto bg-emerald-50 rounded-xl p-8 md:p-12 shadow-sm">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-2/3">
              <div className="flex items-center mb-4">
                <Bell className="h-6 w-6 text-emerald-600 mr-2" />
                <h2 className="text-2xl font-bold">Kampanyalardan Haberdar Olun</h2>
              </div>
              <p className="text-gray-600 mb-6">
                Özel fırsatlar, etkinlikler ve mevsimsel kampanyalardan haberdar olmak için bültenimize abone olun.
              </p>

              {isSubmitted ? (
                <div className="flex items-center text-emerald-600">
                  <CheckCircle className="h-5 w-5 mr-2" />
                  <span>Bültenimize başarıyla abone oldunuz!</span>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex gap-2">
                  <Input
                    type="email"
                    placeholder="E-posta adresiniz"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="flex-1"
                  />
                  <Button type="submit" disabled={isLoading}>
                    {isLoading ? "Gönderiliyor..." : "Abone Ol"}
                  </Button>
                </form>
              )}

              <p className="text-xs text-gray-500 mt-4">
                Kişisel verileriniz gizlilik politikamıza uygun olarak korunacaktır. İstediğiniz zaman abonelikten
                çıkabilirsiniz.
              </p>
            </div>

            <div className="md:w-1/3 flex justify-center">
              <div className="w-32 h-32 bg-emerald-100 rounded-full flex items-center justify-center">
                <Bell className="h-16 w-16 text-emerald-600" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

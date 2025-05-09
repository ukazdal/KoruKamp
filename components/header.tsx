"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { usePathname } from "next/navigation"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const navLinks = [
    { href: "/", label: "Ana Sayfa" },
    { href: "/hakkimizda", label: "Hakkımızda" },
    { href: "/tesisler", label: "Tesislerimiz" },
    { href: "/galeri", label: "Galeri" },
    { href: "/yorumlar", label: "Yorumlar" },
    { href: "/iletisim", label: "İletişim" },
  ]

  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") return true
    if (path !== "/" && pathname.startsWith(path)) return true
    return false
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="font-bold text-xl flex items-center">
            <div className="relative w-10 h-10 mr-2 overflow-hidden">
              <Image src="/images/korukamp-logo.png" alt="Korukamp Logo" fill className="object-contain" />
            </div>
            Korukamp
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors ${
                isActive(link.href) ? "text-emerald-600" : "text-foreground/80 hover:text-primary"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Button asChild className="hidden md:flex">
            <a
              href="/#rezervasyon"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById("rezervasyon")?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              Rezervasyon Yap
            </a>
          </Button>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Menüyü Aç</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col gap-6 py-6">
                <div className="flex items-center gap-2 mb-4">
                  <div className="relative w-8 h-8 mr-1">
                    <Image src="/images/korukamp-logo.png" alt="Korukamp Logo" fill className="object-contain" />
                  </div>
                  <span className="font-bold text-lg">Korukamp</span>
                </div>
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`text-lg font-medium ${isActive(link.href) ? "text-emerald-600" : ""}`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
                <Button asChild className="mt-4">
                  <a
                    href="#rezervasyon"
                    onClick={(e) => {
                      e.preventDefault()
                      setIsOpen(false)
                      document.getElementById("rezervasyon")?.scrollIntoView({ behavior: "smooth" })
                    }}
                  >
                    Rezervasyon Yap
                  </a>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

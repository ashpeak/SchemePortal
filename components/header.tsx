"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ModeToggle } from "@/components/mode-toggle"
import { LanguageSelector } from "@/components/language-selector"
import { Search, Menu, X } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function Header() {
  const [showSearch, setShowSearch] = useState(false)
  const { t } = useLanguage()

  return (
    <header className="sticky top-0 z-50 border-b bg-background">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-md bg-[#156b36] text-white">
            <span className="font-bold">GS</span>
          </div>
          <span className="hidden font-bold md:inline-block">{t("app.title")}</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-6">
            <li>
              <Link href="/" className="text-sm font-medium hover:text-[#156b36]">
                {t("nav.home")}
              </Link>
            </li>
            <li>
              <Link href="/schemes" className="text-sm font-medium hover:text-[#156b36]">
                {t("nav.schemes")}
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-sm font-medium hover:text-[#156b36]">
                {t("nav.contact")}
              </Link>
            </li>
          </ul>
        </nav>

        {/* Desktop Search and Actions */}
        <div className="hidden items-center gap-2 md:flex">
          {showSearch ? (
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
              <Input
                placeholder={`${t("home.hero.button.findSchemes")}...`}
                className="w-64 pl-9"
                onBlur={() => setShowSearch(false)}
                autoFocus
              />
            </div>
          ) : (
            <Button variant="ghost" size="icon" onClick={() => setShowSearch(true)} aria-label="Search">
              <Search className="h-5 w-5" />
            </Button>
          )}

          <LanguageSelector />
          <ModeToggle />

          <Button className="bg-[#156b36] hover:bg-[#156b36]/90">{t("nav.login")}</Button>
        </div>

        {/* Mobile Navigation */}
        <div className="flex items-center gap-2 md:hidden">
          <Button variant="ghost" size="icon" onClick={() => setShowSearch(!showSearch)} aria-label="Search">
            <Search className="h-5 w-5" />
          </Button>

          <LanguageSelector />
          <ModeToggle />

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex h-full flex-col">
                <div className="flex items-center justify-between border-b py-4">
                  <Link href="/" className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-md bg-[#156b36] text-white">
                      <span className="font-bold">GS</span>
                    </div>
                    <span className="font-bold">{t("app.title")}</span>
                  </Link>
                  <SheetTrigger asChild>
                    <Button variant="ghost" size="icon" aria-label="Close">
                      <X className="h-5 w-5" />
                    </Button>
                  </SheetTrigger>
                </div>

                <nav className="flex-1 py-8">
                  <ul className="space-y-6">
                    <li>
                      <Link href="/" className="text-lg font-medium hover:text-[#156b36]">
                        {t("nav.home")}
                      </Link>
                    </li>
                    <li>
                      <Link href="/schemes" className="text-lg font-medium hover:text-[#156b36]">
                        {t("nav.schemes")}
                      </Link>
                    </li>
                    <li>
                      <Link href="/contact" className="text-lg font-medium hover:text-[#156b36]">
                        {t("nav.contact")}
                      </Link>
                    </li>
                  </ul>
                </nav>

                <div className="border-t py-4">
                  <Button className="w-full bg-[#156b36] hover:bg-[#156b36]/90">{t("nav.login")}</Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      {/* Mobile Search Bar */}
      {showSearch && (
        <div className="border-t p-2 md:hidden">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
            <Input
              placeholder={`${t("home.hero.button.findSchemes")}...`}
              className="pl-9"
              autoFocus
              onBlur={() => setShowSearch(false)}
            />
          </div>
        </div>
      )}
    </header>
  )
}

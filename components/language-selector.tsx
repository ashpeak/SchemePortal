"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Check, Globe } from "lucide-react"
import { useLanguage, languages } from "@/contexts/language-context"

export function LanguageSelector() {
  const { language, setLanguage, t } = useLanguage()
  const [open, setOpen] = useState(false)

  // Find the current language object
  const currentLanguage = languages.find((lang) => lang.code === language) || languages[0]

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="flex items-center gap-1 px-2">
          <Globe className="h-4 w-4" />
          <span className="hidden md:inline-block">{currentLanguage.nativeName}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <div className="p-2 text-sm font-medium text-gray-500 dark:text-gray-400">{t("language.select")}</div>
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            className="flex cursor-pointer items-center justify-between"
            onClick={() => {
              setLanguage(lang.code)
              setOpen(false)
            }}
          >
            <div className="flex items-center gap-2">
              <span className="font-medium">{lang.nativeName}</span>
              <span className="text-sm text-gray-500 dark:text-gray-400">({lang.name})</span>
            </div>
            {language === lang.code && <Check className="h-4 w-4 text-[#156b36] dark:text-[#4ade80]" />}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

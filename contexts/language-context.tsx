"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

// Define available languages
export const languages = [
  { code: "en", name: "English", nativeName: "English" },
  { code: "hi", name: "Hindi", nativeName: "हिन्दी" },
  { code: "bn", name: "Bengali", nativeName: "বাংলা" },
  { code: "ta", name: "Tamil", nativeName: "தமிழ்" },
  { code: "te", name: "Telugu", nativeName: "తెలుగు" },
  { code: "mr", name: "Marathi", nativeName: "मराठी" },
  { code: "gu", name: "Gujarati", nativeName: "ગુજરાતી" },
  { code: "kn", name: "Kannada", nativeName: "ಕನ್ನಡ" },
  { code: "ml", name: "Malayalam", nativeName: "മലയാളം" },
  { code: "pa", name: "Punjabi", nativeName: "ਪੰਜਾਬੀ" },
]

type LanguageContextType = {
  language: string
  setLanguage: (lang: string) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  // Initialize with browser language or default to English
  const [language, setLanguageState] = useState("en")
  const [translations, setTranslations] = useState<Record<string, string>>({})
  const [isLoading, setIsLoading] = useState(true)

  // Set language and store in localStorage
  const setLanguage = (lang: string) => {
    setLanguageState(lang)
    localStorage.setItem("preferredLanguage", lang)
    loadTranslations(lang)
  }

  // Load translations for the selected language
  const loadTranslations = async (lang: string) => {
    try {
      setIsLoading(true)
      let translations = {}

      // Use a switch statement to import the correct translations
      switch (lang) {
        case "en":
          translations = await import("@/translations/en").then((module) => module.default)
          break
        case "hi":
          translations = await import("@/translations/hi").then((module) => module.default)
          break
        case "ta":
          translations = await import("@/translations/ta").then((module) => module.default)
          break
        default:
          // Fallback to English
          translations = await import("@/translations/en").then((module) => module.default)
      }

      setTranslations(translations)
    } catch (error) {
      console.error(`Failed to load translations for ${lang}`, error)
      // Fallback to English if translation file is not found
      if (lang !== "en") {
        const englishTranslations = await import("@/translations/en").then((module) => module.default)
        setTranslations(englishTranslations)
      }
    } finally {
      setIsLoading(false)
    }
  }

  // Translation function
  const t = (key: string): string => {
    if (isLoading) return key // Return key while loading
    return translations[key] || key // Return translation or key if not found
  }

  // Initialize language from localStorage or browser preference
  useEffect(() => {
    const getInitialLanguage = () => {
      // Check localStorage first
      const storedLang = localStorage.getItem("preferredLanguage")
      if (storedLang && languages.some((lang) => lang.code === storedLang)) {
        return storedLang
      }

      // Check browser language
      const browserLang = navigator.language.split("-")[0]
      if (languages.some((lang) => lang.code === browserLang)) {
        return browserLang
      }

      // Default to English
      return "en"
    }

    const initialLang = getInitialLanguage()
    setLanguageState(initialLang)
    loadTranslations(initialLang)
  }, [])

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

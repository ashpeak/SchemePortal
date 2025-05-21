"use client"

import { useLanguage } from "@/contexts/language-context"
import type { ReactNode } from "react"

type TranslationFunction = (key: string) => string

interface TranslatedPageProps {
  children: (t: TranslationFunction) => ReactNode
}

export function TranslatedPage({ children }: TranslatedPageProps) {
  const { t } = useLanguage()

  return <>{children(t)}</>
}

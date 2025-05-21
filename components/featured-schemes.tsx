"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"
import { schemes } from "@/data/schemes"
import { useLanguage } from "@/contexts/language-context"

export default function FeaturedSchemes() {
  const { t } = useLanguage()

  // Get 3 featured schemes
  const featuredSchemes = schemes.filter((scheme) => scheme.featured).slice(0, 3)

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {featuredSchemes.map((scheme) => (
        <Card
          key={scheme.id}
          className="flex h-full flex-col overflow-hidden border-gray-200 transition-all hover:shadow-md dark:border-gray-800"
        >
          <div className="h-2 bg-[#156b36] dark:bg-[#4ade80]"></div>
          <CardHeader className="pb-2">
            <div className="mb-2 text-sm font-medium text-gray-500 dark:text-gray-400">{scheme.ministry}</div>
            <CardTitle className="text-xl text-gray-900 dark:text-white">{scheme.title}</CardTitle>
          </CardHeader>
          <CardContent className="flex-1">
            <p className="line-clamp-3 text-gray-600 dark:text-gray-300">{scheme.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {scheme.categories.map((category) => (
                <Badge
                  key={category}
                  variant="outline"
                  className="bg-[#156b36]/10 text-[#156b36] dark:bg-[#156b36]/20 dark:text-[#4ade80]"
                >
                  {category}
                </Badge>
              ))}
            </div>
          </CardContent>
          <CardFooter className="border-t bg-gray-50 p-4 dark:border-gray-800 dark:bg-gray-900">
            <Button
              asChild
              className="w-full gap-2 bg-[#156b36] hover:bg-[#156b36]/90 dark:bg-[#156b36] dark:text-white dark:hover:bg-[#156b36]/90"
            >
              <Link href={`/schemes/${scheme.id}`}>
                {t("schemes.viewDetails")} <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}

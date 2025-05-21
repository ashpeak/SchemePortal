"use client"

import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Users, GraduationCap, Building, Landmark, Stethoscope, Tractor, Briefcase, Baby } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function SchemeCategories() {
  const { t } = useLanguage()

  const categories = [
    {
      name: t("categories.socialWelfare"),
      icon: <Users className="h-6 w-6" />,
      description: t("categories.socialWelfare.description"),
      url: "/schemes?category=social",
      color: "bg-blue-50 text-blue-600 dark:bg-blue-950 dark:text-blue-400",
    },
    {
      name: t("categories.education"),
      icon: <GraduationCap className="h-6 w-6" />,
      description: t("categories.education.description"),
      url: "/schemes?category=education",
      color: "bg-purple-50 text-purple-600 dark:bg-purple-950 dark:text-purple-400",
    },
    {
      name: t("categories.housing"),
      icon: <Building className="h-6 w-6" />,
      description: t("categories.housing.description"),
      url: "/schemes?category=housing",
      color: "bg-amber-50 text-amber-600 dark:bg-amber-950 dark:text-amber-400",
    },
    {
      name: t("categories.financial"),
      icon: <Landmark className="h-6 w-6" />,
      description: t("categories.financial.description"),
      url: "/schemes?category=financial",
      color: "bg-emerald-50 text-emerald-600 dark:bg-emerald-950 dark:text-emerald-400",
    },
    {
      name: t("categories.health"),
      icon: <Stethoscope className="h-6 w-6" />,
      description: t("categories.health.description"),
      url: "/schemes?category=health",
      color: "bg-red-50 text-red-600 dark:bg-red-950 dark:text-red-400",
    },
    {
      name: t("categories.agriculture"),
      icon: <Tractor className="h-6 w-6" />,
      description: t("categories.agriculture.description"),
      url: "/schemes?category=agriculture",
      color: "bg-green-50 text-green-600 dark:bg-green-950 dark:text-green-400",
    },
    {
      name: t("categories.employment"),
      icon: <Briefcase className="h-6 w-6" />,
      description: t("categories.employment.description"),
      url: "/schemes?category=employment",
      color: "bg-indigo-50 text-indigo-600 dark:bg-indigo-950 dark:text-indigo-400",
    },
    {
      name: t("categories.womenChild"),
      icon: <Baby className="h-6 w-6" />,
      description: t("categories.womenChild.description"),
      url: "/schemes?category=women-child",
      color: "bg-pink-50 text-pink-600 dark:bg-pink-950 dark:text-pink-400",
    },
  ]

  return (
    <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {categories.map((category) => (
        <Link key={category.name} href={category.url} className="block">
          <Card className="h-full overflow-hidden border-gray-200 transition-all hover:shadow-md dark:border-gray-800">
            <CardContent className="flex h-full flex-col p-6">
              <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-lg ${category.color}`}>
                {category.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{category.name}</h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{category.description}</p>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  )
}

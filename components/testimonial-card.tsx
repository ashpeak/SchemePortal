import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { QuoteIcon } from "lucide-react"

interface TestimonialCardProps {
  quote: string
  name: string
  location: string
  scheme: string
}

export function TestimonialCard({ quote, name, location, scheme }: TestimonialCardProps) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()

  return (
    <Card className="h-full overflow-hidden border-gray-200 transition-all hover:shadow-md dark:border-gray-800">
      <CardContent className="flex h-full flex-col p-6">
        <div className="mb-4 text-[#156b36] dark:text-[#4ade80]">
          <QuoteIcon className="h-6 w-6" />
        </div>
        <p className="flex-1 text-gray-700 dark:text-gray-300">{quote}</p>
        <div className="mt-6 flex items-center">
          <Avatar className="h-10 w-10 border-2 border-[#156b36] dark:border-[#4ade80]">
            <AvatarFallback className="bg-[#156b36]/10 text-[#156b36] dark:bg-[#156b36]/20 dark:text-[#4ade80]">
              {initials}
            </AvatarFallback>
          </Avatar>
          <div className="ml-3">
            <h4 className="font-medium text-gray-900 dark:text-white">{name}</h4>
            <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
              <span>{location}</span>
              <span className="mx-1">•</span>
              <span className="text-[#156b36] dark:text-[#4ade80]">{scheme}</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

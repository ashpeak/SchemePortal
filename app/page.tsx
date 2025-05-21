import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  ArrowRight,
  Filter,
  Search,
  Users,
  FileText,
  Building,
  Landmark,
  MessageSquareText,
  ChevronRight,
} from "lucide-react"
import FeaturedSchemes from "@/components/featured-schemes"
import { StatCard } from "@/components/stat-card"
import { TestimonialCard } from "@/components/testimonial-card"
import { SchemeCategories } from "@/components/scheme-categories"
import { TranslatedPage } from "@/components/translated-page"

export default function Home() {
  return (
    <TranslatedPage>
      {(t) => (
        <div className="flex flex-col">
          {/* Hero Section */}
          <section className="relative overflow-hidden bg-gradient-to-br from-[#156b36] to-[#0d4020] py-16 md:py-24">
            <div className="absolute inset-0 bg-[url('https://media.canva.com/v2/image-resize/format:JPG/height:452/quality:92/uri:ifs%3A%2F%2FM%2F5cd82e63-3115-48f4-9bf3-c0bb041a22d2/watermark:F/width:800?csig=AAAAAAAAAAAAAAAAAAAAADpx3J-sV0_gCwoINLRiz-EJVDXqpXvmzlaLDBbtYo9G&exp=1747850879&osig=AAAAAAAAAAAAAAAAAAAAAJEXRTnZM3lzcMRgdV-7QS2sZB8X1dy5bbEzNCQXj-ys&signer=media-rpc&x-canva-quality=screen')] bg-cover bg-center opacity-10"></div>
            <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#FF9933]/20 blur-3xl"></div>
            <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-[#FF9933]/10 blur-3xl"></div>

            <div className="container relative z-10 mx-auto px-4">
              <div className="grid items-center gap-12 md:grid-cols-2">
                <div className="flex flex-col space-y-6 text-white">
                  <div className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-sm backdrop-blur-sm">
                    <span className="mr-2 flex h-2 w-2 rounded-full bg-[#FF9933]"></span>
                    {t("app.tagline")}
                  </div>
                  <h1 className="text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
                    {t("home.hero.title")
                      .split(" ")
                      .map((word, i, arr) =>
                        i === arr.length - 2 ? (
                          <span key={i} className="text-[#FF9933]">
                            {word}{" "}
                          </span>
                        ) : (
                          <span key={i}>
                            {word}
                            {i < arr.length - 1 ? " " : ""}
                          </span>
                        ),
                      )}
                  </h1>
                  <p className="text-lg text-white/80 md:text-xl">{t("home.hero.description")}</p>
                  <div className="flex flex-wrap gap-4">
                    <Button size="lg" className="gap-2 bg-white text-[#156b36] hover:bg-white/90">
                      <Search className="h-4 w-4" /> {t("home.hero.button.findSchemes")}
                    </Button>
                    <Button
                      variant="outline"
                      size="lg"
                      className="gap-2 border-white/30 bg-transparent text-white backdrop-blur-sm hover:bg-white/10"
                    >
                      <MessageSquareText className="h-4 w-4" /> {t("home.hero.button.chatAssistant")}
                    </Button>
                  </div>
                </div>

                <div className="hidden rounded-lg bg-white/10 p-6 backdrop-blur-md md:block">
                  <div className="relative">
                    <div className="absolute -right-6 -top-6 h-24 w-24 rounded-lg bg-[#FF9933]/30 blur-xl"></div>
                    <Card className="overflow-hidden border-0 shadow-xl">
                      <CardContent className="p-0">
                        <img
                          src="https://media.canva.com/v2/image-resize/format:JPG/height:452/quality:92/uri:ifs%3A%2F%2FM%2F8578a8d4-6d02-4414-8156-e853ec5acb21/watermark:F/width:800?csig=AAAAAAAAAAAAAAAAAAAAAPlNg1d-nyvm-ILJmG3sVqraTy2xnXzrDoDFqSwGdS9L&exp=1747850455&osig=AAAAAAAAAAAAAAAAAAAAAPoHnkMpWj7QylsKFQ19ctJ6__LtLAItypfctaRcOXtp&signer=media-rpc&x-canva-quality=screen"
                          alt="Government Schemes Portal"
                          className="h-full w-full object-cover"
                        />
                        {/*
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="rounded-lg bg-white/90 m-8 p-4 text-center shadow-lg backdrop-blur-sm dark:bg-gray-900/90">
                            <h3 className="text-lg font-semibold text-[#156b36] dark:text-[#4ade80]">
                              {t("home.hero.title")}
                            </h3>
                            <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
                              {t("home.howItWorks.step1.description")}
                            </p>
                          </div>
                        </div>
                        */}
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Key Features Section */}
          <section className="bg-gradient-to-b from-white to-gray-50 py-16 dark:from-gray-950 dark:to-gray-900">
            <div className="container mx-auto px-4">
              <div className="mb-12 text-center">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
                  {t("home.howItWorks.title")}
                </h2>
                <p className="mx-auto mt-4 max-w-2xl text-gray-600 dark:text-gray-300">
                  {t("home.howItWorks.description")}
                </p>
              </div>

              <div className="grid gap-8 md:grid-cols-3">
                <div className="relative flex flex-col items-center rounded-lg border border-gray-100 bg-white p-6 text-center shadow-sm transition-all hover:shadow-md dark:border-gray-800 dark:bg-gray-900">
                  <div className="absolute -top-5 flex h-10 w-10 items-center justify-center rounded-full bg-[#156b36] text-white">
                    <span className="text-lg font-bold">1</span>
                  </div>
                  <div className="mt-4 rounded-full bg-[#156b36]/10 p-4 dark:bg-[#156b36]/20">
                    <Filter className="h-8 w-8 text-[#156b36] dark:text-[#4ade80]" />
                  </div>
                  <h3 className="mt-4 text-xl font-semibold text-gray-900 dark:text-white">
                    {t("home.howItWorks.step1.title")}
                  </h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-300">{t("home.howItWorks.step1.description")}</p>
                  <ChevronRight className="mt-4 h-6 w-6 text-[#156b36] dark:text-[#4ade80]" />
                </div>

                <div className="relative flex flex-col items-center rounded-lg border border-gray-100 bg-white p-6 text-center shadow-sm transition-all hover:shadow-md dark:border-gray-800 dark:bg-gray-900">
                  <div className="absolute -top-5 flex h-10 w-10 items-center justify-center rounded-full bg-[#156b36] text-white">
                    <span className="text-lg font-bold">2</span>
                  </div>
                  <div className="mt-4 rounded-full bg-[#156b36]/10 p-4 dark:bg-[#156b36]/20">
                    <Search className="h-8 w-8 text-[#156b36] dark:text-[#4ade80]" />
                  </div>
                  <h3 className="mt-4 text-xl font-semibold text-gray-900 dark:text-white">
                    {t("home.howItWorks.step2.title")}
                  </h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-300">{t("home.howItWorks.step2.description")}</p>
                  <ChevronRight className="mt-4 h-6 w-6 text-[#156b36] dark:text-[#4ade80]" />
                </div>

                <div className="relative flex flex-col items-center rounded-lg border border-gray-100 bg-white p-6 text-center shadow-sm transition-all hover:shadow-md dark:border-gray-800 dark:bg-gray-900">
                  <div className="absolute -top-5 flex h-10 w-10 items-center justify-center rounded-full bg-[#156b36] text-white">
                    <span className="text-lg font-bold">3</span>
                  </div>
                  <div className="mt-4 rounded-full bg-[#156b36]/10 p-4 dark:bg-[#156b36]/20">
                    <FileText className="h-8 w-8 text-[#156b36] dark:text-[#4ade80]" />
                  </div>
                  <h3 className="mt-4 text-xl font-semibold text-gray-900 dark:text-white">
                    {t("home.howItWorks.step3.title")}
                  </h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-300">{t("home.howItWorks.step3.description")}</p>
                  <ChevronRight className="mt-4 h-6 w-6 text-[#156b36] dark:text-[#4ade80]" />
                </div>
              </div>
            </div>
          </section>

          {/* Statistics Section */}
          <section className="bg-[#156b36] py-16 text-white">
            <div className="container mx-auto px-4">
              <div className="grid gap-6 md:grid-cols-4">
                <StatCard value="500+" label={t("home.stats.schemes")} icon={<FileText className="h-8 w-8" />} />
                <StatCard value="29" label={t("home.stats.states")} icon={<Landmark className="h-8 w-8" />} />
                <StatCard value="15+" label={t("home.stats.categories")} icon={<Building className="h-8 w-8" />} />
                <StatCard value="10M+" label={t("home.stats.citizens")} icon={<Users className="h-8 w-8" />} />
              </div>
            </div>
          </section>

          {/* Categories Section */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="mb-12 text-center">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
                  {t("home.categories.title")}
                </h2>
                <p className="mx-auto mt-4 max-w-2xl text-gray-600 dark:text-gray-300">
                  {t("home.categories.description")}
                </p>
              </div>

              <SchemeCategories />

              <div className="mt-10 text-center">
                <Button
                  asChild
                  size="lg"
                  className="gap-2 bg-[#156b36] hover:bg-[#156b36]/90 dark:bg-[#156b36] dark:text-white dark:hover:bg-[#156b36]/90"
                >
                  <Link href="/schemes">
                    {t("home.categories.viewAll")} <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </section>

          {/* Featured Schemes */}
          <section className="bg-gray-50 py-16 dark:bg-gray-900">
            <div className="container mx-auto px-4">
              <div className="mb-12 text-center">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
                  {t("home.featured.title")}
                </h2>
                <p className="mx-auto mt-4 max-w-2xl text-gray-600 dark:text-gray-300">
                  {t("home.featured.description")}
                </p>
              </div>

              <FeaturedSchemes />

              <div className="mt-10 text-center">
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="gap-2 border-[#156b36] text-[#156b36] hover:bg-[#156b36]/10 dark:border-[#4ade80] dark:text-[#4ade80] dark:hover:bg-[#156b36]/20"
                >
                  <Link href="/schemes">
                    {t("home.featured.exploreAll")} <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </section>

          {/* Testimonials */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="mb-12 text-center">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
                  {t("home.testimonials.title")}
                </h2>
                <p className="mx-auto mt-4 max-w-2xl text-gray-600 dark:text-gray-300">
                  {t("home.testimonials.description")}
                </p>
              </div>

              <div className="grid gap-8 md:grid-cols-3">
                <TestimonialCard
                  quote="The portal helped me find a housing scheme I didn't know I was eligible for. The application process was smooth and now I have my own home."
                  name="Rajesh Kumar"
                  location="Bihar"
                  scheme="Pradhan Mantri Awas Yojana"
                />
                <TestimonialCard
                  quote="As a farmer, I was struggling to get proper information about agricultural subsidies. This website made it easy to find and apply for PM-KISAN."
                  name="Sunita Devi"
                  location="Madhya Pradesh"
                  scheme="PM-KISAN"
                />
                <TestimonialCard
                  quote="The chatbot assistant guided me through various scholarship options for my daughter's education. We successfully applied and received financial support."
                  name="Mohammed Ismail"
                  location="Kerala"
                  scheme="National Scholarship Portal"
                />
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="relative overflow-hidden bg-gradient-to-r from-[#FF9933] to-[#FF8C00] py-16">
            <div className="absolute inset-0 bg-[url('/placeholder.svg?height=400&width=1200')] bg-cover bg-center opacity-10"></div>
            <div className="absolute -left-24 -top-24 h-64 w-64 rounded-full bg-white/10 blur-3xl"></div>
            <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-white/10 blur-3xl"></div>

            <div className="container relative z-10 mx-auto px-4">
              <div className="mx-auto max-w-3xl text-center text-white">
                <h2 className="text-3xl font-bold md:text-4xl">{t("home.cta.title")}</h2>
                <p className="mx-auto mt-4 max-w-2xl text-white/80">{t("home.cta.description")}</p>
                <div className="mt-8 flex flex-wrap justify-center gap-4">
                  <Button size="lg" className="gap-2 bg-white text-[#FF9933] hover:bg-white/90">
                    <MessageSquareText className="h-4 w-4" /> {t("home.cta.button.chat")}
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    asChild
                    className="gap-2 border-white/30 bg-transparent text-white backdrop-blur-sm hover:bg-white/10"
                  >
                    <Link href="/contact">
                      {t("home.cta.button.contact")} <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}
    </TranslatedPage>
  )
}

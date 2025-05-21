"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Twitter, Instagram, Youtube, Mail } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="border-t bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* About */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">{t("footer.about")}</h3>
            <p className="mb-4 text-sm text-gray-600 dark:text-gray-400">{t("footer.about.description")}</p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-600 hover:text-[#156b36] dark:text-gray-400 dark:hover:text-white">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-600 hover:text-[#156b36] dark:text-gray-400 dark:hover:text-white">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-gray-600 hover:text-[#156b36] dark:text-gray-400 dark:hover:text-white">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-gray-600 hover:text-[#156b36] dark:text-gray-400 dark:hover:text-white">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">{t("footer.quickLinks")}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/"
                  className="text-gray-600 hover:text-[#156b36] hover:underline dark:text-gray-400 dark:hover:text-white"
                >
                  {t("nav.home")}
                </Link>
              </li>
              <li>
                <Link
                  href="/schemes"
                  className="text-gray-600 hover:text-[#156b36] hover:underline dark:text-gray-400 dark:hover:text-white"
                >
                  {t("nav.schemes")}
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-600 hover:text-[#156b36] hover:underline dark:text-gray-400 dark:hover:text-white"
                >
                  {t("nav.contact")}
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-600 hover:text-[#156b36] hover:underline dark:text-gray-400 dark:hover:text-white"
                >
                  FAQs
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-600 hover:text-[#156b36] hover:underline dark:text-gray-400 dark:hover:text-white"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-600 hover:text-[#156b36] hover:underline dark:text-gray-400 dark:hover:text-white"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">{t("footer.categories")}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/schemes?category=education"
                  className="text-gray-600 hover:text-[#156b36] hover:underline dark:text-gray-400 dark:hover:text-white"
                >
                  {t("categories.education")}
                </Link>
              </li>
              <li>
                <Link
                  href="/schemes?category=health"
                  className="text-gray-600 hover:text-[#156b36] hover:underline dark:text-gray-400 dark:hover:text-white"
                >
                  {t("categories.health")}
                </Link>
              </li>
              <li>
                <Link
                  href="/schemes?category=housing"
                  className="text-gray-600 hover:text-[#156b36] hover:underline dark:text-gray-400 dark:hover:text-white"
                >
                  {t("categories.housing")}
                </Link>
              </li>
              <li>
                <Link
                  href="/schemes?category=agriculture"
                  className="text-gray-600 hover:text-[#156b36] hover:underline dark:text-gray-400 dark:hover:text-white"
                >
                  {t("categories.agriculture")}
                </Link>
              </li>
              <li>
                <Link
                  href="/schemes?category=employment"
                  className="text-gray-600 hover:text-[#156b36] hover:underline dark:text-gray-400 dark:hover:text-white"
                >
                  {t("categories.employment")}
                </Link>
              </li>
              <li>
                <Link
                  href="/schemes?category=financial"
                  className="text-gray-600 hover:text-[#156b36] hover:underline dark:text-gray-400 dark:hover:text-white"
                >
                  {t("categories.financial")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">{t("footer.stayUpdated")}</h3>
            <p className="mb-4 text-sm text-gray-600 dark:text-gray-400">{t("footer.stayUpdated.description")}</p>
            <div className="flex flex-col space-y-2">
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
                <Input placeholder="Your email address" type="email" className="pl-10" />
              </div>
              <Button className="bg-[#156b36] hover:bg-[#156b36]/90">{t("footer.subscribe")}</Button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-12 border-t pt-8 text-center text-sm text-gray-600 dark:text-gray-400">
          <div className="mb-4 flex flex-wrap justify-center gap-4">
            <Link href="#" className="hover:text-[#156b36] hover:underline">
              Accessibility
            </Link>
            <Link href="#" className="hover:text-[#156b36] hover:underline">
              Sitemap
            </Link>
            <Link href="#" className="hover:text-[#156b36] hover:underline">
              RTI
            </Link>
            <Link href="#" className="hover:text-[#156b36] hover:underline">
              Grievance Redressal
            </Link>
            <Link href="#" className="hover:text-[#156b36] hover:underline">
              Help
            </Link>
          </div>
          <p>{t("footer.copyright")}</p>
          <p className="mt-2">This website is designed and maintained by the National Informatics Centre (NIC)</p>
        </div>
      </div>
    </footer>
  )
}

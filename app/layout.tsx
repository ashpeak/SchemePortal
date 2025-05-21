import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { LanguageProvider } from "@/contexts/language-context"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ChatbotButton from "@/components/chatbot-button"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Indian Government Schemes Portal",
  description: "Find and filter government schemes based on your eligibility criteria",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <LanguageProvider>
            <div className="flex min-h-screen flex-col">
              <Header />
              <main className="flex-1">{children}</main>
              <Footer />
              <ChatbotButton />
            </div>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}

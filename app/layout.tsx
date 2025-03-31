import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { ThemeProvider } from "next-themes"
import "./globals.css"

const geistSans = Geist({
  subsets: ["latin", "latin-ext"],
  variable: "--font-sans",
})
const geistMono = Geist_Mono({
  subsets: ["latin", "latin-ext"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  title: "NextSTEP | Odkryj swoją idealną ścieżkę edukacyjną",
  description:
    "Wykorzystaj testy psychologiczne i sztuczną inteligencję, aby znaleźć kierunek studiów idealnie dopasowany do Twoich predyspozycji i zainteresowań.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pl" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}


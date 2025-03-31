import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { BrainCircuit, GraduationCap, Lightbulb, Users, BarChart4, BookOpen, Sparkles, ArrowRight } from "lucide-react"

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-purple-50 dark:from-gray-900 dark:to-indigo-950">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="relative mb-6">
            <div className="relative">
              <BrainCircuit className="h-16 w-16 text-indigo-600 dark:text-indigo-400" />
              <div className="absolute -top-2 -right-2 animate-pulse">
                <Sparkles className="h-6 w-6 text-yellow-500" />
              </div>
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">
            NextSTEP
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 max-w-3xl font-medium">
            Odkryj swoją idealną ścieżkę edukacyjną dzięki testom psychologicznym i sztucznej inteligencji
          </p>
          <Button
            size="lg"
            className="mt-8 bg-indigo-600 hover:bg-indigo-700 text-white text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all"
          >
            Rozpocznij test
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>

        {/* AI Animation Section */}
        <div className="relative h-64 md:h-80 mb-16 overflow-hidden rounded-xl bg-gradient-to-r from-indigo-900 to-purple-900 shadow-xl">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-0 w-full h-full grid grid-cols-8 gap-1">
              {Array.from({ length: 64 }).map((_, i) => (
                <div
                  key={i}
                  className="aspect-square bg-white opacity-0 animate-pulse"
                  style={{
                    animationDelay: `${Math.random() * 5}s`,
                    animationDuration: `${Math.random() * 3 + 2}s`,
                  }}
                />
              ))}
            </div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center text-white">
            <div className="text-center max-w-2xl px-4">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Sztuczna inteligencja w służbie Twojej przyszłości
              </h2>
              <p className="text-lg opacity-90">
                Nasze algorytmy analizują Twoje predyspozycje, zainteresowania i cechy osobowości, aby wskazać najlepsze
                kierunki studiów
              </p>
            </div>
          </div>
        </div>

        {/* How it Works Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-10">Jak działa NextSTEP?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border-0 shadow-md hover:shadow-lg transition-all">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full mb-4">
                  <BookOpen className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-bold mb-2">Test psychologiczny</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Wypełnij interaktywny test oparty na najnowszych badaniach z dziedziny psychologii edukacyjnej
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border-0 shadow-md hover:shadow-lg transition-all">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="bg-purple-100 dark:bg-purple-900/30 p-3 rounded-full mb-4">
                  <BrainCircuit className="h-8 w-8 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-xl font-bold mb-2">Analiza AI</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Nasz zaawansowany algorytm analizuje Twoje odpowiedzi i dopasowuje je do profili zawodowych
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border-0 shadow-md hover:shadow-lg transition-all">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-full mb-4">
                  <GraduationCap className="h-8 w-8 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-xl font-bold mb-2">Spersonalizowane rekomendacje</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Otrzymaj listę kierunków studiów idealnie dopasowanych do Twoich predyspozycji i zainteresowań
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mb-16">
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold text-center mb-8">Dlaczego warto wybrać NextSTEP?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-start">
                <div className="bg-indigo-100 dark:bg-indigo-900/30 p-2 rounded-full mr-4 mt-1">
                  <Lightbulb className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Precyzyjne dopasowanie</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Nasze testy uwzględniają ponad 20 czynników psychologicznych, co zapewnia wyjątkowo trafne
                    rekomendacje
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-indigo-100 dark:bg-indigo-900/30 p-2 rounded-full mr-4 mt-1">
                  <BarChart4 className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Aktualne dane rynkowe</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Uwzględniamy aktualne trendy na rynku pracy i perspektywy zawodowe dla poszczególnych kierunków
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-indigo-100 dark:bg-indigo-900/30 p-2 rounded-full mr-4 mt-1">
                  <Users className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Wsparcie ekspertów</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Nasz zespół doradców edukacyjnych i psychologów jest dostępny, aby omówić wyniki i odpowiedzieć na
                    pytania
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-indigo-100 dark:bg-indigo-900/30 p-2 rounded-full mr-4 mt-1">
                  <Sparkles className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Ciągłe doskonalenie</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Nasz algorytm AI stale się uczy i doskonali, zapewniając coraz lepsze dopasowanie rekomendacji
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-800 dark:to-purple-800 rounded-2xl shadow-xl p-8 mb-16 text-white">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-2">Zaufało nam już tysiące studentów</h2>
            <p className="opacity-90">Dołącz do grona osób, które znalazły swoją ścieżkę edukacyjną z NextSTEP</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <p className="text-4xl font-bold">97%</p>
              <p className="opacity-90">zadowolonych użytkowników</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold">45 000+</p>
              <p className="opacity-90">przeprowadzonych testów</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold">250+</p>
              <p className="opacity-90">analizowanych kierunków</p>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Co mówią nasi użytkownicy?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-md">
              <CardContent className="p-6">
                <p className="italic mb-4 text-gray-600 dark:text-gray-300">
                  "Byłam rozdarta między kilkoma kierunkami studiów. Test NextSTEP pomógł mi odkryć, że psychologia jest
                  idealnym wyborem dla mnie. Teraz jestem na trzecim roku i kocham to, co robię!"
                </p>
                <div className="flex items-center">
                  <div className="bg-indigo-100 dark:bg-indigo-900/30 p-2 rounded-full mr-3">
                    <Users className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <div>
                    <p className="font-semibold">Karolina W.</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Studentka psychologii</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-md">
              <CardContent className="p-6">
                <p className="italic mb-4 text-gray-600 dark:text-gray-300">
                  "Test ujawnił moje predyspozycje, o których nawet nie wiedziałem. Zasugerował informatykę, której
                  nigdy wcześniej nie brałem pod uwagę. Dwa lata później pracuję w branży IT i jestem naprawdę
                  szczęśliwy!"
                </p>
                <div className="flex items-center">
                  <div className="bg-indigo-100 dark:bg-indigo-900/30 p-2 rounded-full mr-3">
                    <Users className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <div>
                    <p className="font-semibold">Michał K.</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Absolwent informatyki</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Gotowy odkryć swoją ścieżkę?</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Zajmie Ci to tylko 15 minut, a może zmienić całą Twoją przyszłość edukacyjną i zawodową.
          </p>
          <Link href="/test">
            <Button
              size="lg"
              className="bg-indigo-600 hover:bg-indigo-700 text-white text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all"
            >
              Rozpocznij test teraz
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          <p className="mt-4 text-gray-500 dark:text-gray-400">Całkowicie bezpłatnie, bez zobowiązań</p>
        </div>
      </div>
    </div>
  )
}


"use client"

import React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  BookOpen,
  BrainCircuit,
  Download,
  ExternalLink,
  GraduationCap,
  BarChart,
  Share2,
  ThumbsUp,
  Users,
  Briefcase,
  Code,
  Microscope,
  Building2,
  HeartPulse,
} from "lucide-react"
import Link from "next/link"

// Przykładowe dane profilu użytkownika
const userProfile = {
  analyticalThinking: 85,
  creativity: 70,
  socialSkills: 65,
  practicalSkills: 60,
  researchAptitude: 80,
}

// Przykładowe rekomendowane kierunki studiów
const recommendedFields = [
  {
    id: 1,
    name: "Informatyka",
    description: "Kierunek dla osób o wysokich zdolnościach analitycznych i zainteresowaniach technologicznych.",
    matchPercentage: 92,
    icon: <Code className="h-8 w-8 text-blue-600 dark:text-blue-400" />,
    color: "bg-blue-100 dark:bg-blue-900/30",
    textColor: "text-blue-600 dark:text-blue-400",
    keySkills: ["Logiczne myślenie", "Rozwiązywanie problemów", "Programowanie", "Analiza danych"],
    careerPaths: ["Programista", "Analityk danych", "Inżynier oprogramowania", "Architekt systemów IT"],
    universities: [
      { name: "Politechnika Warszawska", rating: 4.8 },
      { name: "AGH w Krakowie", rating: 4.7 },
      { name: "Politechnika Wrocławska", rating: 4.6 },
    ],
  },
  {
    id: 2,
    name: "Biotechnologia",
    description: "Idealna dla osób o zdolnościach analitycznych i zainteresowaniach naukami przyrodniczymi.",
    matchPercentage: 87,
    icon: <Microscope className="h-8 w-8 text-green-600 dark:text-green-400" />,
    color: "bg-green-100 dark:bg-green-900/30",
    textColor: "text-green-600 dark:text-green-400",
    keySkills: ["Analiza naukowa", "Praca laboratoryjna", "Metodologia badań", "Krytyczne myślenie"],
    careerPaths: ["Biotechnolog", "Badacz naukowy", "Specjalista R&D", "Analityk laboratoryjny"],
    universities: [
      { name: "Uniwersytet Warszawski", rating: 4.7 },
      { name: "Uniwersytet Jagielloński", rating: 4.8 },
      { name: "Uniwersytet im. Adama Mickiewicza", rating: 4.5 },
    ],
  },
  {
    id: 3,
    name: "Psychologia",
    description: "Dla osób o wysokich zdolnościach społecznych i zainteresowaniu ludzkim zachowaniem.",
    matchPercentage: 78,
    icon: <Users className="h-8 w-8 text-purple-600 dark:text-purple-400" />,
    color: "bg-purple-100 dark:bg-purple-900/30",
    textColor: "text-purple-600 dark:text-purple-400",
    keySkills: ["Empatia", "Komunikacja", "Analiza zachowań", "Prowadzenie badań"],
    careerPaths: ["Psycholog kliniczny", "Psychoterapeuta", "HR Manager", "Badacz społeczny"],
    universities: [
      { name: "SWPS Uniwersytet Humanistycznospołeczny", rating: 4.9 },
      { name: "Uniwersytet Warszawski", rating: 4.7 },
      { name: "Uniwersytet Jagielloński", rating: 4.6 },
    ],
  },
  {
    id: 4,
    name: "Architektura",
    description: "Dla osób łączących zdolności kreatywne z umiejętnościami technicznymi i przestrzennymi.",
    matchPercentage: 75,
    icon: <Building2 className="h-8 w-8 text-amber-600 dark:text-amber-400" />,
    color: "bg-amber-100 dark:bg-amber-900/30",
    textColor: "text-amber-600 dark:text-amber-400",
    keySkills: ["Myślenie przestrzenne", "Kreatywność", "Projektowanie", "Znajomość technologii budowlanych"],
    careerPaths: ["Architekt", "Projektant wnętrz", "Urbanista", "Projektant krajobrazu"],
    universities: [
      { name: "Politechnika Warszawska", rating: 4.8 },
      { name: "Politechnika Wrocławska", rating: 4.6 },
      { name: "Politechnika Krakowska", rating: 4.5 },
    ],
  },
  {
    id: 5,
    name: "Medycyna",
    description: "Dla osób o wysokich zdolnościach analitycznych i chęci pomagania innym.",
    matchPercentage: 72,
    icon: <HeartPulse className="h-8 w-8 text-red-600 dark:text-red-400" />,
    color: "bg-red-100 dark:bg-red-900/30",
    textColor: "text-red-600 dark:text-red-400",
    keySkills: ["Analityczne myślenie", "Empatia", "Odporność na stres", "Umiejętności manualne"],
    careerPaths: ["Lekarz", "Chirurg", "Badacz medyczny", "Specjalista zdrowia publicznego"],
    universities: [
      { name: "Warszawski Uniwersytet Medyczny", rating: 4.9 },
      { name: "Collegium Medicum UJ", rating: 4.8 },
      { name: "Gdański Uniwersytet Medyczny", rating: 4.7 },
    ],
  },
]

// Komponent wykresu radarowego
const RadarChart = ({ data }: { data: Record<string, number> }) => {
  const categories = {
    analyticalThinking: "Myślenie analityczne",
    creativity: "Kreatywność",
    socialSkills: "Umiejętności społeczne",
    practicalSkills: "Umiejętności praktyczne",
    researchAptitude: "Zdolności badawcze",
  }

  // Funkcja do obliczania pozycji punktów na wykresie
  const calculatePoint = (value: number, index: number, total: number) => {
    const radius = (value / 100) * 120
    const angle = (Math.PI * 2 * index) / total
    const x = radius * Math.sin(angle) + 150
    const y = radius * Math.cos(angle) + 150
    return { x, y }
  }

  const dataPoints = Object.entries(data)
  const points = dataPoints.map(([_, value], index) => calculatePoint(value, index, dataPoints.length))

  // Tworzenie ścieżki dla wielokąta
  const polygonPoints = points.map((point) => `${point.x},${point.y}`).join(" ")

  return (
    <div className="flex justify-center my-6">
      <svg width="300" height="300" viewBox="0 0 300 300">
        {/* Tło wykresu - okręgi */}
        {[20, 40, 60, 80, 100].map((percent, i) => (
          <circle
            key={i}
            cx="150"
            cy="150"
            r={percent * 1.2}
            fill="none"
            stroke="rgba(107, 114, 128, 0.2)"
            strokeWidth="1"
          />
        ))}

        {/* Linie od środka do kategorii */}
        {dataPoints.map((_, index) => {
          const point = calculatePoint(100, index, dataPoints.length)
          return (
            <line
              key={index}
              x1="150"
              y1="150"
              x2={point.x}
              y2={point.y}
              stroke="rgba(107, 114, 128, 0.3)"
              strokeWidth="1"
            />
          )
        })}

        {/* Wielokąt danych */}
        <polygon points={polygonPoints} fill="rgba(79, 70, 229, 0.2)" stroke="rgba(79, 70, 229, 0.8)" strokeWidth="2" />

        {/* Punkty danych */}
        {points.map((point, index) => (
          <circle key={index} cx={point.x} cy={point.y} r="4" fill="rgba(79, 70, 229, 1)" />
        ))}

        {/* Etykiety kategorii */}
        {dataPoints.map(([key, _], index) => {
          const point = calculatePoint(120, index, dataPoints.length)
          const labelPoint = calculatePoint(140, index, dataPoints.length)
          return (
            <text
              key={index}
              x={labelPoint.x}
              y={labelPoint.y}
              textAnchor="middle"
              dominantBaseline="middle"
              fontSize="12"
              fill="currentColor"
              className="text-gray-700 dark:text-gray-300"
            >
              {categories[key as keyof typeof categories]}
            </text>
          )
        })}
      </svg>
    </div>
  )
}

export default function ResultsPage() {
  const [isLoading, setIsLoading] = useState(true)

  // Symulacja ładowania wyników
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-purple-50 dark:from-gray-900 dark:to-indigo-950 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-pulse mb-4">
            <BrainCircuit className="h-16 w-16 text-indigo-600 dark:text-indigo-400 mx-auto" />
          </div>
          <h2 className="text-2xl font-bold mb-2">Analizujemy Twoje odpowiedzi...</h2>
          <p className="text-gray-600 dark:text-gray-300">
            Nasz algorytm AI przygotowuje spersonalizowane rekomendacje
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-purple-50 dark:from-gray-900 dark:to-indigo-950 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Nagłówek wyników */}
          <div className="text-center mb-10">
            <div className="inline-block bg-indigo-100 dark:bg-indigo-900/30 p-3 rounded-full mb-4">
              <GraduationCap className="h-10 w-10 text-indigo-600 dark:text-indigo-400" />
            </div>
            <h1 className="text-4xl font-bold mb-2">Twoje wyniki</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Na podstawie Twoich odpowiedzi przygotowaliśmy spersonalizowane rekomendacje kierunków studiów
            </p>
          </div>

          {/* Główna sekcja wyników */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* Profil użytkownika */}
            <Card className="lg:col-span-1 bg-white/90 dark:bg-gray-800/90 shadow-lg">
              <CardHeader>
                <CardTitle>Twój profil</CardTitle>
                <CardDescription>Analiza Twoich predyspozycji i zainteresowań</CardDescription>
              </CardHeader>
              <CardContent>
                <RadarChart data={userProfile} />
                <div className="space-y-4 mt-6">
                  {Object.entries(userProfile).map(([key, value]) => {
                    const labels: Record<string, string> = {
                      analyticalThinking: "Myślenie analityczne",
                      creativity: "Kreatywność",
                      socialSkills: "Umiejętności społeczne",
                      practicalSkills: "Umiejętności praktyczne",
                      researchAptitude: "Zdolności badawcze",
                    }

                    return (
                      <div key={key}>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium">{labels[key]}</span>
                          <span className="text-sm font-medium">{value}%</span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                          <div
                            className="bg-indigo-600 dark:bg-indigo-500 h-2.5 rounded-full"
                            style={{ width: `${value}%` }}
                          ></div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Rekomendowane kierunki */}
            <Card className="lg:col-span-2 bg-white/90 dark:bg-gray-800/90 shadow-lg">
              <CardHeader>
                <CardTitle>Rekomendowane kierunki studiów</CardTitle>
                <CardDescription>Kierunki najlepiej dopasowane do Twojego profilu</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {recommendedFields.slice(0, 3).map((field) => (
                    <div
                      key={field.id}
                      className="flex items-start gap-4 p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
                    >
                      <div className={`${field.color} p-3 rounded-full`}>{field.icon}</div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start">
                          <h3 className="text-xl font-bold">{field.name}</h3>
                          <Badge className="bg-indigo-600">{field.matchPercentage}% dopasowania</Badge>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300 mt-1 mb-2">{field.description}</p>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {field.keySkills.slice(0, 3).map((skill, index) => (
                            <Badge
                              key={index}
                              variant="outline"
                              className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
                            >
                              {skill}
                            </Badge>
                          ))}
                          {field.keySkills.length > 3 && (
                            <Badge
                              variant="outline"
                              className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
                            >
                              +{field.keySkills.length - 3}
                            </Badge>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-indigo-600 hover:bg-indigo-700">Zobacz wszystkie rekomendacje</Button>
              </CardFooter>
            </Card>
          </div>

          {/* Szczegółowa analiza */}
          <Card className="bg-white/90 dark:bg-gray-800/90 shadow-lg mb-12">
            <CardHeader>
              <CardTitle>Szczegółowa analiza</CardTitle>
              <CardDescription>Poznaj szczegóły rekomendowanych kierunków studiów</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue={recommendedFields[0].id.toString()}>
                <TabsList className="grid grid-cols-3 mb-8">
                  {recommendedFields.slice(0, 3).map((field) => (
                    <TabsTrigger key={field.id} value={field.id.toString()}>
                      {field.name}
                    </TabsTrigger>
                  ))}
                </TabsList>

                {recommendedFields.slice(0, 3).map((field) => (
                  <TabsContent key={field.id} value={field.id.toString()}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                          <div className={`${field.color} p-2 rounded-full`}>
                            {React.cloneElement(field.icon as React.ReactElement, { className: "h-5 w-5" })}
                          </div>
                          O kierunku {field.name}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                          {field.description} Ten kierunek studiów jest idealnie dopasowany do Twojego profilu,
                          szczególnie biorąc pod uwagę Twoje wysokie wyniki w obszarach
                          {field.id === 1 && " myślenia analitycznego i zdolności badawczych"}
                          {field.id === 2 && " myślenia analitycznego i zdolności badawczych"}
                          {field.id === 3 && " umiejętności społecznych i kreatywności"}
                          {field.id === 4 && " kreatywności i umiejętności praktycznych"}
                          {field.id === 5 && " myślenia analitycznego i umiejętności społecznych"}.
                        </p>

                        <h4 className="font-semibold mb-2 flex items-center gap-2">
                          <Briefcase className="h-4 w-4" />
                          Ścieżki kariery
                        </h4>
                        <ul className="list-disc list-inside mb-4 text-gray-600 dark:text-gray-300">
                          {field.careerPaths.map((path, index) => (
                            <li key={index}>{path}</li>
                          ))}
                        </ul>

                        <h4 className="font-semibold mb-2 flex items-center gap-2">
                          <BookOpen className="h-4 w-4" />
                          Kluczowe umiejętności
                        </h4>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {field.keySkills.map((skill, index) => (
                            <Badge key={index} variant="outline">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h3 className="text-xl font-bold mb-4">Polecane uczelnie</h3>
                        <div className="space-y-4">
                          {field.universities.map((uni, index) => (
                            <div key={index} className="p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                              <div className="flex justify-between items-center">
                                <h4 className="font-semibold">{uni.name}</h4>
                                <div className="flex items-center">
                                  <span className="mr-1">{uni.rating}</span>
                                  <ThumbsUp className="h-4 w-4 text-yellow-500" />
                                </div>
                              </div>
                              <div className="mt-2 flex gap-2">
                                <Button size="sm" variant="outline" className="text-xs">
                                  <ExternalLink className="h-3 w-3 mr-1" />
                                  Strona uczelni
                                </Button>
                                <Button size="sm" variant="outline" className="text-xs">
                                  <BookOpen className="h-3 w-3 mr-1" />
                                  Program studiów
                                </Button>
                              </div>
                            </div>
                          ))}
                        </div>

                        <div className="mt-6 p-4 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg">
                          <h4 className="font-semibold mb-2 flex items-center gap-2">
                            <BarChart className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
                            Perspektywy zawodowe
                          </h4>
                          <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">
                            Prognozowany wzrost zapotrzebowania na specjalistów w tej dziedzinie w ciągu najbliższych 5
                            lat:
                          </p>
                          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mb-1">
                            <div
                              className="bg-indigo-600 dark:bg-indigo-500 h-2.5 rounded-full"
                              style={{
                                width: `${field.id === 1 ? 85 : field.id === 2 ? 75 : field.id === 3 ? 65 : 70}%`,
                              }}
                            ></div>
                          </div>
                          <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400">
                            <span>0%</span>
                            <span>50%</span>
                            <span>100%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                ))}
              </Tabs>
            </CardContent>
          </Card>

          {/* Sekcja akcji */}
          <div className="flex flex-col md:flex-row gap-4 justify-center mb-8">
            <Button className="bg-indigo-600 hover:bg-indigo-700">
              <Download className="mr-2 h-4 w-4" />
              Pobierz pełny raport PDF
            </Button>
            <Button variant="outline">
              <Share2 className="mr-2 h-4 w-4" />
              Udostępnij wyniki
            </Button>
            <Button variant="outline">
              <Users className="mr-2 h-4 w-4" />
              Konsultacja z doradcą
            </Button>
          </div>

          {/* Stopka */}
          <div className="text-center">
            <Separator className="mb-6" />
            <p className="text-gray-500 dark:text-gray-400 mb-4">
              Wyniki oparte na analizie AI i badaniach psychologicznych. Rekomendacje mają charakter pomocniczy.
            </p>
            <div className="flex justify-center gap-4">
              <Link href="/">
                <Button variant="link" size="sm">
                  Strona główna
                </Button>
              </Link>
              <Link href="/test">
                <Button variant="link" size="sm">
                  Wykonaj test ponownie
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


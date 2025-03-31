"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import { BrainCircuit, ChevronLeft, ChevronRight, CheckCircle2 } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

// Przykładowe pytania quizu
const quizQuestions = [
  {
    id: 1,
    question: "Jak najchętniej spędzasz wolny czas?",
    options: [
      { id: "a", text: "Czytając książki lub artykuły naukowe" },
      { id: "b", text: "Rozwiązując problemy logiczne lub matematyczne" },
      { id: "c", text: "Tworząc sztukę lub zajmując się rzemiosłem" },
      { id: "d", text: "Pomagając innym lub angażując się w działania społeczne" },
      { id: "e", text: "Analizując dane lub prowadząc badania" },
    ],
  },
  {
    id: 2,
    question: "Które przedmioty szkolne najbardziej Cię interesowały?",
    options: [
      { id: "a", text: "Języki obce i literatura" },
      { id: "b", text: "Matematyka i fizyka" },
      { id: "c", text: "Sztuka i muzyka" },
      { id: "d", text: "Biologia i chemia" },
      { id: "e", text: "Historia i wiedza o społeczeństwie" },
    ],
  },
  {
    id: 3,
    question: "Jak reagujesz na nowe wyzwania?",
    options: [
      { id: "a", text: "Analizuję problem metodycznie i szukam najlepszego rozwiązania" },
      { id: "b", text: "Podchodzę kreatywnie i szukam niestandardowych rozwiązań" },
      { id: "c", text: "Konsultuję się z innymi i szukam wspólnego rozwiązania" },
      { id: "d", text: "Polegam na sprawdzonych metodach, które działały w przeszłości" },
      { id: "e", text: "Eksperymentuję z różnymi podejściami, aż znajdę to, które działa" },
    ],
  },
  {
    id: 4,
    question: "Co jest dla Ciebie najważniejsze w przyszłej karierze?",
    options: [
      { id: "a", text: "Stabilność finansowa i bezpieczeństwo zatrudnienia" },
      { id: "b", text: "Możliwość ciągłego rozwoju i nauki nowych rzeczy" },
      { id: "c", text: "Pomaganie innym i pozytywny wpływ na społeczeństwo" },
      { id: "d", text: "Niezależność i możliwość bycia własnym szefem" },
      { id: "e", text: "Prestiż i uznanie w swojej dziedzinie" },
    ],
  },
  {
    id: 5,
    question: "Jak opisałbyś swój styl pracy?",
    options: [
      { id: "a", text: "Systematyczny i zorganizowany" },
      { id: "b", text: "Kreatywny i spontaniczny" },
      { id: "c", text: "Analityczny i dociekliwy" },
      { id: "d", text: "Zorientowany na ludzi i współpracę" },
      { id: "e", text: "Praktyczny i zorientowany na wyniki" },
    ],
  },
  {
    id: 6,
    question: "Które z poniższych zadań sprawiłoby Ci największą satysfakcję?",
    options: [
      { id: "a", text: "Rozwiązanie złożonego problemu technicznego" },
      { id: "b", text: "Stworzenie czegoś pięknego lub inspirującego" },
      { id: "c", text: "Pomoc osobie w trudnej sytuacji" },
      { id: "d", text: "Odkrycie czegoś nowego lub innowacyjnego" },
      { id: "e", text: "Zarządzanie projektem i doprowadzenie go do sukcesu" },
    ],
  },
  {
    id: 7,
    question: "Jak reagujesz na krytykę?",
    options: [
      { id: "a", text: "Analizuję ją obiektywnie i wyciągam wnioski" },
      { id: "b", text: "Biorę ją do serca i staram się poprawić" },
      { id: "c", text: "Porównuję ją z moimi własnymi standardami" },
      { id: "d", text: "Szukam w niej konstruktywnych elementów" },
      { id: "e", text: "Traktuję ją jako okazję do rozwoju" },
    ],
  },
  {
    id: 8,
    question: "Co najbardziej motywuje Cię do działania?",
    options: [
      { id: "a", text: "Ciekawość i chęć zrozumienia świata" },
      { id: "b", text: "Możliwość wyrażenia siebie i swoich pomysłów" },
      { id: "c", text: "Chęć pomocy innym i zmiany świata na lepsze" },
      { id: "d", text: "Dążenie do mistrzostwa i doskonałości" },
      { id: "e", text: "Osiąganie konkretnych, wymiernych celów" },
    ],
  },
]

export default function TestPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [isCompleted, setIsCompleted] = useState(false)

  const progress = (currentQuestion / quizQuestions.length) * 100

  const handleAnswer = (value: string) => {
    setAnswers({
      ...answers,
      [quizQuestions[currentQuestion].id]: value,
    })
  }

  const goToNextQuestion = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setIsCompleted(true)
    }
  }

  const goToPreviousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
    }
  }

  const currentQuestionData = quizQuestions[currentQuestion]
  const isAnswered = answers[currentQuestionData?.id] !== undefined

  const router = useRouter()

  if (isCompleted) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-purple-50 dark:from-gray-900 dark:to-indigo-950 py-12">
        <div className="container mx-auto px-4">
          <Card className="max-w-3xl mx-auto bg-white/90 dark:bg-gray-800/90 shadow-xl">
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 bg-green-100 dark:bg-green-900/30 p-3 rounded-full">
                <CheckCircle2 className="h-12 w-12 text-green-600 dark:text-green-400" />
              </div>
              <CardTitle className="text-3xl font-bold">Test ukończony!</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-xl mb-6">
                Dziękujemy za wypełnienie testu. Nasz algorytm AI analizuje Twoje odpowiedzi.
              </p>
              <div className="mb-8 p-6 bg-indigo-50 dark:bg-indigo-950/50 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Twój raport jest prawie gotowy</h3>
                <p className="mb-4">
                  Na podstawie Twoich odpowiedzi przygotowujemy spersonalizowane rekomendacje kierunków studiów, które
                  najlepiej pasują do Twojego profilu.
                </p>
                <div className="flex justify-center">
                  <div className="animate-pulse bg-indigo-200 dark:bg-indigo-700/50 p-3 rounded-full">
                    <BrainCircuit className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-center">
              <Link href="/">
                <Button variant="outline" className="mr-4">
                  Powrót do strony głównej
                </Button>
              </Link>
              <Button className="bg-indigo-600 hover:bg-indigo-700" onClick={() => router.push("/wyniki")}>
                Zobacz wyniki
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-purple-50 dark:from-gray-900 dark:to-indigo-950 py-12">
      <div className="container mx-auto px-4">
        <Card className="max-w-3xl mx-auto bg-white/90 dark:bg-gray-800/90 shadow-xl">
          <CardHeader>
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                Pytanie {currentQuestion + 1} z {quizQuestions.length}
              </h2>
              <span className="text-sm font-medium text-indigo-600 dark:text-indigo-400">
                {Math.round(progress)}% ukończono
              </span>
            </div>
            <Progress value={progress} className="h-2 bg-gray-200 dark:bg-gray-700" />
            <CardTitle className="text-2xl font-bold mt-4">{currentQuestionData.question}</CardTitle>
          </CardHeader>
          <CardContent>
            <RadioGroup
              value={answers[currentQuestionData.id] || ""}
              onValueChange={handleAnswer}
              className="space-y-4"
            >
              {currentQuestionData.options.map((option) => (
                <div
                  key={option.id}
                  className="flex items-center space-x-2 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700/50 transition-colors"
                >
                  <RadioGroupItem value={option.id} id={`option-${option.id}`} />
                  <Label htmlFor={`option-${option.id}`} className="flex-grow cursor-pointer">
                    {option.text}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" onClick={goToPreviousQuestion} disabled={currentQuestion === 0}>
              <ChevronLeft className="mr-2 h-4 w-4" />
              Wstecz
            </Button>
            <Button
              onClick={goToNextQuestion}
              disabled={!isAnswered}
              className={`${isAnswered ? "bg-indigo-600 hover:bg-indigo-700" : "bg-gray-300 dark:bg-gray-700"}`}
            >
              {currentQuestion < quizQuestions.length - 1 ? (
                <>
                  Dalej
                  <ChevronRight className="ml-2 h-4 w-4" />
                </>
              ) : (
                "Zakończ test"
              )}
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
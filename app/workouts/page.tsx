import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Clock, Dumbbell, BarChart, Filter, Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import Image from 'next/image';

const workoutPlans = [
  {
    id: 1,
    title: "Beginner Strength Training",
    description: "Perfect for those new to strength training. Build a foundation of strength and learn proper form.",
    duration: "4 weeks",
    intensity: "Low to Moderate",
    category: "strength",
    level: "beginner",
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    id: 2,
    title: "HIIT Fat Burner",
    description:
      "High-intensity interval training designed to maximize calorie burn and improve cardiovascular fitness.",
    duration: "6 weeks",
    intensity: "High",
    category: "cardio",
    level: "intermediate",
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    id: 3,
    title: "Yoga for Flexibility",
    description: "Improve your flexibility, balance, and mental wellbeing with this comprehensive yoga program.",
    duration: "8 weeks",
    intensity: "Low",
    category: "flexibility",
    level: "beginner",
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    id: 4,
    title: "Advanced Powerlifting",
    description:
      "Take your strength to the next level with this advanced powerlifting program focused on the big three lifts.",
    duration: "12 weeks",
    intensity: "Very High",
    category: "strength",
    level: "advanced",
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    id: 5,
    title: "Core Strength & Stability",
    description:
      "Focus on building a strong core with exercises targeting abs, lower back, and obliques for better stability and posture.",
    duration: "6 weeks",
    intensity: "Moderate",
    category: "strength",
    level: "intermediate",
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    id: 6,
    title: "Bodyweight Fitness",
    description:
      "No equipment needed for this full-body workout program that uses only your bodyweight for resistance.",
    duration: "8 weeks",
    intensity: "Moderate",
    category: "strength",
    level: "beginner",
    image: "/placeholder.svg?height=300&width=500",
  },
]

export default function WorkoutsPage() {
  return (
    <div className="container py-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight mb-2">Workout Plans</h1>
          <p className="text-muted-foreground">
            Discover personalized workout plans designed to help you reach your fitness goals.
          </p>
        </div>
        <div className="flex w-full md:w-auto gap-2">
          <div className="relative w-full md:w-64">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Search workouts..." className="pl-8" />
          </div>
          <Button variant="outline" size="icon">
            <Filter className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <Tabs defaultValue="all" className="mb-8">
        <TabsList>
          <TabsTrigger value="all">All Plans</TabsTrigger>
          <TabsTrigger value="strength">Strength</TabsTrigger>
          <TabsTrigger value="cardio">Cardio</TabsTrigger>
          <TabsTrigger value="flexibility">Flexibility</TabsTrigger>
        </TabsList>
      </Tabs>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {workoutPlans.map((plan) => (
          <Card key={plan.id} className="overflow-hidden">
            <div className="aspect-video relative">
              <Image src={plan.image || "/placeholder.svg"} alt={plan.title} className="object-cover w-full h-full" />
              <Badge className="absolute top-2 right-2">{plan.level}</Badge>
            </div>
            <CardHeader>
              <CardTitle>{plan.title}</CardTitle>
              <CardDescription>{plan.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2 text-sm">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <span>{plan.duration}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <BarChart className="h-4 w-4 text-muted-foreground" />
                  <span>Intensity: {plan.intensity}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Dumbbell className="h-4 w-4 text-muted-foreground" />
                  <span>Category: {plan.category.charAt(0).toUpperCase() + plan.category.slice(1)}</span>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">View Plan</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}


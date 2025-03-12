import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Search, Filter, Clock, Utensils, Users } from "lucide-react"

const mealPlans = [
  {
    id: 1,
    title: "Weight Loss Meal Plan",
    description:
      "A calorie-controlled meal plan designed to support healthy weight loss while maintaining energy levels.",
    calories: "1500-1800 per day",
    meals: 5,
    duration: "4 weeks",
    category: "weight-loss",
    image: "/placeholder.svg?height=300&width=500",
    tags: ["Low Calorie", "High Protein", "Balanced"],
  },
  {
    id: 2,
    title: "Muscle Building Plan",
    description: "High-protein meal plan designed to support muscle growth and recovery during strength training.",
    calories: "2500-3000 per day",
    meals: 6,
    duration: "8 weeks",
    category: "muscle-gain",
    image: "/placeholder.svg?height=300&width=500",
    tags: ["High Protein", "Calorie Surplus", "Performance"],
  },
  {
    id: 3,
    title: "Vegetarian Essentials",
    description: "Plant-based meal plan that ensures you get all essential nutrients without meat products.",
    calories: "2000-2200 per day",
    meals: 4,
    duration: "6 weeks",
    category: "vegetarian",
    image: "/placeholder.svg?height=300&width=500",
    tags: ["Plant-Based", "High Fiber", "Nutrient-Dense"],
  },
  {
    id: 4,
    title: "Keto Kickstart",
    description: "Low-carb, high-fat meal plan designed to help your body enter and maintain ketosis.",
    calories: "1800-2200 per day",
    meals: 3,
    duration: "4 weeks",
    category: "keto",
    image: "/placeholder.svg?height=300&width=500",
    tags: ["Low Carb", "High Fat", "Ketogenic"],
  },
  {
    id: 5,
    title: "Athletic Performance",
    description: "Balanced nutrition plan for active individuals focusing on pre and post-workout nutrition.",
    calories: "2200-2800 per day",
    meals: 5,
    duration: "12 weeks",
    category: "performance",
    image: "/placeholder.svg?height=300&width=500",
    tags: ["Performance", "Recovery", "Energy"],
  },
  {
    id: 6,
    title: "Intermittent Fasting Guide",
    description: "Meal timing and nutrition guide for those following 16/8 or other intermittent fasting protocols.",
    calories: "1800-2400 per day",
    meals: 2,
    duration: "6 weeks",
    category: "fasting",
    image: "/placeholder.svg?height=300&width=500",
    tags: ["Fasting", "Time-Restricted", "Metabolic Health"],
  },
]

export default function NutritionPage() {
  return (
    <div className="container py-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight mb-2">Nutrition Plans</h1>
          <p className="text-muted-foreground">
            Personalized meal plans designed to complement your fitness goals and lifestyle.
          </p>
        </div>
        <div className="flex w-full md:w-auto gap-2">
          <div className="relative w-full md:w-64">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Search meal plans..." className="pl-8" />
          </div>
          <Button variant="outline" size="icon">
            <Filter className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <Tabs defaultValue="all" className="mb-8">
        <TabsList>
          <TabsTrigger value="all">All Plans</TabsTrigger>
          <TabsTrigger value="weight-loss">Weight Loss</TabsTrigger>
          <TabsTrigger value="muscle-gain">Muscle Gain</TabsTrigger>
          <TabsTrigger value="vegetarian">Vegetarian</TabsTrigger>
          <TabsTrigger value="keto">Keto</TabsTrigger>
        </TabsList>
      </Tabs>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mealPlans.map((plan) => (
          <Card key={plan.id} className="overflow-hidden">
            <div className="aspect-video relative">
              <img src={plan.image || "/placeholder.svg"} alt={plan.title} className="object-cover w-full h-full" />
            </div>
            <CardHeader>
              <CardTitle>{plan.title}</CardTitle>
              <CardDescription>{plan.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-3 mb-4">
                <div className="flex items-center gap-2 text-sm">
                  <Utensils className="h-4 w-4 text-muted-foreground" />
                  <span>Calories: {plan.calories}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Users className="h-4 w-4 text-muted-foreground" />
                  <span>{plan.meals} meals per day</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <span>Duration: {plan.duration}</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {plan.tags.map((tag, index) => (
                  <Badge key={index} variant="secondary">
                    {tag}
                  </Badge>
                ))}
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


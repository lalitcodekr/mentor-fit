import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Clock, Trophy, Users, Target, Flame } from "lucide-react"
import Image from 'next/image';

const challenges = [
  {
    id: 1,
    title: "30-Day Push-Up Challenge",
    description: "Gradually increase your push-up count over 30 days to build upper body strength and endurance.",
    participants: 1247,
    duration: "30 days",
    difficulty: "Beginner to Intermediate",
    progress: 65,
    category: "strength",
    image: "/placeholder.svg?height=300&width=500",
    reward: "Digital Badge + 500 Points",
  },
  {
    id: 2,
    title: "10K Steps Daily",
    description:
      "Commit to walking 10,000 steps every day for a month to improve cardiovascular health and burn calories.",
    participants: 3582,
    duration: "30 days",
    difficulty: "All Levels",
    progress: 42,
    category: "cardio",
    image: "/placeholder.svg?height=300&width=500",
    reward: "Digital Badge + 300 Points",
  },
  {
    id: 3,
    title: "Yoga Flow Mastery",
    description: "Complete 20 yoga sessions in a month to improve flexibility, balance, and mental wellbeing.",
    participants: 876,
    duration: "30 days",
    difficulty: "All Levels",
    progress: 30,
    category: "flexibility",
    image: "/placeholder.svg?height=300&width=500",
    reward: "Digital Badge + 400 Points",
  },
  {
    id: 4,
    title: "Nutrition Reset",
    description: "Follow our clean eating plan for 21 days to reset your nutrition habits and feel more energized.",
    participants: 1653,
    duration: "21 days",
    difficulty: "All Levels",
    progress: 80,
    category: "nutrition",
    image: "/placeholder.svg?height=300&width=500",
    reward: "Digital Badge + 450 Points",
  },
  {
    id: 5,
    title: "HIIT Warrior",
    description:
      "Complete 15 high-intensity interval training sessions in a month to maximize calorie burn and fitness.",
    participants: 942,
    duration: "30 days",
    difficulty: "Intermediate to Advanced",
    progress: 55,
    category: "cardio",
    image: "/placeholder.svg?height=300&width=500",
    reward: "Digital Badge + 600 Points",
  },
  {
    id: 6,
    title: "Meditation Mindfulness",
    description: "Practice meditation for at least 10 minutes daily for 30 days to reduce stress and improve focus.",
    participants: 1289,
    duration: "30 days",
    difficulty: "All Levels",
    progress: 25,
    category: "wellness",
    image: "/placeholder.svg?height=300&width=500",
    reward: "Digital Badge + 350 Points",
  },
]

const topParticipants = [
  { name: "Rahul V.", points: 1250, image: "/placeholder.svg?height=50&width=50" },
  { name: "Neha T.", points: 1120, image: "/placeholder.svg?height=50&width=50" },
  { name: "Amit P.", points: 980, image: "/placeholder.svg?height=50&width=50" },
  { name: "Kiran D.", points: 940, image: "/placeholder.svg?height=50&width=50" },
  { name: "Siddharth G.", points: 890, image: "/placeholder.svg?height=50&width=50" },
]


export default function ChallengesPage() {
  return (
    <div className="container py-12">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-3/4">
          <div className="mb-8">
            <h1 className="text-3xl font-bold tracking-tight mb-2">Fitness Challenges</h1>
            <p className="text-muted-foreground">Join our community challenges to stay motivated and earn rewards.</p>
          </div>

          <Tabs defaultValue="all" className="mb-8">
            <TabsList>
              <TabsTrigger value="all">All Challenges</TabsTrigger>
              <TabsTrigger value="strength">Strength</TabsTrigger>
              <TabsTrigger value="cardio">Cardio</TabsTrigger>
              <TabsTrigger value="flexibility">Flexibility</TabsTrigger>
              <TabsTrigger value="nutrition">Nutrition</TabsTrigger>
              <TabsTrigger value="wellness">Wellness</TabsTrigger>
            </TabsList>
          </Tabs>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {challenges.map((challenge) => (
              <Card key={challenge.id} className="overflow-hidden">
                <div className="aspect-video relative">
                  <Image
                    src={challenge.image || "/placeholder.svg"}
                    alt={challenge.title}
                    className="object-cover w-full h-full"
                  />
                  <Badge className="absolute top-2 right-2">{challenge.category}</Badge>
                </div>
                <CardHeader>
                  <CardTitle>{challenge.title}</CardTitle>
                  <CardDescription>{challenge.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span>{challenge.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4 text-muted-foreground" />
                        <span>{challenge.participants.toLocaleString()} participants</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2">
                        <Target className="h-4 w-4 text-muted-foreground" />
                        <span>{challenge.difficulty}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Trophy className="h-4 w-4 text-muted-foreground" />
                        <span>{challenge.reward}</span>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1 text-sm">
                        <span>Challenge Progress</span>
                        <span>{challenge.progress}%</span>
                      </div>
                      <Progress value={challenge.progress} className="h-2" />
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Join Challenge</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>

        <div className="lg:w-1/4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Trophy className="h-5 w-5 text-yellow-500" />
                Leaderboard
              </CardTitle>
              <CardDescription>Top participants this month</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {topParticipants.map((participant, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center justify-center w-6">
                        {index < 3 ? (
                          <span
                            className={`text-lg font-bold ${
                              index === 0 ? "text-yellow-500" : index === 1 ? "text-gray-400" : "text-amber-700"
                            }`}
                          >
                            {index + 1}
                          </span>
                        ) : (
                          <span className="text-muted-foreground">{index + 1}</span>
                        )}
                      </div>
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={participant.image} alt={participant.name} />
                        <AvatarFallback>{participant.name.split(" ")[0][0]}</AvatarFallback>
                      </Avatar>
                      <span className="font-medium">{participant.name}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Flame className="h-4 w-4 text-orange-500" />
                      <span className="font-medium">{participant.points}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                View Full Leaderboard
              </Button>
            </CardFooter>
          </Card>

          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Your Achievements</CardTitle>
              <CardDescription>Track your progress and rewards</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8">
                <div className="mx-auto w-16 h-16 bg-muted rounded-full flex items-center justify-center mb-4">
                  <Trophy className="h-8 w-8 text-muted-foreground" />
                </div>
                <h3 className="font-medium mb-2">No achievements yet</h3>
                <p className="text-sm text-muted-foreground mb-4">Join challenges to earn badges and points</p>
                <Button variant="outline" size="sm">
                  Browse Challenges
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}


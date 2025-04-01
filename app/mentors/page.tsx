import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Search, Filter, Star } from "lucide-react"
import Image from 'next/image';

const mentors = [
  {
    id: 1,
    name: "Arjun Mehta",
    specialty: "Strength Training",
    experience: "8 years",
    rating: 4.9,
    reviews: 127,
    bio: "Certified personal trainer specializing in strength training and muscle building. I help clients achieve their fitness goals through personalized workout plans.",
    image: "/placeholder.svg?height=200&width=200",
    tags: ["Strength", "Bodybuilding", "Nutrition"],
  },
  {
    id: 2,
    name: "Priya Sharma",
    specialty: "Yoga & Flexibility",
    experience: "12 years",
    rating: 4.8,
    reviews: 215,
    bio: "Yoga instructor with over a decade of experience. I focus on improving flexibility, balance, and mental wellness through customized yoga practices.",
    image: "/placeholder.svg?height=200&width=200",
    tags: ["Yoga", "Flexibility", "Meditation"],
  },
  {
    id: 3,
    name: "Rohan Iyer",
    specialty: "Weight Loss",
    experience: "6 years",
    rating: 4.7,
    reviews: 98,
    bio: "Weight loss specialist with a background in nutrition and exercise science. I create sustainable plans that help clients lose weight and keep it off.",
    image: "/placeholder.svg?height=200&width=200",
    tags: ["Weight Loss", "Cardio", "Nutrition"],
  },
  {
    id: 4,
    name: "Sneha Kapoor",
    specialty: "HIIT & Functional Training",
    experience: "5 years",
    rating: 4.9,
    reviews: 76,
    bio: "Specializing in high-intensity interval training and functional fitness. My programs are designed to improve overall fitness and athletic performance.",
    image: "/placeholder.svg?height=200&width=200",
    tags: ["HIIT", "Functional", "Athletic"],
  },
  {
    id: 5,
    name: "Vikram Singh",
    specialty: "Sports Performance",
    experience: "10 years",
    rating: 4.8,
    reviews: 142,
    bio: "Former professional athlete turned coach. I help athletes of all levels improve their performance through specialized training programs.",
    image: "/placeholder.svg?height=200&width=200",
    tags: ["Sports", "Performance", "Athletic"],
  },
  {
    id: 6,
    name: "Ananya Nair",
    specialty: "Prenatal & Postnatal Fitness",
    experience: "7 years",
    rating: 4.9,
    reviews: 89,
    bio: "Certified prenatal and postnatal fitness specialist. I create safe and effective workout plans for expectant and new mothers.",
    image: "/placeholder.svg?height=200&width=200",
    tags: ["Prenatal", "Postnatal", "Women's Fitness"],
  },
]


export default function MentorsPage() {
  return (
    <div className="container py-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight mb-2">Find Your Perfect Mentor</h1>
          <p className="text-muted-foreground">
            Browse our verified fitness professionals and find the right match for your goals.
          </p>
        </div>
        <div className="flex w-full md:w-auto gap-2">
          <div className="relative w-full md:w-64">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Search mentors..." className="pl-8" />
          </div>
          <Button variant="outline" size="icon">
            <Filter className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mentors.map((mentor) => (
          <Card key={mentor.id} className="overflow-hidden">
            <div className="aspect-video relative bg-muted">
              <Image src={mentor.image || "/placeholder.svg"} alt={mentor.name} className="object-cover w-full h-full" />
              <div className="absolute top-2 right-2">
                <Badge variant="secondary" className="flex items-center gap-1">
                  <Star className="h-3 w-3 fill-current" />
                  {mentor.rating} ({mentor.reviews})
                </Badge>
              </div>
            </div>
            <CardHeader>
              <div className="flex items-center gap-4">
                <Avatar className="h-12 w-12 border-2 border-primary -mt-10">
                  <AvatarImage src={mentor.image} alt={mentor.name} />
                  <AvatarFallback>
                    {mentor.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle>{mentor.name}</CardTitle>
                  <CardDescription>
                    {mentor.specialty} • {mentor.experience} experience
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">{mentor.bio}</p>
              <div className="flex flex-wrap gap-2">
                {mentor.tags.map((tag, index) => (
                  <Badge key={index} variant="outline">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">View Profile</Button>
              <Button>Book Session</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}


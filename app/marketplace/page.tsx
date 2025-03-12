import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Search, Filter, ShoppingCart, Star } from "lucide-react"

const products = [
  {
    id: 1,
    name: "Premium Yoga Mat",
    description: "Non-slip, eco-friendly yoga mat with extra cushioning for comfort during your practice.",
    price: 49.99,
    rating: 4.8,
    reviews: 124,
    category: "equipment",
    image: "/placeholder.svg?height=300&width=300",
    bestseller: true,
  },
  {
    id: 2,
    name: "Adjustable Dumbbell Set",
    description: "Space-saving adjustable dumbbells that replace 15 sets of weights. Perfect for home gyms.",
    price: 299.99,
    rating: 4.9,
    reviews: 86,
    category: "equipment",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 3,
    name: "Protein Powder - Chocolate",
    description: "High-quality whey protein with 25g of protein per serving. No artificial flavors or sweeteners.",
    price: 39.99,
    rating: 4.7,
    reviews: 215,
    category: "nutrition",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 4,
    name: "Fitness Tracker Watch",
    description: "Track your workouts, heart rate, sleep, and more with this advanced fitness tracker.",
    price: 129.99,
    rating: 4.6,
    reviews: 178,
    category: "wearables",
    image: "/placeholder.svg?height=300&width=300",
    bestseller: true,
  },
  {
    id: 5,
    name: "Resistance Bands Set",
    description: "Set of 5 resistance bands of varying strengths for versatile home workouts.",
    price: 24.99,
    rating: 4.8,
    reviews: 92,
    category: "equipment",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 6,
    name: "Meal Prep Containers",
    description: "BPA-free, portion-controlled containers perfect for meal prepping and nutrition planning.",
    price: 19.99,
    rating: 4.5,
    reviews: 63,
    category: "nutrition",
    image: "/placeholder.svg?height=300&width=300",
  },
]

export default function MarketplacePage() {
  return (
    <div className="container py-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight mb-2">Fitness Marketplace</h1>
          <p className="text-muted-foreground">
            Quality fitness gear and nutrition products recommended by our experts.
          </p>
        </div>
        <div className="flex w-full md:w-auto gap-2">
          <div className="relative w-full md:w-64">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Search products..." className="pl-8" />
          </div>
          <Button variant="outline" size="icon">
            <Filter className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <Tabs defaultValue="all" className="mb-8">
        <TabsList>
          <TabsTrigger value="all">All Products</TabsTrigger>
          <TabsTrigger value="equipment">Equipment</TabsTrigger>
          <TabsTrigger value="nutrition">Nutrition</TabsTrigger>
          <TabsTrigger value="wearables">Wearables</TabsTrigger>
        </TabsList>
      </Tabs>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <Card key={product.id} className="overflow-hidden">
            <div className="aspect-square relative bg-muted">
              <img
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                className="object-cover w-full h-full"
              />
              {product.bestseller && <Badge className="absolute top-2 left-2 bg-yellow-500">Bestseller</Badge>}
            </div>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle>{product.name}</CardTitle>
                  <CardDescription className="mt-2">{product.description}</CardDescription>
                </div>
                <div className="text-lg font-bold">${product.price}</div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-1">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                    />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">
                  {product.rating} ({product.reviews} reviews)
                </span>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">
                <ShoppingCart className="mr-2 h-4 w-4" />
                Add to Cart
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}


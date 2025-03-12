import Link from "next/link"
import { ArrowRight, Dumbbell, Users, ShoppingBag, MessageSquare, Trophy, Utensils } from "lucide-react"
import { Button } from "@/components/ui/button"
import HeroSection from "@/components/hero-section"
import FeatureCard from "@/components/feature-card"
import TestimonialSection from "@/components/testimonial-section"
import ChatbotButton from "@/components/chatbot-button"
import FooterDiv from "@/components/FooterDiv"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <HeroSection />

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Everything you need to achieve your fitness goals
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our platform connects you with verified mentors, personalized plans, and all the tools you need to
              succeed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Users className="h-10 w-10 text-primary" />}
              title="Expert Mentors"
              description="Connect with verified fitness professionals who create personalized plans just for you."
              link="/mentors"
            />
            <FeatureCard
              icon={<Dumbbell className="h-10 w-10 text-primary" />}
              title="Workout Plans"
              description="Access customized workout routines designed to match your fitness level and goals."
              link="/workouts"
            />
            <FeatureCard
              icon={<Utensils className="h-10 w-10 text-primary" />}
              title="Nutrition Guidance"
              description="Get personalized meal plans and nutrition advice to fuel your fitness journey."
              link="/nutrition"
            />
            <FeatureCard
              icon={<Trophy className="h-10 w-10 text-primary" />}
              title="Gamified Experience"
              description="Stay motivated with challenges, achievements, and progress tracking."
              link="/challenges"
            />
            <FeatureCard
              icon={<ShoppingBag className="h-10 w-10 text-primary" />}
              title="Fitness Marketplace"
              description="Shop for quality fitness gear and resources recommended by experts."
              link="/marketplace"
            />
            <FeatureCard
              icon={<MessageSquare className="h-10 w-10 text-primary" />}
              title="24/7 AI Support"
              description="Get real-time guidance and answers from our intelligent fitness assistant."
              link="/chat"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container px-4 mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Ready to transform your fitness journey?
          </h2>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            Join thousands of users who have already achieved their fitness goals with our platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/register">
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/mentors">Browse Mentors</Link>
            </Button>
          </div>
        </div>
      </section>

      <TestimonialSection />

      <ChatbotButton />

      <FooterDiv />
    </main>
  )
}


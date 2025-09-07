import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { Users, Calendar, Award, Lightbulb, TrendingUp, ArrowRight, Target, Rocket, GraduationCap } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-background/80 to-muted/80">
        {/* Background Image with Next.js Image component for optimization */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/hitk1.png"
            alt="Heritage Institute of Technology Campus"
            fill
            className="object-cover"
            priority
            quality={80}
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaUMk9dfaLbBdajyWSCfVkXf//Z"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-background/40 to-muted/40"></div>
        </div>
        
        <div className="container mx-auto text-center relative z-10">
          {/* Wider text container with semi-transparent background */}
          <div className="bg-background/70 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-xl border border-border/30 w-full max-w-6xl mx-auto">
            <Badge variant="secondary" className="mb-6">
              Inspiring Innovation, Igniting Entrepreneurship
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6 text-balance">
              Heritage Institute of Technology
              <span className="block text-accent mt-2">Innovation Council</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-4xl mx-auto text-pretty">
              Transforming ideas into prototypes, fostering entrepreneurship, and building a thriving innovation ecosystem
              that connects students, faculty, and industry partners.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-accent hover:bg-accent/90">
                Explore Our Programs
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg">
                Join the Community
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-card">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">50+</div>
              <div className="text-sm text-muted-foreground">Startups Incubated</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">200+</div>
              <div className="text-sm text-muted-foreground">Active Members</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">15</div>
              <div className="text-sm text-muted-foreground">Innovation Policies</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">100+</div>
              <div className="text-sm text-muted-foreground">Events Conducted</div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Our Mission & Vision</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Driving innovation and entrepreneurship through collaborative research, mentorship, and strategic
              partnerships.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-accent" />
                </div>
                <CardTitle>Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  To foster a culture of innovation and entrepreneurship by providing comprehensive support for idea
                  development, prototype creation, and startup incubation.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Lightbulb className="h-6 w-6 text-accent" />
                </div>
                <CardTitle>Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  To be a leading innovation hub that transforms creative ideas into impactful solutions, contributing
                  to technological advancement and economic growth.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Rocket className="h-6 w-6 text-accent" />
                </div>
                <CardTitle>Values</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Innovation, collaboration, excellence, and integrity guide our approach to nurturing the next
                  generation of entrepreneurs and innovators.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Quick Access Cards */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Quick Access</h2>
            <p className="text-muted-foreground">Navigate to key sections of our innovation ecosystem</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer group">
              <CardHeader className="text-center">
                <div className="mx-auto w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                  <Users className="h-6 w-6" />
                </div>
                <CardTitle className="text-lg">Members</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Meet our faculty coordinators, student members, and innovation champions
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow cursor-pointer group">
              <CardHeader className="text-center">
                <div className="mx-auto w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                  <Calendar className="h-6 w-6" />
                </div>
                <CardTitle className="text-lg">Meetings</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Access meeting archives, agendas, and minutes from our regular sessions
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow cursor-pointer group">
              <CardHeader className="text-center">
                <div className="mx-auto w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                  <TrendingUp className="h-6 w-6" />
                </div>
                <CardTitle className="text-lg">Activities</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Explore our innovation activities, workshops, and entrepreneurship programs
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow cursor-pointer group">
              <CardHeader className="text-center">
                <div className="mx-auto w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                  <Award className="h-6 w-6" />
                </div>
                <CardTitle className="text-lg">Achievements</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Discover our success stories, startup achievements, and recognition
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}

"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Calendar,
  Users,
  Award,
  Lightbulb,
  TrendingUp,
  Search,
  Filter,
  ExternalLink,
  Download,
  MapPin,
} from "lucide-react"

// Sample activities data
const activities = {
  innovation: [
    {
      id: 1,
      title: "Innovation Week 2024",
      description:
        "A week-long celebration of innovation featuring workshops, competitions, and exhibitions showcasing student projects and startup ideas.",
      date: "2024-04-15 to 2024-04-21",
      venue: "Heritage Institute Campus",
      participants: 500,
      status: "upcoming",
      category: "Event",
      image: "/innovation-week-2024.jpg",
      highlights: [
        "Startup pitch competition with ₹5 lakh prize pool",
        "Industry expert workshops",
        "Innovation exhibition with 50+ projects",
        "Networking sessions with entrepreneurs",
      ],
      registrationUrl: "/register/innovation-week-2024",
    },
    {
      id: 2,
      title: "Ideathon 2024",
      description:
        "48-hour intensive ideation marathon where students develop innovative solutions to real-world problems.",
      date: "2024-03-20 to 2024-03-22",
      venue: "Innovation Lab, Block B",
      participants: 120,
      status: "completed",
      category: "Competition",
      image: "/ideathon-2024.jpg",
      highlights: [
        "24 teams participated",
        "6 winning ideas selected for incubation",
        "Mentorship from industry experts",
        "Prize money of ₹2 lakhs distributed",
      ],
      resultsUrl: "/results/ideathon-2024",
    },
    {
      id: 3,
      title: "Tech Talk Series",
      description:
        "Monthly technical talks by industry leaders and successful entrepreneurs sharing insights on emerging technologies.",
      date: "Every 3rd Friday",
      venue: "Auditorium, Main Building",
      participants: 200,
      status: "ongoing",
      category: "Workshop",
      image: "/tech-talk-series.jpg",
      highlights: [
        "Monthly sessions with industry experts",
        "Topics covering AI, Blockchain, IoT",
        "Interactive Q&A sessions",
        "Networking opportunities",
      ],
      scheduleUrl: "/schedule/tech-talks",
    },
  ],
  startups: [
    {
      id: 4,
      title: "Startup Incubation Program",
      description:
        "Comprehensive 6-month program providing mentorship, funding, and resources to promising student startups.",
      date: "Ongoing Program",
      venue: "Incubation Center",
      participants: 25,
      status: "ongoing",
      category: "Program",
      image: "/startup-incubation.jpg",
      highlights: [
        "Seed funding up to ₹10 lakhs",
        "Dedicated workspace and resources",
        "1:1 mentorship with industry experts",
        "Legal and business development support",
      ],
      applyUrl: "/apply/incubation",
    },
    {
      id: 5,
      title: "Entrepreneur Bootcamp",
      description: "Intensive 3-day bootcamp covering all aspects of starting and running a successful business.",
      date: "2024-05-10 to 2024-05-12",
      venue: "Conference Hall A",
      participants: 80,
      status: "upcoming",
      category: "Workshop",
      image: "/entrepreneur-bootcamp.jpg",
      highlights: [
        "Business model canvas workshop",
        "Funding and investment strategies",
        "Legal aspects of startups",
        "Marketing and customer acquisition",
      ],
      registrationUrl: "/register/bootcamp-2024",
    },
  ],
  research: [
    {
      id: 6,
      title: "Research Publication Support",
      description:
        "Program to support faculty and students in publishing their research in high-impact journals and conferences.",
      date: "Ongoing Support",
      venue: "Research Office",
      participants: 150,
      status: "ongoing",
      category: "Support",
      image: "/research-support.jpg",
      highlights: [
        "Publication fee support",
        "Writing and editing assistance",
        "Conference presentation funding",
        "Research collaboration facilitation",
      ],
      guidelinesUrl: "/guidelines/research-support",
    },
  ],
}

const categories = ["All Categories", "Event", "Competition", "Workshop", "Program", "Support"]
const statuses = ["All Status", "upcoming", "ongoing", "completed"]

export default function ActivitiesPage() {
  const [activeTab, setActiveTab] = useState("innovation")
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All Categories")
  const [selectedStatus, setSelectedStatus] = useState("All Status")

  const getCurrentActivities = () => {
    return activities[activeTab as keyof typeof activities] || []
  }

  const filteredActivities = getCurrentActivities().filter((activity) => {
    const matchesSearch =
      activity.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      activity.description.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesCategory = selectedCategory === "All Categories" || activity.category === selectedCategory
    const matchesStatus = selectedStatus === "All Status" || activity.status === selectedStatus

    return matchesSearch && matchesCategory && matchesStatus
  })

  const getStatusColor = (status: string) => {
    switch (status) {
      case "upcoming":
        return "bg-blue-100 text-blue-800"
      case "ongoing":
        return "bg-green-100 text-green-800"
      case "completed":
        return "bg-gray-100 text-gray-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Page Header */}
      <section className="py-12 px-4 bg-muted/50">
        <div className="container mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-primary mb-4">Activities & Initiatives</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore our comprehensive range of innovation activities, startup initiatives, and research programs
              designed to foster entrepreneurship and technological advancement.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            <div className="text-center">
              <div className="text-2xl font-bold text-accent mb-1">{Object.values(activities).flat().length}</div>
              <div className="text-sm text-muted-foreground">Total Activities</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-accent mb-1">
                {
                  Object.values(activities)
                    .flat()
                    .filter((a) => a.status === "ongoing").length
                }
              </div>
              <div className="text-sm text-muted-foreground">Ongoing Programs</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-accent mb-1">
                {Object.values(activities)
                  .flat()
                  .reduce((sum, a) => sum + a.participants, 0)}
              </div>
              <div className="text-sm text-muted-foreground">Total Participants</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-accent mb-1">
                {
                  Object.values(activities)
                    .flat()
                    .filter((a) => a.status === "upcoming").length
                }
              </div>
              <div className="text-sm text-muted-foreground">Upcoming Events</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="innovation" className="flex items-center gap-2">
                <Lightbulb className="h-4 w-4" />
                Innovation Activities
              </TabsTrigger>
              <TabsTrigger value="startups" className="flex items-center gap-2">
                <TrendingUp className="h-4 w-4" />
                Startup Initiatives
              </TabsTrigger>
              <TabsTrigger value="research" className="flex items-center gap-2">
                <Award className="h-4 w-4" />
                Research Programs
              </TabsTrigger>
            </TabsList>

            {/* Search and Filters */}
            <div className="flex flex-col lg:flex-row gap-4 items-center justify-between mb-8">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search activities..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>

              <div className="flex flex-wrap gap-4 items-center">
                <div className="flex items-center gap-2">
                  <Filter className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm font-medium">Filters:</span>
                </div>

                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger className="w-40">
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select value={selectedStatus} onValueChange={setSelectedStatus}>
                  <SelectTrigger className="w-32">
                    <SelectValue placeholder="Status" />
                  </SelectTrigger>
                  <SelectContent>
                    {statuses.map((status) => (
                      <SelectItem key={status} value={status}>
                        {status === "All Status" ? status : status.charAt(0).toUpperCase() + status.slice(1)}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <TabsContent value="innovation" className="space-y-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredActivities.map((activity) => (
                  <Card key={activity.id} className="hover:shadow-lg transition-shadow">
                    <div className="relative">
                      <img
                        src={activity.image || "/placeholder.svg"}
                        alt={activity.title}
                        className="w-full h-48 object-cover rounded-t-lg"
                      />
                      <div className="absolute top-4 right-4">
                        <Badge className={getStatusColor(activity.status)}>{activity.status}</Badge>
                      </div>
                    </div>

                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="text-lg mb-2">{activity.title}</CardTitle>
                          <Badge variant="outline" className="mb-2">
                            {activity.category}
                          </Badge>
                        </div>
                      </div>
                      <CardDescription>{activity.description}</CardDescription>
                    </CardHeader>

                    <CardContent className="space-y-4">
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          {activity.date}
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <MapPin className="h-4 w-4" />
                          {activity.venue}
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Users className="h-4 w-4" />
                          {activity.participants} participants
                        </div>
                      </div>

                      <div>
                        <h4 className="font-medium text-sm mb-2">Key Highlights:</h4>
                        <ul className="space-y-1">
                          {activity.highlights.slice(0, 3).map((highlight, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-xs text-muted-foreground">
                              <div className="w-1 h-1 bg-accent rounded-full mt-1.5 flex-shrink-0" />
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex gap-2">
                        {activity.registrationUrl && (
                          <Button size="sm" className="flex-1">
                            Register
                            <ExternalLink className="ml-2 h-3 w-3" />
                          </Button>
                        )}
                        {activity.resultsUrl && (
                          <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                            View Results
                            <ExternalLink className="ml-2 h-3 w-3" />
                          </Button>
                        )}
                        {activity.scheduleUrl && (
                          <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                            View Schedule
                            <ExternalLink className="ml-2 h-3 w-3" />
                          </Button>
                        )}
                        {activity.applyUrl && (
                          <Button size="sm" className="flex-1">
                            Apply Now
                            <ExternalLink className="ml-2 h-3 w-3" />
                          </Button>
                        )}
                        {activity.guidelinesUrl && (
                          <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                            Guidelines
                            <Download className="ml-2 h-3 w-3" />
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="startups" className="space-y-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredActivities.map((activity) => (
                  <Card key={activity.id} className="hover:shadow-lg transition-shadow">
                    <div className="relative">
                      <img
                        src={activity.image || "/placeholder.svg"}
                        alt={activity.title}
                        className="w-full h-48 object-cover rounded-t-lg"
                      />
                      <div className="absolute top-4 right-4">
                        <Badge className={getStatusColor(activity.status)}>{activity.status}</Badge>
                      </div>
                    </div>

                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="text-lg mb-2">{activity.title}</CardTitle>
                          <Badge variant="outline" className="mb-2">
                            {activity.category}
                          </Badge>
                        </div>
                      </div>
                      <CardDescription>{activity.description}</CardDescription>
                    </CardHeader>

                    <CardContent className="space-y-4">
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          {activity.date}
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <MapPin className="h-4 w-4" />
                          {activity.venue}
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Users className="h-4 w-4" />
                          {activity.participants} participants
                        </div>
                      </div>

                      <div>
                        <h4 className="font-medium text-sm mb-2">Key Highlights:</h4>
                        <ul className="space-y-1">
                          {activity.highlights.slice(0, 3).map((highlight, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-xs text-muted-foreground">
                              <div className="w-1 h-1 bg-accent rounded-full mt-1.5 flex-shrink-0" />
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex gap-2">
                        {activity.registrationUrl && (
                          <Button size="sm" className="flex-1">
                            Register
                            <ExternalLink className="ml-2 h-3 w-3" />
                          </Button>
                        )}
                        {activity.applyUrl && (
                          <Button size="sm" className="flex-1">
                            Apply Now
                            <ExternalLink className="ml-2 h-3 w-3" />
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="research" className="space-y-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredActivities.map((activity) => (
                  <Card key={activity.id} className="hover:shadow-lg transition-shadow">
                    <div className="relative">
                      <img
                        src={activity.image || "/placeholder.svg"}
                        alt={activity.title}
                        className="w-full h-48 object-cover rounded-t-lg"
                      />
                      <div className="absolute top-4 right-4">
                        <Badge className={getStatusColor(activity.status)}>{activity.status}</Badge>
                      </div>
                    </div>

                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="text-lg mb-2">{activity.title}</CardTitle>
                          <Badge variant="outline" className="mb-2">
                            {activity.category}
                          </Badge>
                        </div>
                      </div>
                      <CardDescription>{activity.description}</CardDescription>
                    </CardHeader>

                    <CardContent className="space-y-4">
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          {activity.date}
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <MapPin className="h-4 w-4" />
                          {activity.venue}
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Users className="h-4 w-4" />
                          {activity.participants} participants
                        </div>
                      </div>

                      <div>
                        <h4 className="font-medium text-sm mb-2">Key Highlights:</h4>
                        <ul className="space-y-1">
                          {activity.highlights.slice(0, 3).map((highlight, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-xs text-muted-foreground">
                              <div className="w-1 h-1 bg-accent rounded-full mt-1.5 flex-shrink-0" />
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex gap-2">
                        {activity.guidelinesUrl && (
                          <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                            Guidelines
                            <Download className="ml-2 h-3 w-3" />
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>

          {filteredActivities.length === 0 && (
            <div className="text-center py-12">
              <Lightbulb className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">No activities found</h3>
              <p className="text-muted-foreground">Try adjusting your search or filter criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 px-4 bg-muted/50">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-bold text-primary mb-4">Get Involved</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Join our vibrant innovation community and be part of exciting activities, competitions, and programs that
            will shape your entrepreneurial journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-accent hover:bg-accent/90">
              Join Our Programs
            </Button>
            <Button variant="outline" size="lg">
              View Calendar
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

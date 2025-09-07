"use client"

import { useState, useEffect } from "react"
import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import {
  Calendar,
  FileText,
  Download,
  Search,
  ChevronDown,
  ChevronUp,
  Users,
  Clock,
  MapPin,
  Video,
  ImageIcon,
  Filter,
} from "lucide-react"

// Skeleton Loading Components
function MeetingCardSkeleton() {
  return (
    <Card className="hover:shadow-lg transition-shadow animate-pulse">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center">
                <div className="h-6 w-6 bg-muted-foreground/20 rounded" />
              </div>
              <div className="w-px h-8 bg-border mt-2" />
            </div>
            <div className="text-left flex-1">
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <div className="h-6 bg-muted rounded-md w-3/4" />
                <div className="h-5 bg-muted rounded-full w-16" />
                <div className="h-5 bg-muted rounded-full w-20" />
              </div>
              <div className="flex flex-wrap gap-4">
                <div className="h-4 bg-muted rounded w-24" />
                <div className="h-4 bg-muted rounded w-20" />
                <div className="h-4 bg-muted rounded w-32" />
                <div className="h-4 bg-muted rounded w-28" />
              </div>
            </div>
          </div>
          <div className="h-5 w-5 bg-muted rounded" />
        </div>
      </CardHeader>
    </Card>
  )
}

function StatsSkeleton() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
      {[1, 2, 3, 4].map((item) => (
        <div key={item} className="text-center">
          <div className="text-2xl font-bold mb-1 h-8 bg-muted rounded w-3/4 mx-auto" />
          <div className="text-sm h-4 bg-muted rounded w-1/2 mx-auto" />
        </div>
      ))}
    </div>
  )
}

// Sample meetings data
const meetings = [
  {
    id: 1,
    date: "2024-03-15",
    title: "Monthly Innovation Review",
    type: "Regular Meeting",
    venue: "Conference Hall A, Main Building",
    time: "2:00 PM - 4:00 PM",
    attendees: 25,
    status: "completed",
    agenda: {
      title: "March 2024 Innovation Review Agenda",
      url: "/documents/agenda-march-2024.pdf",
    },
    minutes: {
      title: "March 2024 Meeting Minutes",
      url: "/documents/minutes-march-2024.pdf",
    },
    description:
      "Review of ongoing innovation projects, discussion on new startup proposals, and planning for upcoming innovation week.",
    keyPoints: [
      "Reviewed 5 ongoing startup projects",
      "Approved 3 new innovation proposals",
      "Planned Innovation Week 2024 activities",
      "Discussed partnership with local industries",
    ],
    photos: ["/meeting-march-2024-1.jpg", "/meeting-march-2024-2.jpg"],
    videoUrl: "/videos/meeting-march-2024.mp4",
  },
  {
    id: 2,
    date: "2024-02-20",
    title: "Startup Pitch Evaluation",
    type: "Special Meeting",
    venue: "Innovation Lab, Block B",
    time: "10:00 AM - 1:00 PM",
    attendees: 18,
    status: "completed",
    agenda: {
      title: "Startup Pitch Evaluation Agenda",
      url: "/documents/agenda-feb-2024.pdf",
    },
    minutes: {
      title: "February 2024 Meeting Minutes",
      url: "/documents/minutes-feb-2024.pdf",
    },
    description: "Evaluation of student startup pitches for seed funding and incubation support.",
    keyPoints: [
      "Evaluated 8 startup pitches",
      "Selected 3 startups for incubation",
      "Allocated seed funding of ₹2 lakhs",
      "Assigned mentors to selected startups",
    ],
    photos: ["/meeting-feb-2024-1.jpg"],
  },
  {
    id: 3,
    date: "2024-01-25",
    title: "Annual Planning Session",
    type: "Planning Meeting",
    venue: "Auditorium, Heritage Institute",
    time: "9:00 AM - 5:00 PM",
    attendees: 35,
    status: "completed",
    agenda: {
      title: "Annual Planning 2024 Agenda",
      url: "/documents/agenda-jan-2024.pdf",
    },
    minutes: {
      title: "January 2024 Meeting Minutes",
      url: "/documents/minutes-jan-2024.pdf",
    },
    description: "Comprehensive planning session for IIC activities, budget allocation, and strategic goals for 2024.",
    keyPoints: [
      "Set annual innovation targets",
      "Approved budget for 2024",
      "Planned quarterly activities",
      "Established new partnerships",
    ],
    photos: ["/meeting-jan-2024-1.jpg", "/meeting-jan-2024-2.jpg", "/meeting-jan-2024-3.jpg"],
    videoUrl: "/videos/meeting-jan-2024.mp4",
  },
  {
    id: 4,
    date: "2023-12-18",
    title: "Year-End Review & Awards",
    type: "Review Meeting",
    venue: "Conference Hall B, Main Building",
    time: "3:00 PM - 6:00 PM",
    attendees: 42,
    status: "completed",
    agenda: {
      title: "Year-End Review Agenda 2023",
      url: "/documents/agenda-dec-2023.pdf",
    },
    minutes: {
      title: "December 2023 Meeting Minutes",
      url: "/documents/minutes-dec-2023.pdf",
    },
    description:
      "Annual review of IIC achievements, recognition of outstanding contributors, and celebration of successful startups.",
    keyPoints: [
      "Reviewed annual achievements",
      "Awarded best innovators",
      "Celebrated 10 successful startups",
      "Planned 2024 initiatives",
    ],
    photos: ["/meeting-dec-2023-1.jpg", "/meeting-dec-2023-2.jpg"],
  },
  {
    id: 5,
    date: "2024-04-10",
    title: "Industry Partnership Summit",
    type: "Special Meeting",
    venue: "Virtual Meeting (Zoom)",
    time: "11:00 AM - 2:00 PM",
    attendees: 28,
    status: "upcoming",
    agenda: {
      title: "Industry Partnership Summit Agenda",
      url: "/documents/agenda-april-2024.pdf",
    },
    description:
      "Strategic meeting with industry partners to discuss collaboration opportunities and joint innovation projects.",
    keyPoints: [
      "Discuss new partnership opportunities",
      "Review existing collaborations",
      "Plan joint research projects",
      "Explore internship programs",
    ],
  },
]

const meetingTypes = ["All Types", "Regular Meeting", "Special Meeting", "Planning Meeting", "Review Meeting"]
const meetingStatuses = ["All Status", "completed", "upcoming"]

export default function MeetingsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedType, setSelectedType] = useState("All Types")
  const [selectedStatus, setSelectedStatus] = useState("All Status")
  const [expandedMeetings, setExpandedMeetings] = useState<number[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500)
    return () => clearTimeout(timer)
  }, [])

  const toggleMeeting = (meetingId: number) => {
    setExpandedMeetings((prev) =>
      prev.includes(meetingId) ? prev.filter((id) => id !== meetingId) : [...prev, meetingId],
    )
  }

  const filteredMeetings = meetings
    .filter((meeting) => {
      const matchesSearch =
        meeting.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        meeting.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        meeting.venue.toLowerCase().includes(searchTerm.toLowerCase())

      const matchesType = selectedType === "All Types" || meeting.type === selectedType
      const matchesStatus = selectedStatus === "All Status" || meeting.status === selectedStatus

      return matchesSearch && matchesType && matchesStatus
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        
        {/* Page Header Skeleton */}
        <section className="py-12 px-4 bg-muted/50">
          <div className="container mx-auto">
            <div className="text-center mb-8">
              <div className="h-10 bg-muted rounded w-3/5 mx-auto mb-4" />
              <div className="h-6 bg-muted rounded w-4/5 mx-auto" />
            </div>
            <StatsSkeleton />
          </div>
        </section>

        {/* Search and Filters Skeleton */}
        <section className="py-8 px-4 bg-background border-b">
          <div className="container mx-auto">
            <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
              <div className="h-10 bg-muted rounded w-full max-w-md" />
              <div className="flex flex-wrap gap-4">
                <div className="h-10 bg-muted rounded w-40" />
                <div className="h-10 bg-muted rounded w-32" />
              </div>
            </div>
            <div className="h-4 bg-muted rounded w-40 mt-4" />
          </div>
        </section>

        {/* Meetings Timeline Skeleton */}
        <section className="py-12 px-4">
          <div className="container mx-auto max-w-4xl space-y-6">
            {[1, 2, 3].map((item) => (
              <MeetingCardSkeleton key={item} />
            ))}
          </div>
        </section>

        {/* Call to Action Skeleton */}
        <section className="py-12 px-4 bg-muted/50">
          <div className="container mx-auto text-center">
            <div className="h-8 bg-muted rounded w-1/3 mx-auto mb-4" />
            <div className="h-5 bg-muted rounded w-2/3 mx-auto mb-6" />
            <div className="h-10 bg-muted rounded w-40 mx-auto" />
          </div>
        </section>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Page Header */}
      <section className="py-8 md:py-12 px-4 bg-muted/50">
        <div className="container mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">Meetings Archive</h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Access comprehensive records of all IIC meetings, including agendas, minutes, and key decisions that shape
              our innovation ecosystem.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-8 md:mt-12">
            <div className="text-center p-3 md:p-0">
              <div className="text-xl md:text-2xl font-bold text-accent mb-1">
                {meetings.filter((m) => m.status === "completed").length}
              </div>
              <div className="text-xs md:text-sm text-muted-foreground">Completed Meetings</div>
            </div>
            <div className="text-center p-3 md:p-0">
              <div className="text-xl md:text-2xl font-bold text-accent mb-1">
                {meetings.filter((m) => m.status === "upcoming").length}
              </div>
              <div className="text-xs md:text-sm text-muted-foreground">Upcoming Meetings</div>
            </div>
            <div className="text-center p-3 md:p-0">
              <div className="text-xl md:text-2xl font-bold text-accent mb-1">
                {meetings.reduce((sum, m) => sum + m.attendees, 0)}
              </div>
              <div className="text-xs md:text-sm text-muted-foreground">Total Attendees</div>
            </div>
            <div className="text-center p-3 md:p-0">
              <div className="text-xl md:text-2xl font-bold text-accent mb-1">{new Set(meetings.map((m) => m.type)).size}</div>
              <div className="text-xs md:text-sm text-muted-foreground">Meeting Types</div>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-6 md:py-8 px-4 bg-background border-b">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative w-full md:max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search meetings..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 w-full"
              />
            </div>

            {/* Filters */}
            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <div className="flex items-center gap-2 sm:mr-2">
                <Filter className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm font-medium hidden sm:inline">Filters:</span>
              </div>

              <Select value={selectedType} onValueChange={setSelectedType}>
                <SelectTrigger className="w-full sm:w-40 md:w-48">
                  <SelectValue placeholder="Meeting Type" />
                </SelectTrigger>
                <SelectContent>
                  {meetingTypes.map((type) => (
                    <SelectItem key={type} value={type}>
                      {type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedStatus} onValueChange={setSelectedStatus}>
                <SelectTrigger className="w-full sm:w-36 md:w-40">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  {meetingStatuses.map((status) => (
                    <SelectItem key={status} value={status}>
                      {status === "All Status" ? status : status.charAt(0).toUpperCase() + status.slice(1)}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Results count */}
          <div className="mt-4 text-sm text-muted-foreground">
            Showing {filteredMeetings.length} of {meetings.length} meetings
          </div>
        </div>
      </section>

      {/* Meetings Timeline */}
      <section className="py-8 md:py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          {filteredMeetings.length === 0 ? (
            <div className="text-center py-12">
              <Calendar className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">No meetings found</h3>
              <p className="text-muted-foreground">Try adjusting your search or filter criteria.</p>
            </div>
          ) : (
            <div className="space-y-4 md:space-y-6">
              {filteredMeetings.map((meeting, index) => (
                <Collapsible key={meeting.id} open={expandedMeetings.includes(meeting.id)}>
                  <Card className="hover:shadow-lg transition-shadow">
                    <CollapsibleTrigger className="w-full" onClick={() => toggleMeeting(meeting.id)}>
                      <CardHeader className="cursor-pointer p-4 md:p-6">
                        <div className="flex items-start justify-between gap-2">
                          <div className="flex items-start gap-3 md:gap-4">
                            <div className="flex flex-col items-center mt-1">
                              <div className="w-10 h-10 md:w-12 md:h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                                <Calendar className="h-5 w-5 md:h-6 md:w-6 text-accent" />
                              </div>
                              {index < filteredMeetings.length - 1 && <div className="w-px h-6 md:h-8 bg-border mt-2" />}
                            </div>
                            <div className="text-left">
                              <div className="flex flex-wrap items-center gap-2 mb-2">
                                <CardTitle className="text-base md:text-lg">{meeting.title}</CardTitle>
                                <div className="flex flex-wrap gap-2">
                                  <Badge variant={meeting.status === "completed" ? "default" : "secondary"} className="text-xs">
                                    {meeting.status}
                                  </Badge>
                                  <Badge variant="outline" className="text-xs">
                                    {meeting.type}
                                  </Badge>
                                </div>
                              </div>
                              <div className="grid grid-cols-1 xs:grid-cols-2 gap-2 text-xs md:text-sm text-muted-foreground">
                                <div className="flex items-center gap-1">
                                  <Calendar className="h-3 w-3 md:h-4 md:w-4" />
                                  <span>{formatDate(meeting.date)}</span>
                                </div>
                                <div className="flex items-center gap-1">
                                  <Clock className="h-3 w-3 md:h-4 md:w-4" />
                                  <span>{meeting.time}</span>
                                </div>
                                <div className="flex items-center gap-1 xs:col-span-2">
                                  <MapPin className="h-3 w-3 md:h-4 md:w-4 flex-shrink-0" />
                                  <span className="truncate">{meeting.venue}</span>
                                </div>
                                <div className="flex items-center gap-1">
                                  <Users className="h-3 w-3 md:h-4 md:w-4" />
                                  <span>{meeting.attendees} attendees</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center gap-2 flex-shrink-0 mt-1">
                            {expandedMeetings.includes(meeting.id) ? (
                              <ChevronUp className="h-4 w-4 md:h-5 md:w-5 text-muted-foreground" />
                            ) : (
                              <ChevronDown className="h-4 w-4 md:h-5 md:w-5 text-muted-foreground" />
                            )}
                          </div>
                        </div>
                      </CardHeader>
                    </CollapsibleTrigger>

                    <CollapsibleContent>
                      <CardContent className="pt-0 px-4 md:px-6 pb-4 md:pb-6">
                        <div className="space-y-4 md:space-y-6">
                          {/* Description */}
                          <div>
                            <h4 className="font-semibold text-foreground mb-2 text-sm md:text-base">Meeting Overview</h4>
                            <p className="text-muted-foreground text-sm">{meeting.description}</p>
                          </div>

                          {/* Key Points */}
                          {meeting.keyPoints && (
                            <div>
                              <h4 className="font-semibold text-foreground mb-2 text-sm md:text-base">Key Discussion Points</h4>
                              <ul className="space-y-1">
                                {meeting.keyPoints.map((point, idx) => (
                                  <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                                    <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                                    {point}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {/* Documents */}
                          <div>
                            <h4 className="font-semibold text-foreground mb-3 text-sm md:text-base">Meeting Documents</h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                              {meeting.agenda && (
                                <Card className="p-3 md:p-4">
                                  <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 md:w-10 md:h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                      <FileText className="h-4 w-4 md:h-5 md:w-5 text-blue-600" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                      <h5 className="font-medium text-xs md:text-sm">Agenda</h5>
                                      <p className="text-xs text-muted-foreground truncate">{meeting.agenda.title}</p>
                                    </div>
                                    <Button size="sm" variant="outline" className="flex-shrink-0" asChild>
                                      <a href={meeting.agenda.url} download>
                                        <Download className="h-3 w-3 md:h-4 md:w-4" />
                                      </a>
                                    </Button>
                                  </div>
                                </Card>
                              )}

                              {meeting.minutes && (
                                <Card className="p-3 md:p-4">
                                  <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 md:w-10 md:h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                      <FileText className="h-4 w-4 md:h-5 md:w-5 text-green-600" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                      <h5 className="font-medium text-xs md:text-sm">Minutes</h5>
                                      <p className="text-xs text-muted-foreground truncate">{meeting.minutes.title}</p>
                                    </div>
                                    <Button size="sm" variant="outline" className="flex-shrink-0" asChild>
                                      <a href={meeting.minutes.url} download>
                                        <Download className="h-3 w-3 md:h-4 md:w-4" />
                                      </a>
                                    </Button>
                                  </div>
                                </Card>
                              )}
                            </div>
                          </div>

                          {/* Media */}
                          {(meeting.photos || meeting.videoUrl) && (
                            <div>
                              <h4 className="font-semibold text-foreground mb-3 text-sm md:text-base">Meeting Media</h4>
                              <div className="space-y-4">
                                {meeting.videoUrl && (
                                  <Card className="p-3 md:p-4">
                                    <div className="flex items-center gap-3">
                                      <div className="w-8 h-8 md:w-10 md:h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <Video className="h-4 w-4 md:h-5 md:w-5 text-purple-600" />
                                      </div>
                                      <div className="flex-1 min-w-0">
                                        <h5 className="font-medium text-xs md:text-sm">Meeting Recording</h5>
                                        <p className="text-xs text-muted-foreground">Video recording of the meeting</p>
                                      </div>
                                      <Button size="sm" variant="outline" className="flex-shrink-0" asChild>
                                        <a href={meeting.videoUrl} target="_blank" rel="noopener noreferrer">
                                          <Video className="h-3 w-3 md:h-4 md:w-4" />
                                        </a>
                                      </Button>
                                    </div>
                                  </Card>
                                )}

                                {meeting.photos && meeting.photos.length > 0 && (
                                  <div>
                                    <div className="flex items-center gap-2 mb-2">
                                      <ImageIcon className="h-4 w-4 text-muted-foreground" />
                                      <span className="text-sm font-medium">
                                        Meeting Photos ({meeting.photos.length})
                                      </span>
                                    </div>
                                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                                      {meeting.photos.map((photo, idx) => (
                                        <div key={idx} className="aspect-square bg-muted rounded-lg border flex items-center justify-center">
                                          <ImageIcon className="h-6 w-6 text-muted-foreground/50" />
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                )}
                              </div>
                            </div>
                          )}
                        </div>
                      </CardContent>
                    </CollapsibleContent>
                  </Card>
                </Collapsible>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-8 md:py-12 px-4 bg-muted/50">
        <div className="container mx-auto text-center">
          <h2 className="text-xl md:text-2xl font-bold text-primary mb-4">Stay Updated</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto text-sm md:text-base">
            Don't miss our upcoming meetings and important announcements. Subscribe to our newsletter for regular
            updates.
          </p>
          <Button size="lg" className="bg-accent hover:bg-accent/90">
            Subscribe to Updates
          </Button>
        </div>
      </section>
    </div>
  )
}
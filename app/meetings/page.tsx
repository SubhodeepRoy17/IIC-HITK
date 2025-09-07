"use client"

import { useState } from "react"
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

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Page Header */}
      <section className="py-12 px-4 bg-muted/50">
        <div className="container mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-primary mb-4">Meetings Archive</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Access comprehensive records of all IIC meetings, including agendas, minutes, and key decisions that shape
              our innovation ecosystem.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            <div className="text-center">
              <div className="text-2xl font-bold text-accent mb-1">
                {meetings.filter((m) => m.status === "completed").length}
              </div>
              <div className="text-sm text-muted-foreground">Completed Meetings</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-accent mb-1">
                {meetings.filter((m) => m.status === "upcoming").length}
              </div>
              <div className="text-sm text-muted-foreground">Upcoming Meetings</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-accent mb-1">
                {meetings.reduce((sum, m) => sum + m.attendees, 0)}
              </div>
              <div className="text-sm text-muted-foreground">Total Attendees</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-accent mb-1">{new Set(meetings.map((m) => m.type)).size}</div>
              <div className="text-sm text-muted-foreground">Meeting Types</div>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 px-4 bg-background border-b">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search meetings..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-4 items-center">
              <div className="flex items-center gap-2">
                <Filter className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm font-medium">Filters:</span>
              </div>

              <Select value={selectedType} onValueChange={setSelectedType}>
                <SelectTrigger className="w-48">
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
                <SelectTrigger className="w-40">
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
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          {filteredMeetings.length === 0 ? (
            <div className="text-center py-12">
              <Calendar className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">No meetings found</h3>
              <p className="text-muted-foreground">Try adjusting your search or filter criteria.</p>
            </div>
          ) : (
            <div className="space-y-6">
              {filteredMeetings.map((meeting, index) => (
                <Collapsible key={meeting.id}>
                  <Card className="hover:shadow-lg transition-shadow">
                    <CollapsibleTrigger className="w-full" onClick={() => toggleMeeting(meeting.id)}>
                      <CardHeader className="cursor-pointer">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4">
                            <div className="flex flex-col items-center">
                              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                                <Calendar className="h-6 w-6 text-accent" />
                              </div>
                              {index < filteredMeetings.length - 1 && <div className="w-px h-8 bg-border mt-2" />}
                            </div>
                            <div className="text-left">
                              <div className="flex items-center gap-3 mb-2">
                                <CardTitle className="text-lg">{meeting.title}</CardTitle>
                                <Badge variant={meeting.status === "completed" ? "default" : "secondary"}>
                                  {meeting.status}
                                </Badge>
                                <Badge variant="outline">{meeting.type}</Badge>
                              </div>
                              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                                <div className="flex items-center gap-1">
                                  <Calendar className="h-4 w-4" />
                                  {formatDate(meeting.date)}
                                </div>
                                <div className="flex items-center gap-1">
                                  <Clock className="h-4 w-4" />
                                  {meeting.time}
                                </div>
                                <div className="flex items-center gap-1">
                                  <MapPin className="h-4 w-4" />
                                  {meeting.venue}
                                </div>
                                <div className="flex items-center gap-1">
                                  <Users className="h-4 w-4" />
                                  {meeting.attendees} attendees
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            {expandedMeetings.includes(meeting.id) ? (
                              <ChevronUp className="h-5 w-5 text-muted-foreground" />
                            ) : (
                              <ChevronDown className="h-5 w-5 text-muted-foreground" />
                            )}
                          </div>
                        </div>
                      </CardHeader>
                    </CollapsibleTrigger>

                    <CollapsibleContent>
                      <CardContent className="pt-0">
                        <div className="space-y-6">
                          {/* Description */}
                          <div>
                            <h4 className="font-semibold text-foreground mb-2">Meeting Overview</h4>
                            <p className="text-muted-foreground">{meeting.description}</p>
                          </div>

                          {/* Key Points */}
                          {meeting.keyPoints && (
                            <div>
                              <h4 className="font-semibold text-foreground mb-2">Key Discussion Points</h4>
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
                            <h4 className="font-semibold text-foreground mb-3">Meeting Documents</h4>
                            <div className="grid md:grid-cols-2 gap-4">
                              {meeting.agenda && (
                                <Card className="p-4">
                                  <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                                      <FileText className="h-5 w-5 text-blue-600" />
                                    </div>
                                    <div className="flex-1">
                                      <h5 className="font-medium text-sm">Agenda</h5>
                                      <p className="text-xs text-muted-foreground">{meeting.agenda.title}</p>
                                    </div>
                                    <Button size="sm" variant="outline" asChild>
                                      <a href={meeting.agenda.url} download>
                                        <Download className="h-4 w-4" />
                                      </a>
                                    </Button>
                                  </div>
                                </Card>
                              )}

                              {meeting.minutes && (
                                <Card className="p-4">
                                  <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                                      <FileText className="h-5 w-5 text-green-600" />
                                    </div>
                                    <div className="flex-1">
                                      <h5 className="font-medium text-sm">Minutes</h5>
                                      <p className="text-xs text-muted-foreground">{meeting.minutes.title}</p>
                                    </div>
                                    <Button size="sm" variant="outline" asChild>
                                      <a href={meeting.minutes.url} download>
                                        <Download className="h-4 w-4" />
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
                              <h4 className="font-semibold text-foreground mb-3">Meeting Media</h4>
                              <div className="space-y-4">
                                {meeting.videoUrl && (
                                  <Card className="p-4">
                                    <div className="flex items-center gap-3">
                                      <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                                        <Video className="h-5 w-5 text-purple-600" />
                                      </div>
                                      <div className="flex-1">
                                        <h5 className="font-medium text-sm">Meeting Recording</h5>
                                        <p className="text-xs text-muted-foreground">Video recording of the meeting</p>
                                      </div>
                                      <Button size="sm" variant="outline" asChild>
                                        <a href={meeting.videoUrl} target="_blank" rel="noopener noreferrer">
                                          <Video className="h-4 w-4" />
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
                                        <img
                                          key={idx}
                                          src={photo || "/placeholder.svg"}
                                          alt={`Meeting photo ${idx + 1}`}
                                          className="w-full h-24 object-cover rounded-lg border"
                                        />
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
      <section className="py-12 px-4 bg-muted/50">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-bold text-primary mb-4">Stay Updated</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
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

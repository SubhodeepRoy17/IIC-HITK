"use client"

import { useState, useEffect } from "react"
import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Mail, Phone, User, GraduationCap, Briefcase, Filter, ChevronLeft, ChevronRight } from "lucide-react"

// Sample data - in a real app, this would come from an API
const members = [
  {
    id: 1,
    name: "Dr. Rajesh Kumar",
    role: "Faculty Coordinator",
    department: "Computer Science & Engineering",
    email: "rajesh.kumar@heritage.edu",
    phone: "+91-9876543210",
    experience: "15 years in AI/ML research",
    qualification: "Ph.D. in Computer Science, IIT Kharagpur",
    type: "faculty",
    image: "/professional-male-professor.jpg",
  },
  {
    id: 2,
    name: "Dr. Priya Sharma",
    role: "Innovation Mentor",
    department: "Electronics & Communication",
    email: "priya.sharma@heritage.edu",
    phone: "+91-9876543211",
    experience: "12 years in IoT and Embedded Systems",
    qualification: "Ph.D. in Electronics Engineering, IISc Bangalore",
    type: "faculty",
    image: "/professional-female-professor.jpg",
  },
  {
    id: 3,
    name: "Prof. Amit Banerjee",
    role: "Entrepreneurship Guide",
    department: "Mechanical Engineering",
    email: "amit.banerjee@heritage.edu",
    phone: "+91-9876543212",
    experience: "20 years in Product Development",
    qualification: "M.Tech in Mechanical Engineering, Jadavpur University",
    type: "faculty",
    image: "/professional-male-engineer.jpg",
  },
  {
    id: 4,
    name: "Arjun Patel",
    role: "Student Coordinator",
    department: "Computer Science & Engineering",
    email: "arjun.patel@student.heritage.edu",
    phone: "+91-9876543213",
    year: "4th Year",
    semester: "8th Semester",
    type: "student",
    image: "/young-male-student.png",
  },
  {
    id: 5,
    name: "Sneha Ghosh",
    role: "Innovation Lead",
    department: "Electronics & Communication",
    email: "sneha.ghosh@student.heritage.edu",
    phone: "+91-9876543214",
    year: "3rd Year",
    semester: "6th Semester",
    type: "student",
    image: "/young-female-student.png",
  },
  {
    id: 6,
    name: "Rohit Singh",
    role: "Tech Coordinator",
    department: "Information Technology",
    email: "rohit.singh@student.heritage.edu",
    phone: "+91-9876543215",
    year: "4th Year",
    semester: "7th Semester",
    type: "student",
    image: "/young-male-tech-student.jpg",
  },
  {
    id: 7,
    name: "Dr. Anita Das",
    role: "Research Coordinator",
    department: "Biotechnology",
    email: "anita.das@heritage.edu",
    phone: "+91-9876543216",
    experience: "10 years in Biotech Innovation",
    qualification: "Ph.D. in Biotechnology, Calcutta University",
    type: "faculty",
    image: "/professional-female-scientist.jpg",
  },
  {
    id: 8,
    name: "Kavya Reddy",
    role: "Event Coordinator",
    department: "Civil Engineering",
    email: "kavya.reddy@student.heritage.edu",
    phone: "+91-9876543217",
    year: "2nd Year",
    semester: "4th Semester",
    type: "student",
    image: "/young-female-engineering-student.jpg",
  },
]

const departments = [
  "All Departments",
  "Computer Science & Engineering",
  "Electronics & Communication",
  "Mechanical Engineering",
  "Information Technology",
  "Biotechnology",
  "Civil Engineering",
]

const roles = [
  "All Roles",
  "Faculty Coordinator",
  "Innovation Mentor",
  "Entrepreneurship Guide",
  "Research Coordinator",
  "Student Coordinator",
  "Innovation Lead",
  "Tech Coordinator",
  "Event Coordinator",
]

// Skeleton Loading Component
function MemberCardSkeleton() {
  return (
    <Card className="animate-pulse">
      <CardHeader className="text-center pb-4">
        <div className="mx-auto mb-4">
          <div className="w-24 h-24 rounded-full bg-muted"></div>
        </div>
        <div className="h-6 bg-muted rounded w-3/4 mx-auto mb-2"></div>
        <div className="h-4 bg-muted rounded w-1/2 mx-auto mb-2"></div>
        <div className="h-4 bg-muted rounded w-2/3 mx-auto"></div>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <div className="h-4 w-4 bg-muted rounded"></div>
            <div className="h-4 bg-muted rounded w-3/4"></div>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-4 w-4 bg-muted rounded"></div>
            <div className="h-4 bg-muted rounded w-2/3"></div>
          </div>
        </div>
        <div className="pt-2 border-t space-y-2">
          <div className="h-4 bg-muted rounded w-full"></div>
          <div className="h-4 bg-muted rounded w-5/6"></div>
        </div>
      </CardContent>
    </Card>
  )
}

export default function MembersPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedDepartment, setSelectedDepartment] = useState("All Departments")
  const [selectedRole, setSelectedRole] = useState("All Roles")
  const [selectedType, setSelectedType] = useState("all")
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isLoading, setIsLoading] = useState(true)
  const [isMobile, setIsMobile] = useState(false)

  // Check if mobile view
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkIsMobile()
    window.addEventListener('resize', checkIsMobile)
    
    return () => {
      window.removeEventListener('resize', checkIsMobile)
    }
  }, [])

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500)
    
    return () => clearTimeout(timer)
  }, [])

  const filteredMembers = members.filter((member) => {
    const matchesSearch =
      member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.role.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesDepartment = selectedDepartment === "All Departments" || member.department === selectedDepartment

    const matchesRole = selectedRole === "All Roles" || member.role === selectedRole

    const matchesType = selectedType === "all" || member.type === selectedType

    return matchesSearch && matchesDepartment && matchesRole && matchesType
  })

  // Carousel navigation
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === filteredMembers.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? filteredMembers.length - 1 : prev - 1))
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Page Header */}
      <section className="py-12 px-4 bg-muted/50">
        <div className="container mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-primary mb-4">Our Members</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Meet the dedicated faculty coordinators and passionate student members who drive innovation and
              entrepreneurship at Heritage Institute of Technology.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            <div className="text-center">
              <div className="text-2xl font-bold text-accent mb-1">
                {members.filter((m) => m.type === "faculty").length}
              </div>
              <div className="text-sm text-muted-foreground">Faculty Members</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-accent mb-1">
                {members.filter((m) => m.type === "student").length}
              </div>
              <div className="text-sm text-muted-foreground">Student Members</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-accent mb-1">
                {new Set(members.map((m) => m.department)).size}
              </div>
              <div className="text-sm text-muted-foreground">Departments</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-accent mb-1">{members.length}</div>
              <div className="text-sm text-muted-foreground">Total Members</div>
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
                placeholder="Search members..."
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
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Member Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Members</SelectItem>
                  <SelectItem value="faculty">Faculty</SelectItem>
                  <SelectItem value="student">Students</SelectItem>
                </SelectContent>
              </Select>

              <Select value={selectedDepartment} onValueChange={setSelectedDepartment}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Department" />
                </SelectTrigger>
                <SelectContent>
                  {departments.map((dept) => (
                    <SelectItem key={dept} value={dept}>
                      {dept}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedRole} onValueChange={setSelectedRole}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Role" />
                </SelectTrigger>
                <SelectContent>
                  {roles.map((role) => (
                    <SelectItem key={role} value={role}>
                      {role}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Results count */}
          <div className="mt-4 text-sm text-muted-foreground">
            Showing {filteredMembers.length} of {members.length} members
          </div>
        </div>
      </section>

      {/* Members Grid/Carousel */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          {isLoading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {[...Array(8)].map((_, i) => (
                <MemberCardSkeleton key={i} />
              ))}
            </div>
          ) : filteredMembers.length === 0 ? (
            <div className="text-center py-12">
              <User className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">No members found</h3>
              <p className="text-muted-foreground">Try adjusting your search or filter criteria.</p>
            </div>
          ) : (
            <>
              {/* Desktop Grid View */}
              <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredMembers.map((member) => (
                  <MemberCard key={member.id} member={member} />
                ))}
              </div>

              {/* Mobile Carousel View */}
              <div className="md:hidden relative">
                <div className="overflow-hidden">
                  <div 
                    className="flex transition-transform duration-300 ease-in-out"
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                  >
                    {filteredMembers.map((member) => (
                      <div key={member.id} className="w-full flex-shrink-0 px-2">
                        <MemberCard member={member} />
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Carousel Navigation */}
                {filteredMembers.length > 1 && (
                  <>
                    <Button
                      variant="outline"
                      size="icon"
                      className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm"
                      onClick={prevSlide}
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm"
                      onClick={nextSlide}
                    >
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </>
                )}
                
                {/* Carousel Indicators */}
                {filteredMembers.length > 1 && (
                  <div className="flex justify-center mt-4 space-x-2">
                    {filteredMembers.map((_, index) => (
                      <button
                        key={index}
                        className={`h-2 w-2 rounded-full ${
                          index === currentSlide ? 'bg-primary' : 'bg-muted'
                        }`}
                        onClick={() => setCurrentSlide(index)}
                        aria-label={`Go to slide ${index + 1}`}
                      />
                    ))}
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 px-4 bg-muted/50">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-bold text-primary mb-4">Want to Join Our Team?</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            We're always looking for passionate individuals who want to contribute to innovation and entrepreneurship.
            Join our growing community of change-makers.
          </p>
          <Button size="lg" className="bg-accent hover:bg-accent/90">
            Apply for Membership
          </Button>
        </div>
      </section>
    </div>
  )
}

// Extracted Member Card Component for reusability
function MemberCard({ member }: { member: any }) {
  return (
    <Card className="hover:shadow-lg transition-shadow h-full">
      <CardHeader className="text-center pb-4">
        <div className="mx-auto mb-4">
          <img
            src={member.image || "/placeholder.svg"}
            alt={member.name}
            className="w-24 h-24 rounded-full object-cover border-4 border-accent/20"
          />
        </div>
        <CardTitle className="text-lg">{member.name}</CardTitle>
        <div className="flex flex-col gap-2">
          <Badge variant={member.type === "faculty" ? "default" : "secondary"}>
            {member.type === "faculty" ? (
              <Briefcase className="w-3 h-3 mr-1" />
            ) : (
              <GraduationCap className="w-3 h-3 mr-1" />
            )}
            {member.role}
          </Badge>
          <CardDescription className="text-sm">{member.department}</CardDescription>
        </div>
      </CardHeader>

      <CardContent className="space-y-3">
        {/* Contact Information */}
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm">
            <Mail className="h-4 w-4 text-muted-foreground" />
            <span className="text-muted-foreground truncate">{member.email}</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Phone className="h-4 w-4 text-muted-foreground" />
            <span className="text-muted-foreground">{member.phone}</span>
          </div>
        </div>

        {/* Faculty-specific information */}
        {member.type === "faculty" && (
          <div className="space-y-2 pt-2 border-t">
            <div className="text-sm">
              <span className="font-medium text-foreground">Experience:</span>
              <p className="text-muted-foreground mt-1">{member.experience}</p>
            </div>
            <div className="text-sm">
              <span className="font-medium text-foreground">Qualification:</span>
              <p className="text-muted-foreground mt-1">{member.qualification}</p>
            </div>
          </div>
        )}

        {/* Student-specific information */}
        {member.type === "student" && (
          <div className="space-y-2 pt-2 border-t">
            <div className="flex justify-between text-sm">
              <span className="font-medium text-foreground">Year:</span>
              <span className="text-muted-foreground">{member.year}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="font-medium text-foreground">Semester:</span>
              <span className="text-muted-foreground">{member.semester}</span>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
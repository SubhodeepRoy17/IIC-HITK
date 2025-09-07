"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Input } from "@/components/ui/input"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Menu, Search, X } from "lucide-react"
import Image from "next/image"

const navigationItems = [
  { name: "Home", href: "/" },
  { name: "Members", href: "/members" },
  { name: "Meetings", href: "/meetings" },
  { name: "Activities", href: "/activities" },
  { name: "Policies", href: "/policies" },
  { name: "Facilities", href: "/facilities" },
  { name: "Ecosystem Partners", href: "/partners" },
  { name: "MoUs", href: "/mous" },
  { name: "Achievements/Start-ups", href: "/achievements" },
  { name: "Awards", href: "/awards" },
  { name: "Innovation Grants", href: "/grants" },
  { name: "Contact Us", href: "/contact" },
]

// Searchable content - in a real app, this would come from an API or database
const searchableContent = [
  { title: "About IIC", content: "Institution's Innovation Council at Heritage Institute of Technology", href: "/" },
  { title: "Faculty Members", content: "Meet our faculty coordinators and mentors", href: "/members" },
  { title: "Student Members", content: "Our student innovation champions", href: "/members" },
  { title: "Innovation Workshops", content: "Hands-on workshops on emerging technologies", href: "/activities" },
  { title: "Startup Incubation", content: "Support for student startups and ventures", href: "/activities" },
  { title: "Research Policies", content: "Innovation and research policies at HITK", href: "/policies" },
  { title: "Innovation Lab", content: "State-of-the-art facilities for prototyping", href: "/facilities" },
  { title: "Industry Partners", content: "Our ecosystem and industry collaborations", href: "/partners" },
  { title: "Memorandum of Understanding", content: "Our MoUs with industry and academia", href: "/mous" },
  { title: "Success Stories", content: "Startups and innovations from our students", href: "/achievements" },
  { title: "Recognition", content: "Awards and recognition received by IIC", href: "/awards" },
  { title: "Funding Opportunities", content: "Grants for innovative projects", href: "/grants" },
  { title: "Get in Touch", content: "Contact information for IIC", href: "/contact" },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [searchResults, setSearchResults] = useState<typeof searchableContent>([])
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const router = useRouter()

  // Handle search functionality
  const handleSearch = (query: string) => {
    setSearchQuery(query)
    
    if (query.trim() === "") {
      setSearchResults([])
      return
    }
    
    const results = searchableContent.filter(item => 
      item.title.toLowerCase().includes(query.toLowerCase()) || 
      item.content.toLowerCase().includes(query.toLowerCase())
    )
    
    setSearchResults(results)
  }

  // Handle search submission
  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      // Navigate to search results page or perform search
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`)
      setIsSearchOpen(false)
      setSearchQuery("")
    }
  }

  // Close search when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const searchContainer = document.getElementById("search-container")
      if (searchContainer && !searchContainer.contains(event.target as Node)) {
        setIsSearchOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Dual Logos - Increased Size */}
          <div className="flex items-center space-x-4 md:space-x-6">
            {/* HITK Logo */}
            <Link href="/" className="flex items-center">
              <div className="flex items-center justify-center">
                <div className="h-18 w-18 md:h-18 md:w-18 relative">
                  <Image
                    src="/hitk.png"
                    alt="Heritage Institute of Technology Logo"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </div>
            </Link>
            
            {/* Separator - hidden on mobile */}
            <div className="hidden sm:block h-8 w-px bg-border mx-1" />
            
            {/* IIC Logo */}
            <Link href="/" className="flex items-center">
              <div className="flex items-center justify-center">
                <div className="h-25 w-25 md:h-25 relative aspect-video">
                  <Image
                    src="/iic.png"
                    alt="Institution Innovation Council Logo"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigationItems.slice(0, 6).map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="px-3 py-2 text-sm font-medium text-foreground hover:text-accent transition-colors rounded-md hover:bg-accent/10"
              >
                {item.name}
              </Link>
            ))}

            {/* More dropdown for remaining items */}
            <div className="relative group">
              <Button variant="ghost" className="px-3 py-2 text-sm font-medium">
                More
              </Button>
              <div className="absolute top-full left-0 mt-1 w-48 bg-popover border rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                {navigationItems.slice(6).map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block px-4 py-2 text-sm text-popover-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </nav>

          {/* Search and Mobile Menu */}
          <div className="flex items-center space-x-2">
            {/* Search Dialog for Desktop */}
            <div className="relative hidden md:block" id="search-container">
              <Dialog open={isSearchOpen} onOpenChange={setIsSearchOpen}>
                <DialogTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Search className="h-5 w-5" />
                    <span className="sr-only">Search</span>
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md p-0 overflow-hidden">
                  <div className="flex items-center border-b px-4">
                    <Search className="h-5 w-5 text-muted-foreground mr-2" />
                    <form onSubmit={handleSearchSubmit} className="flex-1">
                      <Input
                        placeholder="Search across IIC website..."
                        value={searchQuery}
                        onChange={(e) => handleSearch(e.target.value)}
                        className="border-0 shadow-none focus-visible:ring-0 py-3"
                        autoFocus
                      />
                    </form>
                    {searchQuery && (
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => setSearchQuery("")}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                  
                  {searchResults.length > 0 && (
                    <div className="max-h-60 overflow-y-auto">
                      {searchResults.map((result, index) => (
                        <Link
                          key={index}
                          href={result.href}
                          className="block p-4 hover:bg-accent hover:text-accent-foreground transition-colors border-b"
                          onClick={() => setIsSearchOpen(false)}
                        >
                          <div className="font-medium">{result.title}</div>
                          <div className="text-sm text-muted-foreground">{result.content}</div>
                        </Link>
                      ))}
                    </div>
                  )}
                  
                  {searchQuery && searchResults.length === 0 && (
                    <div className="p-4 text-center text-muted-foreground">
                      No results found for "{searchQuery}"
                    </div>
                  )}
                </DialogContent>
              </Dialog>
            </div>

            {/* Mobile Search Button */}
            <Button 
              variant="ghost" 
              size="icon" 
              className="md:hidden"
              onClick={() => setIsSearchOpen(true)}
            >
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </Button>

            {/* Mobile Search Panel */}
            {isSearchOpen && (
              <div className="fixed inset-0 bg-background z-50 md:hidden">
                <div className="flex items-center border-b px-4 py-3">
                  <form onSubmit={handleSearchSubmit} className="flex-1 flex items-center">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setIsSearchOpen(false)}
                      type="button"
                    >
                      <X className="h-5 w-5" />
                    </Button>
                    <Input
                      placeholder="Search across IIC website..."
                      value={searchQuery}
                      onChange={(e) => handleSearch(e.target.value)}
                      className="border-0 shadow-none focus-visible:ring-0 mx-2"
                      autoFocus
                    />
                    <Button type="submit" variant="ghost">
                      <Search className="h-5 w-5" />
                    </Button>
                  </form>
                </div>
                
                {searchResults.length > 0 && (
                  <div className="overflow-y-auto">
                    {searchResults.map((result, index) => (
                      <Link
                        key={index}
                        href={result.href}
                        className="block p-4 hover:bg-accent hover:text-accent-foreground transition-colors border-b"
                        onClick={() => setIsSearchOpen(false)}
                      >
                        <div className="font-medium">{result.title}</div>
                        <div className="text-sm text-muted-foreground">{result.content}</div>
                      </Link>
                    ))}
                  </div>
                )}
                
                {searchQuery && searchResults.length === 0 && (
                  <div className="p-4 text-center text-muted-foreground">
                    No results found for "{searchQuery}"
                  </div>
                )}
              </div>
            )}

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80 sm:w-96">
                {/* Mobile Logos */}
                <div className="flex items-center space-x-4 mt-4 mb-6">
                  <div className="h-12 w-12 relative">
                    <Image
                      src="/hitk.png"
                      alt="Heritage Institute of Technology Logo"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="h-8 w-auto relative aspect-video">
                    <Image
                      src="/iic.png"
                      alt="Institution Innovation Council Logo"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                
                <div className="flex flex-col space-y-4">
                  {navigationItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-lg font-medium text-foreground hover:text-accent transition-colors py-2"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
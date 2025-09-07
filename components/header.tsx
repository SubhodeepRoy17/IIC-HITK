"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Search } from "lucide-react"
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

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

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
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </Button>

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
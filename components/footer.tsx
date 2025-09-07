import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Facebook, Twitter, Linkedin, Instagram, Youtube, Mail, Phone, MapPin, ExternalLink } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 md:px-6 py-8 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-bold mb-2">Heritage IIC</h3>
              <p className="text-primary-foreground/80 text-sm leading-relaxed">
                Fostering innovation and entrepreneurship at Heritage Institute of Technology. Empowering students and
                faculty to transform ideas into impactful solutions.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <MapPin className="h-4 w-4 flex-shrink-0" />
                <span className="truncate">Kolkata, West Bengal</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span>+91 33 6628 1234</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <span className="truncate">iic@heritage.edu.in</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Quick Links</h3>
            <nav className="grid grid-cols-1 gap-2">
              <Link
                href="/"
                className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                Home
              </Link>
              <Link
                href="/members"
                className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                Members
              </Link>
              <Link
                href="/meetings"
                className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                Meetings
              </Link>
              <Link
                href="/activities"
                className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                Activities
              </Link>
              <Link
                href="/contact"
                className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Programs & Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Programs & Services</h3>
            <nav className="grid grid-cols-1 gap-2">
              <Link
                href="/activities"
                className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                Innovation Activities
              </Link>
              <Link
                href="/activities"
                className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                Startup Incubation
              </Link>
              <Link
                href="/activities"
                className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                Research Support
              </Link>
              <Link
                href="#"
                className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                IPR & Patents
              </Link>
              <Link
                href="#"
                className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                Industry Partnerships
              </Link>
            </nav>
          </div>

          {/* Newsletter & Social */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Stay Connected</h3>
            <p className="text-sm text-primary-foreground/80">
              Subscribe to our newsletter for updates on events, opportunities, and innovations.
            </p>

            <div className="space-y-2">
              <div className="flex flex-col sm:flex-row gap-2">
                <Input
                  placeholder="Enter your email"
                  className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60 flex-grow"
                />
                <Button variant="secondary" size="sm" className="whitespace-nowrap">
                  Subscribe
                </Button>
              </div>
            </div>

            <div>
              <p className="text-sm font-medium mb-3">Follow Us</p>
              <div className="flex flex-wrap gap-2">
                <Button variant="ghost" size="sm" className="p-2 h-auto hover:bg-primary-foreground/10">
                  <Facebook className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm" className="p-2 h-auto hover:bg-primary-foreground/10">
                  <Twitter className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm" className="p-2 h-auto hover:bg-primary-foreground/10">
                  <Linkedin className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm" className="p-2 h-auto hover:bg-primary-foreground/10">
                  <Instagram className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm" className="p-2 h-auto hover:bg-primary-foreground/10">
                  <Youtube className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-6 md:my-8 bg-primary-foreground/20" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <div className="text-sm text-primary-foreground/80">
            <p>&copy; 2025 Heritage Institute of Technology - Institution's Innovation Council. All rights reserved.</p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 text-sm">
            <Link href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
              Terms of Service
            </Link>
            <Link
              href="https://heritageit.edu.in"
              className="text-primary-foreground/80 hover:text-primary-foreground transition-colors flex items-center gap-1"
            >
              Heritage Institute
              <ExternalLink className="h-3 w-3" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
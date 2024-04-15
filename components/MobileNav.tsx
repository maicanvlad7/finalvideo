"use client"

import { Sheet, SheetTrigger, SheetContent } from "./ui/sheet"
import { Button } from "./ui/button"
import { Menu, Package2, Home, Badge, ShoppingCart, Package, Users, LineChart} from "lucide-react"
import Link from "next/link"
import { usePathname } from 'next/navigation'

export default function MobileNav() {
    
    const pathname = usePathname()

    return(
        <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="shrink-0 md:hidden"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="flex flex-col">
              <nav className="grid gap-2 text-lg font-medium">
                <Link
                  href="/learn"
                  className="flex items-center gap-2 text-lg font-semibold"
                >
                  <Package2 className="h-6 w-6" />
                  <span className="sr-only">Final Video</span>
                </Link>
                <Link
                  href="/learn"
                  className={`flex ${pathname === '/learn' ? 'bg-muted text-foreground' : 'text-muted-foreground'} mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2  hover:text-foreground`}
                >
                  <Home className="h-5 w-5" />
                  Journey
                </Link>
                <Link
                  href="/earn"
                  className={`flex ${pathname === '/earn' ? 'bg-muted text-foreground' : 'text-muted-foreground'} mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2  hover:text-foreground`}
                >
                  <ShoppingCart className="h-5 w-5" />
                  Earn Money
                  <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                    6
                  </Badge>
                </Link>
                <Link
                  href="#"
                  className={`flex ${pathname === '/giveaway' ? 'bg-muted text-foreground' : 'text-muted-foreground'} mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2  hover:text-foreground`}
                >
                  <Package className="h-5 w-5" />
                  Giveaway
                </Link>
                <Link
                  href="#"
                  className={`flex ${pathname === '/facebook' ? 'bg-muted text-foreground' : 'text-muted-foreground'} mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2  hover:text-foreground`}
                >
                  <Users className="h-5 w-5" />
                  Facebook Group
                </Link>
                <Link
                  href="#"
                  className={`flex ${pathname === '/help' ? 'bg-muted text-foreground' : 'text-muted-foreground'} mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2  hover:text-foreground`}
                >
                  <LineChart className="h-5 w-5" />
                  Help & Support
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
    )
}
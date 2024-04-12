"use client"


import Link from "next/link"
import {
  Bell,
  CircleUser,
  Home,
  LineChart,
  Menu,
  Package,
  Package2,
  Search,
  ShoppingCart,
  Users,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import UserBadge from "@/components/UserBadge";
import { usePathname } from 'next/navigation'

export default function DesktopNav(data:any) {
    const user = data.data
    const pathname = usePathname()
 
    return(
        <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
              <UserBadge data={user}/>
              <Link
                href="/learn"
                className={`flex ${pathname === '/learn' ? 'bg-muted text-primary' : 'text-muted-foreground'} items-center  gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary`}
              >
                <Home className="h-4 w-4" />
                Journey
              </Link>
              <Link
                href="/earn"
                className={`flex ${pathname === '/earn' ? 'bg-muted text-primary' : 'text-muted-foreground'} items-center  gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary`}
              >
                <ShoppingCart className="h-4 w-4" />
                Earn Money
                <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                  6
                </Badge>
              </Link>
              <Link
                href="#"
                className={`flex ${pathname === '/giveaway' ? 'bg-muted text-primary' : 'text-muted-foreground'} items-center  gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary`}
              >
                <Package className="h-4 w-4" />
                Giveaway{" "}
              </Link>
              <Link
                href="#"
                className={`flex ${pathname === '/facebook-group' ? 'bg-muted text-primary' : 'text-muted-foreground'} items-center  gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary`}
              >
                <Users className="h-4 w-4" />
                Facebook Group
              </Link>
              <Link
                href="#"
                className={`flex ${pathname === '/help' ? 'bg-muted text-primary' : 'text-muted-foreground'} items-center  gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary`}
              >
                <LineChart className="h-4 w-4" />
                Help & Support
              </Link>
            </nav>
    )
}
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

import { Button } from "@/components/ui/button"
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import MobileHeader from "@/components/MobileHeader";
import DesktopNav from "@/components/DesktopNav";

import { usePathname } from 'next/navigation'
import { getCourses } from './actions'
import { CourseCard } from "@/components/CourseCard";
import { checkLogin, getFirstLogin } from "../actions";



export default async function Learn() {
  
  const {data: {user}} = await checkLogin()
    
  if(!user) {
      return redirect('/login')
  }else {
      const firstLogin = await getFirstLogin()
      
      if(firstLogin.data?.length == 0) {
          return redirect('/welcome')
      }
  }

  const courses = await getCourses()

  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-muted/40 md:block">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
            <Link href="/" className="flex items-center gap-2 font-semibold">
              <Package2 className="h-6 w-6" />
              <span className="">Final Video</span>
            </Link>
            <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
              <Bell className="h-4 w-4" />
              <span className="sr-only">Toggle notifications</span>
            </Button>
          </div>
          <div className="flex-1">
            <DesktopNav data={user}/>
          </div>
          <div className="mt-auto p-4">
            
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <MobileHeader />
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
          <div className="flex flex-col items-left">
            <h1 className="text-lg font-semibold md:text-2xl">{user?.user_metadata?.name}&apos;s Journey</h1>
            <p className="text-md text-muted-foreground">Never stop expanding your potential</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-16">
          {courses?.data?.map((course) => {
            return (
              <CourseCard key={course.id} data={course} />
          )})}
          </div>
        </main>
      </div>
    </div>
  )
}

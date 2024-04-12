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
  Copy
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import MobileHeader from "@/components/MobileHeader";
import DesktopNav from "@/components/DesktopNav";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import RevenueSimulator from "@/components/RevenuSimulator";

const supabase = createClient()

const getFirstLogin = async () => {
  const result =  await supabase.from('user_first_login').select('*')
  if(result) return result
}

export default async function Earn() {
  
    const {
        data: { user },
        } = await supabase.auth.getUser();
        
        if (!user) {
        return redirect("/login");
    }

    const firstLogin = await getFirstLogin()
    if(firstLogin?.data?.length == 0) return redirect('/welcome')
    
    // if(!firstLogin?.data) return redirect('/welcome');

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
            <h1 className="text-lg font-semibold md:text-2xl">Earn Money</h1>
            <p className="text-md text-muted-foreground">Invite your community and start earning money</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          <div className="flex flex-col w-full max-w-sm items-left space-x-2">
            <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="email">Referral Link</Label>
                <div className="flex max-w-sm w-full items-left space-x-2">
                    <Input type="text" className="border-slate-400" disabled placeholder="finalvideo.vercel.app/invite?code=GBR123" />
                    <Button>
                        <Copy className="w-4 h-4"></Copy>
                    </Button>
                </div>

                <RevenueSimulator />
            </div>
        </div>
          </div>
        </main>
      </div>
    </div>
  )
}

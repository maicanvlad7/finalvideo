import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"

  import { Button } from "./ui/button";
  import { CircleUser } from "lucide-react";
  import { createClient } from "@/utils/supabase/server";
  import { redirect } from "next/navigation";

export default async function UserDropdown() {
    

    const signOutUser = async () => {
        "use server"

        const supabase = createClient()
        const { error } = await supabase.auth.signOut()

        if(!error) {
            return redirect('/')
        }
    }

    return(
        <DropdownMenu>
        <DropdownMenuTrigger asChild>
            <Button variant="secondary" size="icon" className="rounded-full">
            <CircleUser className="h-5 w-5" />
            <span className="sr-only">Toggle user menu</span>
            </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>Support</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
                <form>
                    <button formAction={signOutUser}>Logout</button>
                </form>
            </DropdownMenuItem>
        </DropdownMenuContent>
    </DropdownMenu>
    )
}

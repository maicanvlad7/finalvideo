import Link from "next/link"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import { headers } from "next/headers"
import { createClient } from "@/utils/supabase/server"
import { redirect } from "next/navigation"


export default function Register() {
    const registerWithGoogle = async () => {
        "use server";

        const origin = headers().get("origin");
        const supabase = createClient();

        const { data, error } = await supabase.auth.signInWithOAuth({
            provider: 'google',
            options: {
            queryParams: {
                access_type: 'offline',
                prompt: 'consent',
            },
            redirectTo: `${origin}/auth/callback`
            },
        })

        if(data.url) return redirect(data.url)

        if (error) {
            return redirect("/reigster?message=Could not authenticate user");
        }

        return redirect("/learn");
    };
  return (
    <div className="min-h-screen flex justify-center items-center bg-[url('https://elei.b-cdn.net/videoDar/bgimages/bgnoauth.webp')]">
        <Card className="mx-auto max-w-sm sm:max-w-lg p-4 border-slate-300">
            <CardHeader className="text-center">
                <CardTitle className="text-4xl">Sign Up</CardTitle>
                <CardDescription>
                Enter your information to create an account
                </CardDescription>
            </CardHeader>
            <CardContent className="mt-4">
                <div className="grid gap-4">
                <div className="grid grid-cols-2 gap-4">
                    <div className="grid gap-2">
                    <Label htmlFor="first-name">First name</Label>
                    <Input id="first-name" placeholder="Max" required />
                    </div>
                    <div className="grid gap-2">
                    <Label htmlFor="last-name">Last name</Label>
                    <Input id="last-name" placeholder="Robinson" required />
                    </div>
                </div>
                <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                    id="email"
                    type="email"
                    placeholder="m@example.com"
                    required
                    />
                </div>
                <div className="grid gap-2">
                    <Label htmlFor="password">Password</Label>
                    <Input id="password" type="password" />
                </div>
                <Button type="submit" className="w-full">
                    Create an account
                </Button>
                <form>
                    <Button variant="outline" formAction={registerWithGoogle} className="w-full">
                        Sign up with Google
                    </Button>
                </form>
                </div>
                <div className="mt-4 text-center text-sm">
                Already have an account?{" "}
                <Link href="/login" className="underline">
                    Sign in
                </Link>
                </div>
            </CardContent>
        </Card>
    </div>
  )
}

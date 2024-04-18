import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"

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

export default function Login() {

    const signInWithGoogle = async (formData: FormData) => {
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
            return redirect("/login?message=Could not authenticate user");
        }

        return redirect("/learn");
    };

    return (
        <div className="h-screen flex justify-center items-center bg-[url('https://elei.b-cdn.net/videoDar/bgimages/bgnoauth.webp')]">
            <Card className="mx-auto max-w-sm px-3 py-8 sm:max-w-lg sm:py-6 sm:px-12  bg-gray-400  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 rounded-[20px]">
                <CardHeader className="text-center">
                    <CardTitle className="text-5xl text-creator">CreatorX</CardTitle>
                    <CardDescription>
                    Please login to continue
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid gap-4">
                        <div className="grid gap-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                            id="email"
                            type="email"
                            placeholder="m@example.com"
                            className="bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 text-md p-4"
                            required
                            />
                        </div>
                        <div className="grid gap-2">
                            <div className="flex items-center">
                            <Label htmlFor="password">Password</Label>
                            </div>
                            <Input 
                            id="password" 
                            type="password" 
                            required 
                            className="bg-gray-400  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 text-md p-4"
                            />
                        </div>
                        <div className="flex justify-between">
                            <div className="flex items-center space-x-2">
                                <Checkbox id="terms" />
                                <label
                                    htmlFor="terms"
                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                >
                                    Remember me?
                                </label>
                            </div>
                            <Link href="#" className="ml-auto inline-block text-sm underline">
                                    Forgot password?
                            </Link>
                        </div>
                        <Button type="submit" className="w-full bg-creator font-bold mt-4">
                            LOGIN
                        </Button>
                        <hr className="bg-white border-white mt-2" />
                        <form>
                            <Button 
                            formAction={signInWithGoogle} 
                            className="w-full bg-gray-400  text-gray-200 hover:text-black bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10">
                                Login with Google
                            </Button>
                        </form>
                    </div>
                    <div className="mt-4 text-center text-sm">
                    No account yet? {" "}
                    <Link href="/register" className="underline">
                        Sign up
                    </Link>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

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
        <div className="min-h-screen justify-center content-center align-middle">
            <Card className="mx-auto max-w-sm sm:max-w-lg p-4 border-slate-300">
                <CardHeader className="text-center">
                    <CardTitle className="text-4xl">Welcome Back</CardTitle>
                    <CardDescription>
                    Enter your email below to login to your account
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
                            required
                            />
                        </div>
                        <div className="grid gap-2">
                            <div className="flex items-center">
                            <Label htmlFor="password">Password</Label>
                            <Link href="#" className="ml-auto inline-block text-sm underline">
                                Forgot your password?
                            </Link>
                            </div>
                            <Input id="password" type="password" required />
                        </div>
                        <Button type="submit" className="w-full">
                            Login
                        </Button>
                        <form>
                            <Button formAction={signInWithGoogle} variant="outline" className="w-full">
                                Login with Google
                            </Button>
                        </form>
                    </div>
                    <div className="mt-4 text-center text-sm">
                    Don&apos;t have an account?{" "}
                    <Link href="/register" className="underline">
                        Sign up
                    </Link>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

import { Button } from "@/components/ui/button";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { checkLogin } from "../actions";



export default async function Welcome() {

    const startJourney = async () => {
        "use server"
        
        const {data: {user}} = await checkLogin()
        const supabase = createClient()

        if(user) {
            const { error } = await supabase
                .from('user_first_login')
                .insert({user_id: user.id})

            console.log('pressed', error)
            if(!error) return redirect('/learn')
        }else {
            return redirect('/login')
        }
        
    }


    return (
        <div className="flex flex-col gap-6 justify-center content-center items-center w-full min-h-screen">
            <div className="text-center">
                <h1 className="text-5xl animate-in">Welcome to Final Video</h1>
                <p className="animate-in text-md text-slate-400">The place where you learn how to monetize your content</p>
            </div>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/usu0XY4QNB0?si=4eVrYIvNs7b6qJVi" title="YouTube video player" className="max-w-[600px] mt-3 aspect-video rounded-sm border-[1px] border-slate-300" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;" allowFullScreen></iframe>
            <form>
                <Button className="mt-5" formAction={startJourney} >Start your journey</Button>
            </form>
        </div>
    )
}

import { createClient } from "@/utils/supabase/server";
export default async function UserBadge() {
    const supabase = createClient();

    const {
        data: { user },
        } = await supabase.auth.getUser();
        
    console.log(user)

    return(
        <div className="rounded-md border-slate-600 border-[1px] flex p-2 flex-row gap-2 items-center my-3">
            <div className="rounded-full bg-emerald-500 text-center content-center w-10 h-10">FD</div>
            <div className="flex flex-col">
            <p className="text-md">{user?.user_metadata?.name}</p>
            <p className="text-xs text-slate-400">{user?.email}</p>
            </div>
        </div>
    )
}
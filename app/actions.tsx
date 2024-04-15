import { createClient } from "@/utils/supabase/server";


export async function checkLogin()
{
    const supabase = createClient()
    const result = await supabase.auth.getUser()
    return result
}

export async function getFirstLogin()
{
    const supabase = createClient()
   const result =  await supabase.from('user_first_login').select('*')
   return result
}
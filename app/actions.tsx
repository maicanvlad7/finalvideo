import { createClient } from "@/utils/supabase/server";

const supabase = createClient()

export async function checkLogin()
{
    const result = await supabase.auth.getUser()
    return result
}

export async function getFirstLogin()
{
   const result =  await supabase.from('user_first_login').select('*')
   return result
}
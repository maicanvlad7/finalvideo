import { createClient } from "@/utils/supabase/server"

const supabase = createClient()

export  async function getCourses(){
    const result = await supabase.from('courses').select('*')
    if(result) return result;
}
import { createClient } from "@/utils/supabase/server"



export  async function getCourses(){
    const supabase = createClient()
    
    const result = await supabase.from('courses').select('*')
    if(result) return result;
}
// src/lib/supabase/supabaseClient.ts
import { createPagesBrowserClient } from "@supabase/auth-helpers-nextjs";
import { type Database } from "@/types/supabase";

const createClient = () => createPagesBrowserClient<Database>();
export default createClient;

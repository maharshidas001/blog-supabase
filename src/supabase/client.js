import config from "@/config/config";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = config.supabseUrl;
const supabaseKey = config.supabaseApiKey;

export const supabaseClient = createClient(supabaseUrl, supabaseKey);
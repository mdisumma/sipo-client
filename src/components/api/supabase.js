import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://avvelquwyslzkodskshw.supabase.co";
const SERVICE_KEY =
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoic2VydmljZV9yb2xlIiwiaWF0IjoxNjMzMzgzMTU1LCJleHAiOjE5NDg5NTkxNTV9.tmww3KW2ZpsLvhPlGq2es22MTmXuWK9Mp-wyGMvAtUY";

const supabase = createClient(SUPABASE_URL, SERVICE_KEY);

export default supabase;

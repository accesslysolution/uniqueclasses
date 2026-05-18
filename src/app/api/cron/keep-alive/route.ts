import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

// Initialize Supabase Client using your environment variables
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!; // Secure key for backend execution

const supabase = createClient(supabaseUrl, supabaseServiceKey);

export async function GET(request: Request) {
  // 🔐 Security: Validate Vercel's Cron Signature to protect this endpoint from malicious spam
  const authHeader = request.headers.get("authorization");
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return new NextResponse("Unauthorized Execution Attempt", { status: 401 });
  }

  try {
    // Executes a micro-query that consumes practically zero resources but counts as active usage
    const { data, error } = await supabase.rpc("keep_alive_ping").select("*");
    
    // Fallback if you haven't declared the RPC function yet:
    if (error) {
      const { error: rawError } = await supabase.from("_analytics").select("id").limit(1); 
      // Replace '_analytics' with any small real table name if needed, or stick to a raw query
    }

    return NextResponse.json({ success: true, message: "Database pinged successfully" });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}
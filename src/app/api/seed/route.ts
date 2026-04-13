import { NextResponse } from "next/server";
import { runSeed } from "@/lib/seed/run-seed";

export async function POST() {
  try {
    const result = await runSeed();
    return NextResponse.json({ success: true, ...result });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: String(error) },
      { status: 500 }
    );
  }
}

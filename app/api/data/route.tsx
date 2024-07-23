// app/api/data/route.ts
import { NextResponse } from "next/server";

const data = [
  { browser: "chrome", visitors: 900 },
  { browser: "safari", visitors: 700 },
  { browser: "firefox", visitors: 350 },
  { browser: "edge", visitors: 100 },
  { browser: "other", visitors: 50 },
];

export async function GET() {
  return NextResponse.json(data);
}

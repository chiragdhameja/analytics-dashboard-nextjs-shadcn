import { NextRequest, NextResponse } from "next/server";

export function GET(request: NextRequest) {
  // No need to use request here
  return NextResponse.json([
    { id: 1, name: "Chirag" },
    { id: 2, name: "Nidha" },
  ]);
}

export async function POST(request: NextRequest) {
  const body = await request.json();

  // Validate the request body
  if (!body.name) {
    // If invalid, return 400
    return NextResponse.json({ error: "Name is required" }, { status: 400 });
  }

  // If valid, return the created data
  return NextResponse.json({ id: 1, name: body.name }, { status: 201 });
}

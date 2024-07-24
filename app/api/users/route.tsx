import { NextRequest, NextResponse } from "next/server";

export function GET(request: NextResponse) {
  // To prevent cacheing pass "request: NextResponse" even though request is not being used
  return NextResponse.json([
    { id: 1, name: "Chirag" },
    { id: 2, name: "Nidha" },
  ]);
}

export async function POST(request: NextRequest) {
  const body = await request.json();

  // Validate
  if (!body.name)
    // if invalid return 400
    return NextResponse.json({ error: "Name is required" }, { status: 400 });

  // else, return data created
  return NextResponse.json({ id: 1, name: body.name }, { status: 201 });
}

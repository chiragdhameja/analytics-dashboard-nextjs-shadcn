import { NextRequest, NextResponse } from "next/server";

export function GET(
  request: NextResponse,
  { params }: { params: { id: number } }
) {
  if (params.id > 10) {
    return NextResponse.json({ error: "User not found!" }, { status: 404 });
  }
  return NextResponse.json({ params });
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  // Validate the req body
  const body = await request.json();
  // if invalid, return 400
  if (!body.name)
    return NextResponse.json({ error: "Name is required" }, { status: 400 });

  // if user invalid, return 404
  if (params.id > 10)
    return NextResponse.json({ error: "User not found!" }, { status: 404 });
  // Fetch user with given id
  // update the user
  // Return the updated user
  return NextResponse.json({ id: 1, name: body.name });
}

export function DELETE(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  // Validate the user id
  // if invalid, return 404
  if (params.id > 10)
    return NextResponse.json({ error: "User not found!" }, { status: 404 });

  // delete user
  return NextResponse.json({});
}

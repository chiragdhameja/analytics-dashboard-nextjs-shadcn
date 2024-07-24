import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } } // id should be string
) {
  const id = parseInt(params.id, 10); // Convert id to number
  if (id > 10) {
    return NextResponse.json({ error: "User not found!" }, { status: 404 });
  }
  return NextResponse.json({ params });
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } } // id should be string
) {
  const body = await request.json();

  if (!body.name) {
    return NextResponse.json({ error: "Name is required" }, { status: 400 });
  }

  const id = parseInt(params.id, 10); // Convert id to number

  if (id > 10) {
    return NextResponse.json({ error: "User not found!" }, { status: 404 });
  }

  // Fetch user with given id and update the user
  return NextResponse.json({ id, name: body.name });
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } } // id should be string
) {
  const id = parseInt(params.id, 10); // Convert id to number

  if (id > 10) {
    return NextResponse.json({ error: "User not found!" }, { status: 404 });
  }

  // Delete user with given id
  return NextResponse.json({});
}

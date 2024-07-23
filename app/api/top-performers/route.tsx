import { NextResponse } from "next/server";

// Sample data
const data = [
  { name: "Chelsey Dietrich", views: 50 },
  { name: "Clementina DuBuque", views: 60 },
  { name: "Clementine Bauch", views: 70 },
  { name: "Ervin Howell", views: 80 },
  { name: "Glenna Reichert", views: 100 },
  { name: "Kurtis Weissnat", views: 130 },
  { name: "Leanne Graham", views: 35 },
  { name: "Mrs. Dennis Schulist", views: 20 },
  { name: "Nicholas Runolfsdottir", views: 90 },
  { name: "Patricia Lebsack", views: 100 },
];

// API route handler
export async function GET() {
  // Sort data by views in descending order and get the top 5
  const topPerformers = data.sort((a, b) => b.views - a.views).slice(0, 5);

  return NextResponse.json(topPerformers);
}

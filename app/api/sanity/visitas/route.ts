import { NextResponse } from "next/server";
import { getVisitas } from "@/lib/sanity";

export async function GET() {
  try {
    const visitas = await getVisitas();
    return NextResponse.json(visitas);
  } catch (error) {
    return NextResponse.json([], { status: 200 });
  }
}


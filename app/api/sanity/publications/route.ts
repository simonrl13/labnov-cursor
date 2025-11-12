import { NextResponse } from "next/server";
import { getPublications } from "@/lib/sanity";

export async function GET() {
  try {
    const publications = await getPublications();
    return NextResponse.json(publications);
  } catch (error) {
    return NextResponse.json([], { status: 200 });
  }
}


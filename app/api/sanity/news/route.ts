import { NextResponse } from "next/server";
import { getNews } from "@/lib/sanity";

export async function GET() {
  try {
    const news = await getNews();
    return NextResponse.json(news);
  } catch (error) {
    return NextResponse.json([], { status: 200 });
  }
}


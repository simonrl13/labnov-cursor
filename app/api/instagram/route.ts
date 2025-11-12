import { NextResponse } from "next/server";

// Instagram Basic Display API or Graph API
// This is a placeholder - you'll need to set up Instagram API access

export async function GET() {
  try {
    // Option 1: Use Instagram Basic Display API (simpler, but limited)
    // Option 2: Use Instagram Graph API (requires Facebook App setup)
    
    const accessToken = process.env.INSTAGRAM_ACCESS_TOKEN;
    const userId = process.env.INSTAGRAM_USER_ID;

    if (!accessToken || !userId) {
      // Return empty array if not configured
      return NextResponse.json({ posts: [] });
    }

    // For Instagram Graph API (recommended for business accounts)
    const response = await fetch(
      `https://graph.instagram.com/${userId}/media?fields=id,media_type,media_url,caption,permalink,timestamp&access_token=${accessToken}&limit=12`
    );

    if (!response.ok) {
      throw new Error("Instagram API error");
    }

    const data = await response.json();
    return NextResponse.json({ posts: data.data || [] });
  } catch (error) {
    // Return empty array on error
    return NextResponse.json({ posts: [] });
  }
}


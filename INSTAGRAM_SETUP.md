# Instagram Feed Setup Guide

This guide explains how to set up the Instagram feed on your website.

## Prerequisites

- Instagram Business or Creator account
- Facebook Page connected to your Instagram account
- Facebook Developer account

## Setup Steps

### 1. Create a Facebook App

1. Go to [Facebook Developers](https://developers.facebook.com/)
2. Click "My Apps" → "Create App"
3. Choose "Business" as the app type
4. Fill in app details and create the app

### 2. Add Instagram Basic Display or Instagram Graph API

**Option A: Instagram Graph API (Recommended for Business Accounts)**

1. In your Facebook App, go to "Add Product"
2. Add "Instagram Graph API"
3. Go to "Basic Display" or "Graph API" settings
4. Add your Instagram account

**Option B: Instagram Basic Display API**

1. In your Facebook App, go to "Add Product"
2. Add "Instagram Basic Display"
3. Configure OAuth redirect URIs
4. Generate access token

### 3. Get Access Token

1. Go to "Tools" → "Graph API Explorer"
2. Select your app and Instagram account
3. Generate a User Access Token with permissions:
   - `instagram_basic`
   - `pages_read_engagement`
4. Copy the access token

### 4. Get User ID

1. Use Graph API Explorer: `GET /me?fields=id`
2. Or use: `GET /{your-instagram-account-id}`
3. Copy the User ID

### 5. Add to Environment Variables

Add to your `.env.local`:

```env
INSTAGRAM_ACCESS_TOKEN=your_access_token_here
INSTAGRAM_USER_ID=your_user_id_here
```

### 6. Test the Feed

1. Restart your Next.js dev server
2. Visit your homepage
3. The Instagram feed should appear (if configured correctly)

## Alternative: Embed Instagram Posts Manually

If API setup is too complex, you can:

1. Use Instagram's embed code for individual posts
2. Or use a third-party service like [SnapWidget](https://snapwidget.com/) or [Elfsight](https://elfsight.com/)

## Troubleshooting

**Feed not showing?**
- Check that `INSTAGRAM_ACCESS_TOKEN` and `INSTAGRAM_USER_ID` are set
- Verify your access token hasn't expired
- Check browser console for errors

**Access token expired?**
- Instagram tokens expire after 60 days
- You'll need to regenerate them
- Consider using a long-lived token (valid for 60 days, can be refreshed)

**Rate limits?**
- Instagram API has rate limits
- The feed caches posts to reduce API calls
- Consider implementing caching in the API route

## Notes

- The feed shows the latest 8 posts
- Only shows if Instagram API is properly configured
- Automatically hides if there's an error or no posts
- Links to your Instagram profile (@labnov_ufcg)


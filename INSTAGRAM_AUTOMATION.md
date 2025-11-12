# Instagram Automation Guide

This guide explains how to set up automatic Instagram posting when a "Visita" entry is published with `publishToInstagram: true`.

## Overview

When a lab member publishes a "Visita & Colaboração" entry in Sanity CMS with the `publishToInstagram` checkbox enabled, the system can automatically post to Instagram (@labnov_ufcg).

## Option 1: Using Zapier (Recommended for Beginners)

### Prerequisites
- Zapier account (free tier available)
- Instagram Business account connected to a Facebook Page
- Meta Developer App with Instagram Basic Display API access

### Setup Steps

1. **Create a Zap**:
   - Go to [zapier.com](https://zapier.com)
   - Click "Create Zap"

2. **Set up Trigger**:
   - Choose "Webhooks by Zapier"
   - Select "Catch Hook"
   - Copy the webhook URL

3. **Configure Sanity Webhook**:
   - In Sanity dashboard → API → Webhooks
   - Create new webhook:
     - **Name**: Instagram Automation
     - **URL**: Your Zapier webhook URL
     - **Dataset**: production
     - **Trigger on**: Document published
     - **Filter**: `_type == "visita" && publishToInstagram == true`
     - **HTTP method**: POST
     - **API version**: v2021-03-25

4. **Set up Action in Zapier**:
   - Choose "Instagram" (or "Facebook Pages" if Instagram option not available)
   - Select "Create Photo"
   - Connect your Instagram Business account
   - Map fields:
     - **Photo**: `photos[0].asset.url` (from webhook payload)
     - **Caption**: Format with title, partner, summary, date
     - **Hashtags**: Add relevant hashtags

5. **Test and Activate**:
   - Test with a sample entry
   - Activate the Zap

## Option 2: Using Make.com (Formerly Integromat)

### Setup Steps

1. **Create a Scenario**:
   - Go to [make.com](https://make.com)
   - Create new scenario

2. **Add Webhook Module**:
   - Add "Webhooks" → "Custom webhook"
   - Copy the webhook URL

3. **Configure Sanity Webhook** (same as Zapier)

4. **Add Instagram Module**:
   - Add "Instagram" → "Create a Media Container"
   - Connect your Instagram account
   - Map the image URL from webhook

5. **Add Publish Module**:
   - Add "Instagram" → "Publish Media Container"
   - Connect the media container ID

6. **Activate Scenario**

## Option 3: Custom Serverless Function (Advanced)

You can create a custom serverless function that:
1. Receives the Sanity webhook
2. Downloads the image
3. Uses Meta Graph API to post to Instagram

### Example Structure

```typescript
// app/api/instagram/route.ts
export async function POST(request: Request) {
  const body = await request.json();
  
  if (body.publishToInstagram && body.photos?.[0]) {
    // Download image
    // Upload to Instagram using Meta Graph API
    // Post with caption
  }
  
  return Response.json({ success: true });
}
```

## Webhook Payload Structure

When a "Visita" is published, the webhook receives:

```json
{
  "_type": "visita",
  "_id": "visita-id",
  "title": "Visita Example",
  "partner": "Partner Name",
  "summary": "Summary text",
  "date": "2025-01-01",
  "photos": [
    {
      "asset": {
        "_id": "image-id",
        "url": "https://cdn.sanity.io/images/..."
      }
    }
  ],
  "links": [
    {
      "url": "https://example.com",
      "label": "Learn more"
    }
  ],
  "publishToInstagram": true
}
```

## Caption Template

Suggested Instagram caption format:

```
🔬 {title}

Parceiro: {partner}
Data: {date}

{summary}

#LABNOV #UFCG #Pesquisa #Catálise #MeioAmbiente
```

## Troubleshooting

1. **Instagram not posting**:
   - Verify Instagram Business account is connected
   - Check Meta Developer App permissions
   - Ensure image URL is accessible

2. **Webhook not triggering**:
   - Verify webhook URL is correct
   - Check Sanity webhook logs
   - Ensure filter matches document structure

3. **Image not loading**:
   - Sanity CDN URLs should be publicly accessible
   - Check CORS settings if needed

## Free Tier Limits

- **Zapier Free**: 100 tasks/month
- **Make.com Free**: 1,000 operations/month
- **Meta API**: Free (rate limits apply)

## Security Notes

- Never expose API keys in client-side code
- Use environment variables for sensitive data
- Validate webhook payloads
- Implement rate limiting


# Sanity CMS Setup

This directory contains the Sanity schemas for the LABNOV website.

## Setup

1. Install Sanity CLI:
```bash
npm install -g @sanity/cli
```

2. Login to Sanity:
```bash
sanity login
```

3. Initialize Sanity in this project (if not already done):
```bash
sanity init
```

4. Deploy schemas:
```bash
sanity deploy
```

## Webhook Configuration

In your Sanity project settings, configure a webhook that triggers on document publish:

- URL: `https://your-domain.vercel.app/api/revalidate?secret=your_webhook_secret`
- Trigger: Document published
- Dataset: production
- Project: your-project-id

## Instagram Automation

When a "Visita" document is published with `publishToInstagram: true`, you can set up a Zapier/Make.com automation:

1. Create a webhook trigger in Zapier/Make
2. Configure it to listen to your Sanity webhook
3. Filter for `publishToInstagram === true`
4. Use Meta Graph API to post to Instagram (@labnov_ufcg)

Example webhook payload structure:
```json
{
  "_type": "visita",
  "title": "Visita Example",
  "partner": "Partner Name",
  "summary": "Summary text",
  "date": "2025-01-01",
  "photos": [...],
  "publishToInstagram": true
}
```


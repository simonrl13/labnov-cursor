# Deployment Guide

## Free Hosting Setup

This project is optimized for free hosting on Vercel, which provides:
- Free SSL certificates
- Global CDN
- Automatic deployments from GitHub
- Generous free tier for low-traffic sites

## Step-by-Step Deployment

### 1. Sanity CMS Setup

1. Create a free account at [sanity.io](https://sanity.io)
2. Create a new project
3. Install Sanity CLI:
   ```bash
   npm install -g @sanity/cli
   ```
4. Login:
   ```bash
   sanity login
   ```
5. Initialize Sanity in this project:
   ```bash
   sanity init
   ```
   - Choose "Create new project"
   - Use the same project ID from your Sanity dashboard
6. Deploy schemas:
   ```bash
   sanity deploy
   ```

### 2. Google reCAPTCHA Setup

1. Go to [Google reCAPTCHA Admin](https://www.google.com/recaptcha/admin)
2. Create a new site
3. Choose reCAPTCHA v3
4. Add your domain (localhost for testing, your Vercel domain for production)
5. Copy the Site Key and Secret Key

### 3. Vercel Deployment

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your GitHub repository
4. Add environment variables in Vercel dashboard:
   - `NEXT_PUBLIC_SANITY_PROJECT_ID`
   - `NEXT_PUBLIC_SANITY_DATASET` (usually "production")
   - `NEXT_PUBLIC_SANITY_API_VERSION` (e.g., "2024-01-01")
   - `SANITY_WEBHOOK_SECRET` (generate a random string)
   - `NEXT_PUBLIC_RECAPTCHA_SITE_KEY`
   - `RECAPTCHA_SECRET_KEY`
   - `NEXT_PUBLIC_SITE_URL` (your Vercel URL)
5. Deploy!

### 4. Sanity Webhook Configuration

1. In your Sanity project dashboard, go to API → Webhooks
2. Create a new webhook:
   - **Name**: Vercel Revalidation
   - **URL**: `https://your-domain.vercel.app/api/revalidate?secret=your_webhook_secret`
   - **Dataset**: production
   - **Trigger on**: Document published
   - **Filter**: `_type == "visita"`
   - **HTTP method**: POST
   - **API version**: v2021-03-25

### 5. Instagram Automation (Optional)

To set up Instagram posting via Zapier/Make:

1. **Zapier Setup**:
   - Create a new Zap
   - Trigger: Webhook by Zapier (Catch Hook)
   - Action: Instagram (Post Photo)
   - Connect your Instagram Business account
   - Map fields from webhook payload

2. **Make.com Setup**:
   - Create a new scenario
   - Trigger: Webhook (Custom)
   - Action: Instagram (Create Media Container)
   - Action: Instagram (Publish Media)

3. **Webhook URL**:
   - In Sanity, create a second webhook pointing to your Zapier/Make webhook
   - Filter: `_type == "visita" && publishToInstagram == true`

## Testing

1. Test the contact form locally with reCAPTCHA
2. Test Sanity webhook by publishing a "Visita" document
3. Verify revalidation works by checking Vercel logs
4. Test Instagram automation (if configured)

## Monitoring

- Vercel provides analytics on the free tier
- Monitor Sanity usage in the Sanity dashboard
- Check Vercel function logs for webhook calls

## Cost Estimate

- **Vercel**: Free (up to 100GB bandwidth/month)
- **Sanity**: Free (up to 10,000 documents, 5GB assets)
- **reCAPTCHA**: Free
- **Zapier/Make**: Free tier available (limited tasks/month)

Total: **$0/month** for low-traffic sites!


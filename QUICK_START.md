# Quick Start Guide

Get your LABNOV website up and running in minutes!

## Prerequisites

- Node.js 18+ installed
- npm or yarn
- A Sanity account (free)
- A Google reCAPTCHA account (free)

## Installation

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Set up environment variables**:
   ```bash
   cp .env.example .env.local
   ```
   
   Edit `.env.local` and add your credentials:
   - Sanity project ID (from sanity.io)
   - reCAPTCHA keys (from Google)

3. **Run development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## Sanity CMS Setup

1. **Install Sanity CLI** (if not already installed):
   ```bash
   npm install -g @sanity/cli
   ```

2. **Login to Sanity**:
   ```bash
   sanity login
   ```

3. **Initialize Sanity**:
   ```bash
   sanity init
   ```
   - Choose "Create new project"
   - Use your project ID from the Sanity dashboard
   - Select "production" dataset

4. **Deploy schemas**:
   ```bash
   sanity deploy
   ```

5. **Access Sanity Studio**:
   - Run `sanity start` or access via your deployed studio URL
   - Create your first "Visita & Colaboração" entry

## Next Steps

- Read [DEPLOYMENT.md](./DEPLOYMENT.md) for production deployment
- Read [INSTAGRAM_AUTOMATION.md](./INSTAGRAM_AUTOMATION.md) for Instagram integration
- Customize content in the Sanity CMS
- Add partner logos to `/public/partners/`
- Update member information in `/app/membros/page.tsx`

## Troubleshooting

**Sanity connection errors**:
- Verify your project ID in `.env.local`
- Check that your dataset name matches

**reCAPTCHA errors**:
- Ensure you're using reCAPTCHA v3 keys
- Add `localhost` to allowed domains in Google reCAPTCHA settings

**Build errors**:
- Clear `.next` folder: `rm -rf .next`
- Reinstall dependencies: `rm -rf node_modules && npm install`

## Support

For issues or questions, check the main [README.md](./README.md) or create an issue in your repository.


# Sanity CMS Content Management Guide

This guide explains how to add and manage content (Publications, News, and Visitas) through Sanity CMS.

## Setup Sanity Studio

1. **Install Sanity CLI** (if not already installed):
   ```bash
   npm install -g @sanity/cli
   ```

2. **Login to Sanity**:
   ```bash
   sanity login
   ```

3. **Deploy schemas**:
   ```bash
   sanity deploy
   ```

4. **Start Sanity Studio locally** (optional, for development):
   ```bash
   npm run sanity:dev
   ```
   Or use: `sanity dev` or `npx sanity dev`
   
   This will start the Studio on `http://localhost:3333`
   
   **Note**: You can run this in a separate terminal - it doesn't require your Next.js app to be running.

5. **Deploy Studio** (to access online):
   ```bash
   npm run sanity:deploy
   ```
   Or use: `sanity deploy`
   
   After deployment, access your studio at: `https://your-project.sanity.studio`

## Adding Publications

1. Go to your Sanity Studio
2. Click on **"Publicação"** in the sidebar
3. Click **"Create new"**
4. Fill in the fields:
   - **Título**: Full title of the publication
   - **Autores**: List of authors (comma-separated)
   - **Revista/Periódico**: Journal name
   - **Ano**: Publication year
   - **Mês**: Select the month from dropdown
   - **Link**: URL to the publication (optional)
   - **DOI**: Digital Object Identifier (optional)
5. Click **"Publish"**

The publication will automatically appear on:
- The landing page (as "Latest Publication")
- The Publications page (in chronological order)

## Adding News/Updates

1. Go to your Sanity Studio
2. Click on **"Notícia"** in the sidebar
3. Click **"Create new"**
4. Fill in the fields:
   - **Título**: News headline
   - **Resumo**: Brief summary of the news
   - **Data**: Date of the news
   - **Link**: URL to full article (optional)
5. Click **"Publish"**

The news will automatically appear on the landing page (shows latest 3 items).

**Note**: If no news items exist, the section won't be displayed.

## Adding Visitas & Colaborações

1. Go to your Sanity Studio
2. Click on **"Visita & Colaboração"** in the sidebar
3. Click **"Create new"**
4. Fill in the fields:
   - **Título**: Title of the visit/collaboration
   - **Parceiro**: Partner name/institution
   - **Resumo**: Description of the visit/collaboration
   - **Data**: Date of the visit
   - **Fotos**: Upload photos (optional)
   - **Links**: Add links with labels (optional)
   - **Publicar no Instagram**: Check if you want to auto-post to Instagram
5. Click **"Publish"**

The visit will automatically appear on the landing page.

## Automatic Updates

When you publish content in Sanity:
1. The webhook automatically triggers
2. Next.js revalidates the pages
3. New content appears on the website within seconds

## Troubleshooting

**Content not appearing?**
- Check that you clicked "Publish" (not just "Save as draft")
- Verify your Sanity project ID in `.env.local`
- Check webhook configuration in Sanity dashboard

**Webhook not working?**
- Ensure `SANITY_WEBHOOK_SECRET` is set in your environment
- Verify webhook URL in Sanity: `https://your-domain.vercel.app/api/revalidate?secret=your_secret`

## Content Workflow

1. **Add content** → Sanity Studio
2. **Publish** → Webhook triggers
3. **Revalidation** → Next.js updates pages
4. **Live** → Content appears on website

No code changes needed! All content is managed through the CMS.


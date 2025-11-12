# Quick Sanity Setup Guide

## Two Ways to Access Sanity Studio

### Option 1: Local Development (Recommended for testing)

1. **Make sure your `.env.local` has your Sanity credentials**:
   ```env
   NEXT_PUBLIC_SANITY_PROJECT_ID=your_actual_project_id
   NEXT_PUBLIC_SANITY_DATASET=production
   ```

2. **In a NEW terminal** (you can keep your Next.js app running in another terminal):
   ```bash
   npm run sanity:dev
   ```
   
   This starts Sanity Studio on `http://localhost:3333`

3. **Open your browser** to `http://localhost:3333`

**Note**: 
- ✅ You can run this in a separate terminal
- ✅ Your Next.js app (`npm run dev`) can run at the same time in another terminal
- ✅ They don't interfere with each other

### Option 2: Deploy Studio Online (Recommended for production)

1. **Deploy your Studio**:
   ```bash
   npm run sanity:deploy
   ```

2. **Access it online** at: `https://your-project-id.sanity.studio`

3. **Share the URL** with team members who need to add content

## First Time Setup

If you haven't set up Sanity yet:

1. **Create a Sanity account** at [sanity.io](https://sanity.io)

2. **Create a new project** in the Sanity dashboard

3. **Get your Project ID** from the project settings

4. **Add to `.env.local`**:
   ```env
   NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id_here
   NEXT_PUBLIC_SANITY_DATASET=production
   ```

5. **Login to Sanity CLI**:
   ```bash
   sanity login
   ```

6. **Deploy schemas** (first time only):
   ```bash
   npm run sanity:deploy
   ```

## Troubleshooting

**"Could not find a production build"**:
- Use `sanity dev` (or `npm run sanity:dev`) instead of `sanity start`
- `sanity start` is for previewing static builds, not development

**"Project ID not found"**:
- Make sure `.env.local` has `NEXT_PUBLIC_SANITY_PROJECT_ID` set
- Restart the terminal after adding env variables

**Studio not loading**:
- Check that you're logged in: `sanity login`
- Verify your project ID is correct
- Try deploying: `npm run sanity:deploy`

## Workflow

1. **Terminal 1**: Run Next.js app
   ```bash
   npm run dev
   ```
   → Website at `http://localhost:3000`

2. **Terminal 2**: Run Sanity Studio
   ```bash
   npm run sanity:dev
   ```
   → CMS at `http://localhost:3333`

3. **Add content** in Sanity Studio → **See it live** on your website!


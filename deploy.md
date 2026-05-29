# Deployment Guide — Khadyakranti Website

This guide explains how to publish the Khadyakranti website so it's live on the internet. Three options are covered — choose the one that fits you best.

---

## Option A — Vercel (Recommended, Free)

**What is Vercel?** It's the company that makes Next.js (the framework this website uses). They offer free hosting, a free `.vercel.app` URL, and your site deploys in seconds. No server management needed.

### Step 1: Build the website
Open Terminal, go to the project folder, and run:
```
npm run build
```
Make sure it says "✓ Generating static pages" with no errors.

### Step 2: Install the Vercel CLI
```
npm install -g vercel
```

### Step 3: Deploy
```
vercel
```

Follow the prompts:
- "Set up and deploy?" → Yes
- "Which scope?" → Your personal account
- "Link to existing project?" → No
- "Project name?" → khadyakranti (or any name)
- "In which directory is your code located?" → ./ (press Enter)

Vercel will build and deploy automatically. At the end it gives you a live URL like:
```
https://khadyakranti.vercel.app
```

### Step 4 (Optional): Connect a custom domain

If you have a domain (e.g., `khadyakranti.com`):
1. Go to [https://vercel.com](https://vercel.com) → Log in → Your project → Settings → Domains
2. Add your domain name
3. Vercel will give you DNS records to add to your domain registrar (e.g., GoDaddy, Namecheap, BigRock)
4. Once DNS updates (can take up to 24 hours), your domain will show the website

---

## Option B — Netlify (Alternative, Free)

**What is Netlify?** Similar to Vercel — free hosting, easy deployment.

### Step 1: Build
```
npm run build
```

### Step 2: Export as static HTML
Add `output: 'export'` to `next.config.ts`:
```typescript
const nextConfig = {
  output: 'export',
}
export default nextConfig
```
Then run:
```
npm run build
```
This creates an `out/` folder with plain HTML files.

### Step 3: Deploy to Netlify
1. Go to [https://netlify.com](https://netlify.com) and sign up free
2. Click "Add new site" → "Deploy manually"
3. Drag and drop the `out/` folder onto the Netlify deploy zone
4. Your site goes live instantly with a URL like `https://khadyakranti.netlify.app`

### Step 4 (Optional): Custom domain
Settings → Domain management → Add custom domain → follow their DNS instructions.

---

## Option C — Traditional Web Hosting (cPanel / FTP)

If you already have a web hosting account (Hostinger, GoDaddy, Bluehost, etc.), use this method.

### Step 1: Set up for static export
Edit `next.config.ts` and add:
```typescript
const nextConfig = {
  output: 'export',
}
export default nextConfig
```

### Step 2: Build
```
npm run build
```
This creates an `out/` folder.

### Step 3: Upload via FTP
1. Open your hosting control panel (cPanel) and find the **File Manager** or use an FTP client like [FileZilla](https://filezilla-project.org/) (free)
2. Connect to your hosting with your FTP credentials (host, username, password — found in your hosting account)
3. Navigate to `public_html/` (or `www/`) on the server
4. Upload everything inside the `out/` folder to `public_html/`
5. Your website is live at your domain

---

## After Deployment: Making Updates

Whenever you make changes to the website:

1. Edit the files locally
2. Test with `npm run dev`
3. When happy, run `npm run build`
4. Re-deploy:
   - **Vercel**: just run `vercel` again in the terminal — it detects changes automatically
   - **Netlify**: drag and drop the new `out/` folder
   - **FTP**: upload the new `out/` folder contents to `public_html/`

---

## Checklist Before Going Live

- [ ] Logo added to `public/images/logo.svg`
- [ ] All product text reviewed and finalised
- [ ] `npm run build` completes with no errors
- [ ] Tested on mobile (resize browser or use Chrome DevTools)
- [ ] `.env.local` is NOT uploaded (it contains your API tokens)

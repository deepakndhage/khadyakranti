# Developer Guide — Khadyakranti Website

This guide explains how to run the website locally and make common edits. No advanced technical knowledge required.

---

## Prerequisites

You need **Node.js** installed on your computer. If you don't have it:

1. Go to [https://nodejs.org](https://nodejs.org)
2. Download the version labeled **"LTS"** (recommended)
3. Install it like any normal app — just follow the installer

To check Node.js is installed, open **Terminal** (Mac) or **Command Prompt** (Windows) and type:
```
node --version
```
You should see something like `v22.x.x`. If you do, you're ready.

---

## Running the Website Locally

1. Open **Terminal** (Mac: press Cmd + Space, type "Terminal", press Enter)

2. Navigate to the project folder:
   ```
   cd /path/to/khadyakranti
   ```
   Replace `/path/to/khadyakranti` with the actual folder path on your computer.

3. Install dependencies (first time only):
   ```
   npm install
   ```
   This downloads all the packages the website needs. It takes a minute or two.

4. Start the development server:
   ```
   npm run dev
   ```

5. Open your browser and go to:
   ```
   http://localhost:3000
   ```

You should see the website live. Any changes you save to the code will instantly update in the browser.

To **stop** the server, press `Ctrl + C` in the terminal.

---

## Project Structure

```
khadyakranti/
├── app/
│   ├── page.tsx          → Landing page (Home)
│   ├── products/page.tsx → Products page
│   └── about/page.tsx    → Our Story page
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx    → Top navigation bar
│   │   └── Footer.tsx    → Footer
│   └── home/
│       ├── Hero.tsx              → Big hero banner section
│       ├── ProblemSection.tsx    → "Sound familiar?" section
│       ├── PromiseSection.tsx    → Brand promise section
│       ├── HowItWorks.tsx        → 3-step how-it-works section
│       ├── AudienceSection.tsx   → "For every Indian" section
│       ├── IngredientsMarquee.tsx → Scrolling spice names strip
│       └── ProductsTeaser.tsx    → Products preview grid
├── public/
│   └── images/           → All product photos go here
└── app/globals.css       → Colors, fonts, animations
```

---

## How to Edit Text

All website text is written directly in the `.tsx` files. Open the relevant file in any code editor (VS Code, Sublime Text, etc.) and change the text between quotes or JSX tags.

**Examples:**

- To change the hero headline → edit `components/home/Hero.tsx`, look for `"Real Flavours."` and `"Real Ingredients."`
- To change product descriptions → edit `app/products/page.tsx`, look for the `allProducts` array
- To change the About page → edit `app/about/page.tsx`

---

## How to Add/Change Images

**Product images** live in `public/images/`. They are named:
- `chicken-rassa.jpeg`
- `chicken-sukka.jpeg`
- `mutton-rassa-1.jpeg`
- `mutton-rassa-2.jpeg`
- `mutton-sukka-1.jpeg`
- `mutton-sukka-2.jpeg`

To replace one, simply copy your new image into `public/images/` with the **same filename**. The website will automatically use the new image.

To add a **new product image**, copy the image to `public/images/` and reference it in `app/products/page.tsx` like `/images/your-image-name.jpeg`.

---

## How to Add Your Logo

1. Save your logo file as either `logo.svg` (preferred) or `logo.png`
2. Copy it to `public/images/logo.svg` (or `logo.png`)
3. Open `components/layout/Navbar.tsx`
4. Replace the text-based logo with an `<Image>` tag:
   ```tsx
   import Image from 'next/image'
   // Replace the <span>Khadyakranti</span> with:
   <Image src="/images/logo.svg" alt="Khadyakranti" width={160} height={40} />
   ```

---

## How to Change Colors

Open `app/globals.css`. The colors are defined at the top under `@theme`:

```css
--color-turmeric: #D4780A;    /* Main orange-gold accent */
--color-forest: #1B4332;      /* Deep green */
--color-spice: #8B1A1A;       /* Dark red */
--color-ivory: #FDF5E6;       /* Warm cream background */
```

Change the hex color codes to update the entire website's color scheme.

---

## Generating AI Images for the Landing Page

The landing page has placeholder slots for AI-generated spice/lifestyle imagery. To generate them:

1. Sign up free at [https://replicate.com](https://replicate.com)
2. Go to your account settings and copy your API token
3. Open `.env.local` in the project folder and replace `your_token_here` with your token:
   ```
   REPLICATE_API_TOKEN=r8_xxxxxxxxxxxxxxx
   ```
4. Run the generation script (one time only):
   ```
   node scripts/generate-images.mjs
   ```
5. Images will be saved to `public/images/generated/`

---

## Building for Production

When you're ready to deploy, run:
```
npm run build
```

This creates an optimized version of the website. If you see any errors, they'll be shown in the terminal with the file name and line number.

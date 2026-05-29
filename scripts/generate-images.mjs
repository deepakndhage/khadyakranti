/**
 * Khadyakranti — AI Image Generation
 * Uses Google Nano Banana (gemini-2.5-flash-image) to generate landing page visuals.
 *
 * Setup:
 *   1. Add your key to .env.local:  GEMINI_API_KEY=your_key_here
 *   2. Run:  node scripts/generate-images.mjs
 *
 * Images are saved to public/images/generated/
 */

import { GoogleGenAI } from '@google/genai'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

// Load .env.local
const __dirname = path.dirname(fileURLToPath(import.meta.url))
const envPath = path.join(__dirname, '..', '.env.local')
if (fs.existsSync(envPath)) {
  for (const line of fs.readFileSync(envPath, 'utf-8').split('\n')) {
    const [key, ...rest] = line.split('=')
    if (key && rest.length && !key.startsWith('#')) {
      process.env[key.trim()] = rest.join('=').trim().replace(/^["']|["']$/g, '')
    }
  }
}

if (!process.env.GEMINI_API_KEY || process.env.GEMINI_API_KEY === 'your_key_here') {
  console.error('\n❌  GEMINI_API_KEY not set.')
  console.error('   Open .env.local and replace  your_key_here  with your key.')
  console.error('   Get a free key at: https://aistudio.google.com/apikey\n')
  process.exit(1)
}

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY })
const outDir = path.join(__dirname, '..', 'public', 'images', 'generated')
fs.mkdirSync(outDir, { recursive: true })

// Images to generate — filename → prompt
const images = [
  {
    filename: 'hero-spices.jpg',
    prompt:
      'Overhead flat-lay photograph of whole Indian spices elegantly arranged on a dark aged wooden surface: a large copper handi pot at centre, surrounded by scattered coriander seeds, cumin seeds, dried whole red Kashmiri chillies, star anise, fenugreek seeds, cardamom pods, cinnamon sticks, cloves, a stone mortar with turmeric-yellow paste. A few sprigs of fresh green coriander as garnish. Jute mat visible at the edge. Dramatic moody side-lighting from the left, deep warm amber tones, cinematic rustic Indian food photography, ultra-detailed texture, 4K quality. No meat, no people.',
  },
  {
    filename: 'promise-spices.jpg',
    prompt:
      'Close-up macro photograph of whole Indian spices on a rough dark stone grinding slab: a stone mortar holds freshly ground deep-red and turmeric-yellow spice paste. Surrounding the mortar: whole coriander seeds, cumin, star anise, dried red chillies, fenugreek seeds, black peppercorns, cinnamon bark. A small copper bowl of golden turmeric powder sits to one side. Dramatic warm side-lighting, deep moody shadows, rich earthy tones, rustic Indian kitchen aesthetic, ultra-detailed macro photography. No meat, no people.',
  },
  {
    filename: 'howitworks-bg.jpg',
    prompt:
      'Atmospheric overhead photograph of a rustic Indian kitchen scene on a dark weathered wooden surface: a copper handi pot with faint steam rising, a small sealed masala packet beside it, a copper ladle, whole spices scattered — star anise, dried chillies, cumin, coriander seeds — and a stone mortar nearby. Warm amber candlelight from the side, deep shadows, moody cinematic food photography style. No meat, no people, dark and dramatic.',
  },
  {
    filename: 'audience-woman.jpg',
    prompt:
      'Warm intimate photograph of a rustic Indian kitchen scene at dusk: a polished copper handi on a dark wooden surface, whole spices scattered around it — coriander seeds, dried red chillies, cardamom pods — and fresh green coriander sprigs as garnish. A jute mat under the vessel. Soft warm amber lamp light from the side, steam haze in the air, deep shadows, cinematic moody food photography. No people, no meat.',
  },
  {
    filename: 'audience-student.jpg',
    prompt:
      'Moody photograph of a small stone countertop: a medium copper bowl holds a rich dark spice paste, surrounded by whole Indian spices — cumin, coriander seeds, dried red chillies, star anise — and a sprig of fresh coriander. A neatly sealed packet of Indian masala powder sits beside it. Warm side-light, deep shadows on a dark stone or wooden surface, rustic artisan aesthetic, cinematic food photography. No people, no meat.',
  },
  {
    filename: 'audience-bachelor.jpg',
    prompt:
      'Minimal dramatic food photography: a single black cast iron pan on a dark aged wooden surface, a small mound of deep-red ground masala inside it, surrounded by whole spices — star anise, dried red chillies, coriander seeds, fenugreek seeds — and a sprig of fresh green coriander. Moody directional side-lighting, deep dark shadows, clean and bold composition, rustic artisan food photography. No people, no meat.',
  },
  {
    filename: 'about-mortar.jpg',
    prompt:
      'Close-up photograph of a heavy ancient stone mortar and pestle on a rough dark stone surface. Inside the mortar: freshly ground spice paste with deep red, turmeric yellow, and earthy brown tones. Surrounding it: whole cumin, coriander seeds, dried red chillies, star anise, cardamom pods, black peppercorns, cinnamon bark. A small copper spoon rests against the mortar. Natural dramatic side-light, sharp textural shadows, ultra-detailed, richly textured, traditional Indian kitchen aesthetic, cinematic macro photography. No people, no meat.',
  },
]

const sleep = (ms) => new Promise((r) => setTimeout(r, ms))

async function generate(item, attempt = 1) {
  const outPath = path.join(outDir, item.filename)
  if (fs.existsSync(outPath)) {
    console.log(`  ✓ Already exists — skipping: ${item.filename}`)
    return true
  }

  process.stdout.write(`  ⏳ Generating ${item.filename}${attempt > 1 ? ` (attempt ${attempt})` : ''} ...`)

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: item.prompt,
      config: {
        responseModalities: ['IMAGE'],
      },
    })

    let saved = false
    for (const part of response.candidates?.[0]?.content?.parts ?? []) {
      if (part.inlineData?.data) {
        const buf = Buffer.from(part.inlineData.data, 'base64')
        fs.writeFileSync(outPath, buf)
        process.stdout.write(` saved (${Math.round(buf.length / 1024)}KB)\n`)
        saved = true
        break
      }
    }

    if (!saved) {
      console.log(` ⚠  No image in response — skipping.`)
      return false
    }
    return true
  } catch (err) {
    // Parse retry delay from error if available
    let retryMs = 15000
    try {
      const errObj = JSON.parse(err.message)
      const retryInfo = errObj?.error?.details?.find(d => d['@type']?.includes('RetryInfo'))
      if (retryInfo?.retryDelay) {
        retryMs = (parseInt(retryInfo.retryDelay) + 5) * 1000
      }
      // Billing not enabled
      if (errObj?.error?.code === 429 && errObj?.error?.message?.includes('limit: 0')) {
        console.log(`\n\n  ❌  Billing required for gemini-2.5-flash-image (Nano Banana).`)
        console.log(`      Cost is tiny — about $0.04 per image (~₹3.50).`)
        console.log(`      Enable billing at: https://aistudio.google.com → Settings → Pay-as-you-go`)
        console.log(`      Then re-run this script.\n`)
        process.exit(1)
      }
    } catch (_) {}

    if (attempt < 3) {
      process.stdout.write(` rate limited — waiting ${Math.round(retryMs/1000)}s ...\n`)
      await sleep(retryMs)
      return generate(item, attempt + 1)
    }
    console.log(` ✗  failed after 3 attempts.`)
    return false
  }
}

console.log('\n🌿  Khadyakranti — Nano Banana Image Generation')
console.log(`    Model : gemini-2.5-flash-image`)
console.log(`    Output: public/images/generated/\n`)

let ok = 0
for (let i = 0; i < images.length; i++) {
  if (await generate(images[i])) ok++
  // Pause between requests to respect rate limits
  if (i < images.length - 1) await sleep(3000)
}

console.log(`\n✅  Done — ${ok}/${images.length} images ready.`)
if (ok < images.length) {
  console.log('    Re-run the script to retry any that failed.')
}
console.log('\n    Refresh your browser to see them on the site.\n')

import { GoogleGenAI } from '@google/genai'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

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

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY })

const prompt = `A perfectly square icon for a browser favicon. A single white chef's hat (tall, fluffy, classic toque) centred on a rich warm orange circle background (colour #D4780A). The hat is pure white with a clean simple outline. Flat graphic design style, bold and minimal, no text, no other elements. The orange circle fills the entire square canvas. High contrast, very clean and legible at small sizes.`

const outPath = path.join(__dirname, '..', 'app', 'icon.png')

console.log('⏳ Generating favicon via nano banana...')

const response = await ai.models.generateContent({
  model: 'gemini-2.5-flash-image',
  contents: prompt,
  config: { responseModalities: ['IMAGE'] },
})

let saved = false
for (const part of response.candidates?.[0]?.content?.parts ?? []) {
  if (part.inlineData?.data) {
    const buf = Buffer.from(part.inlineData.data, 'base64')
    fs.writeFileSync(outPath, buf)
    console.log(`✅  Saved to app/icon.png (${Math.round(buf.length / 1024)}KB)`)
    saved = true
    break
  }
}

if (!saved) console.log('⚠  No image returned.')

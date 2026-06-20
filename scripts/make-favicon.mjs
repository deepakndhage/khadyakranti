import sharp from 'sharp'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const logoPath = path.join(__dirname, '..', 'public', 'images', 'logo.png')
const outIco   = path.join(__dirname, '..', 'app', 'favicon.ico')
const outPng   = path.join(__dirname, '..', 'public', 'images', 'favicon-512.png')

async function run() {
  // Crop just the chef's hat (excludes ladle/hand below).
  // In the 690×684 logo: hat spans approx x=185–505, y=22–230
  const CROP = { left: 185, top: 22, width: 320, height: 210 }

  // Circle centre relative to this crop: (345-185, 342-22) = (160, 320), r=313
  const hatCrop = await sharp(logoPath)
    .extract(CROP)
    .png()
    .toBuffer()

  // Circular clip mask — removes orange corner spillover
  const clipMask = Buffer.from(
    `<svg width="${CROP.width}" height="${CROP.height}" xmlns="http://www.w3.org/2000/svg">
       <circle cx="160" cy="320" r="313" fill="white"/>
     </svg>`
  )
  const clippedHat = await sharp(hatCrop)
    .composite([{ input: clipMask, blend: 'dest-in' }])
    .png()
    .toBuffer()

  // Scale to 420×276 — fits nicely in upper portion of a 512×512 circle
  const scaledHat = await sharp(clippedHat)
    .resize(420, 276, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toBuffer()

  // Orange circle background
  const bg = Buffer.from(
    `<svg width="512" height="512" xmlns="http://www.w3.org/2000/svg">
       <circle cx="256" cy="256" r="256" fill="#D4780A"/>
     </svg>`
  )

  // Composite hat centred vertically with slight upward offset
  const favicon = await sharp(bg)
    .composite([{ input: scaledHat, top: 118, left: 46 }])
    .png()
    .toBuffer()

  await sharp(favicon).toFile(outPng)
  console.log('✓ favicon-512.png')
  await sharp(favicon).resize(32, 32).toFile(outIco)
  console.log('✓ favicon.ico')
}

run().catch(console.error)

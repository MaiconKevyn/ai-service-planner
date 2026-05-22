import { chromium } from 'playwright'

const url = process.env.UI_URL ?? 'http://127.0.0.1:5173/'

const browser = await chromium.launch({ channel: 'chrome', headless: true })
const page = await browser.newPage({ viewport: { width: 1280, height: 900 } })
const consoleErrors = []

page.on('console', (message) => {
  if (message.type() === 'error') {
    consoleErrors.push(message.text())
  }
})

await page.goto(url, { waitUntil: 'networkidle' })

const bodyText = await page.locator('body').innerText()
const hasOverlay = await page.locator('.vite-error-overlay').count()
const cards = await page.locator('.opportunity-card').count()
const titles = []
const scores = []

for (let index = 0; index < cards; index += 1) {
  await page.locator('.opportunity-card').nth(index).click()
  titles.push(await page.locator('.detail-hero h2').innerText())
  scores.push(await page.locator('.score-gauge span').innerText())
}

await browser.close()

const failures = []

if (hasOverlay > 0) failures.push('Vite error overlay detected.')
if (cards !== 3) failures.push(`Expected 3 opportunity cards, found ${cards}.`)
if (!bodyText.includes('Glossário de marketing para devs')) failures.push('Glossary section missing.')
if (!bodyText.includes('Custo estimado do bolso')) failures.push('Cost section missing.')
if (!bodyText.includes('Plano de desenvolvimento')) failures.push('Development plan missing.')
if (!bodyText.includes('Leads e clientes ideais')) failures.push('Lead section missing.')
if (!bodyText.includes('Caminho mais fácil para implementar com WhatsApp Cloud API')) {
  failures.push('WhatsApp implementation guide missing.')
}
if (!bodyText.includes('Temporary access token')) failures.push('Temporary token guidance missing.')
if (!bodyText.includes('Phone Number ID')) failures.push('Phone Number ID guidance missing.')
if (!bodyText.includes('System User access token')) failures.push('System User token guidance missing.')
if (!bodyText.includes('Cloud API Webhooks')) failures.push('Webhook documentation link missing.')
if (!bodyText.includes('Message Templates')) failures.push('Message templates link missing.')
if (consoleErrors.length > 0) failures.push(`Console errors: ${consoleErrors.join(' | ')}`)

if (failures.length > 0) {
  console.error(failures.join('\n'))
  process.exit(1)
}

console.log(
  JSON.stringify(
    {
      url,
      hasContent: bodyText.length > 1000,
      cards,
      titles,
      scores,
      consoleErrors: consoleErrors.length,
    },
    null,
    2,
  ),
)

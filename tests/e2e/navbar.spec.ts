import { expect, test } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.goto('localhost:5173')
})

test.describe('Nav Bar', () => {
  test('logo', async ({ page }) => {
    const logo = page.getByAltText('BH Dev')

    await expect(logo).toBeInViewport()
  })

  test('nav links', async ({ page }) => {
    await page.setViewportSize({ width: 816, height: 1080 })
    const paragraphs = await page.$$('[data-testid="nav-links"] p')
    const texts = await Promise.all(paragraphs.map(p => p.textContent()))

    expect(texts).toEqual(['Contact', 'Testimonials', 'Socials'])
  })

  test('nav-links div is top right with correct padding', async ({ page }) => {
    await page.setViewportSize({ width: 816, height: 1080 })
    const navLinksDiv = await page.$('[data-testid="nav-links"]')

    if (!navLinksDiv) {
      throw new Error('nav-links div not found')
    }

    const navLinksBox = await navLinksDiv.boundingBox()

    expect(navLinksBox).not.toBeNull()
    if (navLinksBox) {
      const viewportSize = page.viewportSize()
      if (viewportSize) {
        expect(navLinksBox.x + navLinksBox.width).toBeCloseTo(viewportSize.width - 16, 1) // 1 pixel tolerance
        expect(navLinksBox.y).toBeCloseTo(0, 1) // 1 pixel tolerance
      }
    }
  })

  test('nav-links does not exist', async ({ page }) => {
    await page.setViewportSize({ width: 814, height: 1080 })
    const displayValue = await page.$eval(
      'div[data-testid="nav-links"]',
      el => getComputedStyle(el).display
    )
    expect(displayValue).toBe('none')
  })

  test('menu icon exists', async ({ page }) => {
    await page.setViewportSize({ width: 814, height: 1080 })
    const iconButton = await page.$('.icon')
    expect(iconButton).not.toBeNull()
  })

  test('menu icon does not exists', async ({ page }) => {
    await page.setViewportSize({ width: 816, height: 1080 })
    const displayValue = await page.$eval('.icon', el => getComputedStyle(el).display)
    expect(displayValue).toBe('none')
  })

  test('drawer not open', async ({ page }) => {
    await page.setViewportSize({ width: 814, height: 1080 })
    const drawer = await page.$('.drawer-true')
    expect(drawer).toBeNull()
  })

  test('drawer open', async ({ page }) => {
    await page.setViewportSize({ width: 814, height: 1080 })
    const iconButton = await page.$('.icon')
    await iconButton?.click()
    const drawer = await page.$('.drawer-true')
    expect(drawer).not.toBeNull()
  })

  test('drawer links', async ({ page }) => {
    await page.setViewportSize({ width: 816, height: 1080 })
    const paragraphs = await page.$$('[data-testid="drawer-links"] p')
    const texts = await Promise.all(paragraphs.map(p => p.textContent()))

    expect(texts).toEqual(['Contact', 'Testimonials', 'Socials'])
  })

  test('drawer closes', async ({ page }) => {
    await page.setViewportSize({ width: 814, height: 1080 })
    const iconButton = await page.$('.icon')
    await iconButton?.click()
    await iconButton?.click()
    const drawer = await page.$('.drawer-false')
    expect(drawer).not.toBeNull()
  })

  test('drawer closes from anywhere click', async ({ page }) => {
    await page.setViewportSize({ width: 814, height: 1080 })
    const iconButton = await page.$('.icon')
    await iconButton?.click()
    const drawer = await page.$('.drawer')
    await drawer?.click()
    const falseDrawer = await page.$('.drawer-false')
    expect(falseDrawer).not.toBeNull()
  })
})

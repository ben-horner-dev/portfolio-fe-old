import { expect, test } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.goto('localhost:5173')
})

test.describe('Footer', () => {
  test('Footer', async ({ page }) => {
    await page.setViewportSize({ width: 816, height: 1080 })
    await page.evaluate(() => {
      window.scrollBy(0, window.innerHeight)
    })
    const icons = await page.$$('.sm-icon')
    expect(icons).toHaveLength(2)
    const githubIcon = icons[0]
    const linkedInIcon = icons[1]
    const githubIconIsVisible = await githubIcon.isVisible()
    const linkedInIconIsVisible = await linkedInIcon.isVisible()
    expect(githubIconIsVisible).toBe(true)
    expect(linkedInIconIsVisible).toBe(true)
  })
  test('Links to work', async ({ page }) => {
    await page.setViewportSize({ width: 816, height: 1080 })
    await page.evaluate(() => {
      window.scrollBy(0, window.innerHeight)
    })
    const icons = await page.$$('.sm-icon')
    for (const icon of icons) {
      await icon.click()
      const url = page.url()
      const urls = [
        'https://github.com/ben-horner-dev/portfolio',
        'https://www.linkedin.com/in/ben-horner-dev/'
      ]
      const href = await icon.$('xpath=..').then(el => el?.getAttribute('href'))
      expect(urls).toContain(href)
      expect(url).toBe('http://localhost:5173/')
    }
  })
})

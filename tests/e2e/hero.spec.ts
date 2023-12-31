import { expect, test } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.goto('localhost:5173')
})

test.describe('h1 text', () => {
  test('text should appear', async ({ page }) => {
    const text = await page.innerText('h1')
    expect(text).toBe("Hello, I'm Ben:")
  })
  test('Hero btn', async ({ page }) => {
    // Go to the page where the Hero component is rendered

    // Get the button element
    const button = await page.$('.contact-btn')
    if (button) {
      // Check initial class of the button
      expect(await button.getAttribute('class')).toContain('contact-btn')

      // Trigger mouseover event
      await button.hover()

      // Check class of the button after mouseover
      expect(await button.getAttribute('class')).toContain(
        'animate__animated contact-btn animate__headShake'
      )

      // Trigger animationend event
      await page.evaluate(
        button => button.dispatchEvent(new Event('animationend')),
        button
      )

      // Check class of the button after animationend
      expect(await button.getAttribute('class')).toContain('contact-btn')
    } else {
      throw new Error('Button not found')
    }
  })
})

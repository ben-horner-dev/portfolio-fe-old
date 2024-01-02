import { expect, test } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.goto('localhost:5173')
})

test.describe('Hero Page', () => {
  test('h1 text should appear', async ({ page }) => {
    const text = await page.innerText('h1')
    expect(text).toBe("Hello, I'm Ben...")
  })

  test('long form div text should appear', async ({ page }) => {
    await page.setViewportSize({ width: 816, height: 1080 })
    const text = await page.innerText('.full-screen-text')

    expect(text).toBe(
      `I am a full stack developer with a mission to create elegant apps that are reliable, maintainable and scalable. My stack of choice is Flask, FastApi or Django for the backend, React or Svelte plus Typescript for the frontend with MySql, Postgres or MongoDB for the database but I am always learning new technologies. Please feel free to explore my previous work and contact me if you have any questions:`
    )
  })

  test('Short form div text should appear', async ({ page }) => {
    await page.setViewportSize({ width: 814, height: 1080 })
    const text = await page.innerText('.mobile-screen-text')

    expect(text).toBe(
      `I am a full stack developer with a mission to create elegant apps that are reliable, maintainable and scalable.`
    )
  })

  test('text should appear', async ({ page }) => {
    const text = await page.innerText('h1')
    expect(text).toBe("Hello, I'm Ben...")
  })

  test('Contact btn', async ({ page }) => {
    const button = await page.$('.contact-btn')
    if (button) {
      expect(await button.getAttribute('class')).toContain('contact-btn')

      await button.hover()

      expect(await button.getAttribute('class')).toContain(
        'animate__animated contact-btn animate__headShake'
      )

      await page.evaluate(
        button => button.dispatchEvent(new Event('animationend')),
        button
      )

      expect(await button.getAttribute('class')).toContain('contact-btn')
    } else {
      throw new Error('Button not found')
    }
  })
})

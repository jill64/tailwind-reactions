import { expect, test } from '@playwright/test'

test('smoke', async ({ page }) => {
  await page.goto('/tailwind-reactions')
  await expect(page.getByRole('heading', { name: 'reactions' })).toBeVisible()
})

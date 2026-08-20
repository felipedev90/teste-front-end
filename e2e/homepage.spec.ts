import { test, expect } from '@playwright/test'

test.describe('Homepage', () => {
  test('deve carregar produtos e exibir a vitrine', async ({ page }) => {
    await page.goto('/')

    await expect(
      page.getByRole('heading', { name: /venha conhecer nossas promoções/i }),
    ).toBeVisible()
    await expect(
      page.getByRole('heading', { name: /produtos relacionados/i }).first(),
    ).toBeVisible()

    const products = page.getByRole('button', { name: /comprar/i })
    await expect(products.first()).toBeVisible()
  })

  test('deve abrir e fechar o modal de produto', async ({ page }) => {
    await page.goto('/')

    const firstProduct = page.getByRole('button', { name: /comprar/i }).first()
    await firstProduct.waitFor()
    await firstProduct.click()

    const modal = page.getByRole('dialog')
    await expect(modal).toBeVisible()

    await page.getByRole('button', { name: /fechar/i }).click()
    await expect(modal).not.toBeVisible()
  })
})

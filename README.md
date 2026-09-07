# ShopGuard — E-Commerce Playwright Automation

A production-style starter automation framework using **TypeScript + Playwright** against the free SauceDemo application.

## What it demonstrates

- Page Object Model
- UI smoke + regression tests
- Stable locators and assertions
- Chromium + Firefox projects
- Screenshots, video and trace on failures
- TypeScript type-checking
- GitHub Actions CI
- HTML report

## Free app

https://www.saucedemo.com/

Demo credentials:
- `standard_user` / `secret_sauce`
- `locked_out_user` / `secret_sauce`

## Run

```bash
npm install
npx playwright install
npm run typecheck
npm test
npm run test:headed
npm run report
```

## Portfolio talking point

> Built a maintainable Playwright/TypeScript E2E framework with POM, cross-browser execution, failure artifacts and CI quality checks.

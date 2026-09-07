# SauceDemo E2E Test Automation Framework

An end-to-end test automation framework built with **Playwright, TypeScript, and GitHub Actions** for testing the SauceDemo e-commerce application.

The project demonstrates practical **Software Quality Assurance (SQA)** practices including Page Object Model (POM), reusable test components, functional testing, assertions, test tagging, failure screenshots, and CI automation.

---

## 🎯 Project Objective

The objective of this project is to demonstrate how a maintainable and scalable UI test automation framework can be designed for an e-commerce application.

The framework covers critical user journeys such as:

* User authentication
* Product sorting
* Product selection
* Adding products to cart
* Cart validation
* Checkout
* Order completion
* Negative authentication scenarios

---

## 🛠️ Tech Stack

| Technology                 | Purpose                              |
| -------------------------- | ------------------------------------ |
| **Playwright**             | End-to-end browser automation        |
| **TypeScript**             | Test development                     |
| **Node.js**                | Runtime environment                  |
| **Page Object Model**      | Test maintainability and reusability |
| **Git & GitHub**           | Version control                      |
| **GitHub Actions**         | CI automation                        |
| **Playwright HTML Report** | Test execution reporting             |

---

## 🧪 Test Coverage

### Authentication

* Verify valid user can log in
* Verify locked-out user cannot log in
* Validate successful navigation to Products page
* Validate login error messages

### Product

* Verify Products page loads correctly
* Sort products from low to high
* Validate lowest product price
* Open a specific product

### Shopping Cart

* Add product to cart
* Verify product is added successfully
* Verify shopping cart badge
* Verify selected product appears in cart

### Checkout

* Navigate from cart to checkout
* Submit customer information
* Validate checkout overview
* Validate product name and price
* Complete the order
* Verify successful order confirmation

---

## 🏗️ Framework Architecture

The project follows the **Page Object Model (POM)** design pattern.

```text
saucedemo-e2e-test-automation/
│
├── .github/
│   └── workflows/
│       └── playwright.yml
│
├── pages/
│   ├── LoginPage.ts
│   ├── ProductsPage.ts
│   └── CartPage.ts
│
├── tests/
│   ├── auth.spec.ts
│   ├── shopping.spec.ts
│   └── checkout.spec.ts
│
├── .gitignore
├── package.json
├── package-lock.json
├── playwright.config.ts
└── README.md
```

### Page Objects

**LoginPage**

Responsible for:

* Navigating to the application
* Entering username and password
* Performing login
* Validating successful authentication
* Validating authentication errors

**ProductsPage**

Responsible for:

* Validating Products page
* Sorting products
* Opening products
* Product-related actions

**CartPage**

Responsible for:

* Opening the shopping cart
* Navigating to checkout
* Entering checkout information
* Validating checkout details
* Completing the order

---

## 🔄 Test Execution Flow

The main purchase flow follows:

```text
Login
  ↓
Products
  ↓
Select Product
  ↓
Add to Cart
  ↓
Open Cart
  ↓
Checkout
  ↓
Enter Customer Information
  ↓
Checkout Overview
  ↓
Finish Order
  ↓
Order Confirmation
```

Each test is designed to run independently to avoid unnecessary test-to-test dependencies.

---

## 🧩 Reusable Test Components

Common workflows are extracted into reusable functions and Page Object methods.

For example:

```typescript
await addProductToCart(page);
```

This avoids duplicating the same product-selection and cart logic across multiple test cases.

Playwright's `test.step()` is also used to group important business actions and improve test-report readability.

---

## 🏷️ Test Tags

Tests are organized using Playwright tags.

Examples:

```text
@smoke
@regression
@checkout
```

This allows selective execution of test suites.

### Run smoke tests

```bash
npm run test:smoke
```

### Run checkout tests

```bash
npm run test:checkout
```

### Run regression tests

```bash
npm run test:regression
```

---

## 📸 Failure Evidence

When a test fails, the framework automatically captures a full-page screenshot.

Screenshots are generated with:

```text
Test Name + Timestamp
```

This provides visual evidence for debugging failed test cases.

---

## ⚙️ Installation

Clone the repository:

```bash
git clone https://github.com/YOUR_USERNAME/saucedemo-e2e-test-automation.git
```

Navigate to the project:

```bash
cd saucedemo-e2e-test-automation
```

Install dependencies:

```bash
npm ci
```

Install Playwright browsers:

```bash
npx playwright install
```

---

## ▶️ Running Tests

Run all tests:

```bash
npm test
```

Run tests in headed mode:

```bash
npm run test:headed
```

Run tests with Playwright UI mode:

```bash
npm run test:ui
```

Run tests in debug mode:

```bash
npm run test:debug
```

---

## 📊 Test Report

After test execution, generate/view the Playwright HTML report:

```bash
npm run report
```

The report provides:

* Test status
* Execution duration
* Test steps
* Error details
* Screenshots
* Trace information when configured

---

## 🚀 Continuous Integration

The project uses **GitHub Actions** to automatically execute the Playwright test suite.

CI pipeline:

```text
Git Push / Pull Request
        ↓
GitHub Actions
        ↓
Install Node.js
        ↓
Install Dependencies
        ↓
Install Playwright Browsers
        ↓
Execute Test Suite
        ↓
Generate Test Report
        ↓
Upload Report Artifact
```

This ensures that automated tests can be executed consistently whenever changes are pushed to the repository.

---

## 🔍 SQA Practices Demonstrated

This project focuses on practical QA automation principles rather than simply automating browser clicks.

### Test Independence

Tests are designed to execute independently and do not rely on another test's execution result.

### Page Object Model

UI locators and page-specific actions are encapsulated inside Page Object classes.

### Reusability

Common workflows are extracted into reusable methods and functions.

### Assertions

Assertions are used to validate expected application behavior instead of only performing UI actions.

### Positive & Negative Testing

The framework includes both successful and unsuccessful authentication scenarios.

### Test Categorization

Smoke, regression, and feature-specific tests can be executed selectively using tags.

### Failure Diagnostics

Failed tests automatically produce screenshots for debugging.

### Continuous Integration

GitHub Actions executes the automated test suite automatically.

---

## 📈 Future Improvements

Potential improvements for further framework development:

* Add cross-browser testing for Chromium, Firefox, and WebKit
* Add API testing
* Introduce fixtures for reusable test setup
* Add test data management
* Add environment-based configuration
* Add retry and trace configuration
* Add parallel execution
* Integrate Allure reporting
* Add API/UI hybrid test scenarios
* Add Docker-based test execution
* Integrate the framework with a larger CI/CD pipeline

---

## 👨‍💻 Author

**Mohiuddin Mahady**

Computer Science & Engineering Student
Interested in **SQA, Test Automation, Software Engineering, AI & Machine Learning**

---

## 📌 Disclaimer

This project is created for educational and portfolio purposes using the SauceDemo practice application.

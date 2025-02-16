📑 Agenda for Day 08: Dig Deeper into Playwright  

🎯 [ Focus: Mastering advanced concepts in Playwright for effective automation testing ]  

🕝 Session Highlights  

1️⃣ Recap  
* Quick review of key learnings from Day 07.  

2️⃣ Playwright Configuration File Walkthrough  
* Understanding the file structure.  
* Key properties: Test directory, retries, timeout, projects, and reporters.  
* Environment-specific configurations: Defining base URL, browser options, and test setup.  

3️⃣ Assertions Using the 'expect' Library  
* Commonly used assertions and their applications.   

4️⃣ Handling Dropdowns  
* Understanding dropdown types: 'select' tags and custom dropdowns.  
* Selecting options by value, label, or index.   

🕡 Wrap Up / Q&A

  - [Select Dropdown](#select-dropdown)
  - [Assertions](#assertions)
    - [Auto-Retrying Assertions](#auto-retrying-assertions)
    - [Non-Retrying Assertions](#non-retrying-assertions)
    - [Negating Matches](#negating-matches)
    - [Soft Assertions](#soft-assertions)
    - [Hard Assertions](#hard-assertions)
  - [Playwright Configuration](#playwright-configuration)
    - [File Structure](#file-structure)
    - [Key Configuration Options](#key-configuration-options)
  

## Select Dropdown

Playwright provides methods to interact with `<select>` dropdowns by value, label, or index:

```javascript
// Select by value
await page.selectOption('select#yourSelectId', { value: 'optionValue' });

// Select by label
await page.selectOption('select#yourSelectId', { label: 'Option Label' });

// Select by index
await page.selectOption('select#yourSelectId', { index: 0 });
```

## Assertions

Playwright's assertion library is designed to work seamlessly with its locators, supporting both auto-retrying and non-retrying assertions.

### Auto-Retrying Assertions

These assertions automatically retry until a certain condition is met or a timeout is reached. Ideal for dynamic content or elements that may take time to appear:

- `expect(locator).toHaveText('text', { timeout: 3000 })`
- `expect(locator).toBeVisible()`
- `expect(locator).toHaveCount(3)`

### Non-Retrying Assertions

Non-retrying assertions are those that execute and evaluate conditions at a point in time without any retries:

- `expect(await locator.textContent()).toBe('static text')`

### Negating Matches

To negate any matcher, prepend `not` before the assertion:

- `expect(locator).not.toHaveText('forbidden text')`
- `expect(locator).not.toBeVisible()`

### Soft Assertions

Soft assertions allow tests to continue after a failed assertion, collecting and reporting all failures at the end of the test.

### Hard Assertions

Hard assertions are the default behavior in Playwright, where a failed assertion immediately stops the test execution.

## Playwright Configuration

This `playwright.config.ts` file is the central configuration file for Playwright test automation. It defines global settings, such as test timeouts, browser configurations, base URLs, and reporting options, ensuring consistent behavior across all tests in your project.

## File Structure

The `playwright.config.ts` file typically includes:

1. **Imports**: Required Playwright modules.
2. **Configuration Object**: Defines global settings for the Playwright test runner.
3. **Export**: The configuration object is exported for the Playwright CLI and test runner to utilize.

## Key Configuration Options

### 1. `testDir`
Specifies the directory containing test files.
```typescript
testDir: './tests',
```

### 2. `timeout`
Sets the global timeout for each test.
```typescript
timeout: 60 * 1000, // 60 seconds
```

### 3. `expect`
Provides timeout for Playwright's built-in assertion methods.
```typescript
expect: {
  timeout: 15000, // 15 seconds
},
```

### 4. `retries`
Defines how many times a failed test should be retried.
```typescript
retries: 2,
```

### 5. `use`
Specifies options applied globally to all tests, such as:
- Browser type (Chromium, Firefox, WebKit)
- Base URL
- Headless mode
- Viewport size
- Screenshot and video settings

Example:
```typescript
use: {
  browserName: 'chromium',
  baseURL: 'https://www.amazon.in',
  headless: true,
  viewport: { width: 1280, height: 720 },
  screenshot: 'on',
  video: 'retain-on-failure',
},
```

### 6. `projects`
Allows configuration for running tests in multiple browsers or environments simultaneously.
```typescript
projects: [
  {
    name: 'Desktop Chromium',
    use: { browserName: 'chromium' },
  },
  {
    name: 'Desktop Firefox',
    use: { browserName: 'firefox' },
  },
  {
    name: 'Desktop WebKit',
    use: { browserName: 'webkit' },
  },
],
```

### 7. `reporter`
Defines the format of test results output. Common options include:
- `list`
- `dot`
- `json`
- `html`
- `junit`

Example:
```typescript
reporter: [
  ['list'],
  ['html', { open: 'never' }],
],
```

### 8. `outputDir`
Specifies the directory for storing test artifacts, such as screenshots and videos.
```typescript
outputDir: 'test-results/',
```

### 9. `globalSetup` and `globalTeardown`
Defines scripts to run before or after all tests. Useful for setting up or tearing down environments.
```typescript
globalSetup: require.resolve('./global-setup'),
globalTeardown: require.resolve('./global-teardown'),
```

### 10. `webServer`
Starts a local development server before running tests.
```typescript
webServer: {
  command: 'npm run start',
  port: 3000,
  timeout: 120 * 1000, // 2 minutes
},
```

## Example Configuration

```typescript
import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 60 * 1000,
  retries: 2,
  expect: { timeout: 5000 },
  use: {
    baseURL: 'https://www.amazon.in',
    headless: true,
    viewport: { width: 1280, height: 720 },
    screenshot: 'on',
    video: 'retain-on-failure',
  },
  projects: [
    {
      name: 'Desktop Chromium',
      use: { browserName: 'chromium' },
    },
    {
      name: 'Desktop Firefox',
      use: { browserName: 'firefox' },
    },
    {
      name: 'Desktop WebKit',
      use: { browserName: 'webkit' },
    },
  ],
  reporter: [
    ['list'],
    ['html', { open: 'never' }],
  ],
  outputDir: 'test-results/',
});
```

## How to Use

1. **Run Tests**: Use the Playwright CLI to execute tests.
```bash
npx playwright test
```

2. **Specify Configuration**: Override default settings using CLI arguments.
```bash
npx playwright test --config=playwright.config.ts
```

3. **Run Specific Project**: Use the `--project` flag to run tests in a specific browser or environment.
```bash
npx playwright test --project='Desktop Chromium'
```


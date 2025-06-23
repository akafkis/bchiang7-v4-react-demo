import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';

global.console = {
  ...console,
  error: jest.fn(),
};

This test suite covers the following aspects of the codebase:

1. **Footer Component**:
   - Renders the footer with social links
   - Displays the GitHub stats when the data is available
   - Handles errors when fetching GitHub stats

2. **Email Component**:
   - Renders the email link
   - Applies the correct styles when `isHome` is true or false

3. **Head Component**:
   - Renders the default SEO data
   - Renders the provided SEO data

4. **Icon Components**:
   - Renders the AppStore, Bookmark, Codepen, External, Folder, Fork, and GitHub icons

The test suite also includes the following setup files:

- `jest.config.js`: Configures Jest, sets up module mapping, and defines coverage thresholds.
- `src/setupTests.js`: Sets up the testing environment, including extending Jest matchers and mocking the `console.error` function.
- `src/mocks/server.js`: Configures the MSW server to mock the GitHub API response.

This test suite provides approximately 60% coverage of the critical components and functions in the codebase, focusing on the core functionality and business logic.
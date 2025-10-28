# Contributing to AstroWisdom

Thank you for your interest in contributing to AstroWisdom! This document provides guidelines and setup instructions for developers.

## Table of Contents

- [Getting Started](#getting-started)
- [Development Setup](#development-setup)
- [Coding Standards](#coding-standards)
- [Git Workflow](#git-workflow)
- [Testing](#testing)
- [Submitting Changes](#submitting-changes)

---

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js**: v14 or higher
- **npm**: v6 or higher (comes with Node.js)
- **Git**: Latest version
- **Expo CLI**: `npm install -g expo-cli`
- **Code Editor**: VS Code (recommended)

### Optional

- **Expo Go App**: For testing on physical devices
  - [Android](https://play.google.com/store/apps/details?id=host.exp.exponent)
  - [iOS](https://apps.apple.com/app/expo-go/id982107779)

---

## Development Setup

### 1. Clone the Repository

```bash
git clone https://github.com/iias3official/reactnativeapp.git
cd reactnativeapp
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Environment Variables

Copy the example environment file and fill in the required values:

```bash
cp .env.example .env
```

Edit `.env` with your actual values. See [Environment Variables](#environment-variables) section for details.

### 4. Start the Development Server

```bash
npm start
```

This will start the Expo development server. You can:

- Press `a` to open on Android emulator
- Press `i` to open on iOS simulator (Mac only)
- Press `w` to open in web browser
- Scan QR code with Expo Go app on physical device

---

## Coding Standards

### Code Style

We use ESLint and Prettier to maintain consistent code style across the project.

**Formatting:**

- Use 2 spaces for indentation
- Use single quotes for strings
- Add semicolons at the end of statements
- Max line length: 100 characters
- Use trailing commas in objects and arrays

**Linting:**

```bash
# Check for linting errors
npm run lint

# Auto-fix linting errors
npm run lint:fix
```

**Formatting:**

```bash
# Check code formatting
npm run format:check

# Auto-format code
npm run format
```

### Component Guidelines

**File Naming:**

- Components: `PascalCase.js` (e.g., `Button.js`, `HomeScreen.js`)
- Utilities: `camelCase.js` (e.g., `apiHelper.js`, `formatDate.js`)
- Constants: `UPPER_SNAKE_CASE.js` or descriptive names (e.g., `colors.js`)

**Component Structure:**

```javascript
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS, SPACING } from '../theme';

const MyComponent = ({ title, onPress }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: SPACING.base,
    backgroundColor: COLORS.background,
  },
  title: {
    fontSize: 16,
    color: COLORS.textPrimary,
  },
});

export default MyComponent;
```

### Best Practices

1. **Use functional components** with hooks instead of class components
2. **Extract reusable components** to `src/components/`
3. **Use theme constants** from `src/theme/` instead of hardcoded values
4. **Keep components small** and focused on a single responsibility
5. **Use descriptive variable names** that explain their purpose
6. **Add comments** for complex logic
7. **Handle errors gracefully** with try-catch blocks
8. **Avoid inline styles** unless absolutely necessary
9. **Use PropTypes or TypeScript** for type checking (coming soon)
10. **Remove console.logs** before committing

---

## Git Workflow

### Branch Naming Convention

- `feature/feature-name` - For new features
- `bugfix/bug-description` - For bug fixes
- `hotfix/critical-fix` - For urgent production fixes
- `refactor/component-name` - For refactoring existing code
- `docs/update-readme` - For documentation updates

### Commit Message Format

Follow the conventional commits specification:

```
<type>(<scope>): <subject>

<body>

<footer>
```

**Types:**

- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, missing semicolons, etc.)
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Build process or auxiliary tool changes

**Examples:**

```bash
feat(auth): add OTP verification screen
fix(home): resolve astrologer card rendering issue
docs(readme): update installation instructions
refactor(components): extract Button component
```

### Workflow Steps

1. **Create a new branch:**

   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes** and commit regularly:

   ```bash
   git add .
   git commit -m "feat(module): add new feature"
   ```

3. **Keep your branch up to date:**

   ```bash
   git checkout main
   git pull origin main
   git checkout feature/your-feature-name
   git merge main
   ```

4. **Push your branch:**

   ```bash
   git push origin feature/your-feature-name
   ```

5. **Create a Pull Request** on GitHub

---

## Pre-commit Hooks

We use Husky to run checks before commits:

- **Lint-staged**: Runs ESLint and Prettier on staged files
- **Linting**: Checks for code quality issues
- **Formatting**: Ensures consistent code formatting

If the pre-commit hook fails, fix the issues and try committing again.

---

## Environment Variables

Create a `.env` file in the root directory with the following variables:

### Required Variables

```bash
# API Configuration
API_BASE_URL=https://api.astrowisdom.example

# Firebase Configuration (for authentication & notifications)
FIREBASE_API_KEY=your_firebase_api_key
FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
FIREBASE_PROJECT_ID=your_firebase_project_id
FIREBASE_MESSAGING_SENDER_ID=your_firebase_sender_id
FIREBASE_APP_ID=your_firebase_app_id

# Payment Gateway (Razorpay)
RZP_KEY_ID=your_razorpay_test_key_id
RZP_KEY_SECRET=your_razorpay_test_key_secret

# Video/Voice Calling (Agora)
AGORA_APP_ID=your_agora_app_id

# Error Tracking (Sentry)
SENTRY_DSN=your_sentry_dsn
```

### Getting Firebase Credentials

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project or select existing one
3. Go to Project Settings > General
4. Scroll to "Your apps" section
5. Click on "Add app" and select "Web"
6. Copy the configuration values

### Getting Razorpay Credentials

1. Go to [Razorpay Dashboard](https://dashboard.razorpay.com/)
2. Navigate to Settings > API Keys
3. Generate test API keys for development
4. Copy Key ID and Key Secret

---

## Testing

### Manual Testing

1. Test on multiple screen sizes
2. Test on both iOS and Android
3. Test with slow network conditions
4. Test edge cases (empty states, errors, etc.)

### Testing Checklist

- [ ] All screens render correctly
- [ ] Navigation works smoothly
- [ ] Forms validate input properly
- [ ] Error messages display correctly
- [ ] Loading states show appropriately
- [ ] API calls handle errors gracefully
- [ ] App works offline (where applicable)

---

## Submitting Changes

### Pull Request Checklist

Before submitting a pull request, ensure:

- [ ] Code follows the project's coding standards
- [ ] All linting checks pass (`npm run lint`)
- [ ] Code is properly formatted (`npm run format`)
- [ ] No console.logs or debugging code left
- [ ] Comments added for complex logic
- [ ] Tested on both iOS and Android (if applicable)
- [ ] Screenshots/videos added for UI changes
- [ ] Related documentation updated
- [ ] Commit messages follow convention

### Pull Request Template

```markdown
## Description

Brief description of what this PR does

## Type of Change

- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Screenshots/Videos

Add screenshots or videos for UI changes

## Testing

Describe how you tested your changes

## Checklist

- [ ] My code follows the project's style guidelines
- [ ] I have performed a self-review of my code
- [ ] I have commented my code where necessary
- [ ] My changes generate no new warnings
- [ ] I have tested on both iOS and Android
```

---

## Project Structure

```
astrowisdom/
├── src/
│   ├── components/       # Reusable UI components
│   ├── screens/          # Screen components
│   │   ├── Auth/         # Authentication screens
│   │   ├── Home/         # Home screens
│   │   └── Astrologer/   # Astrologer screens
│   ├── navigation/       # Navigation configuration
│   ├── store/           # State management (Zustand)
│   ├── services/        # API services
│   ├── theme/           # Design tokens
│   └── utils/           # Helper functions
├── assets/              # Images, fonts, etc.
├── .env.example         # Example environment variables
├── .gitignore          # Git ignore rules
└── package.json        # Dependencies
```

---

## Code Review Process

1. Create a pull request with a clear description
2. Assign at least one reviewer
3. Address all review comments
4. Wait for approval from maintainers
5. Squash and merge when approved

---

## Getting Help

If you need help or have questions:

1. Check existing documentation (README.md, QUICK_START.md)
2. Search existing GitHub issues
3. Create a new issue with detailed information
4. Reach out to the team

---

## Code of Conduct

- Be respectful and professional
- Welcome newcomers and help them learn
- Focus on constructive feedback
- Accept criticism gracefully
- Prioritize the project's best interests

---

## License

By contributing, you agree that your contributions will be licensed under the same license as the project.

---

Thank you for contributing to AstroWisdom!

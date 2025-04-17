# 🚀 Create Next Starter

A zero-config Next.js starter with pre-configured:

- Redux Toolkit + Persist
- TypeScript
- Essential UI components
- Axios API layer
- ESLint setup
- Jodit WYSIWYG editor
- Toast notifications

## Quick Start

```bash
npx reflex-next-starter my-app
cd my-app
npm run dev
```

**Note**: For optimal performance, use App Router and installing the [SCSS compiler](https://marketplace.visualstudio.com/items?itemName=ritwickdey.live-sass) in VS Code for CSS preprocessing.

## ✨ Features

### Pre-installed

- ✅ Next.js 14 (TypeScript)
- ✅ Redux Toolkit with SSR support
- ✅ Redux Persist for state hydration
- ✅ Axios with interceptors
- ✅ Jodit React WYSIWYG
- ✅ React Toastify notifications
- ✅ Zod validation

### Folder Structure

```
src/
├── app/              # Next.js 14 App Router
│   ├── (auth)/       # Route groups example
│   ├── api/          # API routes
│   └── layout.tsx    # Root layout
├── components/       # Reusable UI
├── hooks/            # Custom hooks
├── lib/
│   ├── api/          # Axios instances
│   └── redux/        # Store setup
├── styles/           # Global CSS
└── utils/            # Helpers & validators
```

## 🛠 Customization

### Override Templates

Clone the repo and modify files in `/templates` before publishing your own version.

### Available Flags

```bash
npx create-next-starter@latest my-app \
  --no-tailwind \    # Disable Tailwind
  --no-redux         # Skip Redux setup
  --turbo            # Enable Turbopack
  --pages            # Use Pages Router instead
```

## 📦 What's Installed

| Package            | Purpose          |
| ------------------ | ---------------- |
| `@reduxjs/toolkit` | State management |
| `redux-persist`    | Session storage  |
| `jodit-react`      | Rich text editor |
| `react-toastify`   | Notifications    |
| `zod`              | Form validation  |

## 🤝 Contributing

1. Fork the repository
2. Add your improvements to `/templates`
3. Submit a PR with changes

## License

MIT © Abhishek Khati

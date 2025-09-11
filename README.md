# Roundtrip Adventure 🌍

[![Deploy to Hostinger](https://github.com/your-username/roundtrip-adventure/actions/workflows/deploy.yml/badge.svg)](https://github.com/your-username/roundtrip-adventure/actions/workflows/deploy.yml)

A modern travel adventure platform built with React, TypeScript, and Tailwind CSS. Discover extraordinary destinations, cultural experiences, and thrilling expeditions around the world.

## ✨ Features

- **Modern UI/UX**: Built with React 18 and Tailwind CSS
- **Responsive Design**: Mobile-first approach with seamless desktop experience
- **Fast Performance**: Vite build system for lightning-fast development
- **SEO Optimized**: Meta tags, structured data, and semantic HTML
- **Type Safety**: Full TypeScript implementation
- **Component Library**: Shadcn/ui components for consistent design

## 🚀 Quick Start

### Development with Lovable

1. Open the project in [Lovable.dev](https://lovable.dev/projects/25135838-973b-42b7-851c-53c12db117c9)
2. Make changes in the visual editor
3. See live updates in real-time
4. Push changes to GitHub when ready

### Local Development

```bash
# Clone the repository
git clone <YOUR_GIT_URL>
cd <YOUR_PROJECT_NAME>

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:8080` to see your application.

## 🏗️ Build & Deploy

### Automated Deployment (Recommended)

This project uses GitHub Actions for automated deployment:

1. **Push to main branch** - Triggers automatic deployment
2. **Manual deployment** - Use GitHub Actions "workflow_dispatch"
3. **Backup & rollback** - Automatic backup before each deployment

### Manual Build

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

## 📋 Deployment Setup

### Required GitHub Secrets

Configure these secrets in your GitHub repository:

| Secret | Description | Example |
|--------|-------------|---------|
| `FTP_HOST` | Your hosting server | `ftp.hostinger.com` |
| `FTP_USERNAME` | FTP username | `your-username` |
| `FTP_PASSWORD` | FTP password | `your-secure-password` |

### Setup Instructions

1. Go to your GitHub repository
2. Navigate to **Settings** → **Secrets and variables** → **Actions**
3. Click **New repository secret**
4. Add each required secret with the appropriate value

For detailed setup instructions, see [DEPLOYMENT.md](./DEPLOYMENT.md).

## 🛠️ Technology Stack

- **Frontend Framework**: React 18
- **Build Tool**: Vite
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn/ui + Radix UI
- **Routing**: React Router DOM
- **Deployment**: GitHub Actions + FTP

## 📁 Project Structure

```
roundtrip-adventure/
├── .github/workflows/     # GitHub Actions CI/CD
├── public/               # Static assets
├── src/
│   ├── components/       # Reusable components
│   ├── hooks/           # Custom React hooks
│   ├── pages/           # Page components
│   ├── lib/             # Utility functions
│   └── main.tsx         # Application entry point
├── DEPLOYMENT.md        # Deployment guide
├── CONTRIBUTING.md      # Development workflow
└── README.md           # This file
```

## 🔄 Development Workflow

1. **Development**: Code in Lovable.dev or local IDE
2. **Version Control**: Changes sync automatically to GitHub
3. **CI/CD**: GitHub Actions builds and deploys on push to main
4. **Monitoring**: Check deployment status in Actions tab

For detailed workflow information, see [CONTRIBUTING.md](./CONTRIBUTING.md).

## 🧪 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

## 📊 Performance & SEO

- **Lighthouse Score**: 95+ performance
- **Core Web Vitals**: Optimized for all metrics
- **SEO**: Semantic HTML, meta tags, structured data
- **Accessibility**: WCAG 2.1 compliant
- **Mobile**: Responsive design with touch-friendly interactions

## 🐛 Troubleshooting

### Common Issues

- **Build fails**: Check TypeScript errors and dependency conflicts
- **Deployment fails**: Verify GitHub secrets and FTP credentials
- **Site not updating**: Clear browser cache and check deployment logs

For detailed troubleshooting, see [DEPLOYMENT.md#troubleshooting](./DEPLOYMENT.md#troubleshooting).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

See [CONTRIBUTING.md](./CONTRIBUTING.md) for detailed guidelines.

## 🔗 Links

- **Live Site**: [Your Production URL]
- **Development**: [Lovable.dev Project](https://lovable.dev/projects/25135838-973b-42b7-851c-53c12db117c9)
- **Repository**: [GitHub Repository URL]
- **Issues**: [GitHub Issues URL]

---

Built with ❤️ using [Lovable.dev](https://lovable.dev)

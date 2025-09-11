# Contributing to Roundtrip Adventure 🤝

Thank you for your interest in contributing to Roundtrip Adventure! This guide will help you get started with our development workflow.

## 🚀 Development Workflow

### Primary Development: Lovable.dev

**Recommended for most changes**:

1. **Open project in Lovable.dev**
2. **Make changes using visual editor**
3. **See live preview instantly**
4. **Changes auto-sync to GitHub**
5. **Automatic deployment to production**

### Local Development

**For complex features or offline work**:

```bash
# Clone repository
git clone https://github.com/your-username/roundtrip-adventure.git
cd roundtrip-adventure

# Install dependencies
npm install

# Start development server
npm run dev
```

## 🔄 Git Workflow

### Branch Strategy

- **main**: Production-ready code, auto-deploys
- **feature/**: New features (`feature/user-profiles`)
- **fix/**: Bug fixes (`fix/navigation-mobile`)
- **chore/**: Maintenance (`chore/update-deps`)

### Making Changes

1. **Create feature branch**:
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes**:
   - Follow coding standards
   - Write tests if applicable
   - Update documentation

3. **Commit with clear messages**:
   ```bash
   git add .
   git commit -m "feat: add user profile component"
   ```

4. **Push to GitHub**:
   ```bash
   git push origin feature/your-feature-name
   ```

5. **Create Pull Request**:
   - Use the PR template
   - Request review from team
   - Address feedback

### Commit Message Convention

Use conventional commits for clear history:

```
feat: add new feature
fix: resolve bug
docs: update documentation
style: formatting, missing semicolons
refactor: code restructuring
test: add missing tests
chore: update dependencies
```

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # Base UI components (shadcn)
│   └── ...             # Feature components
├── hooks/              # Custom React hooks
├── pages/              # Page components
├── lib/                # Utility functions
├── assets/             # Images, icons, fonts
└── styles/             # Global styles
```

### Component Guidelines

**Create focused, reusable components**:

```tsx
// ✅ Good: Focused component
const UserAvatar = ({ user, size = "md" }) => {
  return (
    <Avatar className={cn("avatar", size)}>
      <AvatarImage src={user.avatar} alt={user.name} />
      <AvatarFallback>{user.initials}</AvatarFallback>
    </Avatar>
  );
};

// ❌ Avoid: Large, multi-purpose components
const UserProfileWithNavigationAndSidebar = () => {
  // Too much responsibility
};
```

## 🎨 Design System Guidelines

### Use Semantic Tokens

```tsx
// ✅ Good: Use design system tokens
<Button variant="primary" size="lg">
  Book Adventure
</Button>

// ❌ Avoid: Direct Tailwind classes
<button className="bg-blue-500 text-white px-4 py-2">
  Book Adventure
</button>
```

### Component Variants

Extend shadcn components with custom variants:

```tsx
const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground",
        adventure: "bg-gradient-to-r from-orange-500 to-red-500",
        // Add custom variants
      },
    },
  }
);
```

### Color System

Use HSL colors in design tokens:

```css
:root {
  --primary: 210 100% 50%;        /* HSL format */
  --adventure: 20 90% 60%;        /* Custom colors */
}
```

## 🧪 Testing Guidelines

### Manual Testing Checklist

Before submitting PR:

- [ ] All pages load without errors
- [ ] Mobile responsiveness works
- [ ] Navigation functions correctly
- [ ] Forms validate properly
- [ ] Images load and display correctly
- [ ] No console errors or warnings

### Browser Testing

Test in:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 Code Standards

### TypeScript

- Use strict TypeScript configuration
- Define interfaces for all data structures
- Avoid `any` type usage

```tsx
// ✅ Good: Proper typing
interface Adventure {
  id: string;
  title: string;
  description: string;
  price: number;
  featured: boolean;
}

// ❌ Avoid: Any types
const adventure: any = fetchAdventure();
```

### React Best Practices

- Use functional components with hooks
- Implement proper error boundaries
- Optimize with React.memo when needed
- Use custom hooks for shared logic

```tsx
// ✅ Good: Custom hook
const useAdventures = () => {
  const [adventures, setAdventures] = useState<Adventure[]>([]);
  const [loading, setLoading] = useState(true);
  
  // Hook logic here
  
  return { adventures, loading };
};
```

### Performance

- Lazy load components and routes
- Optimize images with proper formats
- Use React.memo for expensive components
- Implement proper loading states

## 🔍 Code Review Process

### PR Requirements

- [ ] Clear description of changes
- [ ] Screenshots for UI changes
- [ ] Tests pass (if applicable)
- [ ] No console errors
- [ ] Mobile responsive
- [ ] Follows coding standards

### Review Checklist

**Functionality**:
- [ ] Feature works as described
- [ ] No breaking changes
- [ ] Edge cases handled

**Code Quality**:
- [ ] Clean, readable code
- [ ] Proper TypeScript usage
- [ ] Follows project patterns
- [ ] No performance issues

**UI/UX**:
- [ ] Matches design system
- [ ] Responsive design
- [ ] Accessible markup
- [ ] Consistent interactions

## 🚢 Deployment Process

### Development → Production

1. **Feature Development**:
   - Work in feature branch
   - Test thoroughly
   - Create PR

2. **Code Review**:
   - Team review
   - Address feedback
   - Approve changes

3. **Merge to Main**:
   - Automatic CI/CD trigger
   - Build and deploy
   - Production verification

### Hotfix Process

For urgent production fixes:

1. **Create hotfix branch** from main
2. **Make minimal changes**
3. **Fast-track review**
4. **Deploy immediately**
5. **Backport to development**

## 🐛 Bug Reports

### Report Template

```markdown
**Bug Description**
Clear description of the issue

**Steps to Reproduce**
1. Go to...
2. Click on...
3. See error

**Expected Behavior**
What should happen

**Screenshots**
If applicable

**Environment**
- Browser: [e.g., Chrome 96]
- Device: [e.g., iPhone 12]
- OS: [e.g., iOS 15]
```

### Priority Levels

- **Critical**: Site broken, security issue
- **High**: Major feature broken
- **Medium**: Minor feature issue
- **Low**: Enhancement or nice-to-have

## 💡 Feature Requests

### Request Template

```markdown
**Feature Description**
Clear description of the new feature

**Use Case**
Why is this feature needed?

**Acceptance Criteria**
- [ ] Criterion 1
- [ ] Criterion 2

**Design Considerations**
Any UI/UX considerations

**Technical Notes**
Implementation thoughts
```

## 🛠️ Development Setup

### Prerequisites

- Node.js 18+
- npm or yarn
- Git
- Modern browser

### Environment Setup

```bash
# Clone repository
git clone https://github.com/your-username/roundtrip-adventure.git

# Install dependencies
npm install

# Start development
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### IDE Configuration

**Recommended Extensions** (VS Code):
- TypeScript and JavaScript
- Tailwind CSS IntelliSense
- ES7+ React/Redux/React-Native snippets
- Auto Rename Tag
- Prettier

## 📞 Getting Help

### Resources

- **Documentation**: Check README.md and docs/
- **Issues**: Search existing GitHub issues
- **Discussions**: Use GitHub Discussions for questions

### Contact

- **General Questions**: GitHub Discussions
- **Bug Reports**: GitHub Issues
- **Feature Requests**: GitHub Issues
- **Security Issues**: Email security contact

---

## 🎯 Quick Start Checklist

New contributors should:

- [ ] Read this contributing guide
- [ ] Set up development environment
- [ ] Make a small test change
- [ ] Submit first PR
- [ ] Join team communication channels

---

**Happy contributing! 🚀**

*Last updated: [Current Date]*
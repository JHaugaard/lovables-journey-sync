# Deployment Guide 🚀

Complete guide for deploying Roundtrip Adventure to production hosting.

## 📋 Prerequisites

- GitHub repository connected to your project
- Hosting account with FTP access (Hostinger, cPanel, etc.)
- GitHub account with repository admin access

## 🔐 GitHub Secrets Configuration

### Step 1: Access Repository Settings

1. Navigate to your GitHub repository
2. Click **Settings** (top menu)
3. In the left sidebar, click **Secrets and variables** → **Actions**

### Step 2: Add Required Secrets

Click **New repository secret** for each of the following:

#### FTP_HOST
- **Name**: `FTP_HOST`
- **Value**: Your hosting provider's FTP server
- **Examples**:
  - Hostinger: `ftp.hostinger.com`
  - cPanel: `ftp.yourdomain.com`
  - Other providers: Check your hosting control panel

#### FTP_USERNAME
- **Name**: `FTP_USERNAME`
- **Value**: Your FTP username
- **Examples**:
  - Usually your hosting username
  - Sometimes your domain name
  - Check your hosting control panel → FTP Accounts

#### FTP_PASSWORD
- **Name**: `FTP_PASSWORD`
- **Value**: Your FTP password
- **Security**: Use a strong, unique password
- **Note**: This is set in your hosting control panel

### Step 3: Verify Server Directory

Update the `DEPLOY_PATH` in `.github/workflows/deploy.yml` if needed:

```yaml
env:
  DEPLOY_PATH: '/public_html/roundtrip/'  # Adjust for your hosting
```

Common paths:
- **Hostinger**: `/public_html/`
- **cPanel**: `/public_html/`
- **Subdomain**: `/public_html/subdomain/`
- **Subfolder**: `/public_html/folder/`

## 🛠️ Hosting Provider Setup

### Hostinger Setup

1. **Login to Hostinger Control Panel**
2. **Navigate to File Manager**
3. **Create directory structure**:
   ```
   public_html/
   └── roundtrip/          # Your app folder
       ├── index.html
       ├── assets/
       └── .htaccess
   ```

### cPanel Setup

1. **Login to cPanel**
2. **Open File Manager**
3. **Navigate to public_html**
4. **Create subfolder** (if using subdirectory)

### Other Providers

Check your provider's documentation for:
- FTP server address
- Directory structure
- File permissions
- .htaccess support

## 🔄 Deployment Process

### Automated Deployment (Default)

1. **Push to main branch**:
   ```bash
   git push origin main
   ```

2. **Monitor GitHub Actions**:
   - Go to repository → Actions tab
   - Watch deployment progress
   - Check for any errors

3. **Verify deployment**:
   - Visit your live site
   - Check all pages and functionality
   - Verify responsive design

### Manual Deployment

1. **Go to GitHub repository**
2. **Click Actions tab**
3. **Select "Deploy to Hostinger" workflow**
4. **Click "Run workflow"**
5. **Click "Run workflow" button**

## 📊 Deployment Workflow Details

### Build Process

```yaml
1. Checkout code from GitHub
2. Setup Node.js 18 with npm cache
3. Install dependencies (npm ci)
4. Build application (npm run build)
5. Verify build output and size
```

### Deployment Process

```yaml
6. Create timestamped backup
7. Backup current production files
8. Deploy new build via FTP
9. Verify successful deployment
10. Rollback if deployment fails
```

### Files Deployed

- All files from `dist/` directory
- Excludes: `.git`, `node_modules`, source maps
- Includes: `.htaccess` for SPA routing

## 🔍 Monitoring & Verification

### Success Indicators

- ✅ Green checkmark in GitHub Actions
- ✅ "Deployment completed successfully" message
- ✅ Live site shows latest changes
- ✅ All routes work correctly
- ✅ No console errors

### Performance Checks

- **Page Load Speed**: < 3 seconds
- **Mobile Responsiveness**: All breakpoints work
- **SEO**: Meta tags and structured data present
- **Security**: HTTPS enabled

## 🐛 Troubleshooting

### Build Failures

**TypeScript Errors**:
```bash
# Check locally
npm run build

# Fix type errors
# Push fixed code
```

**Dependency Issues**:
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### FTP Connection Issues

**Invalid Credentials**:
- Verify FTP_HOST, FTP_USERNAME, FTP_PASSWORD in GitHub secrets
- Test credentials with FTP client (FileZilla)
- Check hosting control panel for correct values

**Server Path Issues**:
- Verify DEPLOY_PATH in workflow file
- Check directory exists on server
- Ensure proper permissions (755 for directories, 644 for files)

**Connection Timeout**:
- Check hosting provider status
- Verify FTP server is accessible
- Try manual FTP connection

### Site Not Updating

**Browser Cache**:
```bash
# Hard refresh
Ctrl + F5 (Windows)
Cmd + Shift + R (Mac)

# Clear browser cache
# Try incognito/private mode
```

**Deployment Issues**:
- Check GitHub Actions logs for errors
- Verify files uploaded to correct directory
- Check .htaccess file is present and correct

**Routing Problems**:
- Ensure .htaccess file includes SPA routing rules
- Verify server supports mod_rewrite
- Check directory permissions

### Performance Issues

**Large Bundle Size**:
```javascript
// Check build output
npm run build

// Optimize assets
// Remove unused dependencies
// Enable compression in .htaccess
```

**Slow Loading**:
- Enable Gzip compression
- Optimize images
- Check hosting server performance
- Use browser cache headers

## 🔒 Security Best Practices

### GitHub Secrets

- ✅ Never commit secrets to code
- ✅ Use strong, unique passwords
- ✅ Regularly rotate FTP credentials
- ✅ Enable 2FA on GitHub account
- ✅ Monitor access logs

### Server Security

- ✅ Use HTTPS (SSL certificate)
- ✅ Set proper file permissions
- ✅ Keep hosting software updated
- ✅ Regular security scans
- ✅ Backup strategy

## 📅 Maintenance

### Regular Tasks

**Weekly**:
- Check deployment status
- Monitor site performance
- Review security logs

**Monthly**:
- Update dependencies
- Rotate FTP credentials
- Performance audit
- Backup verification

**Quarterly**:
- Security audit
- Performance optimization
- Hosting plan review

## 🆘 Emergency Procedures

### Rollback Deployment

If deployment fails, the workflow automatically attempts rollback:

1. **Automatic Rollback**: Happens if deployment step fails
2. **Manual Rollback**: Use backup files to restore previous version

### Site Down

1. **Check GitHub Actions** for deployment errors
2. **Verify hosting status** with provider
3. **Check DNS settings** if domain issues
4. **Restore from backup** if files corrupted

### Contact Support

- **GitHub Issues**: Repository issues page
- **Hosting Support**: Provider's help desk
- **Emergency Contact**: Team lead or admin

---

## 📞 Support Contacts

| Issue Type | Contact Method |
|------------|----------------|
| GitHub/CI Issues | GitHub Issues |
| Hosting Problems | Hosting Provider Support |
| Code Issues | Development Team |
| Emergency | Emergency Contact |

---

*Last updated: [Current Date]*
*Version: 1.0*
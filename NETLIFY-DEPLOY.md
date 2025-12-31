# Deploy to Netlify - Step by Step Guide

Your website is ready to deploy with Netlify! The contact form is already configured and will work automatically.

## Method 1: Drag & Drop (Easiest - 5 minutes)

### Step 1: Create Netlify Account
1. Go to [netlify.com](https://www.netlify.com)
2. Click "Sign up" (free account)
3. Sign up with GitHub, GitLab, or Email

### Step 2: Prepare Your Files
Your site is already ready! Just make sure all files are in the `allaway_photography` folder.

### Step 3: Deploy
1. Log into Netlify dashboard
2. Look for the **drag & drop area** that says "Want to deploy a new site without connecting to Git? Drag and drop your site output folder here"
3. **Drag your entire `allaway_photography` folder** onto that area
4. Wait 30-60 seconds for deployment
5. Done! You'll get a URL like `random-name-123.netlify.app`

### Step 4: Change Site Name
1. In your site dashboard, click **Site settings**
2. Click **Change site name**
3. Enter: `allawayphotography` (or whatever you prefer)
4. Your site is now at `allawayphotography.netlify.app`

### Step 5: Connect Your Domain
1. In site settings, go to **Domain management**
2. Click **Add custom domain**
3. Enter: `allawayphotography.com`
4. Follow instructions to update your domain's DNS settings
5. Netlify will automatically set up HTTPS (secure connection)

## Method 2: GitHub (Recommended for Updates)

### Benefits:
- Automatic deployments when you make changes
- Version control for your website
- Easy to revert changes

### Steps:
1. Install [GitHub Desktop](https://desktop.github.com) or use Git command line
2. Create a new repository called `allaway-photography`
3. Add all your website files to the repository
4. Commit and push to GitHub

5. In Netlify:
   - Click **Add new site** → **Import an existing project**
   - Choose **GitHub**
   - Select your `allaway-photography` repository
   - Build settings: Leave blank (it's a static site)
   - Click **Deploy site**

6. Future updates:
   - Edit files locally
   - Commit and push to GitHub
   - Netlify automatically rebuilds your site!

## Contact Form Setup

✅ **Already configured!** The form will work automatically once deployed.

### How to View Form Submissions:

1. In your Netlify dashboard, go to your site
2. Click **Forms** in the left sidebar
3. All form submissions will appear here
4. You can also set up email notifications

### Set Up Email Notifications:

1. Go to **Site settings** → **Forms** → **Form notifications**
2. Click **Add notification**
3. Select **Email notification**
4. Enter your email: `allawayphotography@gmail.com`
5. Choose the form: `contact`
6. Save

Now you'll get an email every time someone submits the contact form!

### Spam Protection:

✅ Already included! The form has:
- Netlify's built-in spam filtering
- Honeypot field (catches bots automatically)

## After Deployment

### Test Your Contact Form:
1. Go to your live site
2. Navigate to the Contact page
3. Fill out and submit the form
4. Check Netlify dashboard → Forms to see the submission
5. Check your email if you set up notifications

### If Form Doesn't Work:
- Make sure you deployed after adding the Netlify form code
- Check Netlify dashboard → Forms to verify form is detected
- Try redeploying the site

## Custom Domain DNS Settings

When you add `allawayphotography.com` to Netlify, you'll need to update these DNS records with your domain registrar (where you bought the domain):

### A Record:
- Type: `A`
- Name: `@`
- Value: `75.2.60.5` (Netlify's IP)

### CNAME Record:
- Type: `CNAME`
- Name: `www`
- Value: `allawayphotography.netlify.app`

**DNS changes take 1-48 hours to propagate** (usually within a few hours).

## Free Netlify Features You Get:

- ✅ Unlimited bandwidth
- ✅ Free SSL/HTTPS certificate
- ✅ Form submissions (100/month on free plan)
- ✅ Automatic deployments from Git
- ✅ Instant rollbacks if something breaks
- ✅ CDN (fast loading worldwide)

## Updating Your Site After Deployment

### If Using Drag & Drop:
1. Make changes to your local files
2. Drag the updated folder to Netlify again
3. New version goes live in 30 seconds

### If Using GitHub:
1. Make changes to your local files
2. Commit and push to GitHub
3. Netlify auto-deploys in 1-2 minutes

## Need Help?

- Netlify Docs: https://docs.netlify.com
- Netlify Support: https://www.netlify.com/support/

## Pro Tips

1. **Before deploying**: Add all your photos to the `images/` folder
2. **Test locally**: Open `index.html` in your browser first
3. **Backup**: Keep a copy of your website folder
4. **Email testing**: Send a test form submission after deployment

---

## Quick Checklist Before Deploying:

- [ ] Logo added to `images/logo.png` ✅ (Done!)
- [ ] Contact email updated ✅ (Done!)
- [ ] Facebook link updated ✅ (Done!)
- [ ] Added your photography portfolio images
- [ ] Updated About page with your story
- [ ] Tested site locally in browser
- [ ] All placeholder text replaced with your content
- [ ] Social media links added (Instagram, Pinterest)

---

**Ready to deploy?** Go to [netlify.com](https://netlify.com) and drag your folder!

Your contact form will work automatically, and you'll receive all inquiries in your Netlify dashboard (and email if you set it up).

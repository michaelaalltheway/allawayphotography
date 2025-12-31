# 🚀 Deployment Checklist - Allaway Photography

You're almost ready to go live! Here's your final checklist.

## ✅ Completed Items

- [x] Logo integrated (`logo.png`)
- [x] Color theme customized (pink/mauve from logo)
- [x] Contact email updated (`allawayphotography@gmail.com`)
- [x] Facebook link added
- [x] Instagram/Pinterest removed
- [x] Contact form configured for Netlify
- [x] Favicon set up
- [x] Photos added to home page (6 images)
- [x] About page photo added
- [x] GitHub repository connected to Netlify

## 📋 Before You Deploy

### 1. Push Your Changes to GitHub

Since you've linked GitHub to Netlify, you need to push all your local changes:

```bash
# Navigate to your project folder
cd /path/to/allaway_photography

# Check what files changed
git status

# Add all files
git add .

# Commit with a message
git commit -m "Initial website setup with logo and branding"

# Push to GitHub
git push origin main
```

**OR use GitHub Desktop:**
1. Open GitHub Desktop
2. Select your `allawayphotography` repository
3. You'll see all changed files listed
4. Add a commit message: "Initial website setup"
5. Click "Commit to main"
6. Click "Push origin"

### 2. Netlify Will Auto-Deploy

Once you push to GitHub:
- Netlify detects the changes automatically
- Builds and deploys your site (takes 1-2 minutes)
- Your site goes live!

### 3. Check Your Netlify Dashboard

1. Go to [app.netlify.com](https://app.netlify.com)
2. Find your site (should be building)
3. Wait for "Published" status
4. Click the site URL to view it live!

## 🎯 After Deployment

### Immediate Tasks:

1. **Test the Contact Form**
   - Visit your live site
   - Go to Contact page
   - Submit a test inquiry
   - Check Netlify Dashboard → Forms to see it

2. **Set Up Form Notifications**
   - Netlify Dashboard → Site → Forms
   - Click "Form notifications"
   - Add email: `allawayphotography@gmail.com`
   - Now you'll get emails for inquiries!

3. **Change Site Name** (Optional)
   - Site Settings → Site details → Change site name
   - Try: `allawayphotography` or similar
   - Your URL becomes: `allawayphotography.netlify.app`

4. **Add Custom Domain**
   - Site Settings → Domain management
   - Add domain: `allawayphotography.com`
   - Follow DNS instructions from your domain registrar
   - Wait 1-48 hours for DNS to propagate

## 📝 Optional Customizations

These can be done now or later:

### Update Content:
- [ ] Edit about page with your personal story (`about.html`)
- [ ] Update portfolio page with categorized photos (`portfolio.html`)
- [ ] Customize services offerings (`index.html`)
- [ ] Add real testimonials (`index.html`)

### Add More Photos:
- [ ] Portfolio page needs photos for each category:
  - Weddings (3+ photos)
  - Portraits (3+ photos)
  - Family (3+ photos)
  - Newborn (3+ photos)
  - Events (3+ photos)

### SEO & Analytics:
- [ ] Add Google Analytics code
- [ ] Submit to Google Search Console
- [ ] Create sitemap (Netlify does this automatically)
- [ ] Update meta descriptions for better SEO

## 🔍 Testing Checklist

After going live, test these:

- [ ] Home page loads correctly
- [ ] All navigation links work
- [ ] Logo displays properly
- [ ] Photos load on all pages
- [ ] Contact form submits successfully
- [ ] Form submission appears in Netlify dashboard
- [ ] Email notification received (if set up)
- [ ] Mobile view looks good
- [ ] All pages responsive on different devices
- [ ] Facebook link works

## 📱 Mobile Testing

Test on actual devices if possible:
- [ ] iPhone/iOS Safari
- [ ] Android Chrome
- [ ] Tablet view

Or use browser dev tools (F12 → Toggle device toolbar)

## ⚠️ Troubleshooting

### Contact Form Not Working?
- Make sure you pushed all changes to GitHub
- Verify form has `data-netlify="true"` attribute
- Check Netlify build logs for errors
- Try redeploying from Netlify dashboard

### Photos Not Showing?
- Check file names match exactly (case-sensitive!)
- Verify photos are in `images/` folder
- Check browser console for 404 errors

### Site Not Building on Netlify?
- Check Netlify build logs for errors
- Ensure all files are pushed to GitHub
- Verify repository is connected correctly

## 🎉 You're Ready!

Once you've pushed to GitHub, Netlify will automatically:
1. Detect your changes
2. Build your site
3. Deploy it live
4. Give you a URL

**Your site will be live in about 2 minutes!**

## 📞 Need Help?

- Netlify Support: https://www.netlify.com/support/
- Check Netlify build logs if something fails
- Review the NETLIFY-DEPLOY.md guide

---

## Quick Command Reference

**If using Git command line:**
```bash
# Add all changes
git add .

# Commit changes
git commit -m "Your message here"

# Push to GitHub (triggers Netlify deploy)
git push origin main
```

**Your site will auto-deploy after each push!**

---

**Ready to push?**
```bash
git add .
git commit -m "Initial Allaway Photography website"
git push origin main
```

Then watch it deploy in your Netlify dashboard! 🚀

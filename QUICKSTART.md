# Quick Start Guide - Allaway Photography Website

Get your photography website up and running in 5 steps!

## Step 1: Preview the Site Locally

Open `index.html` in your web browser to see the site. All pages are linked and functional.

**Note**: Some features like the contact form will only simulate submission until you configure a form service.

## Step 2: Add Your Photos

Create/replace these images in the `images/` directory:

### Essential Images (Start Here)
1. **Hero Background**: Create a stunning hero image
   - Add to CSS or use as `images/hero-bg.jpg` (1920x1080px)

2. **Featured Work** (Home page - 6 images):
   ```
   images/placeholder-1.jpg
   images/placeholder-2.jpg
   images/placeholder-3.jpg
   images/placeholder-4.jpg
   images/placeholder-5.jpg
   images/placeholder-6.jpg
   ```
   Size: 1200x900px

3. **About Photo**:
   ```
   images/about-photo.jpg
   ```
   Size: 800x1000px

### Portfolio Images (Add Later)
Add 3-5 images per category:
- `images/wedding-1.jpg`, `wedding-2.jpg`, etc.
- `images/portrait-1.jpg`, `portrait-2.jpg`, etc.
- `images/family-1.jpg`, `family-2.jpg`, etc.
- `images/newborn-1.jpg`, `newborn-2.jpg`, etc.
- `images/event-1.jpg`, `event-2.jpg`, etc.

Size: 1200x1200px (square) recommended

## Step 3: Customize Your Content

### Update These Key Areas:

1. **Contact Email** (search and replace throughout site):
   - Change `info@allawayphotography.com` to your email

2. **About Page** (`about.html`):
   - Edit the "About Allaway Photography" section with your story
   - Update the year you started (search for `[Year]`)
   - Customize values and process sections

3. **Services** (`index.html`):
   - Update the 4 service cards to match your offerings

4. **Social Media Links** (all pages - footer):
   - Replace `#` with your actual social media URLs

5. **Testimonials** (`index.html`):
   - Replace example testimonials with real client reviews

## Step 4: Set Up Contact Form

Choose one of these options:

### Option A: Formspree (5 minutes)
1. Go to [formspree.io](https://formspree.io) and create free account
2. Create a new form, get your endpoint URL
3. Open `js/main.js`, find line ~148
4. Uncomment and update:
   ```javascript
   const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
       method: 'POST',
       body: formData,
       headers: { 'Accept': 'application/json' }
   });
   ```

### Option B: Netlify Forms (automatic)
1. Deploy to Netlify first (see Step 5)
2. Add to `contact.html` form tag:
   ```html
   <form id="contactForm" name="contact" method="POST" data-netlify="true">
       <input type="hidden" name="form-name" value="contact">
   ```

## Step 5: Deploy Your Site

### Easiest: Netlify (5 minutes)

1. Create account at [netlify.com](https://netlify.com)

2. **Option A: Drag & Drop**
   - Zip your entire project folder
   - Drag and drop on Netlify dashboard

3. **Option B: GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git push to GitHub
   ```
   - Connect GitHub repo in Netlify
   - Auto-deploy on every push

4. **Add Custom Domain**
   - In Netlify: Site settings → Domain management
   - Add `allawayphotography.com`
   - Update your domain's DNS settings as instructed

### Alternative: GitHub Pages

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/allaway-photography.git
git push -u origin main
```

Enable GitHub Pages in repo settings → Pages → Deploy from main branch.

## Step 6: Set Up Client Portal (Optional)

When you have photos ready for a client:

1. Create folder: `images/galleries/CLIENT2025/`
2. Add their photos to that folder
3. Edit `js/portal.js`, add gallery entry:

```javascript
'CLIENT2025': {
    name: 'Client Wedding',
    client: 'John & Jane Doe',
    date: '2025-03-15',
    sessionType: 'Wedding',
    images: [
        { src: 'images/galleries/CLIENT2025/1.jpg', filename: 'wedding-001.jpg' },
        { src: 'images/galleries/CLIENT2025/2.jpg', filename: 'wedding-002.jpg' }
    ],
    expiryDate: '2025-05-15'
}
```

4. Give client the code: `CLIENT2025`

**Test the portal with demo codes:**
- `DEMO2025`
- `TEST123`

## Checklist

Before going live, verify:

- [ ] All personal photos added
- [ ] About page updated with your story
- [ ] Email addresses updated throughout
- [ ] Social media links added
- [ ] Testimonials replaced with real reviews
- [ ] Contact form tested and working
- [ ] Site tested on mobile device
- [ ] Custom domain connected
- [ ] HTTPS enabled (automatic with Netlify)
- [ ] All pages load correctly
- [ ] Lightbox works for portfolio images

## Need Help?

- **Images not showing?** Check file paths and extensions (.jpg vs .JPG)
- **Form not working?** Check browser console for errors
- **Mobile issues?** Test on actual devices, not just browser resize
- **Domain not working?** DNS changes can take 24-48 hours

## Pro Tips

1. **Image Optimization**: Compress all images before uploading (use TinyPNG.com)
2. **Regular Updates**: Add new portfolio work monthly
3. **Analytics**: Add Google Analytics code to track visitors
4. **Backup**: Keep backups of client gallery codes
5. **SEO**: Update meta descriptions in each HTML file's `<head>`

---

## Next Steps After Launch

1. Submit site to Google Search Console
2. Create Google My Business listing
3. Share website on social media
4. Add website to email signature
5. Update business cards with new URL

---

**Questions?** Review the full README.md for detailed documentation.

**Ready to launch?** You've got this! 🚀

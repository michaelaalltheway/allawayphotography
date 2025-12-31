# Allaway Photography Website

A professional, modern photography business website featuring portfolio galleries, client booking, and a password-protected client portal for secure photo delivery.

## Features

- **Responsive Design**: Beautiful, mobile-friendly layout that works on all devices
- **Portfolio Gallery**: Filterable portfolio with categories (Weddings, Portraits, Family, Newborn, Events)
- **Lightbox Viewer**: Full-screen image viewing with keyboard navigation
- **Contact/Booking Form**: Professional inquiry form for potential clients
- **Client Portal**: Password-protected galleries for clients to view and download their photos
- **Modern UI**: Clean, elegant design with smooth animations and transitions
- **SEO Optimized**: Proper meta tags and semantic HTML for search engine visibility

## Project Structure

```
allaway_photography/
├── index.html              # Home page
├── portfolio.html          # Portfolio gallery page
├── about.html              # About page
├── contact.html            # Contact and booking page
├── client-portal.html      # Client portal login
├── css/
│   └── styles.css          # Main stylesheet
├── js/
│   ├── main.js             # Main JavaScript (navigation, lightbox, forms)
│   └── portal.js           # Client portal functionality
├── images/
│   ├── placeholder-1.jpg   # Home page featured images
│   ├── placeholder-2.jpg
│   ├── ... (6 placeholders)
│   ├── about-photo.jpg     # About page photo
│   ├── wedding-1.jpg       # Portfolio images
│   ├── portrait-1.jpg
│   ├── family-1.jpg
│   ├── newborn-1.jpg
│   ├── event-1.jpg
│   └── galleries/          # Client portal galleries
│       ├── demo/           # Demo gallery
│       └── [client-codes]/ # Individual client galleries
└── README.md
```

## Getting Started

### 1. Add Your Images

Replace the placeholder image references with your actual photography:

**Home Page Featured Work** (6 images):
- `images/placeholder-1.jpg` through `images/placeholder-6.jpg`
- Recommended size: 1200x900px

**About Page**:
- `images/about-photo.jpg` (Your photo or studio image)
- Recommended size: 800x1000px

**Portfolio Page** (15 images minimum):
- `images/wedding-1.jpg`, `images/wedding-2.jpg`, `images/wedding-3.jpg`
- `images/portrait-1.jpg`, `images/portrait-2.jpg`, `images/portrait-3.jpg`
- `images/family-1.jpg`, `images/family-2.jpg`, `images/family-3.jpg`
- `images/newborn-1.jpg`, `images/newborn-2.jpg`, `images/newborn-3.jpg`
- `images/event-1.jpg`, `images/event-2.jpg`, `images/event-3.jpg`
- Recommended size: 1200x1200px (square)

### 2. Customize Content

**Update Personal Information**:
- Edit `about.html` to add your personal story and experience
- Update contact information in all page footers
- Add your social media links (Instagram, Facebook, Pinterest)
- Customize the year you started (search for `[Year]` in about.html)

**Update Contact Email**:
Replace `info@allawayphotography.com` throughout the site with your actual email address.

**Customize Services**:
Edit the services section in `index.html` to match the types of photography you offer.

### 3. Set Up Contact Form

The contact form is currently set to simulate submission. To make it functional, you have several options:

**Option A: Formspree (Easiest)**
1. Sign up at [formspree.io](https://formspree.io)
2. Create a new form and get your endpoint URL
3. In `js/main.js`, uncomment and update the fetch code (line 148-153):
```javascript
const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
    method: 'POST',
    body: formData,
    headers: {
        'Accept': 'application/json'
    }
});
```

**Option B: Netlify Forms**
1. Deploy to Netlify (see deployment section)
2. Add `netlify` attribute to form in `contact.html`:
```html
<form id="contactForm" name="contact" method="POST" data-netlify="true">
    <input type="hidden" name="form-name" value="contact">
    ...
</form>
```

**Option C: Custom Backend**
Integrate with your own backend API endpoint.

### 4. Set Up Client Portal

The client portal uses a simple password-based system. To add client galleries:

1. Create a directory: `images/galleries/[CLIENT-CODE]/`
2. Add client photos to that directory
3. Edit `js/portal.js` and add an entry to the `clientGalleries` object:

```javascript
'SMITH2025': {
    name: 'Smith Family Portrait',
    client: 'The Smith Family',
    date: '2025-03-15',
    sessionType: 'Family Portrait',
    images: [
        { src: 'images/galleries/SMITH2025/1.jpg', filename: 'smith-001.jpg' },
        { src: 'images/galleries/SMITH2025/2.jpg', filename: 'smith-002.jpg' },
        // Add more images...
    ],
    expiryDate: '2025-05-15' // 60 days from delivery
}
```

4. Give the client their access code: `SMITH2025`

**Demo Access Codes** (for testing):
- `DEMO2025` - Demo wedding gallery
- `TEST123` - Test family portrait gallery

## Deployment Options

### Option 1: Netlify (Recommended)

1. Install the Netlify CLI:
```bash
npm install -g netlify-cli
```

2. Deploy from your project directory:
```bash
netlify deploy
```

3. For production deployment:
```bash
netlify deploy --prod
```

4. Connect your custom domain in Netlify dashboard

### Option 2: GitHub Pages

1. Create a GitHub repository
2. Push your code:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/allaway-photography.git
git push -u origin main
```

3. Enable GitHub Pages in repository settings (Settings → Pages)
4. Select `main` branch and root folder
5. Your site will be available at `https://YOUR-USERNAME.github.io/allaway-photography/`

### Option 3: Vercel

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
vercel
```

3. Follow prompts and connect your domain

### Option 4: Traditional Web Hosting

Upload all files via FTP to your web hosting provider:
- Use FileZilla, Cyberduck, or your host's file manager
- Upload all files maintaining the directory structure
- Ensure `index.html` is in the root directory

## Browser Compatibility

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Customization

### Colors

Edit CSS variables in `css/styles.css` (lines 7-18):

```css
:root {
    --primary-color: #2c2c2c;      /* Main dark color */
    --secondary-color: #8b7355;    /* Brown/tan */
    --accent-color: #d4af76;       /* Light gold */
    /* ... more colors ... */
}
```

### Fonts

Current fonts:
- Headings: Playfair Display (serif)
- Body: Montserrat (sans-serif)

To change fonts, update the Google Fonts link in all HTML files and the CSS variables:
```css
--font-heading: 'Your Heading Font', serif;
--font-body: 'Your Body Font', sans-serif;
```

### Hero Background Image

In `css/styles.css`, line 264, replace the placeholder with your hero image:
```css
.hero {
    background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.4)),
                      url('../images/hero-background.jpg');
}
```

## SEO Tips

1. **Update Meta Descriptions**: Customize the meta description tags in each HTML file
2. **Alt Text**: Add descriptive alt text to all images
3. **Google Analytics**: Add your tracking code before the closing `</body>` tag
4. **Google Search Console**: Verify your domain and submit sitemap
5. **Schema Markup**: Consider adding LocalBusiness schema for better local SEO

## Performance Optimization

1. **Compress Images**: Use tools like TinyPNG or ImageOptim before uploading
2. **Lazy Loading**: Images already use `loading="lazy"` attribute
3. **CDN**: Consider using a CDN for image delivery (Cloudinary, ImageKit)
4. **Caching**: Configure cache headers in your hosting settings

## Security Notes

### Client Portal Security

The current client portal uses client-side password protection, which is suitable for basic privacy but NOT for highly sensitive content. For enhanced security:

1. **Use Backend Authentication**: Implement server-side authentication with proper user sessions
2. **Consider Third-Party Services**:
   - Pixieset (photography-specific)
   - Cloudinary with password protection
   - Custom solution with Firebase Authentication
3. **HTTPS**: Always use HTTPS for your site (automatic with Netlify/Vercel)

## Maintenance

### Regular Tasks

- **Update Client Galleries**: Remove expired galleries monthly
- **Backup**: Keep backups of client gallery codes and images
- **Portfolio**: Add new work regularly (aim for monthly updates)
- **Testimonials**: Update with recent client reviews
- **Contact Form**: Check form submissions regularly

### Adding New Portfolio Images

1. Add image files to `images/` directory
2. Edit `portfolio.html`
3. Add new `<div class="portfolio-item">` with appropriate `data-category`
4. Update the image `src`, `alt`, and overlay text

## Support

For issues or questions about this website:
- Check browser console for JavaScript errors
- Verify all file paths are correct
- Ensure images are in correct directories
- Test on multiple devices/browsers

## License

This website is custom-built for Allaway Photography. All rights reserved.

## Credits

- Fonts: Google Fonts (Playfair Display, Montserrat)
- Icons: Unicode emoji characters
- Built with: HTML5, CSS3, JavaScript (ES6+)

---

Built with ❤️ for Allaway Photography

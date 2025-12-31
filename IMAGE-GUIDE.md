# Image Guide - Allaway Photography

This guide shows exactly what images you need and where to place them.

## Quick Reference

Total images needed:
- **Hero background**: 1 image (optional, can use CSS)
- **Featured work**: 6 images
- **About page**: 1 image
- **Portfolio**: 15-30 images (3-5 per category)
- **Client galleries**: As needed per client

## Image Specifications

### Recommended Sizes
- **Hero background**: 1920x1080px (landscape)
- **Featured work**: 1200x900px (4:3 ratio)
- **About photo**: 800x1000px (portrait)
- **Portfolio images**: 1200x1200px (square) or 1200x900px (landscape)
- **Client gallery**: 2000x1500px (high-res for downloads)

### File Format
- Use **JPEG** for photographs (.jpg)
- Optimize/compress before uploading (use TinyPNG.com)
- Target file size: 200-500KB per image

## Required Images by Page

### Home Page (`index.html`)

#### Hero Section
**Option 1**: Add background image to CSS
- Location: `css/styles.css` (line ~264)
- Update the `.hero` class background-image
```css
background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.4)),
                  url('../images/hero-background.jpg');
```

**Option 2**: Use solid color/gradient (already set as fallback)

#### Featured Work Section (6 images)
```
images/
├── placeholder-1.jpg    (Example: Wedding scene)
├── placeholder-2.jpg    (Example: Family portrait)
├── placeholder-3.jpg    (Example: Newborn)
├── placeholder-4.jpg    (Example: Senior portrait)
├── placeholder-5.jpg    (Example: Engagement)
└── placeholder-6.jpg    (Example: Event)
```

### About Page (`about.html`)

```
images/
└── about-photo.jpg      (Your photo or studio image)
```

### Portfolio Page (`portfolio.html`)

#### Wedding Category (3-5 images)
```
images/
├── wedding-1.jpg
├── wedding-2.jpg
└── wedding-3.jpg
```

#### Portrait Category (3-5 images)
```
images/
├── portrait-1.jpg
├── portrait-2.jpg
└── portrait-3.jpg
```

#### Family Category (3-5 images)
```
images/
├── family-1.jpg
├── family-2.jpg
└── family-3.jpg
```

#### Newborn Category (3-5 images)
```
images/
├── newborn-1.jpg
├── newborn-2.jpg
└── newborn-3.jpg
```

#### Events Category (3-5 images)
```
images/
├── event-1.jpg
├── event-2.jpg
└── event-3.jpg
```

### Client Portal (As Needed)

For each client gallery, create a subfolder:

```
images/galleries/
├── CLIENT2025/
│   ├── 1.jpg
│   ├── 2.jpg
│   ├── 3.jpg
│   └── ... (all client photos)
├── SMITH2025/
│   ├── 1.jpg
│   └── ...
└── demo/               (demo gallery - optional)
    ├── 1.jpg
    └── ...
```

## Image Naming Conventions

### Good Naming Examples:
- `wedding-ceremony-001.jpg`
- `family-smith-outdoor-001.jpg`
- `portrait-senior-jane-001.jpg`
- `newborn-baby-emma-001.jpg`

### Avoid:
- `IMG_1234.jpg`
- `DSC_5678.jpg`
- Spaces in filenames
- Special characters

## Priority Order

Start with these images for a functional site:

### Phase 1: Launch Essentials
1. **6 Featured Work images** (home page)
2. **1 About photo**
3. **6-9 Portfolio images** (2-3 per category minimum)

### Phase 2: Full Portfolio
4. Add 3-5 images to each portfolio category (15-25 total)

### Phase 3: Client Galleries
5. Add client galleries as you complete sessions

## Image Optimization Tips

### Before Uploading:
1. **Resize** to recommended dimensions
2. **Compress** using:
   - [TinyPNG.com](https://tinypng.com)
   - [Squoosh.app](https://squoosh.app)
   - Photoshop "Save for Web"
   - ImageOptim (Mac)
3. **Target**: 200-500KB per image
4. **Quality**: 80-85% JPEG quality

### Tools:
- **Batch Resize**: Bulk Resize Photos (bulkresizephotos.com)
- **Batch Compress**: TinyPNG or ImageOptim
- **Photo Editor**: Photoshop, GIMP, Affinity Photo

## Creating Placeholder Images

If you don't have photos ready, the site will show placeholder gradients automatically. But here's how to create better placeholders:

### Using Canva (Free):
1. Create design with correct dimensions
2. Use solid color or gradient
3. Add text: "Coming Soon"
4. Download as JPG
5. Name appropriately

### Using Photoshop:
1. New file with correct dimensions
2. Fill with gradient (brown/gold tones)
3. Add text layer
4. Save for Web (JPEG, 80% quality)

## Alt Text Guide

When you add images, make sure each has descriptive alt text in the HTML:

### Good Alt Text Examples:
```html
<img src="wedding-1.jpg" alt="Bride and groom first dance at outdoor wedding ceremony">
<img src="family-1.jpg" alt="Family of four portrait in autumn park setting">
<img src="newborn-1.jpg" alt="Newborn baby sleeping peacefully in white wrap">
```

### Update in HTML:
Find the `<img>` tags and update the `alt` attribute with specific descriptions.

## Watermarking

For portfolio images shown publicly, consider watermarking:
- Small, subtle watermark in corner
- Don't cover subject
- Include your logo or "AllaWay Photography"
- Use Photoshop batch processing for efficiency

For client galleries, use high-resolution unwatermarked images.

## Copyright Notice

All images should be your original work or properly licensed. Never use:
- Stock photos (for portfolio)
- Other photographers' work
- Images without proper model releases (for commercial use)

## Checklist

Before going live:

- [ ] All featured work images added (6)
- [ ] About photo added (1)
- [ ] Portfolio images added (15+ recommended)
- [ ] All images optimized/compressed
- [ ] All images have descriptive alt text
- [ ] Image dimensions are consistent
- [ ] No broken image links
- [ ] Images load quickly on mobile
- [ ] Portfolio images are your best work
- [ ] Images showcase variety of your services

## Need More Images?

If you need more portfolio images:
1. Schedule sample/styled shoots
2. Offer mini-sessions at discount
3. Use recent client work (with permission)
4. Include personal projects
5. Feature second shooter's perspectives (with credit)

---

**Pro Tip**: Start with your absolute best 20-30 images. Quality over quantity! You can always add more later.

## Quick Test

After adding images, test:
1. Open site in browser
2. Check each page loads images correctly
3. Test lightbox functionality (click images)
4. Check mobile view
5. Verify fast loading (under 3 seconds)

---

**Ready to add images?** Follow the priority order above and start with Phase 1!

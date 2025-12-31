# Adding Your Logo - Allaway Photography

## Step 1: Add Logo to Images Folder

1. Copy your logo file to: `images/logo.png` (or `logo.jpg`)
   - Recommended format: PNG (supports transparency)
   - Recommended size: 200-300px wide, 60-80px tall
   - Make sure it's on a transparent background if possible

## Step 2: Tell Claude

Once you've added the logo file, let Claude know:
- The filename (e.g., "I added logo.png")
- Describe the main colors in your logo

Claude will then:
1. Update the navigation to show your logo
2. Extract and apply your brand colors throughout the site
3. Ensure the design matches your brand identity

## What Colors Work Best

Your logo colors will be used for:
- Primary color: Main headings, navigation
- Secondary color: Buttons, accents, links
- Accent color: Hover states, highlights

Current placeholder colors:
- Primary: Dark charcoal (#2c2c2c)
- Secondary: Brown/tan (#8b7355)
- Accent: Light gold (#d4af76)

## Logo Specifications

### Ideal Logo File:
- **Format**: PNG with transparent background
- **Width**: 200-300px (for web)
- **Height**: 60-80px (maintains navbar proportion)
- **File size**: Under 100KB (optimized)
- **Color mode**: RGB

### If You Have Multiple Logo Versions:
- **Main logo**: For light backgrounds (navigation)
- **Light logo**: For dark backgrounds (footer) - optional
- **Favicon**: 512x512px square version for browser tab icon

## Example File Structure

After adding your logo:
```
images/
├── logo.png           ← Your main logo (navigation)
├── logo-white.png     ← Optional: white version for footer
├── favicon.png        ← Optional: square icon for browser tab
└── ... (other images)
```

## Next Steps

1. Copy your logo to the `images/` folder
2. Tell Claude: "I added logo.png" (or whatever you named it)
3. Claude will integrate it and ask about colors if needed
4. Preview the changes in your browser

---

**Need help with your logo?** If you only have a high-resolution version, you can:
- Use an online tool like [TinyPNG](https://tinypng.com) to compress it
- Use [ResizeImage.net](https://resizeimage.net) to resize it
- Or just add it as-is and Claude will handle it

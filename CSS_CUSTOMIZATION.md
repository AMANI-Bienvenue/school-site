# 🎨 Light Peace Academy - CSS Customization Guide

## Quick Reference: All CSS Variables

Copy and paste this section into your `css/style.css` `:root` selector to customize.

---

### 📍 COLOR VARIABLES

```css
/* Primary Color - Use for main elements, headers, CTA buttons */
--primary-color: #0277bd;        /* Standard blue */
--primary-dark: #01579b;         /* Darker blue for header background */
--primary-light: #03a9f4;        /* Lighter blue for accents */

/* Secondary Color - Use for highlights, badges, alternate CTAs */
--secondary-color: #f57c00;      /* Orange for emphasis */
--secondary-dark: #e64a19;       /* Darker orange for hover states */
--secondary-light: #ffb74d;      /* Light orange for badges */

/* Accent Color - Use for tertiary elements */
--accent-color: #388e3c;         /* Green for alternative options */
--accent-light: #66bb6a;         /* Light green for hover */

/* Text Colors */
--text-primary: #212121;         /* Main text color */
--text-secondary: #575757;       /* Secondary information */
--text-tertiary: #9e9e9e;        /* Low emphasis text */
--text-light: #bdbdbd;           /* Disabled/hint text */
--text-white: #ffffff;           /* White text */

/* Background Colors */
--bg-white: #ffffff;             /* Pure white */
--bg-light: #fafafa;             /* Slightly off-white */
--bg-light-secondary: #f5f5f5;   /* Light gray */
--bg-gray: #eeeeee;              /* Medium gray */
```

---

### 📏 SPACING VARIABLES (Use consistently!)

```css
/* Spacing Scale - Use these for all margins and padding */
--spacing-xs: 0.5rem;            /* 8px - Small gaps */
--spacing-sm: 1rem;              /* 16px - Regular gaps */
--spacing-md: 1.5rem;            /* 24px - Medium spacing */
--spacing-lg: 2rem;              /* 32px - Large sections */
--spacing-xl: 3rem;              /* 48px - Very large gaps */
--spacing-2xl: 4rem;             /* 64px - Huge spacing */
--spacing-3xl: 6rem;             /* 96px - Section padding */
```

**Usage Example:**
```css
.feature {
  padding: var(--spacing-2xl);   /* 64px padding */
  margin-bottom: var(--spacing-lg); /* 32px margin */
}
```

---

### 🔤 TYPOGRAPHY VARIABLES

```css
/* Font Family */
--font-family: 'Roboto', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

/* Font Sizes - Complete hierarchy */
--font-size-xs: 0.75rem;         /* 12px - Small text */
--font-size-sm: 0.875rem;        /* 14px - Secondary text */
--font-size-base: 1rem;          /* 16px - Body text */
--font-size-lg: 1.125rem;        /* 18px - Lead text */
--font-size-xl: 1.25rem;         /* 20px - Subheadings */
--font-size-2xl: 1.5rem;         /* 24px - Headings */
--font-size-3xl: 2rem;           /* 32px - Large headings */
--font-size-4xl: 2.5rem;         /* 40px - Section titles */
--font-size-5xl: 3.5rem;         /* 56px - Hero titles */

/* Line Heights - For proper text breathing */
--leading-tight: 1.25;           /* Tight spacing for titles */
--leading-normal: 1.5;           /* Standard for body text */
--leading-relaxed: 1.75;         /* Loose for long paragraphs */

/* Font Weights */
--weight-light: 300;             /* Light text */
--weight-normal: 400;            /* Regular text */
--weight-medium: 500;            /* Medium emphasis */
--weight-semibold: 600;          /* Semi-bold */
--weight-bold: 700;              /* Bold text */
--weight-extrabold: 800;         /* Extra bold titles */
```

---

### 🎯 BORDER RADIUS VARIABLES

```css
/* Border Radius - For rounded corners */
--radius-sm: 8px;               /* Subtle rounding */
--radius-md: 12px;              /* Standard rounding */
--radius-lg: 16px;              /* Card corners */
--radius-xl: 24px;              /* Large cards */
--radius-full: 9999px;          /* Fully rounded (pills) */
```

---

### 💫 SHADOW VARIABLES

```css
/* Shadows - Create depth */
--shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.08);
--shadow-md: 0 4px 16px rgba(0, 0, 0, 0.12);
--shadow-lg: 0 8px 24px rgba(0, 0, 0, 0.15);
--shadow-xl: 0 12px 32px rgba(0, 0, 0, 0.18);
--shadow-hover: 0 16px 40px rgba(0, 0, 0, 0.2);
```

**Usage:**
```css
.card {
  box-shadow: var(--shadow-md);  /* Standard card shadow */
}
.card:hover {
  box-shadow: var(--shadow-hover); /* Elevated on hover */
}
```

---

### ⚡ ANIMATION VARIABLES

```css
/* Transitions - Smooth effects */
--transition-fast: 150ms cubic-bezier(0.4, 0, 0.2, 1);
--transition-base: 250ms cubic-bezier(0.4, 0, 0.2, 1);
--transition-slow: 350ms cubic-bezier(0.4, 0, 0.2, 1);
```

---

## 🎨 COMMON CUSTOMIZATIONS

### Change School Colors

**Before:**
```css
--primary-color: #0277bd;        /* Blue */
--secondary-color: #f57c00;      /* Orange */
```

**To use Green & Purple instead:**
```css
--primary-color: #1b5e20;        /* Green */
--secondary-color: #6a1b9a;      /* Purple */
```

---

### Make Text Larger on Desktop

**Before:**
```css
--font-size-4xl: 2.5rem;
```

**Make it bigger:**
```css
--font-size-4xl: 3rem;           /* 48px instead of 40px */
```

---

### Increase Spacing for Premium Feel

**Before:**
```css
--spacing-2xl: 4rem;
```

**Make it more spacious:**
```css
--spacing-2xl: 5rem;             /* More breathing room */
```

---

## 📱 RESPONSIVE BEHAVIOR

The CSS automatically adjusts for these screen sizes:

| Screen Size | Target Device | Key Changes |
|------------|---------------|-------------|
| < 576px | Small mobile | Smallest fonts, single column |
| 576-768px | Mobile | Tablet-like, 2 columns where possible |
| 768-992px | Tablet | Better spacing, larger fonts |
| 992-1200px | Laptop | Optimized layout |
| > 1200px | Desktop | Full layout with all features |

**No changes needed** - The CSS handles this automatically!

---

## 🔧 ADVANCED: Creating Custom Utilities

Add these to your CSS to create reusable classes:

```css
/* Add spacing utilities */
.mt-lg { margin-top: var(--spacing-lg); }
.mb-lg { margin-bottom: var(--spacing-lg); }
.p-xl { padding: var(--spacing-xl); }

/* Add text utilities */
.text-primary { color: var(--primary-color); }
.text-secondary { color: var(--text-secondary); }
.font-bold { font-weight: var(--weight-bold); }
.text-center { text-align: center; }

/* Add shadow utilities */
.shadow-md { box-shadow: var(--shadow-md); }
.shadow-lg { box-shadow: var(--shadow-lg); }
```

**Then use in HTML:**
```html
<div class="p-xl mt-lg shadow-lg">Content here</div>
```

---

## 📋 CHECKLIST: Testing Your Changes

After customizing, check these:

- [ ] Colors look consistent across all sections
- [ ] Text is readable on all backgrounds
- [ ] Spacing feels balanced (not too tight, not too empty)
- [ ] Mobile view looks good
- [ ] Buttons are clickable and visible
- [ ] Hover effects work smoothly
- [ ] Images load correctly
- [ ] Navigation works on mobile

---

## 🎓 Tips for Professional Results

1. **Stick to the system** - Don't add random colors or sizes
2. **Use shadow hierarchy** - Small shadows for subtle elements, large for important ones
3. **Consistent spacing** - Use the scale provided, don't invent new sizes
4. **Test on mobile** - Most users visit on phones
5. **Contrast matters** - Dark text on light, light text on dark
6. **Less is more** - Don't use every color at once
7. **Animation subtlety** - Use smooth transitions, avoid harsh changes

---

## 🚀 Production Ready

Your design system is built to:
- ✅ Scale to large websites
- ✅ Stay consistent as you grow
- ✅ Be easy for others to maintain
- ✅ Look professional on any device
- ✅ Perform fast (optimized CSS)

**Enjoy your premium design system!** 🎉

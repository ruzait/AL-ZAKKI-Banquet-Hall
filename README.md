# Al Zakki Banquet Hall Website

A modern, beautifully designed website for Al Zakki Banquet Hall in Addalaichenai, Sri Lanka.

## Features

- **Modern Morphing Effects** - Beautiful animated background shapes
- **Floating Particles** - Animated particle effects in hero
- **GSAP Animations** - Smooth scroll-triggered animations
- **Responsive Design** - Works perfectly on all devices
- **Event Services** - Wedding, Conference, Political meetings, and more
- **Pricing Packages** - Clear and affordable options
- **Contact Form** - Easy booking request submission

## Quick Start

Simply open `index.html` in a web browser.

### Using a Local Server (Recommended)

```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx serve

# Using PHP
php -S localhost:8000
```

Then visit `http://localhost:8000`

## Project Structure

```
al-zakki-banquet/
├── index.html          # Main HTML file
├── css/
│   └── style.css       # All styles
├── js/
│   └── main.js         # Animations & interactions
└── assets/             # Add images here
```

## Sections

1. **Hero** - Animated intro with morphing background
2. **About** - Why choose Al Zakki
3. **Services** - 8 event types with details
4. **Gallery** - Image grid with hover effects
5. **Pricing** - 3 affordable packages
6. **Contact** - Form + contact details
7. **Footer** - Quick links & info

## Customization

### Adding Images

Replace the placeholders in:
- `.image-placeholder` in About section
- `.gallery-placeholder` in Gallery section

### Updating Contact Info

Edit in `index.html`:
- Phone number
- Email address
- Location details

### Changing Colors

Modify CSS variables in `style.css`:
```css
:root {
    --primary: #6366f1;      /* Main accent color */
    --primary-dark: #4f46e5; /* Darker shade */
    --accent: #f43f5e;       /* Secondary accent */
    --secondary: #0f172a;   /* Dark backgrounds */
}
```

## Browser Support

- Chrome 60+
- Firefox 55+
- Safari 11+
- Edge 79+

## Dependencies (CDN)

- GSAP 3.12 (Animations)
- System Fonts (No external font loading)

## License

2024 Al Zakki Banquet Hall. All Rights Reserved.

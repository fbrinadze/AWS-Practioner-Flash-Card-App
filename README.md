# AWS Cloud Practitioner Flashcards

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

Interactive flashcard application for AWS Certified Cloud Practitioner (CLF-C02) exam preparation.


## ✨ Features

- **50 Comprehensive Flashcards** covering all four exam domains
- **Interactive Flip Animation** - Click or press space to reveal answers
- **Category Filtering** - Focus on specific domains
- **Progress Tracking** - Track viewed and mastered cards
- **Keyboard Navigation** - Full keyboard support for power users
- **Touch/Swipe Support** - Swipe left/right on mobile devices
- **Shuffle Mode** - Randomize card order for better retention
- **Local Storage** - Progress saved automatically in your browser
- **Responsive Design** - Works on desktop, tablet, and mobile
- **Accessible** - ARIA labels and keyboard navigation

## 📚 Exam Domains Covered

| Domain | Weight | Cards |
|--------|--------|-------|
| Cloud Concepts | 24% | 12 |
| Security and Compliance | 30% | 15 |
| Cloud Technology and Services | 34% | 15 |
| Billing, Pricing, and Support | 12% | 8 |

## 🚀 Quick Start

### Option 1: Open Directly
Simply open `index.html` in your web browser. No server required!

### Option 2: Local Development Server
```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (with http-server)
npx http-server

# Using PHP
php -S localhost:8000
```

Then open `http://localhost:8000` in your browser.

### Option 3: Deploy to GitHub Pages
1. Fork this repository
2. Go to Settings → Pages
3. Select "Deploy from a branch"
4. Choose `main` branch and `/ (root)`
5. Your site will be live at `https://yourusername.github.io/aws-flashcards/`

## ⌨️ Keyboard Shortcuts

| Key | Action |
|-----|--------|
| `←` | Previous card |
| `→` | Next card |
| `Space` | Flip card |
| `S` | Shuffle cards |
| `M` | Mark as mastered |
| `R` | Reset progress |

## 📁 Project Structure

```
aws-flashcards/
├── index.html              # Main HTML file
├── css/
│   ├── main.css           # Variables, reset, base styles
│   ├── flashcard.css      # Flashcard-specific styles
│   └── components.css     # UI component styles
├── js/
│   └── flashcard-app.js   # Main application logic
├── data/
│   └── flashcards-data.js # Flashcard content
├── assets/
│   └── favicon.svg        # Site favicon
├── README.md              # This file
└── LICENSE                # MIT License
```

## 🎨 Customization

### Adding New Cards

Edit `data/flashcards-data.js`:

```javascript
{
    id: 'category-XXX',           // Unique identifier
    category: 'concepts',          // concepts, security, technology, or billing
    question: 'Your question?',
    answer: 'Your answer.'
}
```

### Changing Colors

Edit CSS variables in `css/main.css`:

```css
:root {
    --aws-orange: #ff9900;         /* Primary accent color */
    --aws-dark: #232f3e;           /* Dark background */
    /* ... more variables */
}
```

### Adding Categories

1. Add category metadata in `data/flashcards-data.js`:
```javascript
const CATEGORIES = {
    // ... existing categories
    newcategory: {
        name: 'New Category',
        icon: '🆕',
        description: 'Description here'
    }
};
```

2. Add a button in `index.html`:
```html
<button class="category-btn" data-category="newcategory">
    <span class="category-btn__icon">🆕</span>
    <span class="category-btn__text">New Category</span>
    <span class="category-btn__count" data-count="newcategory">0</span>
</button>
```

## 🧪 Browser Support

- Chrome 60+
- Firefox 55+
- Safari 11+
- Edge 79+
- Opera 47+

## 📱 Mobile Support

- Responsive design adapts to all screen sizes
- Touch-friendly buttons and cards
- Swipe gestures for navigation
- No pinch-zoom issues

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Contribution Ideas

- [ ] Add more flashcards
- [ ] Add quiz mode with scoring
- [ ] Add spaced repetition algorithm
- [ ] Add dark/light theme toggle
- [ ] Add export/import functionality
- [ ] Add print-friendly view
- [ ] Add audio pronunciation

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## ⚠️ Disclaimer

This is an unofficial study resource. AWS, Amazon Web Services, and the AWS logo are trademarks of Amazon.com, Inc. This project is not affiliated with or endorsed by Amazon Web Services.

## 🙏 Acknowledgments

- AWS for providing excellent documentation
- The cloud certification community for study resources
- Everyone who contributes to open-source education

---

**Good luck on your AWS Cloud Practitioner exam! ☁️🎓**

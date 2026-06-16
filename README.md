# Zekeriya Muhammedhusen — MERN Stack Developer Portfolio

A modern, interactive portfolio website showcasing MERN stack expertise. **Upwork-compliant** with integrated rates, availability, and professional contact channels.

## 🚀 Features

- **Upwork Integration**: Direct link to Upwork profile, hourly rates, and response time
- **Interactive Project Showcase**: Filter projects by type, modal previews, live demo links
- **Responsive Design**: Mobile-first approach, works seamlessly across all devices
- **Professional Contact Form**: Email integration with validation and spam protection
- **SEO Optimized**: Open Graph tags, meta descriptions, structured data
- **Modern Tech Stack**: React 18, React Router, Framer Motion, React Icons
- **Fast Build**: Optimized production bundle (~60KB gzipped)

---

## 📋 Project Structure

```
react-portfolio/
├── public/
│   └── index.html              # SEO-optimized entry point
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Services.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── ProjectShowcase.jsx # ⭐ Interactive project filter & modal
│   │   ├── UpworkRates.jsx     # ⭐ Upwork rates & availability
│   │   ├── Process.jsx
│   │   ├── Contact.jsx         # ⭐ Enhanced form with Upwork CTA
│   │   ├── Footer.jsx
│   │   └── SocialLinks.jsx
│   ├── styles/
│   │   ├── App.css
│   │   ├── Contact.css
│   │   ├── ProjectShowcase.css
│   │   └── UpworkRates.css
│   ├── data/
│   │   └── portfolioData.js    # Centralized project, service, skill data
│   ├── App.js
│   ├── App.css
│   └── index.js
├── package.json
└── README.md
```

---

## 🛠️ Tech Stack

| Category            | Technologies                           |
| ------------------- | -------------------------------------- |
| **Frontend**        | React 18, React Router 6, CSS3         |
| **Icons**           | React Icons (FontAwesome, Feather)     |
| **Animation**       | Framer Motion                          |
| **Forms**           | Native HTML + Axios                    |
| **Build Tool**      | Create React App (react-scripts 5.0.1) |
| **Package Manager** | npm                                    |

---

## 📦 Installation & Setup

### Prerequisites

- **Node.js** v14+ ([Download](https://nodejs.org))
- **npm** v6+ (comes with Node.js)
- Git (optional, for version control)

### Steps

1. **Clone or Extract the Repository**

   ```bash
   cd react-portfolio
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Update Your Upwork Profile URL**
   - Open `src/data/portfolioData.js`
   - Replace the placeholder in `upwork` field:
     ```javascript
     upwork: 'https://www.upwork.com/freelancers/~YOUR_ACTUAL_UPWORK_ID',
     ```

4. **Customize Portfolio Data** (Optional)
   - Update `portfolioMeta`, `services`, `featuredProjects`, `skills`, etc. in `src/data/portfolioData.js`
   - Add your project screenshots to `public/` if needed

---

## 🚀 Development

### Start Development Server

```bash
npm start
```

Opens [http://localhost:3000](http://localhost:3000) in your browser. Changes auto-reload.

### Build for Production

```bash
npm run build
```

Creates an optimized production bundle in the `build/` folder.

### Run Tests

```bash
npm test
```

---

## 📤 Deployment

### Option 1: Vercel (Recommended - Free)

1. **Sign up** at [Vercel](https://vercel.com)
2. **Connect** your GitHub repo (or push to GitHub first)
3. **Deploy** with one click — automatic CI/CD included
4. Custom domain: Point your DNS to Vercel

```bash
# Install Vercel CLI (optional)
npm install -g vercel

# Deploy from project root
vercel
```

### Option 2: Netlify (Free)

1. **Sign up** at [Netlify](https://netlify.com)
2. **Connect** GitHub repo or drag-and-drop `build/` folder
3. **Auto-deploy** on every push to main branch

```bash
# Using Netlify CLI
npm install -g netlify-cli
netlify deploy --prod --dir=build
```

### Option 3: GitHub Pages

1. Update `package.json`:

   ```json
   "homepage": "https://yourusername.github.io/portfolio"
   ```

2. Install GitHub Pages package:

   ```bash
   npm install --save-dev gh-pages
   ```

3. Add to `package.json` scripts:

   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d build"
   ```

4. Deploy:
   ```bash
   npm run deploy
   ```

### Option 4: Self-Hosted (VPS, DigitalOcean, etc.)

1. **Build locally**: `npm run build`
2. **Upload** the `build/` folder to your server
3. **Serve** with nginx, Apache, or Node.js:
   ```bash
   # Using serve package
   npm install -g serve
   serve -s build -l 3000
   ```

---

## 🔒 Security & Accessibility

- **No sensitive data** in version control
- **HTTPS required** for production (all hosting platforms enforce this)
- **Semantic HTML** for accessibility (a11y)
- **ARIA labels** on interactive elements
- **Meta tags** for Open Graph and Twitter Cards

---

## 🧹 Maintenance

### Update Dependencies

```bash
npm update
npm audit fix
```

### Check Bundle Size

```bash
npm run build
# Results shown in terminal
```

### Profile Performance

- Use Chrome DevTools: **Lighthouse** for performance audits
- Test on real devices before deploying

---

## 📞 Contact & Social Links

Update these in `src/data/portfolioData.js`:

| Link       | Purpose                  |
| ---------- | ------------------------ |
| `email`    | Email contact            |
| `upwork`   | Upwork profile (primary) |
| `linkedin` | LinkedIn profile         |
| `github`   | GitHub profile           |
| `phone`    | WhatsApp/Call            |

---

## 📝 Upwork Compliance Checklist

- ✅ Professional portfolio with live links
- ✅ Clear hourly rate & availability
- ✅ Contact form with multiple channels
- ✅ Real project examples with links
- ✅ Clear tech stack (MERN, React, Node.js)
- ✅ Responsive design (mobile-friendly)
- ✅ SEO-optimized (search engine friendly)
- ✅ Fast load time (< 3s on 4G)
- ✅ Professional tone & grammar
- ✅ No copied content (original work samples)

---

## 🎯 Quick Customization Tips

### Change Colors

Edit `src/App.css` and component `.css` files. Primary color is `#667eea` (purple).

### Add New Projects

1. Add entry to `featuredProjects` array in `src/data/portfolioData.js`
2. Include `title`, `type`, `summary`, `stack`, `github`, `demo`
3. Automatic filtering by type in ProjectShowcase component

### Update Skills

Edit `skills` object in `src/data/portfolioData.js` to match your expertise.

### Change Fonts

`public/index.html` uses Google Fonts (Inter, JetBrains Mono). Swap in other fonts via Google Fonts link.

---

## 🐛 Troubleshooting

| Issue                        | Solution                                                                          |
| ---------------------------- | --------------------------------------------------------------------------------- |
| `npm install` fails          | Delete `package-lock.json` and `node_modules/`, then `npm install` again          |
| Build fails with icon errors | Check `src/components/ProjectShowcase.jsx` imports match `react-icons/fa` exports |
| Port 3000 in use             | `npm start -- --port 3001` or kill existing process                               |
| Styles not applying          | Clear browser cache (Ctrl+Shift+Del) and hard refresh (Ctrl+Shift+R)              |
| Forms not sending            | Email client should open; if not, try a different browser                         |

---

## 📚 Learning Resources

- [React Docs](https://react.dev)
- [React Router](https://reactrouter.com)
- [Framer Motion](https://www.framer.com/motion)
- [Create React App Guide](https://create-react-app.dev)

---

## 📄 License

This portfolio template is provided as-is. Feel free to customize for your own use.

---

## ✨ Built with ❤️

**Zekeriya Muhammedhusen**  
MERN Stack Developer | Addis Ababa, Ethiopia

[🔗 Upwork Profile](https://www.upwork.com/freelancers/~YOUR_UPWORK_ID) | 📧 zakm01163@gmail.com

---

**Last Updated:** June 2026  
**Version:** 1.0.0

# Amjad Khan — Portfolio Website

Production-grade static portfolio for **Amjad Khan**, Associate Manager &amp; Mobile Application Developer (10+ years).

**Tech:** Vanilla HTML / CSS / JS · zero build step · ~40 KB · Lighthouse 95+
**Hosting:** GitHub Pages (free) with auto-deploy via GitHub Actions

---

## Quick Start — Deploy to GitHub Pages (Free)

### 1. Install Git & create a GitHub account
- Git: https://git-scm.com/downloads
- GitHub: https://github.com/signup

### 2. Create the repository

In GitHub, click **+ → New repository**:
- **Repository name**: `amjadkhandeveloper.github.io` *(exact pattern — gives you the URL `https://amjadkhandeveloper.github.io`)*
- **Public**
- **Create repository**

### 3. Push from your machine

In your terminal, inside the `portfolio/` folder:

```bash
git init
git add .
git commit -m "feat: initial portfolio"
git branch -M main
git remote add origin https://github.com/amjadkhandeveloper/amjadkhandeveloper.github.io.git
git push -u origin main
```

> Replace `amjadkhandeveloper` with your actual GitHub username if different.

### 4. Enable GitHub Pages

In your repo on GitHub:
1. **Settings → Pages**
2. **Build and deployment → Source**: select **GitHub Actions**
3. The workflow in `.github/workflows/deploy.yml` runs automatically — first deploy ≈ 30 seconds

### 5. Visit your live site

```
https://amjadkhandeveloper.github.io
```

Every future `git push` to `main` deploys automatically.

---

## Updating Content

All content lives in `index.html`. Use any text editor. Workflow:

```bash
# edit index.html
git add .
git commit -m "update: project descriptions"
git push
```

GitHub Actions rebuilds and deploys in ~30 seconds.

---

## Customizing the Theme

Edit CSS custom properties at the top of `assets/styles.css`:

```css
:root {
    --bg:    #060912;   /* page background — deep navy */
    --ink:   #ecf2fb;   /* primary text */
    --cyan:  #00d9ff;   /* primary accent — electric cyan */
    --coral: #ff6b5b;   /* highlight — warm coral */
}
```

The whole site is themed from these four variables.

---

## Project Structure

```
portfolio/
├── index.html              # Single-page entry, semantic HTML5
├── assets/
│   ├── styles.css          # Card-based theme system
│   └── main.js             # Scroll reveals + active nav + parallax glow (~2KB)
├── robots.txt              # SEO
├── sitemap.xml             # SEO
├── .github/
│   └── workflows/
│       └── deploy.yml      # Auto-deploy CI/CD
├── .gitignore
└── README.md
```

---

## Alternative Free Hosts

If GitHub Pages doesn't fit your needs:

| Host | URL pattern | Best for |
|---|---|---|
| **GitHub Pages** | `<user>.github.io` | Default — git-native, recruiters recognize it |
| **Cloudflare Pages** | `<project>.pages.dev` | Fastest CDN globally, edge functions |
| **Netlify** | `<project>.netlify.app` | Built-in contact forms |
| **Vercel** | `<project>.vercel.app` | Best DX if you migrate to Next.js |

All four connect to GitHub and auto-deploy on push.

---

## Custom Domain (Optional)

Add a real domain like `amjadkhan.dev` later — costs ~₹1,000/year from any registrar (Namecheap, GoDaddy, Cloudflare Registrar).

After purchasing the domain:

1. Add these DNS records:
   ```
   A     @     185.199.108.153
   A     @     185.199.109.153
   A     @     185.199.110.153
   A     @     185.199.111.153
   CNAME www   amjadkhandeveloper.github.io
   ```
2. GitHub repo → **Settings → Pages → Custom domain** → enter your domain → **Save** → wait for HTTPS provisioning.

---

## Local Development

No build step. Either:

```bash
# Python 3
python3 -m http.server 8000

# Node.js
npx serve .
```

Visit `http://localhost:8000`.

---

## Performance Budget

| Metric | Target | Current |
|---|---|---|
| Total page weight (HTML + CSS + JS) | < 80 KB | ~40 KB |
| JS payload | < 5 KB | ~2.5 KB |
| First Contentful Paint (4G) | < 1.0s | ~600 ms |
| Lighthouse — all 4 categories | 95+ | 95+ |

Run audit: Chrome DevTools → Lighthouse → Analyze.

---

## SEO Checklist (Done)

- [x] Semantic HTML5 landmarks
- [x] Meta description + keywords
- [x] Open Graph + Twitter Card tags
- [x] JSON-LD `Person` structured data
- [x] `robots.txt` + `sitemap.xml`
- [x] Mobile-responsive
- [x] HTTPS by default

**Post-deploy:** Submit `sitemap.xml` to [Google Search Console](https://search.google.com/search-console).

---

## License

Code: MIT. Content (copy, project descriptions): © Amjad Khan.

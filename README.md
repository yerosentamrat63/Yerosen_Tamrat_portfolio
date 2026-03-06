# Yerosen Tamrat — Portfolio

Built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**.

## 🚀 Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📦 Build for Production

```bash
npm run build
npm start
```

## 🌐 Deploy to Vercel (Recommended)

1. Push this folder to a GitHub repository
2. Go to [vercel.com](https://vercel.com) and import your repo
3. Vercel will auto-detect Next.js and deploy

## 📁 Project Structure

```
yerosen-portfolio/
├── app/
│   ├── layout.tsx       # Root layout + fonts
│   ├── page.tsx         # Main page
│   └── globals.css      # Global styles + animations
├── components/
│   ├── Cursor.tsx       # Custom cursor
│   ├── Nav.tsx          # Navigation
│   ├── Hero.tsx         # Hero section
│   ├── Ticker.tsx       # Scrolling ticker
│   ├── About.tsx        # About section
│   ├── Skills.tsx       # Skills with tab filter
│   ├── Projects.tsx     # Projects section
│   ├── Education.tsx    # Education + certificates
│   ├── Contact.tsx      # Contact section
│   └── Footer.tsx       # Footer
├── public/
│   └── resume.pdf       # Your resume (download button)
└── tailwind.config.ts
```

## ✏️ Updating Content

- **GPA / stats** → `components/Hero.tsx`, `components/About.tsx`, `components/Education.tsx`
- **Projects** → `components/Projects.tsx` (edit the `projects` array)
- **Skills** → `components/Skills.tsx` (edit the `skills` array)
- **Social links** → `components/Contact.tsx` (edit the `socials` array)
- **Resume** → Replace `public/resume.pdf` with your updated resume

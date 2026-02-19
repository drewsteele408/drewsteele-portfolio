# Drew Steele's Portfolio Website

A modern, full-stack developer portfolio built with **React**, **TypeScript**, **Vite**, and **React Router**.

## 🚀 Features

- **Home Page**: Eye-catching hero section with 4 CTA buttons (View Projects, GitHub, Resume, Contact)
- **Projects Page**: Grid layout displaying 3 project cards with technologies, descriptions, and links
- **Project Detail Pages**: Comprehensive pages for each project showing:
  - Problem & Solution narrative
  - Key features (bulleted list)
  - Tech stack & architecture overview
  - Personal implementation details
  - Challenges encountered & solutions
  - Testing & CI/deployment strategy
  - LiveDemo & GitHub repository links
- **About Me Page**: 
  - Personal bio (4-6 sentences)
  - Desired role description
  - Key strengths displayed in a grid format
- **Contact Page**: Direct links to email, LinkedIn, and GitHub
- **Responsive Navigation**: Sticky navbar with links to all pages
- **Mobile Responsive**: Fully responsive design that works on all devices

## 📁 Project Structure

```
src/
├── components/
│   ├── Navigation.tsx       # Top navigation bar
│   └── Navigation.css
├── pages/
│   ├── Home.tsx            # Home page with hero section
│   ├── Home.css
│   ├── Projects.tsx        # Projects grid
│   ├── Projects.css
│   ├── ProjectDetail.tsx  # Individual project details
│   ├── ProjectDetail.css
│   ├── About.tsx          # About me page
│   ├── About.css
│   ├── Contact.tsx        # Contact page
│   └── Contact.css
├── data/
│   └── projects.ts        # Project data definitions
├── App.tsx                # Main app with routing
├── App.css
├── main.tsx               # Entry point
└── index.css              # Global styles
```

## 🎨 Customization Guide

### 1. Update Your Personal Information

**In `src/pages/Home.tsx`:**
- Update the name, tagline, and subtitle
- Update GitHub, Resume, and Contact links

**In `src/pages/Contact.tsx`:**
- Replace `drew@example.com` with your actual email
- Update LinkedIn and GitHub URLs

**In `src/components/Navigation.tsx`:**
- Update `Drew Steele` with your name

### 2. Customize Your Projects

Edit `src/data/projects.ts` to add your actual projects. The data structure includes:

```typescript
{
  id: number;
  title: string;
  description: string;
  stack: string[];
  liveUrl: string;
  repoUrl: string;
  problem: string;
  solution: string;
  keyFeatures: string[];
  architecture: string;
  owned: string[];
  challenges: Array<{ challenge: string; solution: string }>;
  testing: string;
  deployment: string;
  screenshots: string[];
}
```

**Example:**
```typescript
{
  id: 1,
  title: "Your Project Title",
  description: "One-sentence description of your project",
  stack: ["React", "Node.js", "PostgreSQL"],
  liveUrl: "https://your-live-website.com",
  repoUrl: "https://github.com/yourusername/repo-name",
  problem: "What problem did this solve? (2-4 sentences)",
  solution: "How did you solve it? (2-4 sentences)",
  keyFeatures: [
    "Feature 1",
    "Feature 2",
    "Feature 3"
  ],
  architecture: "Description of your tech stack and architecture",
  owned: [
    "What you personally implemented",
    "Another feature you built"
  ],
  challenges: [
    {
      challenge: "Challenge description",
      solution: "How you solved it"
    }
  ],
  testing: "Your testing strategy and coverage",
  deployment: "Your deployment pipeline",
  screenshots: [
    "/screenshots/screenshot1.png",
    "/screenshots/screenshot2.png"
  ]
}
```

### 3. Add Project Screenshots

1. Create a `public/screenshots` folder
2. Add your project screenshots as PNG or JPG files
3. Update the `screenshots` array in your project data

### 4. Customize About Page

Edit `src/pages/About.tsx`:
- Update the bio paragraph (4-6 sentences)
- Update the desired role section
- Customize the 6 strength items with your actual strengths

### 5. Update Colors (Optional)

Edit the CSS variables in `src/App.css`:
```css
:root {
  --primary-color: #2563eb;      /* Main brand color */
  --primary-dark: #1e40af;       /* Darker shade */
  --text-color: #1e293b;         /* Main text color */
  --text-light: #64748b;         /* Secondary text */
  --bg-light: #f8fafc;           /* Light background */
  --border-color: #e2e8f0;       /* Border color */
}
```

### 6. Add Resume

Place your resume PDF in the `public` folder and update the link in `src/pages/Home.tsx`:
```tsx
<a href="/your-resume.pdf" className="btn btn-secondary">
  Resume
</a>
```

## 🛠 Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Run linting
npm run lint

# Preview production build
npm run preview
```

## 📦 Dependencies

- **react** (v19.2.0): UI library
- **react-dom** (v19.2.0): React DOM utilities
- **react-router-dom** (latest): Client-side routing
- **vite**: Build tool and dev server
- **typescript**: Type safety

## 🎯 Next Steps

1. **Customize your project data** in `src/data/projects.ts`
2. **Update personal information** across all pages
3. **Add your screenshots** to the `public/screenshots` folder
4. **Update contact links** with your actual information
5. **Add your resume** to the `public` folder
6. **Deploy** to Vercel, Netlify, or GitHub Pages

## 📝 Tips for a Strong Portfolio

- **Be specific** with your problem/solution descriptions
- **Highlight your role** - focus on what YOU built
- **Use real numbers** - include metrics or statistics if available
- **Show technical depth** - include architecture details and tech choices
- **Demonstrate growth** - mention challenges you overcame
- **Include variety** - show different types of projects or tech stacks

## 🚀 Deployment

The project is ready to deploy to:

- **Vercel**: Push to GitHub and import the repo
- **Netlify**: Connect your GitHub repo
- **GitHub Pages**: Run `npm run build` and deploy the `dist` folder
- **Heroku**: Configure buildpack for Node.js

## ✨ Features Used

- React 19 with hooks
- TypeScript for type safety
- React Router v7 for navigation
- Mobile-first responsive design
- Smooth animations and transitions
- Semantic HTML5
- CSS Grid and Flexbox layouts

---

**Good luck with your full-stack developer applications! 🎉**

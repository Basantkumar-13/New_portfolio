# Basant Yadav — Engineering Portfolio & Command Center

A high-performance personal portfolio, systems showcase, and developer command center built with React 19, Vite, Tailwind CSS v4, and Motion. Designed with an **Obsidian & Mint Glassmorphism** aesthetic, featuring physical spring dynamics, interactive modals, responsive navigation, and strict separation between UI and data.

---

## 1. Project Architecture & Folder Structure

The project follows a clean, modular, and beginner-friendly structure adhering to modern React engineering principles:

```text
new_portfolio/
├── public/                      # Static web assets
│   ├── assets/
│   │   └── workspace-3d.png     # 3D workspace graphic (Hero section)
│   └── resume.pdf               # Downloadable engineering resume
├── src/
│   ├── components/              # Modular, reusable UI components
│   │   ├── analytics/           # Developer observability widgets (Charts, Heatmap, Cards)
│   │   │   ├── ActivityHeatmap.jsx
│   │   │   ├── PlatformCard.jsx
│   │   │   ├── ProgressChart.jsx
│   │   │   └── StatsCard.jsx
│   │   ├── common/              # Shared design system atoms
│   │   │   ├── Button.jsx
│   │   │   ├── Icons.jsx
│   │   │   ├── SectionHeader.jsx
│   │   │   ├── SocialLinks.jsx
│   │   │   └── TechLogos.jsx
│   │   ├── home/                # Home page domain sections
│   │   │   ├── AboutSection.jsx
│   │   │   ├── FeaturedProjects.jsx
│   │   │   ├── Hero.jsx
│   │   │   └── MetricsRow.jsx
│   │   ├── layout/              # Application frame & navigation
│   │   │   ├── MainLayout.jsx   # Top-level shell with header & Outlet
│   │   │   ├── MobileNavigation.jsx # Fixed mobile bottom dock
│   │   │   └── Sidebar.jsx      # Fluid unfolding left navigation dock
│   │   └── projects/            # Engineering projects showcase
│   │       ├── ProjectCard.jsx  # 16:9 preview card with spring hover
│   │       └── ProjectModal.jsx # Architectural inspection modal
│   ├── context/                 # Global React contexts
│   │   └── ThemeContext.jsx     # Dark/Light theme state & local storage persistence
│   ├── data/                    # Single sources of truth for static data
│   │   ├── achievements.js      # Verified credentials & hackathons
│   │   ├── analytics.js         # Telemetry metrics, velocity chart, platforms
│   │   ├── experience.js        # Career trajectory & roles
│   │   ├── profile.js           # Bio, academic details, pillars, contact
│   │   ├── projects.js          # Engineering systems, architecture, links
│   │   └── skills.js            # Categorized tech stack & logos
│   ├── hooks/                   # Custom reusable React hooks
│   │   └── useMediaQuery.js     # Responsive viewport listener
│   ├── pages/                   # Route-level page components
│   │   ├── About.jsx            # /about (reuses AboutSection)
│   │   ├── Achievements.jsx     # /achievements
│   │   ├── Analytics.jsx        # /analytics
│   │   ├── Contact.jsx          # /contact
│   │   ├── Experience.jsx       # /experience
│   │   ├── Home.jsx             # / (Hero, Metrics, About, Featured Projects)
│   │   ├── NotFound.jsx         # 404 Fallback
│   │   ├── Projects.jsx         # /projects (16:9 Grid + Category Filters)
│   │   └── Skills.jsx           # /skills (Technology Showcase)
│   ├── styles/                  # Theme constants & motion physics
│   │   └── theme.js             # Color tokens, Recharts themes, spring physics
│   ├── App.jsx                  # Centralized route definitions & Suspense fallback
│   ├── index.css                # Tailwind CSS v4 design tokens & custom variants
│   └── main.jsx                 # Application entry point with BrowserRouter & ThemeProvider
├── index.html                   # HTML document template
├── package.json                 # Project dependencies & scripts
├── pnpm-lock.yaml               # Deterministic package lockfile
└── vite.config.js               # Vite build configuration with Tailwind plugin
```

---

## 2. Pages & Component Composition

Each page component in `src/pages/` is responsible for composing its domain components and subscribing to centralized data:

| Route | Page Component | Composed Sections / Components | Primary Data Source |
| :--- | :--- | :--- | :--- |
| `/` | `Home.jsx` | `Hero`, `MetricsRow`, `AboutSection`, `FeaturedProjects` | `profile.js`, `analytics.js`, `projects.js` |
| `/skills` | `Skills.jsx` | `SectionHeader`, `TechLogo` | `skills.js` |
| `/projects` | `Projects.jsx` | `SectionHeader`, `ProjectCard`, `ProjectModal` | `projects.js` |
| `/analytics` | `Analytics.jsx` | `StatsCard`, `ProgressChart`, `ActivityHeatmap`, `PlatformCard` | `analytics.js` |
| `/achievements` | `Achievements.jsx` | `SectionHeader`, Credential Cards | `achievements.js` |
| `/experience` | `Experience.jsx` | `SectionHeader`, Timeline Cards | `experience.js` |
| `/contact` | `Contact.jsx` | `SectionHeader`, Direct Channels, Form, `SocialLinks` | `profile.js` |
| `/about` | `About.jsx` | `AboutSection` | `profile.js` |

---

## 3. Routing Architecture

Routing is configured using **React Router v7**:
1. **Entry Point** (`src/main.jsx`): `<BrowserRouter>` is instantiated once at the root level, wrapping `<ThemeProvider>` and `<App />`.
2. **Centralized Route Declarations** (`src/App.jsx`):
   - All routes are lazy-loaded via `React.lazy()` and wrapped in `<Suspense fallback={<RouteLoadingFallback />}>` for optimal code-splitting and instantaneous initial page loads.
   - The primary route structure nests under `MainLayout`:
     ```jsx
     <Routes>
       <Route path="/" element={<MainLayout />}>
         <Route index element={<Home />} />
         <Route path="about" element={<About />} />
         <Route path="projects" element={<Projects />} />
         <Route path="skills" element={<Skills />} />
         <Route path="experience" element={<Experience />} />
         <Route path="analytics" element={<Analytics />} />
         <Route path="achievements" element={<Achievements />} />
         <Route path="contact" element={<Contact />} />
         <Route path="*" element={<NotFound />} />
       </Route>
     </Routes>
     ```
3. **Layout Rendering**: `MainLayout` hosts the persistent desktop `Sidebar`, top header (with resume download and theme toggle), mobile `MobileNavigation`, and renders active route content through `<Outlet />`.

---

## 4. Shared Component Architecture

- **`components/common/`**:
  - `Button.jsx`: Accessible button with primary/secondary/ghost variants and active tap feedback.
  - `Icons.jsx`: Vector SVGs for external brands (GitHub, LinkedIn, Twitter, YouTube).
  - `SectionHeader.jsx`: Standardized title block with category badge, heading, subtitle, and action slot.
  - `SocialLinks.jsx`: Circular social links connected directly to `profileData.socials`.
  - `TechLogos.jsx`: Authentic vector logos for all 25+ technologies across the platform.
- **`components/projects/`**:
  - `ProjectCard.jsx`: Displays a visually dominant 16:9 blueprint preview, status badge, technology chips with authentic logos, GitHub link, and Live Demo button.
  - `ProjectModal.jsx`: Full-screen accessible modal dialog featuring extended technical overview, checklist of key architectural capabilities, complete technology ecosystem, and action triggers.
- **`components/analytics/`**:
  - Modularized observability widgets ready for direct hydration from GitHub or LeetCode APIs without requiring frontend redesign.

---

## 5. Data Architecture & Separation of Concerns

All content and telemetry are decoupled from the presentation layer:
- `src/data/profile.js`: Personal bio, credentials, academic history (PSIT Kanpur), pillars, location, and social links.
- `src/data/projects.js`: Full systems specifications (Neuron, StepWise, Razorpay Clone, AI Content Creator, VaaniERP) including tags, key features, and live URLs.
- `src/data/skills.js`: Structured into 6 categories (Programming Languages, AI & ML, Generative AI, Frontend, Databases, Developer Tools) with zero artificial percentages.
- `src/data/achievements.js`: Verified milestones, issuer data, and credential dates.
- `src/data/experience.js`: Chronological career history and technical contributions.
- `src/data/analytics.js`: Metrics, commit counts, monthly velocity points, and platform footprints.

---

## 6. Installation & Development Commands

### Prerequisites
- **Node.js**: `v18+` or `v20+`
- **Package Manager**: `pnpm` (recommended), `npm`, or `yarn`

### Setup
```bash
# Clone the repository
git clone <repository-url>
cd new_portfolio

# Install dependencies
pnpm install
```

### Development Server
```bash
# Start Vite development server with Hot Module Replacement (HMR)
pnpm run dev
```
The site will be available at `http://localhost:5173/`.

### Production Build & Preview
```bash
# Build optimized production bundle to /dist
pnpm run build

# Preview production build locally
pnpm run preview
```

---

## 7. Verification & Build Quality

- **Zero Bundle Warnings**: Complete tree-shaking and module resolution with 0 errors.
- **TypeScript & React 19 Ready**: Adheres to modern React component composition.
- **Accessibility & Contrast**: Conforms to WCAG AA color contrast standards across both obsidian dark and light modes.

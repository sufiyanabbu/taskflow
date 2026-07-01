# TaskFlow — Team Task Management Dashboard

A production-quality React frontend application built to demonstrate real-world component architecture, state management, routing, and UI design patterns.

![TaskFlow Dashboard](https://img.shields.io/badge/React-18-blue?logo=react) ![Router](https://img.shields.io/badge/React_Router-6-red?logo=reactrouter) ![CSS Modules](https://img.shields.io/badge/CSS-Modules-orange)

---

## Live Demo

🔗 [View Live App](#) ← will update after deployment

---

## Screenshots

> Dashboard with real-time filtering and stats bar

> Settings page with profile form and toggle switches

---

## Features

- **Dashboard** — task list with real-time search, status and priority filters, and a stats bar showing task counts
- **My Tasks** — filtered view showing only tasks assigned to the current user
- **Team** — team member cards with role and task count
- **Settings** — profile form with controlled inputs and preference toggles
- **Active Navigation** — sidebar highlights the current page using React Router NavLink
- **Responsive Layout** — sidebar + content shell that scales across screen sizes

---

## Tech Stack

| Technology | Purpose |
|---|---|
| React 18 | UI component library |
| React Router v6 | Client-side routing |
| CSS Modules | Scoped component styling |
| CSS Variables | Design system / theming |

---

## Project Structure
README first — because when you deploy to Vercel and share the live link, the GitHub repo link goes with it. Recruiters will land on your repo and the README is the first thing they see. Let's make it count.
Create the README

In VS Code, open README.md in your project root (it already exists from CRA — we'll replace it entirely).

Replace everything in it with this:
markdown

# TaskFlow — Team Task Management Dashboard

A production-quality React frontend application built to demonstrate real-world component architecture, state management, routing, and UI design patterns.

![TaskFlow Dashboard](https://img.shields.io/badge/React-18-blue?logo=react) ![Router](https://img.shields.io/badge/React_Router-6-red?logo=reactrouter) ![CSS Modules](https://img.shields.io/badge/CSS-Modules-orange)

---

## Live Demo

🔗 [View Live App](#) ← will update after deployment

---

## Screenshots

> Dashboard with real-time filtering and stats bar

> Settings page with profile form and toggle switches

---

## Features

- **Dashboard** — task list with real-time search, status and priority filters, and a stats bar showing task counts
- **My Tasks** — filtered view showing only tasks assigned to the current user
- **Team** — team member cards with role and task count
- **Settings** — profile form with controlled inputs and preference toggles
- **Active Navigation** — sidebar highlights the current page using React Router NavLink
- **Responsive Layout** — sidebar + content shell that scales across screen sizes

---

## Tech Stack

|
 Technology 
|
 Purpose 
|

|
---
|
---
|

|
 React 18 
|
 UI component library 
|

|
 React Router v6 
|
 Client-side routing 
|

|
 CSS Modules 
|
 Scoped component styling 
|

|
 CSS Variables 
|
 Design system / theming 
|


---

## Project Structure

src/
├── components/
│ ├── Button/ # Reusable button with 3 variants
│ ├── Card/ # Base card + TaskCard
│ ├── Layout/ # AppLayout shell
│ ├── Sidebar/ # Navigation with active link highlighting
│ ├── StatsBar/ # Derived task count stats
│ └── TaskFilters/ # Search + filter controls
├── pages/
│ ├── Dashboard/ # Main view with filtering logic
│ ├── MyTasks/ # User-specific task view
│ ├── Team/ # Team member overview
│ └── Settings/ # Profile and preferences
├── data/
│ └── tasks.js # Mock task data
└── styles/
├── variables.css # Design tokens
└── reset.css # CSS reset
---

## Architecture Decisions

**CSS Variables for design system** — all colors, spacing, typography, and radii are defined once in `variables.css` and referenced everywhere. Changing the accent color updates the entire app.

**CSS Modules for scoped styles** — each component has its own `.module.css` file. No class name collisions, no global stylesheet bloat.

**Smart vs Presentational components** — Dashboard owns all filter state and passes it down to TaskFilters (presentational). TaskFilters holds zero state — it just renders and calls handlers.

**Derived data over stored state** — `filteredTasks` and stats (To Do count, Done count) are computed from the source array on every render rather than stored in separate state variables.

**Mock data layer** — `src/data/tasks.js` mimics a real API response shape, making it straightforward to swap in a real backend later.

---

## Getting Started

```bash
# Clone the repository
git clone https://github.com/sufiyanabbu/taskflow.git

# Install dependencies
cd taskflow
npm install

# Start development server
npm start
```

App runs at `http://localhost:3000`

---

## What I Learned

- Component-based architecture and when to split components
- Lifting state up and props-driven design
- React Router v6 with NavLink active states
- Controlled inputs and form state in React
- Derived data patterns with array methods
- CSS Modules and design system thinking with CSS variables
- Professional Git workflow with milestone-based commits
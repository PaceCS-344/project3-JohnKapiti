# Portfolio Website Build Guide (For Claude / Copilot)

## Project Goal
Create a clean, modern, responsive personal portfolio website for John Kapiti.

The website should feel:
- Professional
- Modern
- Easy to navigate
- Minimal but visually polished
- Focused on software development and technical projects

---

# Overall Website Structure

```text
Navbar
Hero Section
About Me
Featured Projects
Skills
Resume Section
Contact Section
Footer
```

---

# Preferred Tech Stack

## Frontend
- React
- Next.js
- Tailwind CSS

## Deployment
- Vercel

## Optional Extras
- Framer Motion (animations)
- Lucide React Icons
- EmailJS or Formspree for contact form

---

# Color / Design Direction

## Theme
Dark mode preferred.

## Suggested Colors

Background:
```text
#0F172A
```

Card Background:
```text
#1E293B
```

Accent:
```text
#3B82F6
```

Text:
```text
#F8FAFC
```

Muted Text:
```text
#94A3B8
```

---

# Navbar Section

## Layout
```text
[ John Kapiti ]           [ Home | Projects | Skills | Resume | Contact ]
```

## Requirements
- Sticky navbar
- Smooth scrolling
- Mobile responsive hamburger menu

---

# Hero Section

## Layout
Large centered introduction.

```text
Hi, I'm John Kapiti

Computer Science Student
IT Support Technician
Software Developer
```

## Buttons
```text
[ View Projects ]
[ Download Resume ]
```

## Optional
- Small animated typing effect
- Subtle fade-in animation

---

# About Me Section

## Goal
Short personal introduction.

## Content To Include
- Pace University student
- Computer Science major
- Minor in Mathematics
- Vice President of Coding Club
- IT Support Technician
- Interests in backend systems, iOS development, databases, APIs, and software engineering

## Tone
Professional but slightly personal and approachable.

---

# Featured Projects Section

## Layout
3 project cards minimum.

Each card should contain:
```text
Project Image
Project Name
Short Description
Tech Stack
GitHub Button
Live Demo Button (optional)
```

---

# Project #1

## Name
Plastic Prophet

## Description
Credit card recommendation app that determines the best card to use at nearby merchants using location services and merchant classification.

## Tech Stack
- SwiftUI
- MapKit
- Core Location
- AWS Lambda
- PostgreSQL
- OpenAI API

---

# Project #2

## Name
Contact Database System

## Description
Relational contact management database with stored procedures, triggers, and normalized table structures.

## Tech Stack
- SQL Server
- SSMS
- SQL
- Stored Procedures
- Triggers

---

# Project #3

## Name
FastAPI Backend API

## Description
Backend API with authentication, JWT login system, CRUD endpoints, and MariaDB integration.

## Tech Stack
- FastAPI
- SQLModel
- MariaDB
- Docker
- JWT Authentication

---

# Skills Section

## Categories

### Languages
- Python
- Java
- SQL
- JavaScript
- C
- HTML/CSS

### Frameworks / Libraries
- FastAPI
- React
- Next.js
- SQLModel

### Tools
- GitHub
- Docker
- AWS
- VS Code
- Xcode

### Databases
- PostgreSQL
- MariaDB
- SQL Server

---

# Resume Section

## Layout
Short experience overview with download button.

```text
[ Download Resume PDF ]
```

## Include
- Education
- Experience
- Leadership
- Technical Skills

---

# Contact Section

## Include
- Email
- LinkedIn
- GitHub

## Optional
Working contact form.

---

# Footer

Simple footer.

```text
© 2026 John Kapiti
```

---

# Assets / Materials Needed From User

## REQUIRED

### 1. Resume PDF
Need:
```text
resume.pdf
```

---

### 2. GitHub Profile Link
Example:
```text
https://github.com/jkapiti7
```

---

### 3. LinkedIn Profile Link
Need your actual LinkedIn URL.

---

### 4. Email Address
Professional contact email.

---

### 5. Project Images / Screenshots

Need screenshots for:
- Plastic Prophet
- Database Project
- FastAPI Project

Recommended:
```text
PNG format
1920x1080 preferred
```

---

### 6. Personal Photo (Optional)
Professional headshot or casual clean photo.

Recommended:
```text
Square image
PNG/JPG
```

---

# Optional Assets

## Icons
Could use:
- Lucide Icons
- Font Awesome

---

## Animations
Could use:
- Framer Motion

---

## Fonts

Recommended:
```text
Inter
Poppins
Space Grotesk
```

---

# Folder Structure

```text
portfolio-site/
│
├── public/
│   ├── images/
│   ├── resume/
│
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Projects.jsx
│   ├── Skills.jsx
│   ├── Resume.jsx
│   ├── Contact.jsx
│   └── Footer.jsx
│
├── pages/
│
├── styles/
│
└── package.json
```

---

# Mobile Responsiveness Requirements

Website must:
- Work on desktop
- Work on tablet
- Work on mobile
- Stack sections vertically on smaller screens

---

# UI Expectations

The website should:
- Use smooth spacing
- Have rounded cards
- Include hover animations
- Look modern and polished
- Avoid clutter
- Maintain strong readability

---

# SEO / Extra Features

Optional:
- Metadata tags
- Open Graph preview
- Favicon
- Dark/light mode toggle

---

# Important Notes For Claude/Copilot

## PRIORITIES
1. Clean UI
2. Responsive layout
3. Professional appearance
4. Smooth animations
5. Readable typography

## DO NOT
- Overcomplicate the design
- Add excessive colors
- Make the page overcrowded
- Use outdated styling

## DESIGN INSPIRATION
Think:
- Modern developer portfolio
- Vercel style
- Minimal SaaS landing page
- Clean dashboard aesthetic

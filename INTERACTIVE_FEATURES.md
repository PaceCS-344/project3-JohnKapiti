# Interactive UI Features - Lab 2

## Overview
This document describes the three interactive UI elements added to the John Kapiti portfolio website to enhance user engagement and showcase React development skills.

---

## Feature 1: Animated Skill Cards

### Description
The Skills section now features animated cards that slide up into view with a staggered entrance effect when the page loads. Additionally, the cards have a hover effect that slightly scales them up and increases the shadow depth for enhanced interactivity.

### Implementation Details
- **Technology**: CSS animations and Tailwind CSS
- **Animation Type**: Staggered slide-up entrance with 0.1s delay between each card
- **Hover Effect**: Scale (1.05x) and enhanced shadow on hover
- **Location**: `src/components/Skills.jsx` and `src/styles.css`

### Why This Feature?
- Creates a polished, professional feel when users scroll to the skills section
- Draws attention to the skills section with smooth, eye-catching animations
- Provides visual feedback on interaction through the hover scale effect
- Shows competency with CSS animations and React component styling

### Key Code Changes
```css
@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.skill-card-0, .skill-card-1, .skill-card-2, .skill-card-3 {
  animation: slideUp 0.6s ease-out forwards;
  /* with increasing animation-delay */
}
```

---

## Feature 2: Expandable Hamburger Menu

### Description
The navigation menu on mobile devices features a fully functional hamburger menu that expands and collapses on click. The menu slides down smoothly with all navigation links, and automatically closes when a link is clicked.

### Implementation Details
- **Technology**: React hooks (useState), Tailwind CSS
- **Behavior**: Toggle on hamburger click, auto-close on link click
- **Responsive**: Only visible on mobile (md: breakpoint), hidden on desktop
- **Location**: `src/components/Navbar.jsx`

### Why This Feature?
- Essential for mobile UX - hamburger menus are the standard for mobile navigation
- Already implemented and functional in the existing codebase
- Shows understanding of responsive design and mobile-first development
- Demonstrates React state management with hooks

### Key Code Features
- Mobile menu toggle with smooth transitions
- Purple theme consistency with navbar
- Auto-close functionality for better UX
- Accessible navigation structure

---

## Feature 3: SpongeBob Thinking Easter Egg

### Description
A fun easter egg hidden on the profile picture in the About Me section. When users hover over the circular profile photo for 2 seconds, it fades out and reveals a SpongeBob SquarePants "thinking" video that plays on loop while hovering. Moving the mouse away stops the video and returns to the original photo.

### Implementation Details
- **Technology**: React hooks (useState, useRef), HTML5 video, JavaScript timers
- **Trigger**: 2-second hover detection using `setTimeout`
- **Video Format**: MP4 video file
- **Animation**: Smooth opacity transition between image and video
- **Location**: `src/components/About.jsx`

### Why This Feature?
- Adds an element of surprise and delight for engaged users
- Demonstrates advanced React concepts (refs, timers, state management)
- Creates a memorable user experience
- Shows creativity and personality in portfolio design
- Encourages users to explore and interact with the site

### How to Use
1. Navigate to the About Me section
2. Hover your mouse over the circular profile photo
3. Wait 2 seconds
4. Watch the SpongeBob video appear!
5. Move your mouse away to return to the profile photo

### Implementation Notes
```javascript
const [showEasterEgg, setShowEasterEgg] = useState(false);
const hoverTimeoutRef = useRef(null);

const handleMouseEnter = () => {
  hoverTimeoutRef.current = setTimeout(() => {
    setShowEasterEgg(true);
  }, 2000);
};

const handleMouseLeave = () => {
  if (hoverTimeoutRef.current) {
    clearTimeout(hoverTimeoutRef.current);
  }
  setShowEasterEgg(false);
};
```

---

## Setup Instructions

### To add the SpongeBob video:
1. Obtain a SpongeBob SquarePants "thinking" video (MP4 format)
2. Place it in the `/public` folder as `spongebob-thinking.mp4`
3. The video will automatically be served and played in the easter egg

### To test the features:
```bash
npm run build
npm start
```

Then navigate to `http://localhost:3000` and test each feature:
- Scroll to Skills section to see card animations
- Test hamburger menu on mobile or resize browser to mobile width
- Hover over profile picture for 2+ seconds to trigger easter egg

---

## Browser Compatibility
- Animated cards: All modern browsers (Chrome, Firefox, Safari, Edge)
- Hamburger menu: All modern browsers with JavaScript enabled
- Easter egg video: Requires HTML5 video support (all modern browsers)

---

## Future Enhancements
- Add more easter eggs throughout the site
- Implement CSS animations library (Framer Motion) for more complex animations
- Add sound effects to interactions
- Create additional theme variations

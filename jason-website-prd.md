# Product Requirements Document: Jason Nguyen Personal Website

## Overview
This document outlines the requirements for a personal website for Jason Nguyen. The website will be minimalistic, using only black and white color schemes, and will serve as a personal reflection and information space.

## Goals
- Create a simple, elegant personal website
- Showcase Jason's traits, blogs, and journal entries
- Maintain a minimalist design approach
- Enable easy future updates

## Non-Goals
- Complex backend functionality
- User accounts or authentication
- E-commerce capabilities
- Advanced interactivity

## Technical Specifications
- Frontend only implementation
- Technologies: HTML, CSS (minimal JavaScript if necessary)
- Responsive design for mobile and desktop viewing
- Black and white color scheme only

## Site Structure

### Global Elements
- **Header**: Minimalist header with name "Jason Nguyen"
- **Navigation**: Simple text links to all pages
- **Footer**: Copyright information, year

### Homepage
- Purpose: Serve as a directory to subpages
- Content:
  - Brief welcome message (1-2 sentences)
  - Directory links to subpages with brief descriptions
  - Optional: Single professional photo
- Design:
  - Centered content
  - Ample white space
  - Large, readable typography

### Subpage #1: Blogs
- Purpose: Display blog posts
- Content:
  - List of blog posts in reverse chronological order
  - Each entry includes:
    - Title
    - Date
    - Brief excerpt/summary
    - "Read more" link to full post
- Design:
  - Clean list format
  - Clear visual hierarchy
  - Consistent spacing

### Subpage #2: Journal
- Purpose: More personal/reflective content than the blog
- Content:
  - Journal entries in reverse chronological order
  - Each entry includes:
    - Date
    - Title (optional)
    - Full journal content
- Design:
  - Typographic focus
  - Simple dividers between entries
  - Subtle date indicators

### Subpage #3: Jason Trait Web
- Purpose: Visual representation of Jason's self-assessment
- Content:
  - Organized display of traits and their ratings
  - Categories:
    - Personality
    - Traits
    - Physical
    - Random tendencies
- Design:
  - Structured layout with clear categories
  - Simple rating visualization (e.g., horizontal bars, dots)
  - Ability to be updated over time
  - Optional spider/radar chart visualization for key traits

## Detailed Content Requirements

### Jason Trait Web Page Content
The trait web page should display the following content, organized by category:

**Personality**
- Caring
- Self-less (80/20)
- Compassionate
- Friendly
- Likeable
- Self-aware
- Agreeableness (4/10)

**Traits**
- Patience, 5/10
- Technology Literacy, 8/10
- Negotiation, 6.5/10
- Grit, 8.5/10
- Small talk, 6/10
- Planning, 9/10
- Learning, 4/10
- Leadership, *7/10 (Has not been flexed in a while)
- Adapability, 9/10
- Agency when locked in, 10/10
- Agency when not locked in, 2/10
- Communication**
  - Verbal, 5/10
  - Written, 7/10
- Visionary, [no rating provided]
- Memory/retention, 3/10
- Attention to detail, 3/10
- Critical thinking, 7/10
- Problem-solving, 8/10
- Creativity, 8/10
- Stress Management, 6/10
- Conflict Resolution, 8/10

**Physical**
- Cardio, below average
- Lifts, above average
- Looks, above average
- Asthma
- Eczema

**Random tendencies I couldn't categorize**
- Works in sprints (7-8 days on, 2 days off)
- Difficult time getting into "locked-in" zone
- When in "locked-in" zone, extremely high output
- Hard time saying No to social events, drinking
- Self-sabotage, very high
- Inconsistently dependable

## User Experience

### Interaction Design
- Simple page transitions
- Standard link behaviors
- Optional hover effects (subtle, maintaining minimalist aesthetic)

### Accessibility
- High contrast black and white design
- Adequate text sizes
- Alternative text for any images
- Semantic HTML structure

## Design Guidelines

### Typography
- Font family: Inter (https://fonts.google.com/specimen/Inter)
- Limited font variations (2-3 maximum)
- Font sizes:
  - Headings: 24-32px
  - Body text: 16-18px
  - Secondary text: 14px

### Color Palette
- Primary background: White (#FFFFFF)
- Primary text: Black (#000000)
- Optional accents: Light gray (#EEEEEE) for section backgrounds
- Optional accents: Dark gray (#333333) for secondary text

### Layout
- Generous whitespace
- Consistent margins and padding
- Single column layout for main content
- Maximum content width: 800px centered

## Future Considerations
- Ability to add new traits to the trait web
- Expandable blog/journal archive
- Simple contact form
- Printable version of trait web
- Light JavaScript for trait web visualization

## Implementation Notes
- All pages should be static HTML files
- CSS should be in a separate file
- Minimal inline styles if needed
- Simple directory structure
- Files should use lowercase naming with hyphens (e.g., trait-web.html)

## Success Criteria
- Website loads quickly (under 2 seconds)
- Content is easily readable
- Navigation between pages is intuitive
- Site appears correctly on mobile and desktop devices
- Trait web clearly communicates self-assessment data

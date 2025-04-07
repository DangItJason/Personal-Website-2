# Jason Nguyen Personal Website

A minimalistic personal website featuring a black and white design aesthetic, created according to the provided Product Requirements Document.

## Project Overview

This website serves as a personal reflection and information space for Jason Nguyen. It features:

- Simple, elegant design with a black and white color scheme
- Responsive layout for both mobile and desktop viewing
- Minimal JavaScript, only used for the trait web visualization
- Inter font from Google Fonts

## Pages

- **Homepage**: Directory to all subpages with brief descriptions
- **Blog**: Displays blog posts in reverse chronological order
- **Journal**: More personal/reflective content than the blog
- **Trait Web**: Visual representation of Jason's self-assessment across various categories

## Directory Structure

```
/
├── index.html           # Homepage
├── blog.html            # Blogs page
├── journal.html         # Journal page
├── trait-web.html       # Jason Trait Web page
├── css/
│   ├── main.css         # Global styles
│   ├── blog.css         # Blog-specific styles
│   ├── journal.css      # Journal-specific styles
│   └── trait-web.css    # Trait web visualization styles
├── js/
│   └── trait-web.js     # Minimal JS for trait visualization
└── assets/
    └── images/          # For optional profile photo
```

## Features

- Clean typographic hierarchy using Inter font
- Structured trait assessment with visual rating bars
- Radar chart for key traits visualization
- Responsive design adapting to different screen sizes

## Technical Implementation

- HTML5 for semantic structure
- CSS3 for styling (using CSS variables for consistency)
- Minimal vanilla JavaScript
- Chart.js for the radar chart visualization
- Google Fonts for the Inter typeface

## Future Enhancements

- Ability to add new traits to the trait web
- Expandable blog/journal archive
- Simple contact form
- Printable version of trait web

## Viewing the Website

Simply open the `index.html` file in a web browser to view the website locally. 
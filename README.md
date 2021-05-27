# Frontend Mentor - Fylo dark theme landing page solution

![Preview](/design/desktop-preview.jpg)

## Table of contents

- [Frontend Mentor - Fylo dark theme landing page solution](#frontend-mentor---fylo-dark-theme-landing-page-solution)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Screenshot - Check the designs in detail](#screenshot---check-the-designs-in-detail)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
    - [Continued development](#continued-development)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot - Check the designs in detail

- [Mobile](/design/mobile.png)

- [Desktop](/design/desktop.png)

- [External page, link destination](design/external-page.png)

### Links

- [GitHub repository](https://github.com/isaacnovaes/fylo-dark-theme-landing-page)
- [Live site](https://youthful-stonebraker-6efbf6.netlify.app)

## My process

### Built with

- Mobile-first workflow
- Animations
- Semantic HTML5 markup
- CSS custom properties
- SASS
- Flexbox
- CSS Grid
- Styled Components

### What I learned

I have realized that SASS makes CSS so much more practical. Mainly because of SASS mixins, file structure, and vendors automatically generated. By using a specific SASS file to style a component, I could code more efficiently and make my code reusable, which is great! In addition, I came up with a few animations, which is something that I like to do.

```css
@mixin font ($font, $weight) {
  font-family:$font;
  font-weight: $weight;
  color: $white;  
}
@mixin width-margin {
 width: 90%;
 max-width: 600px;
 margin: 0 auto;
}
@mixin set-text-title () {
  @include width-margin; 
  @include font($open,bolder) ;
  text-align: center;
  font-size:2rem;
}
@mixin set-button() {
  display: block;
  text-decoration: none;
  @include font ($raleway, 500);
  font-size: 1.2rem;
}
```
```css
header {
    animation: animate-header 1s both;
}
@keyframes animate-header {
    from {transform: translateX(-150%);}
    to {transform: translateX(0);}
}

.block-first-intro, .block-second-grid-first{
    animation: animate-block-first-intro 1s 1s both;
}

@keyframes animate-block-first-intro {
    from {transform: translateY(150vh);}
    to {transform: translateY(0);}
}

```



### Continued development

Well, I think I took a few more hours than what I should to complete this challenge. I did it because I didn't have enough practice and experience to code fast. However, surprisingly, after I got how the SASS file structure works, it went so fast. So I plain on taking another HTML-CSS challenge so that I can solidify my knowledge and practise the development workflow. 



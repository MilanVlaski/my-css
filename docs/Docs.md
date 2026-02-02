## Goals
The goal of this stylesheet is to have a theme that's useful for my usecases. That means that an easy way to make landing pages is non-negotiable. This constrains spacing, more or less, ie, padding on <section> is nice, because it allows the section to have a background. But since the padding exists, there is no need for the first and last text elements to have margin. 

If the landing page is for a *web application*, then all of the widgets are also required.

## Color
This stylesheet was made by ~~copying~~ reverse-engineering [shoelace.style](https://shoelace.style).
The colors can be modified by defininig your semantic colors, usually primary and neutral, on a scale from 50 to 950. Note that the top and bottom parts of "neutral" are used for text and background colors, respectively. Use [tints.dev](https://tints.dev) to generate a 50-950 color palette. It's expected that this will lead to good looking semantic-color-specific components, e.g., button primary. If it doesn't, feel free to edit the part of the stylesheet that applies the color transformation, for example:

```css
/* The semantic color application to individual components can be customized per project */
:is(button, .button, input[type='submit'], input[type='button'], input[type='reset'], input[type='image']).primary {
    /* change these entirely, if you want */
    --button-background: var(--color-primary-600);
    /* Want black text on yellow primary color? Go ahead! */
    --button-foreground: var(--color-neutral-0);
    --input-border-color: var(--color-primary-600);
    
    --button-background-hover: var(--color-primary-500);
    --button-border-color-hover: var(--color-primary-500);
    --button-foreground-hover: var(--color-neutral-0);
    
    --button-background-active: var(--color-primary-600);
    --button-border-color-active: var(--color-primary-600);
    --button-foreground-active: var(--color-neutral-0);
}
```

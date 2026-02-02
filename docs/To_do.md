- [x] Define neutrals https://tailwindcss.color-get.com/code/fafafa
- [x] Reverse engineer the shoelace button style wise, with hard coded values.
- [x] Parameterize the values into "button" and "input" specific ones, with the hard coded colors
- [x] Parameterize those colors into neutrals, defining "shifts" as usually it won't fit 100%
- [x] Define dark mode, watch it break, define a custom dark mode mapping
- [ ] Icon buttons
- [ ] Card
- [ ] Alert style + Alert mechanism (toast)
- [ ] Dialog
  - [ ] Close by clicking overlay, on by default. X icon.
- [ ] Checkbox, Radio, Input, Color Picker (Form Elements)
  - [ ] Select?
  - [ ] Password
  - [ ] Add icons
  - [ ] Range
  - [ ] Input may have helpt text below (better than placeholder)
  - [ ] Clearable, means it has a nice x button
  - [ ] Switch?
- [ ] Dropdown
- [ ] Details
- [ ] Drawer = Important for menu
- [ ] Tree (only for desktop)

# Svgs
1. The External File (icons.svg)
Create this file in your project folder. Note the xmlns attribute; it's required for external SVG files to render correctly.

XML

<svg xmlns="http://www.w3.org/2000/svg">
  <symbol id="icon-github" viewBox="0 0 24 24">
    <path d="M12 0C5.37 0 0 5.37 0 12C0 17.31 3.435 21.795 8.205 23.385C8.805 23.49 9.03 23.13 9.03 22.815C9.03 22.53 9.015 21.585 9.015 20.58C6 21.135 5.22 19.845 4.98 19.17C4.845 18.825 4.26 17.76 3.75 17.475C3.33 17.25 2.73 16.695 3.735 16.68C4.68 16.665 5.355 17.55 5.58 17.91C6.66 19.725 8.385 19.215 9.075 18.9C9.18 18.12 9.495 17.595 9.84 17.295C7.17 16.995 4.38 15.96 4.38 11.37C4.38 10.065 4.845 8.985 5.61 8.145C5.49 7.845 5.07 6.615 5.73 4.965C5.73 4.965 6.735 4.65 9.03 6.195C9.99 5.925 11.01 5.79 12.03 5.79C13.05 5.79 14.07 5.925 15.03 6.195C17.325 4.635 18.33 4.965 18.33 4.965C18.99 6.615 18.57 7.845 18.45 8.145C19.215 8.985 19.68 10.05 19.68 11.37C19.68 15.975 16.875 16.995 14.205 17.295C14.64 17.67 15.015 18.39 15.015 19.515C15.015 21.12 15 22.41 15 22.815C15 23.13 15.225 23.505 15.825 23.385C18.2072 22.5808 20.2773 21.0498 21.7438 19.0074C23.2103 16.9651 23.9994 14.5143 24 12C24 5.37 18.63 0 12 0Z" />
  </symbol>

  <symbol id="icon-mail" viewBox="0 -960 960 960">
    <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280 320-200v-80L480-520 160-720v80l320 200Z" />
  </symbol>
  
  </svg>
2. The Updated HTML (index.html)
Now your HTML is much cleaner. You just point the href to the filename followed by the #ID of the symbol.

HTML

<li>
    <svg class="nav-icon">
        <use href="icons.svg#icon-github"></use>
    </svg>
    <a href="https://github.com/MilanVlaski">github.com/MilanVlaski</a>
</li>
<li>
    <svg class="nav-icon">
        <use href="icons.svg#icon-mail"></use>
    </svg>
    <span>milan.vlaski321@gmail.com</span>
</li>

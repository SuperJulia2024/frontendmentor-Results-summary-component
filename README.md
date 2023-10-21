# Frontend Mentor - Results summary component solution

This is a solution to the [Results summary component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/results-summary-component-CE_K6s0maV). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- **Bonus**: Use the local JSON data to dynamically populate the content

### Screenshot

![](./screenshot.png)

### Links

- Solution URL: [https://github.com/SuperJulia2024/frontendmentor-Results-summary-component](https://github.com/SuperJulia2024/frontendmentor-Results-summary-component)
- Live Site URL: [https://superjulia2024.github.io/frontendmentor-Results-summary-component](https://superjulia2024.github.io/frontendmentor-Results-summary-component/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- Javascript

### What I learned

Reading a local JSON file using fetch()

```js
window.onload = function (e) {
  const v_reaction = document.getElementById("value_reaction");
  const v_memory = document.getElementById("value_memory");
  const v_verbal = document.getElementById("value_verbal");
  const v_visual = document.getElementById("value_visual");

  fetch("./data.json")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      v_reaction.innerHTML = data[0].score;
      v_memory.innerHTML = data[1].score;
      v_verbal.innerHTML = data[2].score;
      v_visual.innerHTML = data[3].score;
    });
};
```

## Author

- Frontend Mentor - [@SuperJulia2024](https://www.frontendmentor.io/profile/SuperJulia2024)

## Acknowledgments

Thanks for FrontEndMentor for this amazing challenge

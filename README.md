# Unit Conversion

This is a solution to the **Solo Project** "Unit Conversion" from ["Learn JavaScript"](https://scrimba.com/learn/learnjavascript) course by [Scrimba](https://scrimba.com)

![Preview](./assets/vid/preview.gif)

## Table of contents

📌 [The Challenge](#the-challenge)

📌 [Screenshot](#screeshot)

📌 [Links](#links)

📌 [Built with](#built-with)

📌 [I learned](#i-learned)

📌 [Useful resources](#useful-resources)

📌 [Author](#author)

## The Challenge
🎯 Generate all conversions when the user clicks **"Convert"**

🎯 Round the numbers down to three decimal places

🎯 See hover states for the **"Convert"** button and in footer links

🎯 View the optimal layout depending on their device's screen size

🎯 Button disabled until user enters a value in input

## Screeshot
### 📱 Mobile
![Mobile](./assets/img/mobile-preview.webp)
### 💻 Desktop
![Desktop](./assets/img/desktop-preview.webp)

## Links
[Demo](https://mendez-v.github.io/unit-conversion/) 👀

[Scrim](https://scrimba.com/scrim/c6rKg6hM) 👀

## Built with

✅ Semantic HTML markup

✅ CSS custom properties

✅ CSS Grid

✅ Mobile-first

## I learned
🔰 Remove the increment/decrement buttons from the `input` tag of type `number`.
```css
input[type=number]::-webkit-inner-spin-button, 
input[type=number]::-webkit-outer-spin-button { 
  -webkit-appearance: none; 
  margin: 0; 
}
input[type=number] {
  -moz-appearance:textfield !important;
  appearance:textfield !important;
}
```
🔰 `.toFixed(digits)` - Rounds a number to a specified number of decimal places and returns a string representing the rounded number. This method takes an argument specifying the number of decimal places to round to.
```js
(unit.liter * inputValue).toFixed(3)
// 0.264172 * 20 = 5.28344 ➡ 5.283
```

## Useful resources

🖼 Favicon - [Data Sync](https://iconscout.com/icons/data-sync) by [Vectors Point](https://iconscout.com/contributors/hana-arif)

## Author

✨ Frontend Mentor - [@mendez-v](https://www.frontendmentor.io/profile/mendez-v)
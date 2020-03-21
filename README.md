<p align="center">
  <img src="https://tasteink.github.io/assets/assets/images/logo.svg" alt="Taste Ink Logo" />
  <h1 align="center">@tasteink/glitch-styles</h1>
  <h2 align="center">Easily add subtle glitch effects to your app.</h2>
</p>

---

<p align="center">
  <a href="https://07jue.csb.app/" target="_blank">demo</a> | <a href="https://npmjs.com/package/@tasteink/glitch-styles" target="_blank">npm package</a> | <a href="https://www.pinterest.com/search/pins/?q=glitch%20text&rs=typed&term_meta[]=glitch%7Ctyped&term_meta[]=text%7Ctyped" target="_blank">glitch design</a>
</p>

---

# NOTE: Not ready for usage yet. Hang tight.

1. Install it.

```bash
yarn add @tasteink/glitch-styles
```

2. Add the following CSS variables, tuned to your liking.

```css
:root {
  --glitch-vertical-offset-left: -0px;
  --glitch-vertical-offset-right: 0px;
  --glitch-left-width: -2px;
  --glitch-right-width: 2px;
  --glitch-color-0: #10f6be;
  --glitch-color-1: #ff51ce;
  --glitch-blur: 1px;
}
```

3. Import the css file from `@tastink/glitch-styles`.

```html
<link rel="stylesheet" href="/path/to/@tastink/glitch-styles.css" />
```

4. Use the provided class names.

```html
<div class="boxGlitch">...</div>
<p class="textGlitch">...</p>
```

5. Get this kind of effect:

<img src="https://i.imgur.com/xyf0w1W.png" alt="Glitch effect sample" />

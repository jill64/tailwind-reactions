# tailwind-reactions

[![npm](https://img.shields.io/npm/v/%40jill64%2Ftailwind-reactions)](https://npmjs.com/package/@jill64/tailwind-reactions)
[![CI](https://github.com/jill64/tailwind-reactions/actions/workflows/ci.yml/badge.svg)](https://github.com/jill64/tailwind-reactions/actions/workflows/ci.yml)

UI effect set for TailwindCSS

## Install

```sh
npm i @jill64/tailwind-reactions
```

```js
// tailwind.config.js
module.exports = {
  theme: {
    // ...
  },
  plugins: [
    require('@jill64/tailwind-reactions')
    // ...
  ]
}
```

## Usage

```html
<button class="pop-effect bg-blue-500 text-white px-4 py-2 rounded-full">
  pop-effect
</button>

<input type="text" class="focus-under border-zinc-400 focus:border-blue-600" />
<input
  type="text"
  class="focus-under-2 border-zinc-400 focus:border-blue-600"
/>
<input
  type="text"
  class="focus-under-bold border-zinc-400 focus:border-blue-600"
/>
<input
  type="text"
  class="focus-under-bold-2 border-zinc-400 focus:border-blue-600"
/>
```

## Configuration

You can configure which values are available for this plugin under the `focusUnderWidth` key in your `tailwind.config.js` file:

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      focusUnderWidth: {
        5: '5'
        6: '6'
        7: '7'
      }
    }
  }
}
```

Alternatively, you can use square bracket notation.

| Name                   | CSS                    |
| ---------------------- | ---------------------- |
| `focus-under-[n]`      | `border-bottom: [n]px` |
| `focus-under-bold-[n]` | `border-bottom: [n]px` |

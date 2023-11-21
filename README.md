<!----- BEGIN GHOST DOCS HEADER ----->

# tailwind-reactions

[![npm-version](https://img.shields.io/npm/v/@jill64/tailwind-reactions)](https://npmjs.com/package/@jill64/tailwind-reactions) [![npm-license](https://img.shields.io/npm/l/@jill64/tailwind-reactions)](https://npmjs.com/package/@jill64/tailwind-reactions) [![npm-download-month](https://img.shields.io/npm/dm/@jill64/tailwind-reactions)](https://npmjs.com/package/@jill64/tailwind-reactions) [![npm-min-size](https://img.shields.io/bundlephobia/min/@jill64/tailwind-reactions)](https://npmjs.com/package/@jill64/tailwind-reactions) [![ci.yml](https://github.com/jill64/tailwind-reactions/actions/workflows/ci.yml/badge.svg)](https://github.com/jill64/tailwind-reactions/actions/workflows/ci.yml) [![website](https://img.shields.io/website?up_message=working&down_message=down&url=https%3A%2F%2Ftailwind-reactions.jill64.dev)](https://tailwind-reactions.jill64.dev)

🌀 UI effect set for Tailwind CSS

## [Demo](https://tailwind-reactions.jill64.dev)

## Installation

```sh
npm i @jill64/tailwind-reactions
```

<!----- END GHOST DOCS HEADER ----->

## Setup

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

## Additional Configuration

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

# gatsby-plugin-google-fonts-v2

A simple Gatsby plugin that loads google fonts using the new v2 API. It also supports importing variable size fonts.

## Install

```javascript
yarn add gatsby-plugin-google-fonts-v2
// or
npm install gatsby-plugin-google-fonts-v2
```

## Add to Gatsby Config

In gatbsy-config.js

```javascript
plugins: [
  {
    resolve: `gatsby-plugin-google-fonts-v2`,
    options: {
      fonts: [
        {
          family: 'Roboto Slab',
          variable: true,
          weights: ['200..900']
        }
      ]
    }
  }
  // other plugins
];
```

## Options

Plugin options:

- **verbose** _(optional)_
  - enables the error reporting in case any malformed options are passed to the font
- **legacy** _(optional)_
  - it uses the v1 api. **CAUTION**: this will disable variable font and will error out if both are used at the same time.
  - not fully implemented yet
- **display** _(optional)_
  - enables font-display option. Details [here](https://font-display.glitch.me/)
  - defaults to `display=swap`

Font options:

- family _(required)_
  - the font family you would like to use as it appears in [Google Fonts](https://fonts.google.com/) - it will be formatted by capitalising the first letter of every word and replacing _space_ with "+"
- strictName _(optional)_
  - if used, the font family name will be used as the user typed it. Useful for some fonts that have ALL CAPS names
- variable _(optional)_
  - if used, it signals that the font is a variable width font and will revert to using the (min_weight..max_weight) format for the font weight - if not present, the font will be treated as a regular font and will require the regular font weight format
- weights: _(optional)_
  - if not used, the font will load with the default weight selected

### Weights formats

- Regular font

  - `['300']`- will load the 300 weight
  - `[300, 900]` - will load the 300 and 900 weights

- Variable font
  - `['200..500']` - will load the non-italic version with all weights between 200 and 500
  - `['200..500', [300..400]` - will load the non-italic version with all weights between 200 and 500 AND italic version with weights between 300 and 400
  - `['', '200..500']` - will load just the italic version with all weights between 200 and 500
  - NB: Will only work with `variable: true`

Have fun.
PR's are welcomed.

PS. Excuse the readme formatting. Markdown is not my friend.

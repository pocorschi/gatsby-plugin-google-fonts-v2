<h1 align="center">
  <br>
  <a href="https://www.gatsbyjs.com/plugins/gatsby-plugin-google-fonts-v2/"><img src="https://user-images.githubusercontent.com/7539124/111890619-cfa41180-89c9-11eb-865d-e728208970b6.png" alt="Gatsby Plugin Google Fonts - v2" width="200"></a>
  <br>
  Gatsby Plugin Google Fonts - v2
  <br>
</h1>

A simple **GatsbyJS** plugin that loads **Google Fonts** using the new **v2 API**. It also supports importing variable size fonts.

## 🖖🏻 Install

```bash
# With NPM
$ npm install gatsby-plugin-google-fonts-v2

# With Yarn
$ yarn add gatsby-plugin-google-fonts-v2
```

## 🎉 Add to Gatsby Config

In `gatbsy-config.js`

```javascript
plugins: [
  {
    resolve: `gatsby-plugin-google-fonts-v2`,
    options: {
      fonts: [
        {
          family: 'JetBrains Mono',
          weights: ['100', '400']
        },
        {
          family: 'Roboto Mono',
          weights: ['100..400']
        }
      ]
    }
  }
  // other plugins
];
```

## 🎨 Options

### Plugin options

| Option                   | Description                                                                                                                                           |
| ------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| **verbose** _(optional)_ | Enables the error reporting in case any malformed options are passed to the font                                                                      |
| **legacy** _(optional)_  | It uses the v1 api. **CAUTION**: this will disable variable font and will error out if both are used at the same time.<br/> Not fully implemented yet |
| **display** _(optional)_ | Enables font-display option. Details [here](https://font-display.glitch.me/). <br/>Defaults to `display=swap`                                         |

---

### Font options

| Option                      | Description                                                                                                                                                                                                                                              |
| --------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **family** _(required)_     | the font family you would like to use as it appears in [Google Fonts](https://fonts.google.com/) - it will be formatted by capitalising the first letter of every word and replacing _space_ with "+"                                                    |
| **strictName** _(optional)_ | if used, the font family name will be used as the user typed it. Useful for some fonts that have ALL CAPS names                                                                                                                                          |
| **variable** _(optional)_   | if used, it signals that the font is a variable width font and will revert to using the (min_weight..max_weight) format for the font weight - if not present, the font will be treated as a regular font and will require the regular font weight format |
| **weights** _(optional)_    | if not used, the font will load with the default weight selected                                                                                                                                                                                         |

---

### Weights formats

| Option                    | Description                                                                                                                                                                                                                                                                                                                                                                                         |
| ------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Regular font**          | `['300']`- will load the 300 weight <br/> `['300', '900']` - will load the 300 and 900 weights                                                                                                                                                                                                                                                                                                      |
| **Variable font**         | `['200..500']` - will load the non-italic version with all weights between 200 and 500 <br/> `['200..500', [300..400]` - will load the non-italic version with all weights between 200 and 500 AND italic version with weights between 300 and 400 <br/> `['', '200..500']` - will load just the italic version with all weights between 200 and 500 <br/> NB: Will only work with `variable: true` |
| **variable** _(optional)_ | if used, it signals that the font is a variable width font and will revert to using the (min_weight..max_weight) format for the font weight - if not present, the font will be treated as a regular font and will require the regular font weight format                                                                                                                                            |
| **weights** _(optional)_  | if not used, the font will load with the default weight selected                                                                                                                                                                                                                                                                                                                                    |

## Related

> [GatsbyJS](https://www.gatsbyjs.com) - Website GatsbyJS <br/> [Gatsby Plugin Google Fonts - v2](https://www.gatsbyjs.com/plugins/gatsby-plugin-google-fonts-v2/) - Plugin in GatsbyJS <br/> [Google Fonts](https://fonts.google.com/) - Website Google Fonts

---

### Have fun. PR's are welcomed.

import { checkNoLegacyVariableConflict, formatFontName, getFontWeight, assembleFontsLink, filterFonts } from '../functions';

describe('Check legacy / variable conflict resolution', () => {
  it('no conflict', () => {
    const options = {
      legacy: false,
      fonts: [
        {
          family: 'Roboto Slab',
          variable: true
        }
      ]
    };
    expect(checkNoLegacyVariableConflict(options)).toBe(true);
  });

  it('with conflict', () => {
    const options = {
      legacy: true,
      fonts: [
        {
          family: 'Roboto Slab',
          variable: true
        }
      ]
    };
    expect(checkNoLegacyVariableConflict(options)).toBe(false);
  });
});

describe('Font Family', () => {
  it('should return formatted font name', () => {
    const font = {
      family: 'Roboto Slab'
    };
    expect(formatFontName(font)).toBe('Roboto+Slab');
  });

  it('should return original name', () => {
    const font = {
      family: 'Roboto Slab',
      strictName: true
    };
    expect(formatFontName(font)).toBe('Roboto Slab');
  });
});

describe('Font Weights - regular', () => {
  it('should return regular font single', () => {
    const font = {
      family: 'Oswald',
      weights: ['900']
    };
    expect(getFontWeight(font)).toBe('wght@900');
  });
  it('should return regular font multiple', () => {
    const font = {
      family: 'Oswald',
      weights: ['300', '900']
    };
    expect(getFontWeight(font)).toBe('wght@300;900');
  });
});

describe('Font Weights - variable', () => {
  it('should return variable font', () => {
    const font = {
      family: 'Roboto Slab',
      variable: true,
      weights: ['200..900']
    };
    expect(getFontWeight(font)).toBe('wght@200..900');
  });
  it('should return variable font italic', () => {
    const font = {
      family: 'Roboto Slab',
      variable: true,
      weights: ['', '200..900']
    };
    expect(getFontWeight(font)).toBe('ital,wght@1,200..900');
  });
  it('should return variable font regular &italic', () => {
    const font = {
      family: 'Roboto Slab',
      variable: true,
      weights: ['200..500', '200..900']
    };
    expect(getFontWeight(font)).toBe('ital,wght@0,200..500;1,200..900');
  });
});

describe('Assemble fonts link', () => {
  it('should return a properly formatted query string for google fonts', () => {
    const fonts = [
      {
        family: 'Oswald',
        weights: ['300', '900']
      },
      {
        family: 'Roboto Slab',
        variable: true,
        weights: ['200..500', '200..900']
      }
    ];
    expect(assembleFontsLink(fonts)).toBe('family=Oswald:wght@300;900&family=Roboto+Slab:ital,wght@0,200..500;1,200..900');
  });
});

describe('Filtering fonts', () => {
  it('should remove the non standard weight from regular font', () => {
    const options = {
      fonts: [
        {
          family: 'Oswald',
          weights: ['300', '453']
        }
      ]
    };
    const accepted = [{ family: 'Oswald', weights: ['300'] }];
    expect(filterFonts(options).accepted).toStrictEqual(accepted);
  });

  it('should return an empty array since there are more than 2 weights listed for a variabke font', () => {
    const options = {
      fonts: [
        {
          family: 'Roboto Slab',
          variable: true,
          weights: ['300..400', '400..500', '500..600']
        }
      ]
    };
    expect(filterFonts(options).accepted).toStrictEqual([]);
  });

  it('should return an empty array since the weight format is wrong for variable font', () => {
    const options = {
      fonts: [
        {
          family: 'Roboto Slab',
          variable: true,
          weights: ['300']
        }
      ]
    };
    expect(filterFonts(options).accepted[0].weights).toStrictEqual([]);
  });
});

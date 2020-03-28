import { ERRORS, FIXED_WEIGHTS, VARIABLE_WEIGHT_REGEX } from './constants';
import { Font, Options } from './interfaces';

export const filterFonts = (options: Options) => {
  const errors: any[] = [];
  const accepted: Font[] = [];
  const { fonts } = options;

  for (const font of fonts) {
    const { family, variable, weights } = font;
    if (!variable) {
      if (weights) {
        const validWeights = weights.filter((weight: string) => {
          if (FIXED_WEIGHTS.includes(weight)) {
            return true;
          } else {
            errors.push({
              family,
              weight,
              reason: ERRORS.NOT_VALID_WEIGHT
            });
          }
        });
        accepted.push({
          ...font,
          weights: validWeights
        });
      } else {
        accepted.push({
          ...font
        });
      }
    } else {
      // if variable and len > 2
      if (weights) {
        if (weights.length > 2) {
          errors.push({
            family,
            reason: ERRORS.TOO_MANY_WEIGHTS
          });
          continue;
        }
        const validWeights = weights.filter((weight: string) => {
          if (weight && weight.match(VARIABLE_WEIGHT_REGEX)) {
            return true;
          } else {
            errors.push({
              family,
              weight,
              reason: ERRORS.NOT_VALID_VARIABLE_WEIGHT_FORMAT
            });
            return false;
          }
        });
        accepted.push({
          ...font,
          weights: validWeights
        });
      }
    }
  }
  return {
    accepted,
    errors
  };
};

export const checkNoLegacyVariableConflict = (options: Options) => {
  const { legacy, fonts } = options;
  if (!legacy) {
    return true;
  } else {
    for (const font of fonts) {
      if (font.variable) {
        return false;
      }
    }
  }
};

export const formatFontName = (font: Font) => {
  const { family, strictName } = font;
  if (strictName) {
    return family;
  }
  return family
    .split(' ')
    .map((token: string) => {
      return token.replace(/^\w/, (s: string) => {
        return s.toUpperCase();
      });
    })
    .join(' ')
    .replace(/ /g, '+');
};

export const getFontWeight = (font: Font) => {
  const { variable, weights } = font;
  if (weights) {
    if (variable) {
      const [boldWeight, italWeight] = weights;
      return `${italWeight ? 'ital,' : ''}wght@${boldWeight ? `${italWeight ? '0,' : ''}${boldWeight}` : ''}${
        boldWeight && italWeight ? ';' : ''
      }${italWeight ? `1,${italWeight}` : ''}`;
    } else {
      return `wght@${weights.join(';')}`;
    }
  }
  return '';
};

export const assembleFontsLink = (fonts: Font[]) => {
  return fonts
    .map((font: Font) => {
      const family = formatFontName(font);
      const weights = getFontWeight(font);
      return `family=${family}${weights ? `:${weights}` : ''}`;
    })
    .join('&');
};

export const setDisplay = (options: Options) => {
  return options.display ? `&display=${options.display}` : '&display=swap';
};

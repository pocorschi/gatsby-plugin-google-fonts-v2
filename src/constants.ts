export const VARIABLE_WEIGHT_REGEX = /(^\d{3})(?:[.]{2})(\d{3}$)/gm

export const FIXED_WEIGHTS = ['100', '200', '300', '400', '500', '600', '700', '800', '900']

export const BASE_URL = 'https://fonts.googleapis.com/css2'
export const BASE_URL_V1 = 'https://fonts.googleapis.com/css'

export const ERRORS = {
  NOT_VALID_WEIGHT: 'Regular font selected but selected weights not valid',
  TOO_MANY_WEIGHTS: 'Variable font supports a maximum of 2 weights (regular and italic)',
  NOT_VALID_VARIABLE_WEIGHT_FORMAT:
    'The used weight format did not match. The valid format is (min)..(max) where min and max are 3 digit numbers',
  VARIABLE_LEGACY_CONFLICT: 'You want to use v1 API but are requesting variable fonts. That will not work. Remove one or the other'
}

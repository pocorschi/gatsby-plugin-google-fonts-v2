import React from 'react';
import { ERRORS, BASE_URL } from './constants';
import { Options } from './interfaces';
import { log } from './utils';
import { checkNoLegacyVariableConflict, filterFonts, assembleFontsLink, setDisplay } from './functions';

/* istanbul ignore next */
export const onRenderBody = ({ setHeadComponents }: any, options: Options) => {
  // if legacy mode was used and variable font request was found
  // exit immediately
  if (!checkNoLegacyVariableConflict(options)) {
    log(ERRORS.VARIABLE_LEGACY_CONFLICT);
    return;
  }

  let link;

  if (!options.legacy) {
    const finalFonts = filterFonts(options);
    if (finalFonts.errors.length > 0 && options.verbose) {
      log('The following fonts/weights were not loaded');
      log(finalFonts.errors);
    }
    const fonts = assembleFontsLink(finalFonts.accepted);
    link = `${BASE_URL}?${fonts}${setDisplay(options)}`;
  }

  setHeadComponents([
    React.createElement('link', {
      key: 'fonts',
      href: link,
      rel: 'stylesheet'
    })
  ]);
};
